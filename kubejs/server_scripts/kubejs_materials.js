ServerEvents.recipes((event) => {
  shapeless(event, Item.of('guideme:guide', '{guideId:"kubejs:guide"}'), [
    'minecraft:book',
    'minecraft:oak_log',
    'minecraft:stone',
  ]);

  event.blasting('kubejs:azure_silver_ingot', ['kubejs:azure_silver_ore']);

  event.smelting('kubejs:compressed_glass', 'compressium:sand_1');

  event.smelting('compressium:stone_1', 'compressium:cobblestone_1');

  shapeless(event, 'kubejs:infinity_8_block', ['kubejs:infinity_8']);
  shapeless(event, 'kubejs:infinity_8', ['kubejs:infinity_8_block']);

  shapeless(event, 'kubejs:infinity_6_block', ['9x kubejs:infinity_6']);
  shapeless(event, '9x kubejs:infinity_6', ['kubejs:infinity_6_block']);

  shapeless(event, 'kubejs:compressed_yellow_cake_uranium', [
    '9x mekanism:yellow_cake_uranium',
  ]);
  shapeless(event, '9x mekanism:yellow_cake_uranium', [
    'kubejs:compressed_yellow_cake_uranium',
  ]);

  shapeless(event, 'kubejs:infinity_2', [
    'kubejs:infinity_1_333333',
    'kubejs:infinity_1_666666',
    'kubejs:infinity_1_999999',
  ]);

  shapeless(event, 'kubejs:infinity_10_block', ['kubejs:infinity_10']);

  shapeless(event, 'kubejs:chaos_guardian_prediction', [
    Item.of(
      'hostilenetworks:prediction',
      '{data_model:{id:"hostilenetworks:draconicevolution/draconic_guardian"}}'
    ).weakNBT(),
  ]);

  shapeless(event, 'kubejs:infinity_essence', [
    'avaritia:neutron_pile',
    'avaritia:neutron_nugget',
    'kubejs:tier1_super_essence',
    'kubejs:tier2_super_essence',
    'kubejs:tier3_super_essence',
    'kubejs:tier4_super_essence',
    'kubejs:tier5_super_essence',
    'kubejs:tier6_super_essence',
    'mysticalagradditions:creative_essence',
  ]);

  create3x3(event, 'kubejs:soul_gem', [
    'minecraft:air',
    '#silentgems:gems',
    'minecraft:air',
    'thermal:silver_ingot',
    'minecraft:diamond',
    'thermal:silver_ingot',
    'minecraft:air',
    'minecraft:chorus_fruit',
    'minecraft:air',
  ]);

  //Ultimate Infinty Essence Crafts
  create3x3(event, 'kubejs:ultimate_gem', [
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
  ]);
  create3x3(event, 'kubejs:ultimate_prediction', [
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
  ]);
  create3x3(event, 'kubejs:infinity_essence', [
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
  ]);
  create3x3(event, 'kubejs:ultimate_heart', [
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
  ]);
  create3x3(event, 'avaritia:neutron', [
    'minecraft:air',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
  ]);
  create3x3(event, 'evolvedmekanism:creative_control_circuit', [
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
  ]);
  create3x3(event, 'botanicalextramachinery:crimson_dragonstone_block', [
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'minecraft:air',
  ]);
  create3x3(event, 'extendedcrafting:the_ultimate_block', [
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'minecraft:air',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
    'mysticalagriculture:ultimate_infinity_essence',
  ]);
  create3x3same(event, 'extendedcrafting:ultimate_singularity', [
    'mysticalagriculture:ultimate_infinity_essence',
  ]);

  shapeless(event, 'kubejs:infinity_1', [
    'botania:terrasteel_ingot',
    'extendedcrafting:black_iron_ingot',
    'nuclearcraft:neutronium_ingot',
    'draconicevolution:awakened_core',
    'enderio:end_steel_ingot',
    'mysticalagriculture:awakened_supremium_ingot',
    'justdirethings:eclipsealloy_ingot',
    'cataclysm:ignitium_ingot',
    'pneumaticcraft:plastic',
  ]);

  shapeless(
    event,
    'compactmekanismmachines:compressed_wind_generator_x532480',
    [
      'compactmekanismmachines:compressed_wind_generator_x131072',
      'compactmekanismmachines:compressed_wind_generator_x131072',
      'kubejs:infinity_10',
    ]
  );

  create3x3(event, 'kubejs:chaotic_essence', [
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:large_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
    'draconicevolution:medium_chaos_frag',
  ]);

  create3x3same(event, 'kubejs:sculk_alloy_block', [
    'kubejs:sculk_alloy_ingot',
  ]);

  shapeless(event, '9x kubejs:sculk_alloy_ingot', ['kubejs:sculk_alloy_block']);

  event.smelting('kubejs:starmetal_ingot', 'kubejs:starmetal_dust');

  create2x2same(event, 'kubejs:starmetal_block', ['kubejs:starmetal_ingot']);

  create2x2same(event, 'kubejs:chaotic_essence_block', [
    'kubejs:chaotic_essence',
  ]);

  create3x3(event, 'advanced_ae:flight_card', [
    'advanced_ae:quantum_alloy_plate',
    Item.of('minecraft:elytra', '{Damage:0}'),
    'advanced_ae:quantum_alloy_plate',
    'minecraft:feather',
    'advanced_ae:quantum_upgrade_base',
    'minecraft:feather',
    'advanced_ae:quantum_alloy_plate',
    'kubejs:infinity_4',
    'advanced_ae:quantum_alloy_plate',
  ]);

  event.smelting('kubejs:arcmetal_ingot', 'kubejs:raw_arcmetal');

  event.smelting('kubejs:arcmetal_ingot', 'kubejs:arcmetal_ore');

  create3x3same(event, 'kubejs:arcmetal_block', ['kubejs:arcmetal_ingot']);

  shapeless(event, '9x kubejs:arcmetal_ingot', ['kubejs:arcmetal_block']);

  event.smelting('kubejs:voidmetal_ingot', 'kubejs:raw_voidmetal');

  event.smelting('kubejs:voidmetal_ingot', 'kubejs:voidmetal_ore');

  create3x3same(event, 'kubejs:voidmetal_block', ['kubejs:voidmetal_ingot']);

  shapeless(event, '9x kubejs:voidmetal_ingot', ['kubejs:voidmetal_block']);

  create3x3same(event, 'kubejs:dust_2', ['9x exdeorum:compressed_dust']);
  shapeless(event, '9x exdeorum:compressed_dust', ['kubejs:dust_2']);
  create3x3same(event, 'kubejs:dust_3', ['9x kubejs:dust_2']);
  shapeless(event, '9x kubejs:dust_2', ['kubejs:dust_3']);
  create3x3same(event, 'kubejs:dust_4', ['9x kubejs:dust_3']);
  shapeless(event, '9x kubejs:dust_3', ['kubejs:dust_4']);
  create3x3same(event, 'kubejs:dust_5', ['9x kubejs:dust_4']);
  shapeless(event, '9x kubejs:dust_4', ['kubejs:dust_5']);
  create3x3same(event, 'kubejs:dust_6', ['9x kubejs:dust_5']);
  shapeless(event, '9x kubejs:dust_5', ['kubejs:dust_6']);

  create3x3same(event, 'kubejs:blackstone_2', [
    '9x exdeorum:compressed_blackstone',
  ]);
  shapeless(event, '9x exdeorum:compressed_blackstone', [
    'kubejs:blackstone_2',
  ]);
  create3x3same(event, 'kubejs:blackstone_3', ['9x kubejs:blackstone_2']);
  shapeless(event, '9x kubejs:blackstone_2', ['kubejs:blackstone_3']);
  create3x3same(event, 'kubejs:blackstone_4', ['9x kubejs:blackstone_3']);
  shapeless(event, '9x kubejs:blackstone_3', ['kubejs:blackstone_4']);
  create3x3same(event, 'kubejs:blackstone_5', ['9x kubejs:blackstone_4']);
  shapeless(event, '9x kubejs:blackstone_4', ['kubejs:blackstone_5']);
  create3x3same(event, 'kubejs:blackstone_6', ['9x kubejs:blackstone_5']);
  shapeless(event, '9x kubejs:blackstone_5', ['kubejs:blackstone_6']);

  create3x3same(event, 'kubejs:compressed_hellforgedparts', [
    'bloodmagic:hellforgedparts',
  ]);

  shapeless(event, '9x bloodmagic:hellforgedparts', [
    'kubejs:compressed_hellforgedparts',
  ]);

  shapeless(event, 'kubejs:element_ingot', [
    'kubejs:fire_ingot',
    'kubejs:air_ingot',
    'kubejs:water_ingot',
    'kubejs:earth_ingot',
  ]);

  create3x3same(event, 'kubejs:compressed_warden_tendril', [
    'apotheosis:warden_tendril',
  ]);

  shapeless(event, '9x apotheosis:warden_tendril', [
    'kubejs:compressed_warden_tendril',
  ]);

  create3x3(event, 'kubejs:bunny_steel_ingot', [
    'minecraft:air',
    'minecraft:rabbit_hide',
    'minecraft:air',
    'minecraft:rabbit_foot',
    '#forge:ingots/steel',
    'minecraft:rabbit_hide',
    'minecraft:air',
    'minecraft:rabbit_hide',
    'minecraft:air',
  ]);

  create3x3(event, Item.of('kubejs:tyrian_steel_ingot', 4), [
    'thermal_extra:twinite_dust',
    'thermal_extra:dragonsteel_dust',
    'thermal_extra:abyssal_dust',
    'kubejs:azure_electrum_ingot',
    'minecraft:netherite_scrap',
    'kubejs:crimson_steel_ingot',
    'kubejs:azure_electrum_ingot',
    'waystones:warp_dust',
    'kubejs:crimson_steel_ingot',
  ]);

  create3x3(event, Item.of('kubejs:crimson_steel_ingot', 2), [
    'minecraft:blaze_rod',
    'minecraft:air',
    'minecraft:blaze_rod',
    'kubejs:crimson_iron_ingot',
    'minecraft:magma_cream',
    'kubejs:crimson_iron_ingot',
    'kubejs:crimson_iron_ingot',
    'minecraft:air',
    'kubejs:crimson_iron_ingot',
  ]);

  event.smelting('kubejs:crimson_steel_ingot', 'kubejs:crimson_steel_dust');

  event.smelting('kubejs:crimson_iron_ingot', 'kubejs:crimson_iron_dust');

  create3x3(event, 'kubejs:midnight_iron_ingot', [
    'minecraft:air',
    'minecraft:blackstone',
    'minecraft:air',
    'minecraft:blackstone',
    'minecraft:iron_ingot',
    'minecraft:blackstone',
    'minecraft:air',
    'minecraft:blackstone',
    'minecraft:air',
  ]);

  create3x3same(event, 'kubejs:midnight_iron_block', [
    'kubejs:midnight_iron_ingot',
  ]);

  shapeless(event, '9x kubejs:midnight_iron_ingot', [
    'kubejs:midnight_iron_block',
  ]);

  create3x3same(event, 'kubejs:bunny_steel_block', [
    'kubejs:bunny_steel_ingot',
  ]);

  shapeless(event, '9x kubejs:bunny_steel_ingot', ['kubejs:bunny_steel_block']);

  event.smelting('kubejs:solarmetal_ingot', 'kubejs:raw_solarmetal');

  event.smelting('kubejs:solarmetal_ingot', 'kubejs:solarmetal_ore');

  create3x3same(event, 'kubejs:solarmetal_block', ['kubejs:solarmetal_ingot']);

  shapeless(event, '9x kubejs:solarmetal_ingot', ['kubejs:solarmetal_block']);

  event.smelting('kubejs:plasteel_ingot', 'kubejs:raw_plasteel');

  event.smelting('kubejs:plasteel_ingot', 'kubejs:plasteel_ore');

  create3x3same(event, 'kubejs:plasteel_block', ['kubejs:plasteel_ingot']);

  shapeless(event, '9x kubejs:plasteel_ingot', ['kubejs:plasteel_block']);

  shapeless(event, 'kubejs:blaze_gold_ingot', [
    'minecraft:gold_ingot',
    '4x minecraft:blaze_powder',
  ]);

  create3x3same(event, 'kubejs:blaze_gold_block', ['kubejs:blaze_gold_ingot']);

  shapeless(event, '9x kubejs:blaze_gold_ingot', ['kubejs:blaze_gold_block']);

  event.smelting('kubejs:azure_silver_ingot', 'kubejs:azure_silver_ore');

  create3x3same(event, 'kubejs:azure_silver_block', [
    'kubejs:azure_silver_ingot',
  ]);

  shapeless(event, '9x kubejs:azure_silver_ingot', [
    'kubejs:azure_silver_block',
  ]);

  event.smelting('kubejs:azure_electrum_ingot', 'kubejs:azure_electrum_dust');

  create3x3same(event, 'kubejs:azure_electrum_block', [
    'kubejs:azure_electrum_ingot',
  ]);

  create3x3(event, 'kubejs:azure_electrum_ingot', [
    'minecraft:gold_ingot',
    'minecraft:air',
    'minecraft:gold_ingot',
    'kubejs:azure_silver_ingot',
    'minecraft:ender_pearl',
    'kubejs:azure_silver_ingot',
    'kubejs:azure_silver_ingot',
    'minecraft:air',
    'kubejs:azure_silver_ingot',
  ]);

  create3x3same(event, 'kubejs:double_compressed_iron_block', [
    'pneumaticcraft:compressed_iron_block',
  ]);

  create3x3same(event, 'kubejs:triple_compressed_iron_block', [
    'kubejs:double_compressed_iron_block',
  ]);

  shapeless(event, '9x pneumaticcraft:compressed_iron_block', [
    'kubejs:double_compressed_iron_block',
  ]);

  shapeless(event, '9x kubejs:double_compressed_iron_block', [
    'kubejs:triple_compressed_iron_block',
  ]);

  create3x3same(event, 'kubejs:double_compressed_slate', [
    'kubejs:compressed_slate',
  ]);

  create3x3same(event, 'kubejs:pink_slime_block', [
    'industrialforegoing:pink_slime_ingot',
  ]);

  shapeless(event, '9x industrialforegoing:pink_slime_ingot', [
    'kubejs:pink_slime_block',
  ]);

  shapeless(event, '9x kubejs:compressed_slate', [
    'kubejs:double_compressed_slate',
  ]);

  create3x3same(event, 'kubejs:compressed_slate', ['bloodmagic:blankslate']);

  shapeless(event, '9x bloodmagic:blankslate', ['kubejs:compressed_slate']);

  shapeless(event, '9x kubejs:azure_electrum_ingot', [
    'kubejs:azure_electrum_block',
  ]);

  create3x3(event, Item.of('extendedcrafting:black_iron_ingot', 48), [
    'kubejs:compressed_slate',
    'mekanism:hdpe_sheet',
    'kubejs:compressed_slate',
    'mekanism:hdpe_sheet',
    'draconicevolution:wyvern_core',
    'mekanism:hdpe_sheet',
    'kubejs:compressed_slate',
    'mekanism:hdpe_sheet',
    'kubejs:compressed_slate',
  ]);

  shapeless(event, 'draconicevolution:dragon_heart', [
    'kubejs:left_dragon_heart',
    'kubejs:right_dragon_heart',
  ]);

  shapeless(event, '9x kubejs:infused_coin', ['kubejs:ascended_coin']);

  shapeless(event, '9x kubejs:apotheotic_coin', ['kubejs:infused_coin']);

  create3x3same(event, 'kubejs:ascended_coin', ['kubejs:infused_coin']);

  create3x3same(event, 'kubejs:infused_coin', ['kubejs:apotheotic_coin']);

  create3x3same(event, 'kubejs:compressed_block_of_gunpowder', [
    'thermal:gunpowder_block',
  ]);

  shapeless(event, '9x thermal:gunpowder_block', [
    'kubejs:compressed_block_of_gunpowder',
  ]);

  shapeless(event, 'kubejs:azure_silver_ore', [
    '4x kubejs:azure_silver_ore_chunk',
  ]);
  shapeless(event, 'kubejs:auto_mechanical_sieve', [
    'exdeorum:mechanical_sieve',
  ]);
  shapeless(event, 'exdeorum:mechanical_sieve', [
    'kubejs:auto_mechanical_sieve',
  ]);

  shapeless(event, 'kubejs:full_nbt_remover', ['minecraft:slime_ball']);
  shapeless(event, 'kubejs:tank_nbt_remover', ['kubejs:full_nbt_remover']);
  shapeless(event, 'minecraft:slime_ball', ['kubejs:tank_nbt_remover']);

  shapeless(event, 'kubejs:nuclearcraft_copy_paste_tool', [
    'minecraft:stick',
    'nuclearcraft:plate_basic',
  ]);

  const mekanismEnrichedMaterialsToCompress = [
    { id: 'redstone', mod: 'mekanism' },
    { id: 'carbon', mod: 'mekanism' },
    { id: 'diamond', mod: 'mekanism' },
    { id: 'refined_obsidian', mod: 'mekanism' },
    { id: 'uranium', mod: 'evolvedmekanism' },
    { id: 'better_gold', mod: 'evolvedmekanism' },
    { id: 'plaslitherite', mod: 'evolvedmekanism' },
    { id: 'radiance', mod: 'mekanism_extras' },
    { id: 'thermonuclear', mod: 'mekanism_extras' },
    { id: 'shining', mod: 'mekanism_extras' },
    { id: 'spectrum', mod: 'mekanism_extras' },
  ];

  mekanismEnrichedMaterialsToCompress.forEach((material) => {
    create3x3same(event, 'kubejs:compressed_enriched_' + material.id, [
      material.mod + ':enriched_' + material.id,
    ]);
    shapeless(event, '9x ' + material.mod + ':enriched_' + material.id, [
      'kubejs:compressed_enriched_' + material.id,
    ]);

    create3x3same(event, 'kubejs:double_compressed_enriched_' + material.id, [
      'kubejs:compressed_enriched_' + material.id,
    ]);
    shapeless(event, '9x kubejs:compressed_enriched_' + material.id, [
      'kubejs:double_compressed_enriched_' + material.id,
    ]);
  });

  shapeless(
    event,
    'bmaddon:blood_altar_tier_card_2',
    'kubejs:blood_altar_tier_card_2_block'
  );
  shapeless(
    event,
    'kubejs:blood_altar_tier_card_2_block',
    'bmaddon:blood_altar_tier_card_2'
  );
  shapeless(
    event,
    'bmaddon:blood_altar_tier_card_3',
    'kubejs:blood_altar_tier_card_3_block'
  );
  shapeless(
    event,
    'kubejs:blood_altar_tier_card_3_block',
    'bmaddon:blood_altar_tier_card_3'
  );
  shapeless(
    event,
    'bmaddon:blood_altar_tier_card_4',
    'kubejs:blood_altar_tier_card_4_block'
  );
  shapeless(
    event,
    'kubejs:blood_altar_tier_card_4_block',
    'bmaddon:blood_altar_tier_card_4'
  );
  shapeless(
    event,
    'bmaddon:blood_altar_tier_card_5',
    'kubejs:blood_altar_tier_card_5_block'
  );
  shapeless(
    event,
    'kubejs:blood_altar_tier_card_5_block',
    'bmaddon:blood_altar_tier_card_5'
  );
});
