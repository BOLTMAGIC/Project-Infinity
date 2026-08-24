priority: 1;
const BLOCK_COUNT2 = 512;
const TICKS2 = 1;
const SIMPLE_ENERGY2 = 200000;
const EMPOWERED_ENERGY2 = 40000000;
let recipeCounter = 0;

MMEvents.createProcesses((event) => {
  recipeCounter = 0; // Reset counter for each event to prevent duplicates
  //#region Actually Additions Blocks
  createSimple12(
    event,
    'minecraft:iron_block',
    'actuallyadditions:enori_crystal_block'
  );
  createSimple12(
    event,
    'minecraft:redstone_block',
    'actuallyadditions:restonia_crystal_block'
  );
  createSimple12(
    event,
    'minecraft:lapis_block',
    'actuallyadditions:palis_crystal_block'
  );
  createSimple12(
    event,
    'minecraft:diamond_block',
    'actuallyadditions:diamatine_crystal_block'
  );
  createSimple12(
    event,
    'minecraft:coal_block',
    'actuallyadditions:void_crystal_block'
  );
  createSimple12(
    event,
    'minecraft:emerald_block',
    'actuallyadditions:emeradic_crystal_block'
  );
  createSimple12(event, 'minecraft:red_mushroom', 'minecraft:nether_wart');
  createSimple12(event, 'minecraft:sand', 'minecraft:soul_sand');
  createSimple12(
    event,
    'armorplus:frost_crystal',
    'armorplus:infused_frost_crystal'
  );

  createSimple22(
    event,
    'minecraft:iron_ingot',
    'minecraft:glowstone_dust',
    'armorplus:en_iron'
  );
  createSimple22(
    event,
    'minecraft:gold_ingot',
    'minecraft:glowstone_dust',
    'armorplus:en_gold'
  );
  createSimple22(
    event,
    'minecraft:netherite_ingot',
    'minecraft:glowstone_dust',
    'armorplus:en_netherite'
  );
  createSimple22(
    event,
    'minecraft:diamond',
    'minecraft:glowstone_dust',
    'armorplus:en_diamond'
  );

  //#region Actually Additions Empowered Blocks
  createEmpowered2(
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

  createEmpowered2(
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

  createEmpowered2(
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

  createEmpowered2(
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

  createEmpowered2(
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

  createEmpowered2(
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

  createEmpowered2(
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

  createEmpowered2(
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

  createRecipe22(
    event,
    [
      { item: 'redstone_arsenal:flux_gem', count: 256 },
      { item: 'minecraft:redstone', count: 256 },
      { item: 'enderio:redstone_alloy_ingot', count: 256 },
      { item: 'extendedcrafting:redstone_ingot', count: 256 },
      { item: 'mysticalagriculture:fire_essence', count: 1024 },
    ],
    'armorplus:lava_crystal',
    256
  );

  createRecipe22(
    event,
    [
      { item: 'armorplus:en_diamond', count: 256 },
      { item: 'minecraft:lapis_lazuli', count: 256 },
      { item: 'ae2omnicells:charged_ender_ingot', count: 256 },
      { item: 'common_ore_library:platinum_ingot', count: 256 },
      { item: 'mysticalagriculture:water_essence', count: 256 },
    ],
    'armorplus:frost_crystal',
    256
  );

  createRecipe22(
    event,
    [
      { item: 'mysticalagriculture:fire_essence', count: 2560 },
      { item: 'minecraft:iron_ingot', count: 64 },
    ],
    'kubejs:fire_ingot',
    64
  );
  createRecipe22(
    event,
    [
      { item: 'mysticalagriculture:air_essence', count: 2560 },
      { item: 'minecraft:iron_ingot', count: 64 },
    ],
    'kubejs:air_ingot',
    64
  );
  createRecipe22(
    event,
    [
      { item: 'mysticalagriculture:water_essence', count: 2560 },
      { item: 'minecraft:iron_ingot', count: 64 },
    ],
    'kubejs:water_ingot',
    64
  );
  createRecipe22(
    event,
    [
      { item: 'mysticalagriculture:earth_essence', count: 2560 },
      { item: 'minecraft:iron_ingot', count: 64 },
    ],
    'kubejs:earth_ingot',
    64
  );

  //#region Black Lotus Botania
  createRecipe2(
    event,
    [
      'minecraft:black_dye',
      'botania:manasteel_ingot',
      'botania:mana_pearl',
      'botania:mana_diamond',
    ],
    'botania:black_lotus',
    2048
  );

  //#region EnderIO Soul Vial Recipes
  enderio_recipe12(event, 'witch', 'kubejs:filled_witch_soul_vial');
  enderio_recipe12(event, 'enderman', 'kubejs:filled_enderman_soul_vial');
  enderio_recipe12(event, 'shulker', 'kubejs:filled_shulker_soul_vial');
  enderio_recipe12(event, 'zombie', 'kubejs:filled_zombie_soul_vial');
  enderio_recipe12(event, 'villager', 'kubejs:filled_villager_soul_vial');
  enderio_recipe22(
    event,
    'kubejs:filled_witch_soul_vial',
    'enderio:ender_resonator',
    'enderio:sentient_ender'
  );
  enderio_recipe22(
    event,
    'kubejs:filled_enderman_soul_vial',
    'enderio:vibrant_crystal',
    'enderio:ender_crystal'
  );
  enderio_recipe22(
    event,
    'kubejs:filled_shulker_soul_vial',
    'enderio:vibrant_crystal',
    'enderio:prescient_crystal'
  );
  enderio_recipe22(
    event,
    'kubejs:filled_zombie_soul_vial',
    'enderio:z_logic_controller',
    'enderio:frank_n_zombie'
  );
  enderio_recipe22(
    event,
    'kubejs:filled_villager_soul_vial',
    'enderio:dark_steel_grinding_ball',
    'enderio:player_token'
  );

  //#region Reaction Chamber Recipes
  reaction_recipe2(
    event,
    [
      'ae2:charged_certus_quartz_crystal',
      32,
      'neoecoae:energized_crystal_dust',
      32,
    ],
    'minecraft:water',
    500,
    'neoecoae:energized_crystal',
    64
  );
  reaction_recipe2(
    event,
    [
      'ae2:singularity',
      2,
      'minecraft:nether_star',
      1,
      'advanced_ae:quantum_alloy_plate',
      4,
    ],
    'advanced_ae:quantum_infusion_source',
    2000,
    'extendedae_plus:oblivion_singularity',
    1
  );
  reaction_recipe2(
    event,
    [
      'appflux:redstone_crystal',
      4,
      'appflux:harden_insulating_resin',
      4,
      'ae2:sky_stone_block',
      4,
    ],
    'minecraft:lava',
    500,
    'appflux:sky_harden_insulating_resin',
    8
  );
  reaction_recipe2(
    event,
    ['ae2:charged_certus_quartz_crystal', 8, 'ae2:quartz_block', 8],
    'minecraft:water',
    1000,
    'ae2:damaged_budding_quartz',
    8
  );
  reaction_recipe2(
    event,
    [
      'ae2:printed_calculation_processor',
      4,
      'ae2:printed_silicon',
      4,
      'minecraft:redstone',
      4,
    ],
    'minecraft:water',
    100,
    'ae2:calculation_processor',
    4
  );
  reaction_recipe2(
    event,
    [
      'advanced_ae:quantum_alloy_block',
      4,
      'expatternprovider:silicon_block',
      4,
      'minecraft:redstone_block',
      4,
    ],
    'minecraft:water',
    1000,
    'advanced_ae:quantum_processor',
    36
  );
  reaction_recipe2(
    event,
    [
      'ae2:singularity',
      32,
      'enderio:powdered_ender_pearl',
      64,
      'ae2:sky_stone_block',
      64,
    ],
    'minecraft:lava',
    3200,
    'advanced_ae:shattered_singularity',
    64
  );
  reaction_recipe2(
    event,
    [
      'minecraft:copper_ingot',
      4,
      'advanced_ae:shattered_singularity',
      4,
      'ae2:singularity',
      4,
    ],
    'advanced_ae:quantum_infusion_source',
    1000,
    'advanced_ae:quantum_alloy',
    1
  );
  reaction_recipe2(
    event,
    ['ae2omnicells:ender_ingot', 64],
    'minecraft:water',
    1000,
    'ae2omnicells:charged_ender_ingot',
    64
  );
  reaction_recipe2(
    event,
    ['ae2:charged_certus_quartz_crystal', 8, 'ae2:damaged_budding_quartz', 8],
    'minecraft:water',
    1000,
    'ae2:chipped_budding_quartz',
    8
  );
  reaction_recipe2(
    event,
    [
      'ae2:charged_certus_quartz_crystal',
      16,
      'minecraft:iron_ingot',
      16,
      'ae2:sky_stone_block',
      16,
    ],
    'minecraft:lava',
    500,
    'megacells:sky_steel_ingot',
    64
  );
  reaction_recipe2(
    event,
    ['ae2:charged_certus_quartz_crystal', 32, 'ae2:fluix_dust', 32],
    'minecraft:water',
    500,
    'ae2:fluix_crystal',
    64
  );
  reaction_recipe2(
    event,
    [
      'advanced_ae:quantum_alloy',
      8,
      'minecraft:netherite_ingot',
      2,
      'minecraft:nether_star',
      1,
    ],
    'advanced_ae:quantum_infusion_source',
    1000,
    'advanced_ae:quantum_alloy_plate',
    1
  );
  reaction_recipe2(
    event,
    [
      Item.of(
        'hostilenetworks:prediction',
        '{data_model:{id:"hostilenetworks:wither"}}'
      ),
      2,
      'powah:crystal_nitro',
      2,
    ],
    'industrialforegoing:ether_gas',
    50,
    'minecraft:nether_star',
    16
  );
  reaction_recipe2(
    event,
    [
      'ae2:charged_certus_quartz_crystal',
      16,
      'minecraft:redstone',
      16,
      'minecraft:quartz',
      16,
    ],
    'minecraft:water',
    500,
    'ae2:fluix_crystal',
    64
  );
  reaction_recipe2(
    event,
    [
      'ae2:singularity',
      1,
      'enderio:powdered_ender_pearl',
      2,
      'ae2:sky_dust',
      2,
    ],
    'minecraft:lava',
    100,
    'advanced_ae:shattered_singularity',
    2
  );
  reaction_recipe2(
    event,
    [
      'neoecoae:superconducting_processor_print',
      4,
      'neoecoae:crystal_matrix',
      4,
      '#forge:silicon',
      4,
    ],
    'minecraft:water',
    100,
    'neoecoae:superconducting_processor',
    4
  );
  reaction_recipe2(
    event,
    [
      'ae2:quartz_block',
      9,
      'expatternprovider:silicon_block',
      4,
      'minecraft:redstone_block',
      4,
    ],
    'minecraft:water',
    1000,
    'ae2:calculation_processor',
    36
  );
  reaction_recipe2(
    event,
    ['ae2:certus_quartz_crystal', 64],
    'minecraft:water',
    1000,
    'ae2:charged_certus_quartz_crystal',
    64
  );
  reaction_recipe2(
    event,
    [
      'ae2:printed_logic_processor',
      4,
      'ae2:printed_silicon',
      4,
      'minecraft:redstone',
      4,
    ],
    'minecraft:water',
    100,
    'ae2:logic_processor',
    4
  );
  reaction_recipe2(
    event,
    [
      'advanced_ae:printed_quantum_processor',
      4,
      'ae2:printed_silicon',
      4,
      'minecraft:redstone',
      4,
    ],
    'minecraft:water',
    100,
    'advanced_ae:quantum_processor',
    4
  );
  reaction_recipe2(
    event,
    [
      'ae2omnicells:singularity_block',
      4,
      'expatternprovider:silicon_block',
      4,
      'minecraft:redstone_block',
      4,
    ],
    'minecraft:water',
    1000,
    'ae2omnicells:multidimensional_expansion_processor',
    36
  );
  reaction_recipe2(
    event,
    [
      'ae2:printed_engineering_processor',
      4,
      'ae2:printed_silicon',
      4,
      'minecraft:redstone',
      4,
    ],
    'minecraft:water',
    100,
    'ae2:engineering_processor',
    4
  );
  reaction_recipe2(
    event,
    ['appflux:redstone_crystal', 64],
    'minecraft:water',
    1000,
    'appflux:charged_redstone',
    64
  );
  reaction_recipe2(
    event,
    ['ae2:matter_ball', 64],
    'minecraft:lava',
    100,
    'ae2:singularity',
    1
  );
  reaction_recipe2(
    event,
    [
      'minecraft:redstone_block',
      16,
      'ae2:fluix_crystal',
      16,
      'minecraft:glowstone_dust',
      16,
    ],
    'minecraft:water',
    500,
    'appflux:redstone_crystal',
    64
  );
  reaction_recipe2(
    event,
    ['ae2:charged_certus_quartz_crystal', 16, 'ae2:certus_quartz_dust', 16],
    'minecraft:water',
    500,
    'ae2:certus_quartz_crystal',
    64
  );
  reaction_recipe2(
    event,
    ['neoecoae:energized_crystal_dust', 64, 'ae2:fluix_crystal', 64],
    'minecraft:water',
    500,
    'neoecoae:energized_fluix_crystal',
    64
  );
  reaction_recipe2(
    event,
    [
      'ae2omnicells:complex_link_circuit_print',
      4,
      'ae2:printed_silicon',
      4,
      'minecraft:redstone',
      4,
    ],
    'minecraft:water',
    100,
    'ae2omnicells:complex_link_processor',
    4
  );
  reaction_recipe2(
    event,
    [
      'appflux:printed_energy_processor',
      36,
      'expatternprovider:silicon_block',
      4,
      'minecraft:redstone',
      36,
    ],
    'minecraft:water',
    1000,
    'appflux:energy_processor',
    36
  );
  reaction_recipe2(
    event,
    ['ae2:charged_certus_quartz_crystal', 8, 'ae2:chipped_budding_quartz', 8],
    'minecraft:water',
    1000,
    'ae2:flawed_budding_quartz',
    8
  );
  reaction_recipe2(
    event,
    [
      'appflux:printed_energy_processor',
      4,
      'ae2:printed_silicon',
      4,
      'minecraft:redstone',
      4,
    ],
    'minecraft:water',
    100,
    'appflux:energy_processor',
    4
  );
  reaction_recipe2(
    event,
    ['appflux:charged_redstone', 64],
    'minecraft:water',
    1000,
    'appflux:printed_energy_processor',
    64
  );
  reaction_recipe2(
    event,
    [
      'minecraft:copper_ingot',
      64,
      'advanced_ae:shattered_singularity',
      64,
      'ae2omnicells:singularity_block',
      7,
    ],
    'advanced_ae:quantum_infusion_source',
    1600,
    'advanced_ae:quantum_alloy',
    16
  );
  reaction_recipe2(
    event,
    [
      'ae2omnicells:multidimensional_expansion_circuit_print',
      4,
      'ae2:printed_silicon',
      4,
      'minecraft:redstone',
      4,
    ],
    'minecraft:water',
    100,
    'ae2omnicells:multidimensional_expansion_processor',
    4
  );
  reaction_recipe2(
    event,
    [
      'ae2:ender_dust',
      32,
      'minecraft:iron_ingot',
      32,
      'ae2:certus_quartz_dust',
      32,
    ],
    'minecraft:water',
    500,
    'ae2omnicells:ender_ingot',
    64
  );
  reaction_recipe2(
    event,
    [
      'minecraft:gold_block',
      4,
      'expatternprovider:silicon_block',
      4,
      'minecraft:redstone_block',
      4,
    ],
    'minecraft:water',
    1000,
    'ae2:logic_processor',
    36
  );
  reaction_recipe2(
    event,
    [
      'megacells:printed_accumulation_processor',
      4,
      'ae2:printed_silicon',
      4,
      'minecraft:redstone',
      4,
    ],
    'minecraft:water',
    100,
    'megacells:accumulation_processor',
    4
  );
  reaction_recipe2(
    event,
    [
      'ae2omnicells:ender_ingot_block',
      4,
      'expatternprovider:silicon_block',
      4,
      'minecraft:redstone_block',
      4,
    ],
    'minecraft:water',
    1000,
    'ae2omnicells:omni_link_processor',
    36
  );
  reaction_recipe2(
    event,
    [
      'minecraft:diamond_block',
      4,
      'expatternprovider:silicon_block',
      4,
      'minecraft:redstone_block',
      4,
    ],
    'minecraft:water',
    1000,
    'ae2:engineering_processor',
    36
  );
  reaction_recipe2(
    event,
    [
      'ae2omnicells:omni_link_circuit_print',
      4,
      'ae2:printed_silicon',
      4,
      'minecraft:redstone',
      4,
    ],
    'minecraft:water',
    100,
    'ae2omnicells:omni_link_processor',
    4
  );
  reaction_recipe2(
    event,
    [
      'ae2omnicells:netherite_scrap_block',
      4,
      'expatternprovider:silicon_block',
      4,
      'minecraft:redstone_block',
      4,
    ],
    'minecraft:water',
    1000,
    'ae2omnicells:complex_link_processor',
    36
  );
});
//#region Functions
// Helper: add an item or tag input depending on whether the value is a tag
function addItemInput (recipe, item, count) {
  let itemStr = item;
  if (
    typeof item === 'object' &&
    item !== null &&
    typeof item.item === 'string'
  ) {
    itemStr = item.item;
  }

  if (!itemStr) {
    console.warn(
      'addItemInput: ingredient has no item id, skipping: ' + String(item) + 
      ' (count: ' + count + ', type: ' + typeof item + ')'
    );
    return;
  }

  if (typeof itemStr === 'string' && itemStr.startsWith('#')) {
    // MasterfulMachinery expects the id string; keep the leading '#' so
    // the parser can handle tags the same way as before.
    // Write tag without the leading '#', using the 'tag' field as required:
    recipe.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        tag: itemStr.slice(1),
        count: count,
      },
    });
  } else {
    recipe.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: itemStr,
        count: count,
      },
    });
  }
}

function createSimple12 (event, input, output) {
  const sanitizedOutput = output.replace(':', '_');
  event
    .create(`mm:me_2_${sanitizedOutput}_${recipeCounter++}`)
    .structureId('mm:mechanical_empowerer_structure2')
    .ticks(TICKS2)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input,
        count: BLOCK_COUNT2,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: SIMPLE_ENERGY2,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: output,
        count: BLOCK_COUNT2,
      },
    });
}

function createSimple22 (event, input1, input2, output) {
  const sanitizedOutput = output.replace(':', '_');
  event
    .create(`mm:me_2_${sanitizedOutput}_${recipeCounter++}`)
    .structureId('mm:mechanical_empowerer_structure2')
    .ticks(TICKS2)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input1,
        count: 512,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: input2,
        count: 4096,
      },
    })
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:energy',
        amount: SIMPLE_ENERGY2,
      },
    })
    .output({
      type: 'mm:output/simple',
      ingredient: {
        type: 'mm:item',
        item: output,
        count: 512,
      },
    });
}

function createEmpowered2 (event, inputs, output) {
  const sanitizedOutput = output.replace(':', '_');
  const recipe = event
    .create(`mm:me_empowered_2_${sanitizedOutput}_${recipeCounter++}`)
    .structureId('mm:mechanical_empowerer_structure2')
    .ticks(TICKS2);

  inputs.forEach((item) => {
    addItemInput(recipe, item, BLOCK_COUNT2);
  });

  recipe.input({
    type: 'mm:input/consume',
    ingredient: {
      type: 'mm:energy',
      amount: EMPOWERED_ENERGY2,
    },
  });

  recipe.output({
    type: 'mm:output/simple',
    ingredient: {
      type: 'mm:item',
      item: output,
      count: BLOCK_COUNT2,
    },
  });
}

function createRecipe2 (event, inputs, output, outputCount) {
  const sanitizedOutput = output.replace(':', '_');
  const recipe = event
    .create(`mm:me_empowered_2_${sanitizedOutput}_${recipeCounter++}`)
    .structureId('mm:mechanical_empowerer_structure2')
    .ticks(TICKS2);

  inputs.forEach((item) => {
    addItemInput(recipe, item, 1024);
  });

  recipe.input({
    type: 'mm:input/consume',
    ingredient: {
      type: 'mm:energy',
      amount: SIMPLE_ENERGY2,
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

function createRecipe22 (event, inputs, output, outputCount) {
  const sanitizedOutput = output.replace(':', '_');
  const recipe = event
    .create(`mm:me_empowered_2_${sanitizedOutput}_${recipeCounter++}`)
    .structureId('mm:mechanical_empowerer_structure2')
    .ticks(1);

  inputs.forEach((input) => {
    addItemInput(recipe, input.item, input.count);
  });

  recipe.input({
    type: 'mm:input/consume',
    ingredient: {
      type: 'mm:energy',
      amount: EMPOWERED_ENERGY2,
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

function enderio_recipe12 (event, input, output) {
  const sanitizedOutput = output.replace(':', '_');
  event
    .create(`mm:me_2_${sanitizedOutput}_${recipeCounter++}`)
    .structureId('mm:mechanical_empowerer_structure2')
    .ticks(TICKS2)
    .input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:item',
        item: 'enderio:filled_soul_vial',
        count: 1,
        nbt_snbt: `{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:${input}"}}}}`,
        nbt_match: 'weak',
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

function enderio_recipe22 (event, input1, input2, output) {
  const sanitizedOutput = output.replace(':', '_');
  event
    .create(`mm:me_2_${sanitizedOutput}_${recipeCounter++}`)
    .structureId('mm:mechanical_empowerer_structure2')
    .ticks(TICKS2)
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

function reaction_recipe2 (event) {
  // Flexible argument parsing to support multiple signatures:
  // - single input: (event, item, inputCount?, fluid?, fluidAmount?, output, outputCount?)
  // - multiple inputs: (event, [item|{item,count}, ...], fluid?, fluidAmount?, output, outputCount?)
  const args = Array.prototype.slice.call(arguments, 1);

  let first = args.shift();
  let inputsList = [];
  let fluid;
  let fluidAmount;
  let output;
  let outputCount;

  if (Array.isArray(first)) {
    // Support two common array formats:
    // - ['mod:item', count, 'mod:item2', count2, ...]
    // - ['mod:item', 'mod:item2', ...] or [{item,count}, ...]
    if (
      first.length >= 2 &&
      typeof first[0] === 'string' &&
      typeof first[1] === 'number'
    ) {
      for (var i = 0; i < first.length; i += 2) {
        var it = first[i];
        var ct = first[i + 1];
        inputsList.push({ item: it, count: typeof ct === 'number' ? ct : 1 });
      }
    } else {
      inputsList = first.map((it) => {
        if (typeof it === 'string') return { item: it, count: 1 };
        // try common shapes for object inputs
        if (it && typeof it === 'object') {
          if (typeof it.item === 'string')
            return { item: it.item, count: it.count || 1 };
          if (typeof it.id === 'string')
            return { item: it.id, count: it.count || 1 };
          // fallback to toString() if available
          try {
            const s = it.toString();
            if (s && typeof s === 'string')
              return { item: s, count: it.count || 1 };
          } catch (e) {}
        }
        // unknown shape -> keep as null to detect later
        return { item: null, count: it && it.count ? it.count : 1 };
      });
    }

    var maybe1 = args.shift();
    var maybe2 = args.shift();
    var maybe3 = args.shift();
    var maybe4 = args.shift();

    if (
      typeof maybe1 === 'string' &&
      typeof maybe2 === 'number' &&
      typeof maybe3 === 'string'
    ) {
      // pattern: [inputs], fluid, fluidAmount, output, outputCount?
      fluid = maybe1;
      fluidAmount = maybe2;
      output = maybe3;
      outputCount = maybe4;
    } else if (typeof maybe1 === 'string') {
      // pattern: [inputs], output, outputCount?
      output = maybe1;
      outputCount = maybe2;
    }
  } else {
    // single input string
    var input = first;
    var maybeInputCount = args.shift();
    var maybeA = args.shift();
    var maybeB = args.shift();
    var maybeC = args.shift();
    var maybeD = args.shift();

    var inputCount = typeof maybeInputCount === 'number' ? maybeInputCount : 1;

    if (
      typeof maybeInputCount === 'number' &&
      typeof maybeA === 'string' &&
      typeof maybeB === 'number' &&
      typeof maybeC === 'string'
    ) {
      // pattern: item, inputCount, fluid, fluidAmount, output, outputCount?
      fluid = maybeA;
      fluidAmount = maybeB;
      output = maybeC;
      outputCount = maybeD;
    } else if (typeof maybeA === 'string') {
      // pattern: item, inputCount?, output, outputCount?
      output = maybeA;
      outputCount = maybeB;
      // fluid not provided
    }

    // normalize single input value to a string id when possible
    if (typeof input === 'string') {
      inputsList = [{ item: input, count: inputCount || 1 }];
    } else if (input && typeof input === 'object') {
      if (typeof input.item === 'string') {
        inputsList = [
          { item: input.item, count: input.count || inputCount || 1 },
        ];
      } else if (typeof input.id === 'string') {
        inputsList = [
          { item: input.id, count: input.count || inputCount || 1 },
        ];
      } else {
        try {
          const s = input.toString();
          inputsList = [{ item: s, count: input.count || inputCount || 1 }];
        } catch (e) {
          inputsList = [{ item: null, count: inputCount || 1 }];
        }
      }
    } else {
      inputsList = [{ item: input, count: inputCount || 1 }];
    }
  }

  // defaults
  inputsList.forEach((i) => {
    if (!i.count || typeof i.count !== 'number') i.count = 1;
  });
  outputCount = outputCount || 1;
  if (fluid && !fluidAmount) fluidAmount = 1;

  if (!output) return; // nothing to create

  // Filter out null items with better logging
  const validInputs = inputsList.filter((i) => {
    if (!i.item) {
      console.warn('reaction_recipe2: Skipping null input item for output: ' + output + ' (count: ' + i.count + ')');
      return false;
    }
    return true;
  });

  if (validInputs.length === 0 && !fluid) {
    console.warn('reaction_recipe2: Skipping recipe for ' + output + ' - no valid inputs found');
    return;
  }

  const sanitizedOutput = output.replace(':', '_');
  const recipe = event
    .create(`mm:me_re_2_${sanitizedOutput}_${recipeCounter++}`)
    .structureId('mm:mechanical_empowerer_structure2')
    .ticks(TICKS2);

  validInputs.forEach((ing) => {
    addItemInput(recipe, ing.item, ing.count * 64);
  });

  if (fluid) {
    recipe.input({
      type: 'mm:input/consume',
      ingredient: {
        type: 'mm:fluid',
        fluid: fluid,
        amount: fluidAmount * 64,
      },
    });
  }

  recipe.input({
    type: 'mm:input/consume',
    ingredient: {
      type: 'mm:energy',
      amount: 120000000,
    },
  });

  recipe.output({
    type: 'mm:output/simple',
    ingredient: {
      type: 'mm:item',
      item: output,
      count: outputCount * 64,
    },
  });
}
