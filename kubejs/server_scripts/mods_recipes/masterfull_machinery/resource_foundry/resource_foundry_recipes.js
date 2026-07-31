priority: 1;
MMEvents.createProcesses(function (event) {
  var RF_STRUCTURE = 'mm:resource_foundry_structure';
  var DEFAULT_TICKS = 20;
  var DEFAULT_ENERGY = 2147483647;
  var DEFAULT_FLUID = {
    fluid: 'justdirethings:refined_t4_fluid_source',
    amount: 4000,
  };
  var ESSENCE_UNIT = 1;
  var TARGET_TOTAL_OUTPUT = 350000;

  /**
   * createRFProcess
   * options: {
   *   outputId: string (process id),
   *   outputItem: string,
   *   outputCount?: number,
   *   inputs?: Array of ingredient objects (each: { type: 'mm:item'|'mm:fluid'|'mm:energy', item/fluid, count, chance? })
   * }
   */
  //#region Process
  function createRFProcess (options) {
    var outputId = options && options.outputId;
    var outputItem = options && options.outputItem;
    var outputCount =
      options && typeof options.outputCount !== 'undefined'
        ? options.outputCount
        : 1;
    var inputs = options && options.inputs ? options.inputs : [];

    if (
      typeof TARGET_TOTAL_OUTPUT === 'number' &&
      TARGET_TOTAL_OUTPUT > 0 &&
      !(options && options.skipAutoScale)
    ) {
      var origOut =
        typeof outputCount === 'number' && outputCount > 0
          ? Math.round(outputCount)
          : 1;
      var runsNeeded = Math.ceil(TARGET_TOTAL_OUTPUT / origOut);
      if (runsNeeded > 1) {
        // scale outputCount and item inputs (energy/fluid remain unchanged)
        outputCount = origOut * runsNeeded;
        for (var _s = 0; _s < inputs.length; _s++) {
          var _ingS = inputs[_s];
          if (
            _ingS &&
            _ingS.type === 'mm:item' &&
            typeof _ingS.count === 'number'
          ) {
            // don't scale ghost input if it already has chance 0 (we'll add ghost later if missing)
            if (typeof _ingS.chance === 'number' && _ingS.chance === 0.0) {
              // leave as-is
            } else {
              _ingS.count = Math.round(_ingS.count * runsNeeded);
              if (_ingS.count <= 0) _ingS.count = 1;
            }
          }
        }
      }
    }

    var proc = event
      .create(outputId)
      .structureId(RF_STRUCTURE)
      .ticks(DEFAULT_TICKS);

    proc.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: DEFAULT_ENERGY,
      },
    });

    // fixed fluid input
    proc.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: DEFAULT_FLUID.fluid,
        amount: DEFAULT_FLUID.amount,
      },
    });

    var hasOutputGhost = false;
    for (var _i = 0; _i < inputs.length; _i++) {
      var _it = inputs[_i];
      if (
        _it &&
        _it.type === 'mm:item' &&
        _it.item === outputItem &&
        _it.chance === 0.0
      ) {
        hasOutputGhost = true;
        break;
      }
    }
    if (!hasOutputGhost) {
      inputs.push({ type: 'mm:item', item: outputItem, count: 1, chance: 0.0 });
    }

    for (var _j = 0; _j < inputs.length; _j++) {
      var ing = inputs[_j];
      var ingredient = {};
      for (var k in ing) {
        if (Object.prototype.hasOwnProperty.call(ing, k))
          ingredient[k] = ing[k];
      }
      var inputObj = { type: 'mm:input/consume', ingredient: ingredient };
      if (typeof ingredient.chance === 'number') {
        inputObj.chance = ingredient.chance;
        delete ingredient.chance;
      }
      proc.input(inputObj);
    }

    var CAPACITY = 9437184;
    var inputSum = 0;
    for (var _k = 0; _k < inputs.length; _k++) {
      var ii = inputs[_k];
      var chance = typeof ii.chance === 'number' ? ii.chance : 1;
      inputSum += (ii.count || 0) * chance;
    }
    var outputSum = outputCount || 0;
    var inputLimit = inputSum > 0 ? Math.floor(CAPACITY / inputSum) : Infinity;
    var outputLimit =
      outputSum > 0 ? Math.floor(CAPACITY / outputSum) : Infinity;
    var maxProcesses = Math.min(inputLimit, outputLimit);
    var totalOutputItems =
      maxProcesses === Infinity ? Infinity : maxProcesses * outputSum;

    // output
    proc.output({
      type: 'mm:output/simple',
      ingredient: { type: 'mm:item', item: outputItem, count: outputCount },
    });
  }

  // Create a process but scale inputs so the single process produces exactly `totalOutput` items.
  // This multiplies each input count by scale = totalOutput / originalOutputCount.
  function createRFProcessForTotalOutput (options, totalOutput) {
    // ensure integers: round requested totalOutput and original output
    totalOutput = Math.round(totalOutput);
    var origOutput =
      options && typeof options.outputCount !== 'undefined'
        ? Math.round(options.outputCount)
        : 1;
    if (origOutput <= 0) origOutput = 1;
    var scale = totalOutput / origOutput;

    // clone options shallow
    var newOpts = {
      outputId:
        options && options.outputId
          ? options.outputId + '_scaled'
          : 'mm:scaled_process',
      outputItem: options.outputItem,
      outputCount: Math.round(totalOutput),
    };
    newOpts.inputs = [];
    var ins = options && options.inputs ? options.inputs : [];
    for (var ii = 0; ii < ins.length; ii++) {
      var ing = ins[ii];
      // copy
      var copy = {};
      for (var k in ing)
        if (Object.prototype.hasOwnProperty.call(ing, k)) copy[k] = ing[k];
      // scale counts for item inputs only (don't scale energy/fluid amounts)
      if (copy.type === 'mm:item' && typeof copy.count === 'number') {
        // round to nearest integer
        copy.count = Math.round(copy.count * scale);
        if (copy.count <= 0) copy.count = 1;
      }
      newOpts.inputs.push(copy);
    }

    createRFProcess(newOpts);
    for (var jj = 0; jj < newOpts.inputs.length; jj++) {
      var ii2 = newOpts.inputs[jj];
    }
  }

  // Create process by whole runs: calculate how many full runs are needed to reach at least totalOutput.
  // This avoids fractional scaling: runs = ceil(totalOutput / originalOutput).
  function createRFProcessForExactTotalByRuns (options, totalOutput) {
    totalOutput = Math.round(totalOutput);
    var origOutput =
      options && typeof options.outputCount !== 'undefined'
        ? Math.round(options.outputCount)
        : 1;
    if (origOutput <= 0) origOutput = 1;
    var runs = Math.ceil(totalOutput / origOutput);

    var newOpts = {
      outputId:
        options && options.outputId
          ? options.outputId + '_x' + runs
          : 'mm:scaled_process_runs',
      outputItem: options.outputItem,
      outputCount: origOutput * runs,
    };
    newOpts.inputs = [];
    var ins2 = options && options.inputs ? options.inputs : [];
    for (var z = 0; z < ins2.length; z++) {
      var ing2 = ins2[z];
      var copy2 = {};
      for (var kk in ing2)
        if (Object.prototype.hasOwnProperty.call(ing2, kk))
          copy2[kk] = ing2[kk];
      if (copy2.type === 'mm:item' && typeof copy2.count === 'number') {
        copy2.count = Math.round(copy2.count * runs);
        if (copy2.count <= 0) copy2.count = 1;
      }
      newOpts.inputs.push(copy2);
    }

    createRFProcess(newOpts);
    for (var yy = 0; yy < newOpts.inputs.length; yy++) {
      var ii3 = newOpts.inputs[yy];
    }
  }
  //#region Recipes
  // 8 -> 24 cobblestone
  createRFProcess({
    outputId: 'mm:cobblestone_from_stone_essence',
    outputItem: 'minecraft:cobblestone',
    outputCount: 24,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 8 },
    ],
  });

  // 4 stone + 1 nether_quartz -> 16 diorite
  createRFProcess({
    outputId: 'mm:diorite_from_essences',
    outputItem: 'minecraft:diorite',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 4 },
      {
        type: 'mm:item',
        item: 'mysticalagriculture:nether_quartz_essence',
        count: 1,
      },
    ],
  });

  // 4 stone + 1 nether_quartz -> 16 granite
  createRFProcess({
    outputId: 'mm:granite_from_essences',
    outputItem: 'minecraft:granite',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 4 },
      {
        type: 'mm:item',
        item: 'mysticalagriculture:nether_quartz_essence',
        count: 1,
      },
    ],
  });

  // 1 stone + 8 nether -> 24 blackstone
  createRFProcess({
    outputId: 'mm:blackstone_from_nether',
    outputItem: 'minecraft:blackstone',
    outputCount: 24,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 1 },
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 8 },
    ],
  });

  // 2 stone + 2 dirt -> 16 gravel
  createRFProcess({
    outputId: 'mm:gravel_from_dirt',
    outputItem: 'minecraft:gravel',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 2 },
    ],
  });

  // 8 stone + 1 coal -> 20 stone
  createRFProcess({
    outputId: 'mm:stone_from_coal',
    outputItem: 'minecraft:stone',
    outputCount: 20,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 8 },
      { type: 'mm:item', item: 'minecraft:coal', count: 1 },
    ],
  });

  // Additional crop/plant recipes
  createRFProcess({
    outputId: 'mm:potato_from_nature',
    outputItem: 'minecraft:potato',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:apple_from_nature',
    outputItem: 'minecraft:apple',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:vines_from_nature',
    outputItem: 'minecraft:vine',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:bamboo_from_nature',
    outputItem: 'minecraft:bamboo',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:wheat_from_nature',
    outputItem: 'minecraft:wheat',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:beetroot_from_nature',
    outputItem: 'minecraft:beetroot',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:carrot_from_nature',
    outputItem: 'minecraft:carrot',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:cocoa_from_nature',
    outputItem: 'minecraft:cocoa_beans',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
    ],
  });

  // 2 nature + 1 nether -> 4 crimson_fungus
  createRFProcess({
    outputId: 'mm:crimson_fungus_from_nether_nature',
    outputItem: 'minecraft:crimson_fungus',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 1 },
    ],
  });

  // 2 nature + 1 water -> 8 kelp
  createRFProcess({
    outputId: 'mm:kelp_from_water_nature',
    outputItem: 'minecraft:kelp',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:water_essence', count: 1 },
    ],
  });

  // 1 nature + 2 end -> 8 chorus_fruit
  createRFProcess({
    outputId: 'mm:chorus_from_end_nature',
    outputItem: 'minecraft:chorus_fruit',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
      { type: 'mm:item', item: 'mysticalagriculture:end_essence', count: 2 },
    ],
  });

  // 1 nature + 1 potato -> 1 poisonous_potato
  createRFProcess({
    outputId: 'mm:poisonous_potato_from_potato_nature',
    outputItem: 'minecraft:poisonous_potato',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
      { type: 'mm:item', item: 'minecraft:potato', count: 1 },
    ],
  });

  // 6 nature -> 16 sugar_cane
  createRFProcess({
    outputId: 'mm:sugar_cane_from_nature',
    outputItem: 'minecraft:sugar_cane',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 6 },
    ],
  });

  // 8 nature -> 16 pumpkin
  createRFProcess({
    outputId: 'mm:pumpkin_from_nature',
    outputItem: 'minecraft:pumpkin',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 8 },
    ],
  });

  // 2 nature + 1 nether -> 4 warped_fungus
  createRFProcess({
    outputId: 'mm:warped_fungus_from_nether_nature',
    outputItem: 'minecraft:warped_fungus',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 1 },
    ],
  });

  // 7 nature -> 8 lily_pad
  createRFProcess({
    outputId: 'mm:lily_pad_from_nature',
    outputItem: 'minecraft:lily_pad',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 7 },
    ],
  });

  // 6 nature -> 16 cactus
  createRFProcess({
    outputId: 'mm:cactus_from_nature',
    outputItem: 'minecraft:cactus',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 6 },
    ],
  });

  // 3 nature + 6 nether -> 20 crimson_nylium
  createRFProcess({
    outputId: 'mm:crimson_nylium_from_nether_nature',
    outputItem: 'minecraft:crimson_nylium',
    outputCount: 20,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 6 },
    ],
  });

  // 1 nature + 2 nether -> 8 nether_wart
  createRFProcess({
    outputId: 'mm:nether_wart_from_nether_nature',
    outputItem: 'minecraft:nether_wart',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 2 },
    ],
  });

  // 3 nature + 6 nether -> 20 warped_nylium
  createRFProcess({
    outputId: 'mm:warped_nylium_from_nether_nature',
    outputItem: 'minecraft:warped_nylium',
    outputCount: 20,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 6 },
    ],
  });

  // Dye recipes: 3 <color>_dye_essence -> 16 <color>_dye
  var dyeColors = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
  ];
  for (var i = 0; i < dyeColors.length; i++) {
    var c = dyeColors[i];
    createRFProcess({
      outputId: 'mm:' + c + '_dye_from_' + c + '_dye_essence',
      outputItem: 'minecraft:' + c + '_dye',
      outputCount: 16,
      inputs: [
        {
          type: 'mm:item',
          item: 'mysticalagriculture:dye_essence',
          count: 3,
        },
      ],
    });
  }

  // Nether block recipes
  // 8 nether + 1 fire -> 16 soul_sand
  createRFProcess({
    outputId: 'mm:soul_sand_from_nether_fire',
    outputItem: 'minecraft:soul_sand',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:fire_essence', count: 1 },
    ],
  });

  // 8 nether -> 24 netherrack
  createRFProcess({
    outputId: 'mm:netherrack_from_nether',
    outputItem: 'minecraft:netherrack',
    outputCount: 24,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 8 },
    ],
  });

  // 4 nether -> 8 nether_bricks
  createRFProcess({
    outputId: 'mm:nether_bricks_from_nether',
    outputItem: 'minecraft:nether_bricks',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 4 },
    ],
  });

  // 8 nether + 1 earth -> 16 soul_soil
  createRFProcess({
    outputId: 'mm:soul_soil_from_nether_earth',
    outputItem: 'minecraft:soul_soil',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:earth_essence', count: 1 },
    ],
  });

  // Coal: 8 coal_essence -> 12 coal
  createRFProcess({
    outputId: 'mm:coal_from_coal_essence',
    outputItem: 'minecraft:coal',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:coal_essence', count: 8 },
    ],
  });

  // Coral recipes: 8 coral_essence + 1 <dye tag> -> 12 block
  //                4 coral_essence + 1 <dye tag> -> 8 coral
  //                4 coral_essence + 1 <dye tag> -> 6 fan
  var coralMap = [
    {
      type: 'fire',
      dyeTag: 'forge:dyes/red',
      block: 'minecraft:fire_coral_block',
      fan: 'minecraft:fire_coral_fan',
      coral: 'minecraft:fire_coral',
    },
    {
      type: 'bubble',
      dyeTag: 'forge:dyes/magenta',
      block: 'minecraft:bubble_coral_block',
      fan: 'minecraft:bubble_coral_fan',
      coral: 'minecraft:bubble_coral',
    },
    {
      type: 'tube',
      dyeTag: 'forge:dyes/blue',
      block: 'minecraft:tube_coral_block',
      fan: 'minecraft:tube_coral_fan',
      coral: 'minecraft:tube_coral',
    },
    {
      type: 'horn',
      dyeTag: 'forge:dyes/yellow',
      block: 'minecraft:horn_coral_block',
      fan: 'minecraft:horn_coral_fan',
      coral: 'minecraft:horn_coral',
    },
    {
      type: 'brain',
      dyeTag: 'forge:dyes/pink',
      block: 'minecraft:brain_coral_block',
      fan: 'minecraft:brain_coral_fan',
      coral: 'minecraft:brain_coral',
    },
  ];

  for (var j = 0; j < coralMap.length; j++) {
    var entry = coralMap[j];
    // block
    createRFProcess({
      outputId: 'mm:' + entry.type + '_coral_block_from_coral_essence',
      outputItem: entry.block,
      outputCount: 12,
      inputs: [
        {
          type: 'mm:item',
          item: 'mysticalagriculture:coral_essence',
          count: 8,
        },
        { type: 'mm:item', tag: entry.dyeTag, count: 1 },
      ],
    });
    // fan
    createRFProcess({
      outputId: 'mm:' + entry.type + '_coral_fan_from_coral_essence',
      outputItem: entry.fan,
      outputCount: 6,
      inputs: [
        {
          type: 'mm:item',
          item: 'mysticalagriculture:coral_essence',
          count: 4,
        },
        { type: 'mm:item', tag: entry.dyeTag, count: 1 },
      ],
    });
    // coral
    createRFProcess({
      outputId: 'mm:' + entry.type + '_coral_from_coral_essence',
      outputItem: entry.coral,
      outputCount: 8,
      inputs: [
        {
          type: 'mm:item',
          item: 'mysticalagriculture:coral_essence',
          count: 4,
        },
        { type: 'mm:item', tag: entry.dyeTag, count: 1 },
      ],
    });
  }

  // --- Animal / Fish / Sea recipes ---
  // Honey/honeycomb
  createRFProcess({
    outputId: 'mm:honeycomb_from_honey_essence',
    outputItem: 'minecraft:honeycomb',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:honey_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:honey_bottle_from_honey_essence',
    outputItem: 'minecraft:honey_bottle',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:honey_essence', count: 1 },
      { type: 'mm:item', item: 'minecraft:glass_bottle', count: 1 },
    ],
  });

  // Amethyst
  createRFProcess({
    outputId: 'mm:amethyst_shards_from_amethyst_essence',
    outputItem: 'minecraft:amethyst_shard',
    outputCount: 20,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:amethyst_essence',
        count: 8,
      },
    ],
  });

  // Pig
  createRFProcess({
    outputId: 'mm:raw_porkchop_from_pig_essence',
    outputItem: 'minecraft:porkchop',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:pig_essence', count: 3 },
    ],
  });

  // Chicken: raw chicken, eggs, feather
  createRFProcess({
    outputId: 'mm:raw_chicken_from_chicken_essence',
    outputItem: 'minecraft:chicken',
    outputCount: 6,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:chicken_essence',
        count: 3,
      },
    ],
  });
  createRFProcess({
    outputId: 'mm:eggs_from_chicken_essence',
    outputItem: 'minecraft:egg',
    outputCount: 8,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:chicken_essence',
        count: 3,
      },
    ],
  });
  createRFProcess({
    outputId: 'mm:feathers_from_chicken_essence',
    outputItem: 'minecraft:feather',
    outputCount: 8,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:chicken_essence',
        count: 3,
      },
    ],
  });

  // Cow: raw beef, leather
  createRFProcess({
    outputId: 'mm:raw_beef_from_cow_essence',
    outputItem: 'minecraft:beef',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:cow_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:leather_from_cow_essence',
    outputItem: 'minecraft:leather',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:cow_essence', count: 3 },
    ],
  });

  // Sheep: white wool, raw mutton
  createRFProcess({
    outputId: 'mm:white_wool_from_sheep_essence',
    outputItem: 'minecraft:white_wool',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:sheep_essence', count: 8 },
    ],
  });
  createRFProcess({
    outputId: 'mm:raw_mutton_from_sheep_essence',
    outputItem: 'minecraft:mutton',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:sheep_essence', count: 3 },
    ],
  });

  // Squid: glow ink sac, ink sac
  createRFProcess({
    outputId: 'mm:glow_ink_sac_from_squid_essence',
    outputItem: 'minecraft:glow_ink_sac',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:squid_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:ink_sac_from_squid_essence',
    outputItem: 'minecraft:ink_sac',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:squid_essence', count: 3 },
    ],
  });

  // Fish variants
  createRFProcess({
    outputId: 'mm:raw_cod_from_cod_essence',
    outputItem: 'minecraft:cod',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:fish_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:raw_salmon_from_salmon_essence',
    outputItem: 'minecraft:salmon',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:fish_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:tropical_fish_from_tropical_essence',
    outputItem: 'minecraft:tropical_fish',
    outputCount: 6,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:fish_essence',
        count: 3,
      },
    ],
  });
  createRFProcess({
    outputId: 'mm:pufferfish_from_puffer_essence',
    outputItem: 'minecraft:pufferfish',
    outputCount: 6,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:fish_essence',
        count: 8,
      },
    ],
  });

  // 3 slime_essence -> 8 slime_ball
  createRFProcess({
    outputId: 'mm:slimeballs_from_slime_essence',
    outputItem: 'minecraft:slime_ball',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:slime_essence', count: 3 },
    ],
  });

  // 4 blaze_essence + 1 blaze_rod -> 6 magma_cream
  createRFProcess({
    outputId: 'mm:magma_cream_from_blaze_essence',
    outputItem: 'minecraft:magma_cream',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:blaze_essence', count: 4 },
      { type: 'mm:item', item: 'minecraft:blaze_rod', count: 1 },
    ],
  });

  // 8 turtle_essence -> 4 scute
  createRFProcess({
    outputId: 'mm:scute_from_turtle_essence',
    outputItem: 'minecraft:scute',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:turtle_essence', count: 8 },
    ],
  });

  // 8 rubber_essence -> 1 thermal:cured_rubber
  createRFProcess({
    outputId: 'mm:cured_rubber_from_rubber_essence',
    outputItem: 'thermal:cured_rubber',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:rubber_essence', count: 8 },
    ],
  });

  // Silicon variants
  // 9 silicon_essence -> 24 nuclearcraft:silicon_gem
  createRFProcess({
    outputId: 'mm:nc_silicon_from_silicon_essence',
    outputItem: 'nuclearcraft:silicon_gem',
    outputCount: 24,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:silicon_essence',
        count: 9,
      },
    ],
  });
  // 8 enderio_silicon_essence -> 24 enderio:silicon
  createRFProcess({
    outputId: 'mm:enderio_silicon_from_essence',
    outputItem: 'enderio:silicon',
    outputCount: 24,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:silicon_essence',
        count: 8,
      },
    ],
  });
  // 7 ae2_silicon_essence -> 20 ae2:silicon
  createRFProcess({
    outputId: 'mm:ae2_silicon_from_essence',
    outputItem: 'ae2:silicon',
    outputCount: 20,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:silicon_essence',
        count: 7,
      },
    ],
  });

  // Sulfur: 3 sulfur_essence -> 8 thermal:sulfur_dust
  createRFProcess({
    outputId: 'mm:sulfur_from_sulfur_essence',
    outputItem: 'thermal:sulfur_dust',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:sulfur_essence', count: 3 },
    ],
  });

  // Aluminium: 8 aluminum_essence -> 8 common_ore_library:aluminum_ingot
  createRFProcess({
    outputId: 'mm:aluminum_ingot_from_aluminum_essence',
    outputItem: 'common_ore_library:aluminum_ingot',
    outputCount: 8,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:aluminum_essence',
        count: 8,
      },
    ],
  });

  // Apatite: 8 apatite_essence -> 16 thermal:apatite
  createRFProcess({
    outputId: 'mm:apatite_from_apatite_essence',
    outputItem: 'thermal:apatite',
    outputCount: 16,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:apatite_essence',
        count: 8,
      },
    ],
  });

  // Grains of Infinity: 3 grains_of_infinity_essence -> 8 enderio:grains_of_infinity
  createRFProcess({
    outputId: 'mm:grains_of_infinity_from_essence',
    outputItem: 'enderio:grains_of_infinity',
    outputCount: 8,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:grains_of_infinity_essence',
        count: 3,
      },
    ],
  });

  // Botania mystical flowers: 3 mystical_flower_essence -> 1 <color>_mystical_flower (16 colors)
  var flowerColors = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
  ];
  for (var fc = 0; fc < flowerColors.length; fc++) {
    var col = flowerColors[fc];
    createRFProcess({
      outputId: 'mm:' + col + '_mystical_flower_from_essence',
      outputItem: 'botania:' + col + '_mystical_flower',
      outputCount: 1,
      inputs: [
        {
          type: 'mm:item',
          item: 'mysticalagriculture:mystical_flower_essence',
          count: 3,
        },
      ],
    });
  }

  // Menril and metal/quartz recipes
  // 3 menril_essence -> 8 integrateddynamics:menril_berries
  createRFProcess({
    outputId: 'mm:menril_berries_from_menril',
    outputItem: 'integrateddynamics:menril_berries',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:menril_essence', count: 3 },
    ],
  });

  // 3 menril_essence -> 16 integrateddynamics:menril_log
  createRFProcess({
    outputId: 'mm:menril_log_from_menril',
    outputItem: 'integrateddynamics:menril_log',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:menril_essence', count: 3 },
    ],
  });

  // 2 menril_essence + 1 nature_essence -> 8 integrateddynamics:menril_sapling
  createRFProcess({
    outputId: 'mm:menril_sapling_from_menril_nature',
    outputItem: 'integrateddynamics:menril_sapling',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:menril_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });

  // Metals: 8 iron_essence -> 6 minecraft:iron_ingot
  createRFProcess({
    outputId: 'mm:iron_ingot_from_iron_essence',
    outputItem: 'minecraft:iron_ingot',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:iron_essence', count: 8 },
    ],
  });

  // 8 copper_essence -> 6 minecraft:copper_ingot
  createRFProcess({
    outputId: 'mm:copper_ingot_from_copper_essence',
    outputItem: 'minecraft:copper_ingot',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:copper_essence', count: 8 },
    ],
  });

  // Nether quartz: 8 nether_quartz_essence -> 12 minecraft:nether_quartz
  createRFProcess({
    outputId: 'mm:nether_quartz_from_essence',
    outputItem: 'minecraft:quartz',
    outputCount: 12,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:nether_quartz_essence',
        count: 8,
      },
    ],
  });

  // 4 stone + 1 nether_quartz -> 16 andesite
  createRFProcess({
    outputId: 'mm:andesite_from_essences',
    outputItem: 'minecraft:andesite',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 4 },
      {
        type: 'mm:item',
        item: 'mysticalagriculture:nether_quartz_essence',
        count: 1,
      },
    ],
  });

  // 4 stone + 1 water -> 16 pointed dripstone
  createRFProcess({
    outputId: 'mm:pointed_dripstone_from_water',
    outputItem: 'minecraft:pointed_dripstone',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 4 },
      { type: 'mm:item', item: 'mysticalagriculture:water_essence', count: 1 },
    ],
  });

  // 4 stone + 1 fire -> 12 tuff
  createRFProcess({
    outputId: 'mm:tuff_from_fire',
    outputItem: 'minecraft:tuff',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 4 },
      { type: 'mm:item', item: 'mysticalagriculture:fire_essence', count: 1 },
    ],
  });

  // 8 stone + 1 amethyst -> 20 calcite
  createRFProcess({
    outputId: 'mm:calcite_from_amethyst',
    outputItem: 'minecraft:calcite',
    outputCount: 20,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 8 },
      {
        type: 'mm:item',
        item: 'mysticalagriculture:amethyst_essence',
        count: 1,
      },
    ],
  });

  // 2 stone + 2 fire -> 8 flint
  createRFProcess({
    outputId: 'mm:flint_from_fire',
    outputItem: 'minecraft:flint',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:fire_essence', count: 2 },
    ],
  });

  // 4 stone + 1 water -> 12 dripstone_block
  createRFProcess({
    outputId: 'mm:dripstone_block_from_water',
    outputItem: 'minecraft:dripstone_block',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:stone_essence', count: 4 },
      { type: 'mm:item', item: 'mysticalagriculture:water_essence', count: 1 },
    ],
  });

  // Dirt-derived Mystical Agriculture recipes
  // dirt essence 8 -> 24 dirt
  createRFProcess({
    outputId: 'mm:dirt_from_dirt_essence',
    outputItem: 'minecraft:dirt',
    outputCount: 24,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 8 },
    ],
  });

  // 6 dirt + 3 nature -> 20 mycelium
  createRFProcess({
    outputId: 'mm:mycelium_from_dirt_nature',
    outputItem: 'minecraft:mycelium',
    outputCount: 20,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 6 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 3 },
    ],
  });

  // 8 dirt + 1 nature -> 20 grass_block
  createRFProcess({
    outputId: 'mm:grass_from_dirt_nature',
    outputItem: 'minecraft:grass_block',
    outputCount: 20,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });

  // 2 dirt + 2 water -> 24 clay_ball
  createRFProcess({
    outputId: 'mm:clay_from_dirt_water',
    outputItem: 'minecraft:clay_ball',
    outputCount: 24,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:water_essence', count: 2 },
    ],
  });

  // 4 dirt + 1 water -> 12 mud
  createRFProcess({
    outputId: 'mm:mud_from_dirt_water',
    outputItem: 'minecraft:mud',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 4 },
      { type: 'mm:item', item: 'mysticalagriculture:water_essence', count: 1 },
    ],
  });

  // 1 dirt + 2 nature -> 8 brown_mushroom
  createRFProcess({
    outputId: 'mm:brown_mushroom_from_dirt_nature',
    outputItem: 'minecraft:brown_mushroom',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 1 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 2 },
    ],
  });

  // 1 dirt + 2 nature -> 8 red_mushroom
  createRFProcess({
    outputId: 'mm:red_mushroom_from_dirt_nature',
    outputItem: 'minecraft:red_mushroom',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 1 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 2 },
    ],
  });

  // 2 dirt + 2 fire -> 16 sand
  createRFProcess({
    outputId: 'mm:sand_from_dirt_fire',
    outputItem: 'minecraft:sand',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:fire_essence', count: 2 },
    ],
  });

  // 4 dirt + 1 nature -> 12 podzol
  createRFProcess({
    outputId: 'mm:podzol_from_dirt_nature',
    outputItem: 'minecraft:podzol',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 4 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });

  // 2 dirt + 2 fire -> 16 red_sand
  createRFProcess({
    outputId: 'mm:red_sand_from_dirt_fire',
    outputItem: 'minecraft:red_sand',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dirt_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:fire_essence', count: 2 },
    ],
  });

  // Ice-derived recipes
  // 4 ice_essence -> 12 snow_block
  createRFProcess({
    outputId: 'mm:snow_block_from_ice_essence',
    outputItem: 'minecraft:snow_block',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:ice_essence', count: 4 },
    ],
  });

  // 9 ice_essence -> 1 packed_ice (crafting equivalent)
  createRFProcess({
    outputId: 'mm:packed_ice_from_ice_essence',
    outputItem: 'minecraft:packed_ice',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:ice_essence', count: 9 },
    ],
  });

  // 1 ice_essence + 8 nether_essence -> 20 basalt
  createRFProcess({
    outputId: 'mm:basalt_from_ice_nether',
    outputItem: 'minecraft:basalt',
    outputCount: 20,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:ice_essence', count: 1 },
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 8 },
    ],
  });

  // 8 ice_essence -> 24 ice
  createRFProcess({
    outputId: 'mm:ice_from_ice_essence',
    outputItem: 'minecraft:ice',
    outputCount: 24,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:ice_essence', count: 8 },
    ],
  });

  // --- Glowstone / Redstone / Obsidian / Prismarine / Zombie recipes ---
  // 8 glowstone_essence -> 12 minecraft:glowstone
  createRFProcess({
    outputId: 'mm:glowstone_from_glowstone_essence',
    outputItem: 'minecraft:glowstone',
    outputCount: 12,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:glowstone_essence',
        count: 8,
      },
    ],
  });

  // 8 redstone_essence -> 12 minecraft:redstone
  createRFProcess({
    outputId: 'mm:redstone_from_redstone_essence',
    outputItem: 'minecraft:redstone',
    outputCount: 12,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:redstone_essence',
        count: 8,
      },
    ],
  });

  // 8 obsidian_essence -> 8 minecraft:obsidian
  createRFProcess({
    outputId: 'mm:obsidian_from_obsidian_essence',
    outputItem: 'minecraft:obsidian',
    outputCount: 8,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:obsidian_essence',
        count: 8,
      },
    ],
  });

  // 9 obsidian_essence -> 8 minecraft:crying_obsidian
  createRFProcess({
    outputId: 'mm:crying_obsidian_from_obsidian_essence',
    outputItem: 'minecraft:crying_obsidian',
    outputCount: 8,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:obsidian_essence',
        count: 9,
      },
    ],
  });

  // 3 prismarine_essence -> 8 prismarine shard
  createRFProcess({
    outputId: 'mm:prismarine_shard_from_prismarine_essence',
    outputItem: 'minecraft:prismarine_shard',
    outputCount: 8,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:prismarine_essence',
        count: 3,
      },
    ],
  });

  // 3 prismarine_essence -> 8 prismarine_crystals
  createRFProcess({
    outputId: 'mm:prismarine_crystals_from_prismarine_essence',
    outputItem: 'minecraft:prismarine_crystals',
    outputCount: 8,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:prismarine_essence',
        count: 3,
      },
    ],
  });

  // 3 zombie_essence -> 12 rotten_flesh
  createRFProcess({
    outputId: 'mm:rotten_flesh_from_zombie_essence',
    outputItem: 'minecraft:rotten_flesh',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:zombie_essence', count: 3 },
    ],
  });

  // 8 zombie_essence + 1 blank_skull -> 1 zombie_head
  createRFProcess({
    outputId: 'mm:zombie_head_from_essence',
    outputItem: 'minecraft:zombie_head',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:zombie_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:blank_skull', count: 1 },
    ],
  });

  // 3 skeleton_essence -> 8 arrows
  createRFProcess({
    outputId: 'mm:arrows_from_skeleton_essence',
    outputItem: 'minecraft:arrow',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:skeleton_essence', count: 3 },
    ],
  });

  // 8 bone_essence -> 12 bone
  createRFProcess({
    outputId: 'mm:bone_from_bone_essence',
    outputItem: 'minecraft:bone',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:skeleton_essence', count: 8 },
    ],
  });

  // 8 skeleton_essence + 1 blank_skull -> 1 skeleton_skull
  createRFProcess({
    outputId: 'mm:skeleton_skull_from_essence',
    outputItem: 'minecraft:skeleton_skull',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:skeleton_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:blank_skull', count: 1 },
    ],
  });

  // 3 gunpowder_essence -> 6 gunpowder
  createRFProcess({
    outputId: 'mm:gunpowder_from_essence',
    outputItem: 'minecraft:gunpowder',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:creeper_essence', count: 3 },
    ],
  });

  // 8 creeper_essence + 1 blank_skull -> 1 creeper_head
  createRFProcess({
    outputId: 'mm:creeper_head_from_essence',
    outputItem: 'minecraft:creeper_head',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:creeper_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:blank_skull', count: 1 },
    ],
  });

  // 8 spider_essence -> 4 spider_eye
  createRFProcess({
    outputId: 'mm:spider_eye_from_spider_essence',
    outputItem: 'minecraft:spider_eye',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:spider_essence', count: 8 },
    ],
  });

  // 3 spider_essence -> 8 string
  createRFProcess({
    outputId: 'mm:string_from_spider_essence',
    outputItem: 'minecraft:string',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:spider_essence', count: 3 },
    ],
  });

  // Rabbit outputs
  createRFProcess({
    outputId: 'mm:rabbit_foot_from_rabbit_essence',
    outputItem: 'minecraft:rabbit_foot',
    outputCount: 3,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:rabbit_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:raw_rabbit_from_rabbit_essence',
    outputItem: 'minecraft:rabbit',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:rabbit_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:rabbit_hide_from_rabbit_essence',
    outputItem: 'minecraft:rabbit_hide',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:rabbit_essence', count: 3 },
    ],
  });

  // Metal ingots from essences
  createRFProcess({
    outputId: 'mm:tin_ingot_from_tin_essence',
    outputItem: 'thermal:tin_ingot',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:tin_essence', count: 8 },
    ],
  });
  createRFProcess({
    outputId: 'mm:bronze_ingot_from_bronze_essence',
    outputItem: 'thermal:bronze_ingot',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:bronze_essence', count: 8 },
    ],
  });
  createRFProcess({
    outputId: 'mm:zinc_ingot_from_zinc_essence',
    outputItem: 'common_ore_library:zinc_ingot',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:zinc_essence', count: 8 },
    ],
  });
  createRFProcess({
    outputId: 'mm:brass_ingot_from_brass_essence',
    outputItem: 'common_ore_library:brass_ingot',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:brass_essence', count: 8 },
    ],
  });
  createRFProcess({
    outputId: 'mm:silver_ingot_from_silver_essence',
    outputItem: 'thermal:silver_ingot',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:silver_essence', count: 8 },
    ],
  });
  createRFProcess({
    outputId: 'mm:lead_ingot_from_lead_essence',
    outputItem: 'thermal:lead_ingot',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:lead_essence', count: 8 },
    ],
  });
  
  // 8 graphite_essence -> 6 nuclearcraft:graphite_ingot'
  createRFProcess({
    outputId: 'mm:graphite_ingot_from_graphite_essence',
    outputItem: 'nuclearcraft:graphite_ingot',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:graphite_essence', count: 8 } ],
  });

  // 8 blizz_essence -> 6 thermal:blizz_rod
  createRFProcess({
    outputId: 'mm:blizz_rod_from_blizz_essence',
    outputItem: 'thermal:blizz_rod',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:blizz_essence', count: 8 } ],
  });

  // 8 blitz_essence -> 6 thermal:blitz_rod
  createRFProcess({
    outputId: 'mm:blitz_rod_from_blitz_essence',
    outputItem: 'thermal:blitz_rod',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:blitz_essence', count: 8 } ],
  });

  // 8 basalz_essence -> 6 thermal:basalz_rod
  createRFProcess({
    outputId: 'mm:basalz_rod_from_basalz_essence',
    outputItem: 'thermal:basalz_rod',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:basalz_essence', count: 8 } ],
  });

  // 8 copper_alloy_essence -> 6 enderio:copper_alloy_ingot
  createRFProcess({
    outputId: 'mm:copper_alloy_ingot_from_essence',
    outputItem: 'enderio:copper_alloy_ingot',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:copper_alloy_essence', count: 8 } ],
  });

  // 8 redstone_alloy_essence -> 5 enderio:redstone_alloy_ingot
  createRFProcess({
    outputId: 'mm:redstone_alloy_ingot_from_essence',
    outputItem: 'enderio:redstone_alloy_ingot',
    outputCount: 5,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:redstone_alloy_essence', count: 8 } ],
  });

  // 8 conductive_alloy_essence -> 5 enderio:conductive_alloy_ingot
  createRFProcess({
    outputId: 'mm:conductive_alloy_ingot_from_essence',
    outputItem: 'enderio:conductive_alloy_ingot',
    outputCount: 5,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:conductive_alloy_essence', count: 8 } ],
  });

  // 8 manasteel_essence -> 5 botania:manasteel_ingot
  createRFProcess({
    outputId: 'mm:manasteel_ingot_from_essence',
    outputItem: 'botania:manasteel_ingot',
    outputCount: 5,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:manasteel_essence', count: 8 } ],
  });

  // 8 steeleaf_essence -> 4 twilightforest:steeleaf_ingot
  createRFProcess({
    outputId: 'mm:steeleaf_ingot_from_essence',
    outputItem: 'twilightforest:steeleaf_ingot',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:steeleaf_essence', count: 8 } ],
  });

  // 8 ironwood_essence -> 4 twilightforest:ironwood_ingot
  createRFProcess({
    outputId: 'mm:ironwood_ingot_from_essence',
    outputItem: 'twilightforest:ironwood_ingot',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:ironwood_essence', count: 8 } ],
  });

  // AE2 / Certus / Sky stone / Quartz enriched iron / Gold / Lapis processes
  // 8 sky_stone_essence -> 16 ae2:sky_stone_block
  createRFProcess({
    outputId: 'mm:sky_stone_block_from_sky_stone_essence',
    outputItem: 'ae2:sky_stone_block',
    outputCount: 16,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:sky_stone_essence', count: 8 } ],
  });

  // 8 certus_quartz_essence -> 6 ae2:certus_quartz_crystal
  createRFProcess({
    outputId: 'mm:certus_quartz_crystal_from_essence',
    outputItem: 'ae2:certus_quartz_crystal',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:certus_quartz_essence', count: 8 } ],
  });

  // 3 certus_quartz_essence -> 3 ae2:certus_quartz_dust
  createRFProcess({
    outputId: 'mm:certus_quartz_dust_from_essence',
    outputItem: 'ae2:certus_quartz_dust',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:certus_quartz_essence', count: 3 } ],
  });

  // 8 quartz_enriched_iron_essence -> 8 refinedstorage:quartz_enriched_iron (no ingot)
  createRFProcess({
    outputId: 'mm:quartz_enriched_iron_from_essence',
    outputItem: 'refinedstorage:quartz_enriched_iron',
    outputCount: 8,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:quartz_enriched_iron_essence', count: 8 } ],
  });

  // 8 gold_essence -> 4 minecraft:gold_ingot
  createRFProcess({
    outputId: 'mm:gold_ingot_from_gold_essence',
    outputItem: 'minecraft:gold_ingot',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:gold_essence', count: 8 } ],
  });

  // 8 lapis_essence -> 12 minecraft:lapis_lazuli
  createRFProcess({
    outputId: 'mm:lapis_from_lapis_essence',
    outputItem: 'minecraft:lapis_lazuli',
    outputCount: 12,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:lapis_lazuli_essence', count: 8 } ],
  });

  // End / Experience / Blaze / Ghast / Enderman / Steel processes
  // 4 end_essence -> 8 purpur_block
  createRFProcess({
    outputId: 'mm:purpur_block_from_end_essence',
    outputItem: 'minecraft:purpur_block',
    outputCount: 8,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:end_essence', count: 4 } ],
  });

  // 8 end_essence -> 24 end_stone
  createRFProcess({
    outputId: 'mm:end_stone_from_end_essence',
    outputItem: 'minecraft:end_stone',
    outputCount: 24,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:end_essence', count: 8 } ],
  });

  // 8 experience_essence -> 8 mysticalagriculture:experience_droplet
  createRFProcess({
    outputId: 'mm:experience_droplet_from_experience_essence',
    outputItem: 'mysticalagriculture:experience_droplet',
    outputCount: 8,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:experience_essence', count: 8 } ],
  });

  // 8 blaze_essence -> 6 minecraft:blaze_rod
  createRFProcess({
    outputId: 'mm:blaze_rod_from_blaze_essence',
    outputItem: 'minecraft:blaze_rod',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:blaze_essence', count: 8 } ],
  });

  // 8 ghast_essence -> 2 minecraft:ghast_tear
  createRFProcess({
    outputId: 'mm:ghast_tear_from_ghast_essence',
    outputItem: 'minecraft:ghast_tear',
    outputCount: 2,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:ghast_essence', count: 8 } ],
  });

  // 8 enderman_essence -> 4 minecraft:ender_pearl
  createRFProcess({
    outputId: 'mm:ender_pearl_from_enderman_essence',
    outputItem: 'minecraft:ender_pearl',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:enderman_essence', count: 8 } ],
  });

  // 8 enderman_essence + 1 blaze_essence -> 3 ender_eye
  createRFProcess({
    outputId: 'mm:eye_of_ender_from_enderman_blaze_essence',
    outputItem: 'minecraft:ender_eye',
    outputCount: 3,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:enderman_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:blaze_essence', count: 1 },
    ],
  });

  // 8 steel_essence -> 3 thermal:steel_ingot
  createRFProcess({
    outputId: 'mm:steel_ingot_from_steel_essence',
    outputItem: 'thermal:steel_ingot',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:steel_essence', count: 8 } ],
  });

  // Additional metals/alloys: 8 essence -> 4 ingots (default)
  createRFProcess({ outputId: 'mm:nickel_ingot_from_nickel_essence', outputItem: 'thermal:nickel_ingot', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:nickel_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:constantan_ingot_from_constantan_essence', outputItem: 'thermal:constantan_ingot', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:constantan_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:electrum_ingot_from_electrum_essence', outputItem: 'thermal:electrum_ingot', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:electrum_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:invar_ingot_from_invar_essence', outputItem: 'thermal:invar_ingot', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:invar_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:energetic_alloy_from_essence', outputItem: 'enderio:energetic_alloy_ingot', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:energetic_alloy_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:ruby_from_ruby_essence', outputItem: 'thermal:ruby', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:ruby_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:sapphire_from_sapphire_essence', outputItem: 'thermal:sapphire', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:sapphire_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:signalum_ingot_from_signalum_essence', outputItem: 'thermal:signalum_ingot', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:signalum_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:lumium_ingot_from_lumium_essence', outputItem: 'thermal:lumium_ingot', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:lumium_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:rose_gold_ingot_from_rose_gold_essence', outputItem: 'thermal:rose_gold_ingot', outputCount: 4, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:rose_gold_essence', count: 8 } ] });
  
  createRFProcess({
    outputId: 'mm:tungsten_ingot_from_tungsten_essence',
    outputItem: 'common_ore_library:tungsten_ingot',
    outputCount: 8,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:tungsten_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:peridot_from_peridot_essence',
    outputItem: 'silentgems:peridot',
    outputCount: 8,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:peridot_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:soulium_dust_from_soulium_essence',
    outputItem: 'mysticalagriculture:soulium_dust',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:soulium_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:flux_ingot_from_flux_infused_essence',
    outputItem: 'redstone_arsenal:flux_ingot',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:flux_infused_ingot_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:cobalt_ingot_from_cobalt_essence',
    outputItem: 'common_ore_library:cobalt_ingot',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:cobalt_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:soularium_ingot_from_soularium_essence',
    outputItem: 'enderio:soularium_ingot',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:soularium_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:dark_steel_from_essence',
    outputItem: 'enderio:dark_steel_ingot',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:dark_steel_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:uranium_ingot_from_uranium_essence',
    outputItem: 'mekanism:ingot_uranium',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:uranium_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:pulsating_alloy_from_essence',
    outputItem: 'enderio:pulsating_alloy_ingot',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:pulsating_alloy_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:elementium_from_elementium_essence',
    outputItem: 'botania:elementium_ingot',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:elementium_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:osmium_ingot_from_osmium_essence',
    outputItem: 'mekanism:ingot_osmium',
    outputCount: 4,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:osmium_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:fluorite_gem_from_fluorite_essence',
    outputItem: 'mekanism:fluorite_gem',
    outputCount: 8,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:fluorite_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:ingot_refined_glowstone_from_essence',
    outputItem: 'mekanism:ingot_refined_glowstone',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:refined_glowstone_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:ingot_refined_obsidian_from_essence',
    outputItem: 'mekanism:ingot_refined_obsidian',
    outputCount: 2,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:refined_obsidian_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:knightmetal_ingot_from_essence',
    outputItem: 'twilightforest:knightmetal_ingot',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:knightmetal_essence', count: 8 } ],
  });

  // Marble/Basalt/Uraninite/Nether star/Dragon/GAIA/etc.
  createRFProcess({
    outputId: 'mm:marble_from_marble_essence',
    outputItem: 'enviromats:marble',
    outputCount: 24,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:marble_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:basalt_from_basalt_essence',
    outputItem: 'minecraft:basalt',
    outputCount: 24,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:basalt_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:uraninite_from_uraninite_essence',
    outputItem: 'powah:uraninite',
    outputCount: 2,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:uraninite_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:nether_star_shard_from_essence',
    outputItem: 'mysticalagradditions:nether_star_shard',
    outputCount: 1,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:nether_star_essence', count: 9 } ],
  });

  createRFProcess({
    outputId: 'mm:dragon_egg_chunk_from_essence',
    outputItem: 'mysticalagradditions:dragon_egg_chunk',
    outputCount: 1,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:dragon_egg_essence', count: 9 } ],
  });

  createRFProcess({
    outputId: 'mm:dragon_head_from_essence',
    outputItem: 'minecraft:dragon_head',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:dragon_egg_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:blank_skull', count: 1 },
    ],
  });

  createRFProcess({
    outputId: 'mm:life_essence_from_gaia_spirit',
    outputItem: 'botania:life_essence',
    outputCount: 9,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:gaia_spirit_essence', count: 9 } ],
  });

  createRFProcess({
    outputId: 'mm:awakened_draconium_nugget_from_essence',
    outputItem: 'draconicevolution:awakened_draconium_nugget',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:awakened_draconium_essence', count: 9 } ],
  });

  createRFProcess({
    outputId: 'mm:neutron_pile_from_neutronium_essence',
    outputItem: 'avaritia:neutron_pile',
    outputCount: 1,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:neutronium_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:crystal_nitro_from_nitro_and_netherstar',
    outputItem: 'powah:crystal_nitro',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:nitro_crystal_essence', count: 8 },
      { type: 'mm:item', item: 'minecraft:nether_star', count: 1 },
    ],
  });


  // --- Additional requested processes ---
  createRFProcess({
    outputId: 'mm:fiery_ingot_from_fiery_essence',
    outputItem: 'twilightforest:fiery_ingot',
    outputCount: 2,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:fiery_ingot_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:ingot_iron_compressed_from_compressed_iron_essence',
    outputItem: 'pneumaticcraft:ingot_iron_compressed',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:compressed_iron_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:fluix_crystal_from_fluix_essence',
    outputItem: 'ae2:fluix_crystal',
    outputCount: 6,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:fluix_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:fluix_dust_from_fluix_essence_small',
    outputItem: 'ae2:fluix_dust',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:fluix_essence', count: 3 } ],
  });

  createRFProcess({
    outputId: 'mm:steel_energized_from_essence',
    outputItem: 'powah:steel_energized',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:energized_steel_essence', count: 8 } ],
  });

  createRFProcess({
    outputId: 'mm:blazing_crystal_from_essence',
    outputItem: 'powah:crystal_blazing',
    outputCount: 3,
    inputs: [ { type: 'mm:item', item: 'mysticalagriculture:blazing_crystal_essence', count: 8 } ],
  });

  // Large gem/metal conversions (9 -> 1)
  createRFProcess({ outputId: 'mm:diamond_from_diamond_essence', outputItem: 'minecraft:diamond', outputCount: 1, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:diamond_essence', count: 9 } ] });
  createRFProcess({ outputId: 'mm:emerald_from_emerald_essence', outputItem: 'minecraft:emerald', outputCount: 1, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:emerald_essence', count: 9 } ] });
  createRFProcess({ outputId: 'mm:netherite_from_netherite_essence', outputItem: 'minecraft:netherite_ingot', outputCount: 1, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:netherite_essence', count: 8 } ] });

  // Wither skull
  createRFProcess({
    outputId: 'mm:wither_skeleton_skull_from_essence',
    outputItem: 'minecraft:wither_skeleton_skull',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wither_skeleton_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:blank_skull', count: 1 },
    ],
  });

  createRFProcess({ outputId: 'mm:platinum_ingot_from_platinum_essence', outputItem: 'common_ore_library:platinum_ingot', outputCount: 2, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:platinum_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:iridium_ingot_from_iridium_essence', outputItem: 'common_ore_library:iridium_ingot', outputCount: 2, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:iridium_essence', count: 8 } ] });
  createRFProcess({ outputId: 'mm:enderium_ingot_from_enderium_essence', outputItem: 'thermal:enderium_ingot', outputCount: 2, inputs: [ { type: 'mm:item', item: 'mysticalagriculture:enderium_essence', count: 8 } ] });


  // Deepslate and special ores
  createRFProcess({
    outputId: 'mm:cobbled_deepslate_from_deepslate_essence',
    outputItem: 'minecraft:cobbled_deepslate',
    outputCount: 24,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:deepslate_essence',
        count: 8,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:deepslate_from_deepslate_and_coal',
    outputItem: 'minecraft:deepslate',
    outputCount: 20,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:deepslate_essence',
        count: 8,
      },
      { type: 'mm:item', item: 'mysticalagriculture:coal_essence', count: 1 },
    ],
  });

  createRFProcess({
    outputId: 'mm:allthemodium_nugget_from_allthemodium_essence',
    outputItem: 'allthemodium:allthemodium_nugget',
    outputCount: 1,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:allthemodium_essence',
        count: 8,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:boron_ingot_from_boron_essence',
    outputItem: 'nuclearcraft:boron_ingot',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:boron_essence', count: 8 },
    ],
  });

  createRFProcess({
    outputId: 'mm:cognizant_dust_from_cognizant_dust_essence',
    outputItem: 'mysticalagriculture:cognizant_dust',
    outputCount: 4,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:cognizant_dust_essence',
        count: 8,
      },
    ],
  });

  // Additional metal/ore essences
  createRFProcess({
    outputId: 'mm:dark_metal_ingot_from_essence',
    outputItem: 'born_in_chaos_v1:dark_metal_ingot',
    outputCount: 4,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:dark_metal_ingot_essence',
        count: 8,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:ignitium_ingot_from_essence',
    outputItem: 'cataclysm:ignitium_ingot',
    outputCount: 4,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:ignitium_essence',
        count: 8,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:lithium_ingot_from_essence',
    outputItem: 'nuclearcraft:lithium_ingot',
    outputCount: 8,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:lithium_essence',
        count: 8,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:niter_from_essence',
    outputItem: 'thermal:niter',
    outputCount: 4,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:niter_essence', count: 8 },
    ],
  });

  // Additional conversions from essences to mod items
  createRFProcess({
    outputId: 'mm:plastic_pneumatic_from_plastic_essence',
    outputItem: 'pneumaticcraft:plastic',
    outputCount: 2,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:plastic_essence',
        count: 9,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:plastic_if_from_plastic_essence',
    outputItem: 'industrialforegoing:plastic',
    outputCount: 2,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:plastic_essence',
        count: 8,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:pellet_plutonium_from_plutonium_essence',
    outputItem: 'mekanism:pellet_plutonium',
    outputCount: 1,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:plutonium_essence',
        count: 9,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:sky_steel_ingot_from_sky_steel_essence',
    outputItem: 'megacells:sky_steel_ingot',
    outputCount: 4,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:sky_steel_essence',
        count: 8,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:unobtainium_nugget_from_unobtainium_essence',
    outputItem: 'allthemodium:unobtainium_nugget',
    outputCount: 1,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:unobtainium_essence',
        count: 8,
      },
    ],
  });

  createRFProcess({
    outputId: 'mm:vibranium_nugget_from_vibranium_essence',
    outputItem: 'allthemodium:vibranium_nugget',
    outputCount: 1,
    inputs: [
      {
        type: 'mm:item',
        item: 'mysticalagriculture:vibranium_essence',
        count: 8,
      },
    ],
  });

  // Concrete powder -> concrete (per color): 8 powder + 1 water_essence -> 16 concrete
  var colors = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
  ];
  for (var ci = 0; ci < colors.length; ci++) {
    var c = colors[ci];
    createRFProcess({
      outputId: 'mm:' + c + '_concrete_from_powder',
      outputItem: 'minecraft:' + c + '_concrete',
      outputCount: 16,
      inputs: [
        {
          type: 'mm:item',
          item: 'minecraft:' + c + '_concrete_powder',
          count: 8,
        },
        {
          type: 'mm:item',
          item: 'mysticalagriculture:water_essence',
          count: 1,
        },
      ],
    });
  }

  // Wood-derived recipes (saplings)
  createRFProcess({
    outputId: 'mm:oak_sapling_from_wood_nature',
    outputItem: 'minecraft:oak_sapling',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });
  createRFProcess({
    outputId: 'mm:jungle_sapling_from_wood_nature',
    outputItem: 'minecraft:jungle_sapling',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });
  createRFProcess({
    outputId: 'mm:birch_sapling_from_wood_nature',
    outputItem: 'minecraft:birch_sapling',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });
  createRFProcess({
    outputId: 'mm:acacia_sapling_from_wood_nature',
    outputItem: 'minecraft:acacia_sapling',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });
  createRFProcess({
    outputId: 'mm:cherry_sapling_from_wood_nature',
    outputItem: 'minecraft:cherry_sapling',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });
  createRFProcess({
    outputId: 'mm:dark_oak_sapling_from_wood_nature',
    outputItem: 'minecraft:dark_oak_sapling',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });
  createRFProcess({
    outputId: 'mm:mangrove_propagule_from_wood_nature',
    outputItem: 'minecraft:mangrove_propagule',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });
  createRFProcess({
    outputId: 'mm:spruce_sapling_from_wood_nature',
    outputItem: 'minecraft:spruce_sapling',
    outputCount: 8,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nature_essence', count: 1 },
    ],
  });

  // Wood -> logs (3 wood -> 16 logs)
  createRFProcess({
    outputId: 'mm:oak_log_from_wood',
    outputItem: 'minecraft:oak_log',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:birch_log_from_wood',
    outputItem: 'minecraft:birch_log',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:cherry_log_from_wood',
    outputItem: 'minecraft:cherry_log',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:dark_oak_log_from_wood',
    outputItem: 'minecraft:dark_oak_log',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:jungle_log_from_wood',
    outputItem: 'minecraft:jungle_log',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:acacia_log_from_wood',
    outputItem: 'minecraft:acacia_log',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:mangrove_log_from_wood',
    outputItem: 'minecraft:mangrove_log',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 3 },
    ],
  });
  createRFProcess({
    outputId: 'mm:spruce_log_from_wood',
    outputItem: 'minecraft:spruce_log',
    outputCount: 16,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 3 },
    ],
  });

  // Nether stems
  createRFProcess({
    outputId: 'mm:warped_stem_from_wood_nether',
    outputItem: 'minecraft:warped_stem',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 1 },
    ],
  });
  createRFProcess({
    outputId: 'mm:crimson_stem_from_wood_nether',
    outputItem: 'minecraft:crimson_stem',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 2 },
      { type: 'mm:item', item: 'mysticalagriculture:nether_essence', count: 1 },
    ],
  });

  // Charcoal
  createRFProcess({
    outputId: 'mm:charcoal_from_wood_coal_essence',
    outputItem: 'minecraft:charcoal',
    outputCount: 12,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:wood_essence', count: 8 },
      { type: 'mm:item', item: 'mysticalagriculture:coal_essence', count: 1 },
    ],
  });
  // User-requested additional conversions
  createRFProcess({
    outputId: 'mm:flux_gem_from_flux_infused_gem_essence',
    outputItem: 'redstone_arsenal:flux_gem',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:flux_infused_gem_essence', count: 8 },
    ],
  });

  createRFProcess({
    outputId: 'mm:manyullyn_ingot_from_manyullyn_essence',
    outputItem: 'common_ore_library:manyullyn_ingot',
    outputCount: 6,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:manyullyn_essence', count: 8 },
    ],
  });

  createRFProcess({
    outputId: 'mm:vibrant_alloy_from_essence',
    outputItem: 'enderio:vibrant_alloy_ingot',
    outputCount: 2,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:vibrant_alloy_essence', count: 8 },
    ],
  });

  // same for end_steel
  createRFProcess({
    outputId: 'mm:end_steel_ingot_from_essence',
    outputItem: 'enderio:end_steel_ingot',
    outputCount: 2,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:end_steel_essence', count: 8 },
    ],
  });

  createRFProcess({
    outputId: 'mm:terrasteel_ingot_from_essence',
    outputItem: 'botania:terrasteel_ingot',
    outputCount: 2,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:terrasteel_essence', count: 8 },
    ],
  });

  createRFProcess({
    outputId: 'mm:draconium_ingot_from_essence',
    outputItem: 'draconicevolution:draconium_ingot',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:draconium_essence', count: 8 },
    ],
  });

  createRFProcess({
    outputId: 'mm:niotic_crystal_from_essence',
    outputItem: 'powah:crystal_niotic',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:niotic_crystal_essence', count: 9 },
    ],
  });

  createRFProcess({
    outputId: 'mm:spirited_crystal_from_essence',
    outputItem: 'powah:crystal_spirited',
    outputCount: 1,
    inputs: [
      { type: 'mm:item', item: 'mysticalagriculture:spirited_crystal_essence', count: 9 },
    ],
  });
});
