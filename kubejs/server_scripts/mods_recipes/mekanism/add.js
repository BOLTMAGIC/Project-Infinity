ServerEvents.recipes((event) => {
  function crush (event, input, output_count, output, input_count) {
    if (input_count == null) input_count = 1;

    input = String(input);

    const ingredientData =
      input.charAt(0) == '#' ? { tag: input.substring(1) } : { item: input };

    event
      .custom({
        type: 'mekanism:crushing',
        input: {
          ingredient: ingredientData,
          amount: input_count,
        },
        output: {
          item: output,
          count: output_count,
        },
      })
      .id('mek_' + output.replace(/[:]/g, '_').toLowerCase());
  }

  crush(
    event,
    'allthemodium:unobtainium_vibranium_alloy_ingot',
    1,
    'allthemodium:unobtainium_vibranium_alloy_dust'
  );
  crush(event, 'kubejs:blaze_gold_ingot', 1, 'kubejs:blaze_gold_dust');
  crush(event, 'kubejs:azure_silver_ingot', 1, 'kubejs:azure_silver_dust');
  crush(event, 'kubejs:azure_electrum_ingot', 1, 'kubejs:azure_electrum_dust');
  crush(event, 'kubejs:crimson_iron_ingot', 1, 'kubejs:crimson_iron_dust');
  crush(event, 'minecraft:sand', 1, 'exdeorum:dust', 2);
  crush(event, 'kubejs:arcmetal_ore', 2, 'kubejs:raw_arcmetal');
  crush(event, 'kubejs:solarmetal_ore', 2, 'kubejs:raw_solarmetal');
  crush(event, 'kubejs:plasteel_ore', 2, 'kubejs:raw_plasteel');
  crush(event, 'kubejs:voidmetal_ore', 2, 'kubejs:raw_voidmetal');
  crush(event, '#forge:ingots/graphite', 1, 'nuclearcraft:graphite_dust');

  crush(
    event,
    'draconicevolution:draconium_ingot',
    1,
    'draconicevolution:draconium_dust'
  );

  function alloying (
    event,
    input_amount1,
    input_item1,
    input_amount2,
    input_item2,
    mainAmount,
    mainInput,
    output,
    output_count
  ) {
    event
      .custom({
        type: 'evolvedmekanism:alloying',
        extraInput: {
          amount: input_amount1,
          ingredient: {
            item: input_item1,
          },
        },
        secondExtraInput: {
          amount: input_amount2,
          ingredient: {
            item: input_item2,
          },
        },
        mainInput: {
          amount: mainAmount,
          ingredient: {
            item: mainInput,
          },
        },
        output: {
          item: output,
          count: output_count,
        },
      })
      .id('alloying_' + output);
  }

  function combining (
    event,
    input_amount1,
    input_item1,
    mainAmount,
    mainInput,
    output,
    output_count
  ) {
    event
      .custom({
        type: 'mekanism:combining',
        extraInput: {
          amount: input_amount1,
          ingredient: {
            item: input_item1,
          },
        },
        mainInput: {
          amount: mainAmount,
          ingredient: {
            item: mainInput,
          },
        },
        output: {
          item: output,
          count: output_count,
        },
      })
      .id('combining' + output);
  }

  alloying(
    event,
    4,
    'evolvedmekanism:alloy_exoversal',
    4,
    'voidminers:rosarium',
    1,
    'kubejs:infinity_10',
    'evolvedmekanism:alloy_creative',
    1
  );
  alloying(
    event,
    1,
    'enderio:pulsating_powder',
    1,
    'actuallyadditions:diamatine_crystal_shard',
    1,
    'minecraft:gold_ingot',
    'kubejs:crystalline_alloy',
    1
  );
  alloying(
    event,
    2,
    'thermal_extra:soul_sand_dust',
    1,
    'minecraft:iron_ingot',
    1,
    'minecraft:copper_ingot',
    'thermal_extra:soul_infused_ingot',
    1
  );
  alloying(
    event,
    2,
    'thermal:diamond_dust',
    1,
    'minecraft:netherite_scrap',
    1,
    'minecraft:echo_shard',
    'thermal_extra:abyssal_ingot',
    1
  );
  alloying(
    event,
    1,
    'thermal:nickel_ingot',
    1,
    'minecraft:shulker_shell',
    1,
    'thermal:lead_ingot',
    'thermal_extra:shellite_ingot',
    1
  );
  alloying(
    event,
    2,
    'thermal:tin_ingot',
    1,
    'minecraft:blaze_rod',
    1,
    'minecraft:obsidian',
    'thermal_extra:twinite_ingot',
    1
  );
  alloying(
    event,
    1,
    'thermal:nickel_ingot',
    1,
    'thermal_extra:ancient_dust',
    1,
    'common_ore_library:scrap_dust',
    'thermal_extra:dragonsteel_ingot',
    1
  );

  combining(
    event,
    1,
    'minecraft:ender_pearl',
    1,
    'enderio:energetic_alloy_ingot',
    'enderio:vibrant_alloy_ingot',
    1
  );
  combining(
    event,
    1,
    'minecraft:ender_pearl',
    1,
    'minecraft:iron_ingot',
    'enderio:pulsating_alloy_ingot',
    1
  );
  combining(
    event,
    1,
    'thermal:silver_ingot',
    1,
    'minecraft:gold_ingot',
    'thermal:electrum_ingot',
    1
  );

  combining(
    event,
    1,
    'nuclearcraft:chromium_ingot',
    1,
    'thermal:steel_ingot',
    'nuclearcraft:stainless_steel_ingot',
    1
  );

  combining(
    event,
    1,
    'thermal:steel_ingot',
    1,
    'nuclearcraft:boron_ingot',
    'nuclearcraft:ferroboron_ingot',
    1
  );
  combining(
    event,
    1,
    'thermal:steel_block',
    1,
    'nuclearcraft:boron_block',
    'kubejs:ferroboron_block',
    1
  );

  combining(
    event,
    1,
    'nuclearcraft:lithium_ingot',
    1,
    'nuclearcraft:ferroboron_ingot',
    'nuclearcraft:tough_alloy_ingot',
    1
  );
  combining(
    event,
    1,
    'kubejs:ferroboron_block',
    1,
    'nuclearcraft:lithium_block',
    'kubejs:tough_alloy_block',
    1
  );

  combining(
    event,
    1,
    'minecraft:diamond',
    1,
    'nuclearcraft:graphite_ingot',
    'nuclearcraft:hard_carbon_ingot',
    1
  );
  combining(
    event,
    1,
    'minecraft:diamond_block',
    1,
    'nuclearcraft:graphite_block',
    'kubejs:hard_carbon_block',
    1
  );

  combining(
    event,
    1,
    'nuclearcraft:tough_alloy_ingot',
    1,
    'nuclearcraft:hard_carbon_ingot',
    'nuclearcraft:extreme_ingot',
    1
  );
  combining(
    event,
    1,
    'kubejs:tough_alloy_block',
    1,
    'kubejs:hard_carbon_block',
    'kubejs:extreme_block',
    1
  );
  combining(
    event,
    1,
    'nuclearcraft:boron_ingot',
    1,
    'thermal:steel_ingot',
    'nuclearcraft:ferroboron_dust',
    1
  );
});

ServerEvents.recipes((event) => {
  function infuse (
    event,
    chemicalInput,
    chemicalAmount,
    input,
    input_amount,
    output,
    output_count
  ) {
    event
      .custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
          amount: chemicalAmount,
          tag: chemicalInput,
        },
        itemInput: {
          amount: input_amount,
          ingredient: {
            item: input,
          },
        },
        output: {
          item: output,
          count: output_count,
        },
      })
      .id('mek_' + output.replace(/[:]/g, '_').toLowerCase());
  }

  function nucleosynthesizing (event, gasAmount, duration, input, output) {
    event
      .custom({
        type: 'mekanism:nucleosynthesizing',
        duration: duration,
        gasInput: {
          amount: gasAmount,
          gas: 'mekanism:antimatter',
        },
        itemInput: {
          ingredient: {
            item: input,
          },
        },
        output: {
          item: output,
        },
      })
      .id('mek_' + output.replace(/[:]/g, '_').toLowerCase());
  }

  infuse(
    event,
    'mekanism:redstone',
    90,
    'minecraft:iron_block',
    1,
    'evolvedmekanism:block_alloy_infused',
    1
  );
  infuse(
    event,
    'mekanism:diamond',
    180,
    'evolvedmekanism:block_alloy_infused',
    1,
    'evolvedmekanism:block_alloy_reinforced',
    1
  );
  infuse(
    event,
    'mekanism:refined_obsidian',
    360,
    'evolvedmekanism:block_alloy_reinforced',
    1,
    'evolvedmekanism:block_alloy_atomic',
    1
  );
  nucleosynthesizing(
    event,
    450,
    1000,
    'evolvedmekanism:block_alloy_hypercharged',
    'evolvedmekanism:block_alloy_subatomic'
  );
  infuse(
    event,
    'evolvedmekanism:uranium',
    180,
    'evolvedmekanism:block_alloy_atomic',
    1,
    'evolvedmekanism:block_alloy_hypercharged',
    1
  );
  infuse(
    event,
    'evolvedmekanism:better_gold',
    180,
    'evolvedmekanism:block_alloy_subatomic',
    1,
    'evolvedmekanism:block_alloy_singular',
    1
  );
  infuse(
    event,
    'evolvedmekanism:plaslitherite',
    180,
    'evolvedmekanism:block_alloy_singular',
    1,
    'evolvedmekanism:block_alloy_exoversal',
    1
  );
  infuse(
    event,
    'mekanism_extras:radiance',
    360,
    'evolvedmekanism:block_alloy_atomic',
    1,
    'kubejs:radiance_alloy_block',
    1
  );
  infuse(
    event,
    'mekanism_extras:thermonuclear',
    1080,
    'kubejs:radiance_alloy_block',
    1,
    'kubejs:thermonuclear_alloy_block',
    1
  );
  infuse(
    event,
    'mekanism_extras:shining',
    1440,
    'kubejs:thermonuclear_alloy_block',
    1,
    'kubejs:shining_alloy_block',
    1
  );
  infuse(
    event,
    'mekanism_extras:spectrum',
    1800,
    'kubejs:shining_alloy_block',
    1,
    'kubejs:spectrum_alloy_block',
    1
  );

  function infusion_conversion (
    event,
    item_input,
    amount_output,
    infusion_type_output
  ) {
    event
      .custom({
        type: 'mekanism:infusion_conversion',
        input: {
          ingredient: {
            item: item_input,
          },
        },
        output: {
          amount: amount_output,
          infuse_type: infusion_type_output,
        },
      })
      .id(
        'mek_' +
          infusion_type_output.replace(/[:]/g, '_').toLowerCase() +
          '_from_' +
          item_input.replace(/[:]/g, '_').toLowerCase()
      );
  }

  const mekanismEnrichedMaterialsToCompress = [
    { id: 'redstone', mod: 'mekanism', normal_amount: 80 },
    { id: 'carbon', mod: 'mekanism', normal_amount: 80 },
    { id: 'diamond', mod: 'mekanism', normal_amount: 80 },
    { id: 'refined_obsidian', mod: 'mekanism', normal_amount: 80 },
    { id: 'uranium', mod: 'evolvedmekanism', normal_amount: 80 },
    { id: 'better_gold', mod: 'evolvedmekanism', normal_amount: 80 },
    { id: 'plaslitherite', mod: 'evolvedmekanism', normal_amount: 80 },
    { id: 'radiance', mod: 'mekanism_extras', normal_amount: 80 },
    { id: 'thermonuclear', mod: 'mekanism_extras', normal_amount: 40 },
    { id: 'shining', mod: 'mekanism_extras', normal_amount: 40 },
    { id: 'spectrum', mod: 'mekanism_extras', normal_amount: 50 },
  ];

  mekanismEnrichedMaterialsToCompress.forEach((material) => {
    infusion_conversion(
      event,
      'kubejs:compressed_enriched_' + material.id,
      material.normal_amount * 9,
      material.mod + ':' + material.id
    );

    infusion_conversion(
      event,
      'kubejs:double_compressed_enriched_' + material.id,
      material.normal_amount * 9 * 9,
      material.mod + ':' + material.id
    );
  });

  function enriching (event, item_input, item_output, inputAmount, outputCount) {
    event
      .custom({
        type: 'mekanism:enriching',
        input: {
          amount: inputAmount ? inputAmount : 1,
          ingredient: {
            item: item_input,
          },
        },
        output: {
          item: item_output,
          count: outputCount ? outputCount : 1,
        },
      })
      .id('enriching_' + item_output.replace(/[:]/g, '_').toLowerCase());
  }

  enriching(
    event,
    'minecraft:redstone_block',
    'kubejs:compressed_enriched_redstone'
  );
  enriching(
    event,
    'compressium:redstone_1',
    'kubejs:double_compressed_enriched_redstone'
  );
  enriching(event, 'minecraft:coal_block', 'kubejs:compressed_enriched_carbon');
  enriching(
    event,
    'compressium:coal_1',
    'kubejs:double_compressed_enriched_carbon'
  );
  enriching(
    event,
    'minecraft:diamond_block',
    'kubejs:compressed_enriched_diamond'
  );
  enriching(
    event,
    'compressium:diamond_1',
    'kubejs:double_compressed_enriched_diamond'
  );
  enriching(
    event,
    'mekanism:block_uranium',
    'kubejs:compressed_yellow_cake_uranium',
    1,
    2
  );

  nucleosynthesizing(
    event,
    9,
    2000,
    'kubejs:compressed_enriched_thermonuclear',
    'kubejs:compressed_enriched_shining'
  );

  nucleosynthesizing(
    event,
    81,
    2000,
    'kubejs:double_compressed_enriched_thermonuclear',
    'kubejs:double_compressed_enriched_shining'
  );

  function compressing (event, gas_amount, gas_input, item_input, item_output) {
    event
      .custom({
        type: 'mekanism:compressing',
        chemicalInput: {
          amount: gas_amount / 200,
          gas: gas_input,
        },
        itemInput: {
          ingredient: {
            item: item_input,
          },
        },
        output: {
          item: item_output,
        },
      })
      .id('compressing_' + item_output.replace(/[:]/g, '_').toLowerCase());
  }

  compressing(
    event,
    1800,
    'mekanism:antimatter',
    'kubejs:compressed_enriched_shining',
    'kubejs:compressed_enriched_spectrum'
  );
  compressing(
    event,
    16200,
    'mekanism:antimatter',
    'kubejs:double_compressed_enriched_shining',
    'kubejs:double_compressed_enriched_spectrum'
  );

  create3x3(event, 'mekanism:creative_energy_cube', [
    'evolvedmekanism:alloy_creative',
    'evolvedmekanism:creative_control_circuit',
    'evolvedmekanism:alloy_creative',
    'mekanism_extras:infinite_energy_cube',
    'minecraft:nether_star',
    'mekanism_extras:infinite_energy_cube',
    'evolvedmekanism:alloy_creative',
    'evolvedmekanism:creative_control_circuit',
    'evolvedmekanism:alloy_creative',
  ]);

  create3x3(event, 'mekanism:chargepad', [
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'minecraft:polished_blackstone_pressure_plate',
    'thermal:steel_ingot',
    'mekanism:energy_tablet',
    'thermal:steel_ingot',
  ]);

  function oxidizing (event, item_input, gas_output_amount, gas_output) {
    event
      .custom({
        type: 'mekanism:oxidizing',
        input: {
          ingredient: {
            item: item_input,
          },
        },
        output: {
          amount: gas_output_amount,
          gas: gas_output,
        },
      })
      .id(
        'oxi_' +
          gas_output_amount +
          '_' +
          gas_output.replace(/[:]/g, '_').toLowerCase()
      );
  }

  oxidizing(event, 'mekanism:ingot_osmium', 200, 'mekanism:osmium');
  oxidizing(event, 'mekanism:block_osmium', 1800, 'mekanism:osmium');
  oxidizing(event, 'mekanism_extras:enriched_osmium', 1600, 'mekanism:osmium');
  oxidizing(
    event,
    'kubejs:compressed_yellow_cake_uranium',
    2250,
    'mekanism:uranium_oxide'
  );
});
