priority: 1;
const BLOCK_COUNT = 16;
const TICKS = 4;
const SIMPLE_ENERGY = 2000;
const EMPOWERED_ENERGY = 400000;

MMEvents.createProcesses((event) => {
  // Actually Additions Blocks
  createSimple1(
    event,
    'minecraft:iron_block',
    'actuallyadditions:enori_crystal_block'
  );
  createSimple1(
    event,
    'minecraft:redstone_block',
    'actuallyadditions:restonia_crystal_block'
  );
  createSimple1(
    event,
    'minecraft:lapis_block',
    'actuallyadditions:palis_crystal_block'
  );
  createSimple1(
    event,
    'minecraft:diamond_block',
    'actuallyadditions:diamatine_crystal_block'
  );
  createSimple1(
    event,
    'minecraft:coal_block',
    'actuallyadditions:void_crystal_block'
  );
  createSimple1(
    event,
    'minecraft:emerald_block',
    'actuallyadditions:emeradic_crystal_block'
  );
  createSimple1(event, 'minecraft:red_mushroom', 'minecraft:nether_wart');
  createSimple1(event, 'minecraft:sand', 'minecraft:soul_sand');
  createSimple1(
    event,
    'armorplus:frost_crystal',
    'armorplus:infused_frost_crystal'
  );

  createSimple2(
    event,
    'minecraft:iron_ingot',
    'minecraft:glowstone_dust',
    'armorplus:en_iron'
  );
  createSimple2(
    event,
    'minecraft:gold_ingot',
    'minecraft:glowstone_dust',
    'armorplus:en_gold'
  );
  createSimple2(
    event,
    'minecraft:netherite_ingot',
    'minecraft:glowstone_dust',
    'armorplus:en_netherite'
  );
  createSimple2(
    event,
    'minecraft:diamond',
    'minecraft:glowstone_dust',
    'armorplus:en_diamond'
  );

  // Actually Additions Empowered Blocks
  createEmpowered(
    event,
    [
      'actuallyadditions:enori_crystal_block',
      'minecraft:stone_button',
      'minecraft:snowball',
      'minecraft:gray_dye',
      'minecraft:cobblestone',
    ],
    'actuallyadditions:empowered_enori_crystal_block'
  );

  createEmpowered(
    event,
    [
      'actuallyadditions:restonia_crystal_block',
      'minecraft:redstone',
      'minecraft:nether_brick',
      'minecraft:red_dye',
      'minecraft:brick',
    ],
    'actuallyadditions:empowered_restonia_crystal_block'
  );

  createEmpowered(
    event,
    [
      'actuallyadditions:palis_crystal_block',
      'minecraft:prismarine_shard',
      'minecraft:prismarine_shard',
      'minecraft:prismarine_shard',
      'minecraft:cyan_dye',
    ],
    'actuallyadditions:empowered_palis_crystal_block'
  );

  createEmpowered(
    event,
    [
      'actuallyadditions:diamatine_crystal_block',
      'minecraft:clay_ball',
      'minecraft:clay_ball',
      'minecraft:light_blue_dye',
      'minecraft:clay',
    ],
    'actuallyadditions:empowered_diamatine_crystal_block'
  );

  createEmpowered(
    event,
    [
      'actuallyadditions:void_crystal_block',
      'minecraft:coal',
      'minecraft:black_dye',
      'minecraft:stone',
      'minecraft:flint',
    ],
    'actuallyadditions:empowered_void_crystal_block'
  );

  createEmpowered(
    event,
    [
      'actuallyadditions:emeradic_crystal_block',
      'minecraft:lime_dye',
      'minecraft:grass',
      'minecraft:slime_ball',
      'minecraft:oak_sapling',
    ],
    'actuallyadditions:empowered_emeradic_crystal_block'
  );

  createEmpowered(
    event,
    [
      'enderio:double_layer_capacitor',
      'enderio:double_layer_capacitor',
      'enderio:vibrant_alloy_ingot',
      'enderio:vibrant_alloy_ingot',
      'minecraft:glowstone',
    ],
    'enderio:octadic_capacitor'
  );

  createEmpowered(
    event,
    [
      'mekanism:dust_coal',
      'enderio:basic_capacitor',
      'enderio:basic_capacitor',
      'enderio:energetic_alloy_ingot',
      'enderio:energetic_alloy_ingot',
    ],
    'enderio:double_layer_capacitor'
  );

  createRecipe2(
    event,
    [
      { item: 'redstone_arsenal:flux_gem', count: 64 },
      { item: 'minecraft:redstone', count: 64 },
      { item: 'enderio:redstone_alloy_ingot', count: 64 },
      { item: 'extendedcrafting:redstone_ingot', count: 64 },
      { item: 'mysticalagriculture:fire_essence', count: 256 },
    ],
    'armorplus:lava_crystal',
    64
  );

    createRecipe2(
    event,
    [
      { item: 'armorplus:en_diamond', count: 64 },
      { item: 'minecraft:lapis_lazuli', count: 64 },
      { item: 'ae2omnicells:charged_ender_ingot', count: 64 },
      { item: 'common_ore_library:platinum_ingot', count: 64 },
      { item: 'mysticalagriculture:water_essence', count: 256 },
    ],
    'armorplus:frost_crystal',
    64
  );

  createRecipe2(
    event,
    [
      { item: 'mysticalagriculture:fire_essence', count: 40 },
      { item: 'minecraft:iron_ingot', count: 1 },
    ],
    'kubejs:fire_ingot',
    1
  );
  createRecipe2(
    event,
    [
      { item: 'mysticalagriculture:air_essence', count: 40 },
      { item: 'minecraft:iron_ingot', count: 1 },
    ],
    'kubejs:air_ingot',
    1
  );
  createRecipe2(
    event,
    [
      { item: 'mysticalagriculture:water_essence', count: 40 },
      { item: 'minecraft:iron_ingot', count: 1 },
    ],
    'kubejs:water_ingot',
    1
  );
  createRecipe2(
    event,
    [
      { item: 'mysticalagriculture:earth_essence', count: 40 },
      { item: 'minecraft:iron_ingot', count: 1 },
    ],
    'kubejs:earth_ingot',
    1
  );

  // Black Lotus Botania
  createRecipe(
    event,
    [
      'minecraft:black_dye',
      'botania:manasteel_ingot',
      'botania:mana_pearl',
      'botania:mana_diamond',
    ],
    'botania:black_lotus',
    4
  );

  //EnderIO Soul Vial Recipes
  enderio_recipe1(event, 'witch', 'kubejs:filled_witch_soul_vial');
  enderio_recipe1(event, 'enderman', 'kubejs:filled_enderman_soul_vial');
  enderio_recipe1(event, 'shulker', 'kubejs:filled_shulker_soul_vial');
  enderio_recipe1(event, 'zombie', 'kubejs:filled_zombie_soul_vial');
  enderio_recipe1(event, 'villager', 'kubejs:filled_villager_soul_vial');
  enderio_recipe2(
    event,
    'kubejs:filled_witch_soul_vial',
    'enderio:ender_resonator',
    'enderio:sentient_ender'
  );
  enderio_recipe2(
    event,
    'kubejs:filled_enderman_soul_vial',
    'enderio:vibrant_crystal',
    'enderio:ender_crystal'
  );
  enderio_recipe2(
    event,
    'kubejs:filled_shulker_soul_vial',
    'enderio:vibrant_crystal',
    'enderio:prescient_crystal'
  );
  enderio_recipe2(
    event,
    'kubejs:filled_zombie_soul_vial',
    'enderio:z_logic_controller',
    'enderio:frank_n_zombie'
  );
  enderio_recipe2(
    event,
    'kubejs:filled_villager_soul_vial',
    'enderio:dark_steel_grinding_ball',
    'enderio:player_token'
  );
});

function createSimple1 (event, input, output) {
  const sanitizedOutput = output.replace(':', '_');
  event
    .create(`mm:mechanical_empowerer_${sanitizedOutput}`)
    .structureId('mm:mechanical_empowerer_structure')
    .ticks(TICKS)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input,
        count: BLOCK_COUNT,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: SIMPLE_ENERGY,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: output,
        count: BLOCK_COUNT,
      },
    });
}

function createSimple2 (event, input1, input2, output) {
  const sanitizedOutput = output.replace(':', '_');
  event
    .create(`mm:mechanical_empowerer_${sanitizedOutput}`)
    .structureId('mm:mechanical_empowerer_structure')
    .ticks(TICKS)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input1,
        count: 8,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input2,
        count: 64,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: SIMPLE_ENERGY,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: output,
        count: 8,
      },
    });
}

function createEmpowered (event, inputs, output) {
  const sanitizedOutput = output.replace(':', '_');
  const recipe = event
    .create(`mm:mechanical_empowerer_empowered_${sanitizedOutput}`)
    .structureId('mm:mechanical_empowerer_structure')
    .ticks(TICKS);

  inputs.forEach((item) => {
    recipe.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: item,
        count: BLOCK_COUNT,
      },
    });
  });

  recipe.input({
    type: 'mm:input/consume',
    ingredient: {
      type: 'mm:energy',
      amount: EMPOWERED_ENERGY,
    },
  });

  recipe.output({
    type: 'mm:output/simple',
    ingredient: {
      type: 'mm:item',
      item: output,
      count: BLOCK_COUNT,
    },
  });
}

function createRecipe (event, inputs, output, outputCount) {
  const sanitizedOutput = output.replace(':', '_');
  const recipe = event
    .create(`mm:mechanical_empowerer_empowered_${sanitizedOutput}`)
    .structureId('mm:mechanical_empowerer_structure')
    .ticks(TICKS);

  inputs.forEach((item) => {
    recipe.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: item,
        count: 2,
      },
    });
  });

  recipe.input({
    type: 'mm:input/consume',
    ingredient: {
      type: 'mm:energy',
      amount: SIMPLE_ENERGY,
    },
  });

  recipe.output({
    type: 'mm:output/simple',
    ingredient: {
      type: 'mm:item',
      item: output,
      count: outputCount,
    },
  });
}

function createRecipe2 (event, inputs, output, outputCount) {
  const sanitizedOutput = output.replace(':', '_');
  const recipe = event
    .create(`mm:mechanical_empowerer_empowered_${sanitizedOutput}`)
    .structureId('mm:mechanical_empowerer_structure')
    .ticks(1);

  inputs.forEach((input) => {
    recipe.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input.item,
        count: input.count,
      },
    });
  });

  recipe.input({
    type: 'mm:input/consume',
    ingredient: {
      type: 'mm:energy',
      amount: EMPOWERED_ENERGY,
    },
  });

  recipe.output({
    type: 'mm:output/simple',
    ingredient: {
      type: 'mm:item',
      item: output,
      count: outputCount,
    },
  });
}

function enderio_recipe1 (event, input, output) {
  const sanitizedOutput = output.replace(':', '_');
  event
    .create(`mm:mechanical_empowerer_${sanitizedOutput}`)
    .structureId('mm:mechanical_empowerer_structure')
    .ticks(TICKS)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'enderio:filled_soul_vial',
        count: 1,
        nbt_snbt: `{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:${input}"}}}}`,
        nbt_match: 'weak'
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 40000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: output,
        count: 1,
      },
    });
}

function enderio_recipe2 (event, input1, input2, output) {
  const sanitizedOutput = output.replace(':', '_');
  event
    .create(`mm:mechanical_empowerer_${sanitizedOutput}`)
    .structureId('mm:mechanical_empowerer_structure')
    .ticks(TICKS)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input1,
        count: 1,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input2,
        count: 1,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: 400000,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'enderio:empty_soul_vial',
        count: 1,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: output,
        count: 1,
      },
    });
}
