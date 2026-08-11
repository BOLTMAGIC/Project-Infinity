priority: 1;
MMEvents.createProcesses((event) => {
  // Helper to create infinity cell factory recipes with common base inputs
  function addInfinityCell (id, itemOrFluid, recordId, extraInputs) {
    let recipe = event
      .create(id)
      .structureId('mm:infinity_cell_factory_structure')
      .ticks(1200)
      .input({
        type: 'mm:input/consume',
        ingredient: { type: 'mm:energy', amount: 2147483647 },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:fluid',
          fluid: 'crazyae2addons:research_fluid',
          amount: 320000,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:fluid',
          fluid: 'advanced_ae:quantum_infusion_source',
          amount: 320000,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'compressium:cobblestone_6',
          count: 1,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'neoecoae:eco_item_cell_housing',
          count: 1,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'industrialforegoing:supreme_black_hole_unit',
          count: 1,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'crazyae2addons:super_singularity',
          count: 1,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'ae2omnicells:quantum_omni_cell_component_256m',
          count: 3,
        },
      });

    if (Array.isArray(extraInputs)) {
      extraInputs.forEach((inp) => recipe.input(inp));
    }

    recipe.output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: 'expatternprovider:infinity_cell',
        count: 1,
        nbt_snbt: `{record:{"#c":"ae2:${itemOrFluid}",id:"${recordId}"}}`,
      },
    });
  }

  // Cobblestone cell
  addInfinityCell('mm:factory_cobblestone_cell', 'i', 'minecraft:cobblestone', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'ae2omnicells:charged_ender_ingot',
        count: 256,
      },
    },
  ]);

  // Water cell
  addInfinityCell('mm:factory_water_cell', 'f', 'minecraft:water', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'ae2:singularity',
        count: 128,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advanced_ae:quantum_alloy_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'industrialforegoing:pink_slime_ingot',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'mekanism_extras:supreme_fluid_tank',
        count: 1,
        nbt_snbt:
          '{mekData:{FluidTanks:[{stored:{Amount:32768000,FluidName:"minecraft:water"}}]}}',
      },
    },
  ]);

  // Alternate Water cell
  addInfinityCell('mm:factory_water_cell_token', 'f', 'minecraft:water', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'ae2:singularity',
        count: 128,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advanced_ae:quantum_alloy_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'industrialforegoing:pink_slime_ingot',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:fluid_tank_token',
        count: 1,
        nbt_snbt: "{tank_level:'supreme',fluid_id:'minecraft:water'}",
      },
    },
  ]);

  // Lava cell
  addInfinityCell('mm:factory_lava_cell', 'f', 'minecraft:lava', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'ae2:singularity',
        count: 128,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advanced_ae:quantum_alloy_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'industrialforegoing:pink_slime_ingot',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'mekanism_extras:supreme_fluid_tank',
        count: 1,
        nbt_snbt:
          '{mekData:{FluidTanks:[{stored:{Amount:32768000,FluidName:"minecraft:lava"}}]}}',
      },
    },
  ]);

  // Alternate Lava cell
  addInfinityCell('mm:factory_lava_cell_token', 'f', 'minecraft:lava', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'ae2:singularity',
        count: 128,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advanced_ae:quantum_alloy_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'industrialforegoing:pink_slime_ingot',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:fluid_tank_token',
        count: 1,
        nbt_snbt: "{tank_level:'supreme',fluid_id:'minecraft:lava'}",
      },
    },
  ]);

  // Gravel Cell
  addInfinityCell('mm:factory_gravel_cell', 'i', 'minecraft:gravel', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'cyclic:flint_block',
        count: 128,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'botania:manasteel_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:radiance_alloy_block',
        count: 32,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'mm:auto_crusher_controller',
        count: 4,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'compressium:gravel_6',
        count: 1,
      },
    },
  ]);

  // Sand Cell
  addInfinityCell('mm:factory_sand_cell', 'i', 'minecraft:sand', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advanced_ae:quantum_alloy_block',
        count: 128,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'botania:manasteel_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'armorplus:infused_frost_lava_crystal',
        count: 32,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:radiance_alloy_block',
        count: 16,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'thermal:machine_smelter',
        count: 4,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'compressium:sand_6',
        count: 1,
      },
    },
  ]);

  // Dust Cell
  addInfinityCell('mm:factory_dust_cell', 'i', 'exdeorum:dust', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'compressium:sand_4',
        count: 2,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'dimensionalpocketsii:block_dimensional',
        count: 256,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'igleelib:blazum_block',
        count: 32,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'born_in_chaos_v1:fel_soil',
        count: 8,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:dust_6',
        count: 1,
      },
    },
  ]);

  // Dirt Cell
  addInfinityCell('mm:factory_dirt_cell', 'i', 'minecraft:dirt', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advanced_ae:quantum_alloy_block',
        count: 32,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'botania:manasteel_block',
        count: 16,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'mob_grinding_utils:delightful_dirt',
        count: 32,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:radiance_alloy_block',
        count: 8,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'mob_grinding_utils:dreadful_dirt',
        count: 4,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'compressium:dirt_6',
        count: 1,
      },
    },
  ]);

  // Prosperity Shard Cell
  addInfinityCell(
    'mm:factory_prosperity_shard_cell',
    'i',
    'mysticalagriculture:prosperity_shard',
    [
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:prosperity_ingot_block',
          count: 512,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:fertilized_essence',
          count: 512,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:inferium_essence',
          count: 256,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:prudentium_essence',
          count: 256,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:tertium_essence',
          count: 256,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:imperium_essence',
          count: 256,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:supremium_essence',
          count: 128,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:awakened_supremium_essence',
          count: 128,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagradditions:insanium_essence',
          count: 128,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalexpansion:extremium_essence',
          count: 64,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalexpansion:etherium_essence',
          count: 64,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalexpansion:divinium_essence',
          count: 32,
        },
      },
      {
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'mysticalagriculture:master_infusion_crystal',
          count: 1,
        },
      },
    ]
  );

  // Netherrack Cell
  addInfinityCell('mm:factory_netherrack_cell', 'i', 'minecraft:netherrack', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'cataclysm:ignitium_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'neoecoae:energized_superconductive_block',
        count: 16,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'compressium:netherrack_6',
        count: 1,
      },
    },
  ]);

  // Soul Sand Cell
  addInfinityCell('mm:factory_soul_sand_cell', 'i', 'minecraft:soul_sand', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'mysticalagradditions:insanium_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'extendedcrafting:black_iron_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'neoecoae:crystal_matrix',
        count: 16,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'compressium:soulsand_6',
        count: 1,
      },
    },
  ]);

  // Blackstone Cell
  addInfinityCell('mm:factory_blackstone_cell', 'i', 'minecraft:blackstone', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'compressium:netherrack_4',
        count: 2,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'minecraft:netherite_upgrade_smithing_template',
        count: 32,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advancednetherite:netherite_diamond_block',
        count: 16,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:blackstone_6',
        count: 1,
      },
    },
  ]);

  // Endstone cell
  addInfinityCell('mm:factory_endstone_cell', 'i', 'minecraft:end_stone', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:sculk_alloy_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'kubejs:compressed_warden_tendril',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'ifeu:dragon_star_block',
        count: 16,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: { type: 'mm:item', item: 'compressium:endstone_6', count: 1 },
    },
  ]);

  // Matter Ball Cell
  addInfinityCell('mm:factory_matter_ball_cell', 'i', 'ae2:matter_ball', [
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'advanced_ae:shattered_singularity',
        count: 256,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'neoecoae:energized_fluix_crystal_block',
        count: 64,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'extendedae_plus:oblivion_singularity',
        count: 32,
      },
    },
    {
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'ae2omnicells:spent_nuclear_waste_singularity',
        count: 16,
      },
    },
  ]);
});
