StartupEvents.registry('item', (e) => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  e.create('zahraanite').maxStackSize(64).texture('kubejs:item/zahraanite');

  e.create('ultimate_gem')
    .tag('balm:gems')
    .tag('forge:gems')
    .displayName('§dUltimate Gem')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_gem')
    .glow(true);

  e.create('ultimate_prediction')
    .tag('kubejs:ultimate_prediction')
    .displayName('§dUltimate Prediction')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_prediction');

  e.create('ultimate_vanilla_prediction')
    .tag('kubejs:ultimate_vanilla_prediction')
    .displayName('§dUltimate Vanilla Prediction')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_vanilla_prediction');

  e.create('ultimate_boss_prediction')
    .tag('kubejs:ultimate_boss_prediction')
    .displayName('§dUltimate Boss Prediction')
    .maxStackSize(64)
    .texture('kubejs:item/wip');

  e.create('ultimate_misc_prediction')
    .tag('kubejs:ultimate_misc_prediction')
    .displayName('§dUltimate Misc Prediction')
    .maxStackSize(64)
    .texture('kubejs:item/wip');

  e.create('allthemodium_mesh')
    .tag('exdeorum:sieve_meshes')
    .displayName('§6Allthemodium Mesh')
    .maxStackSize(64)
    .texture('kubejs:item/allthemodium_mesh')
    .glow(true);

  e.create('vibranium_mesh')
    .tag('exdeorum:sieve_meshes')
    .displayName('§aVibranium Mesh')
    .maxStackSize(64)
    .texture('kubejs:item/vibranium_mesh')
    .glow(true);

  e.create('wither_token')
    .displayName('§7Wither Token')
    .maxStackSize(64)
    .texture('kubejs:item/wither_token');

  e.create('left_dragon_heart')
    .tag('kubejs:left_dragon_heart')
    .tag('kubejs:dragon_heart')
    .displayName('§aLeft Dragon Heart')
    .maxStackSize(64)
    .texture('kubejs:item/left_dragon_heart')
    .glow(true);

  e.create('right_dragon_heart')
    .tag('kubejs:right_dragon_heart')
    .tag('kubejs:dragon_heart')
    .displayName('§aRight Dragon Heart')
    .maxStackSize(64)
    .texture('kubejs:item/right_dragon_heart')
    .glow(true);

  e.create('ultimate_heart')
    .tag('kubejs:ultimate_heart')
    .displayName('§dUltimate Heart')
    .maxStackSize(64)
    .texture('kubejs:item/ultimate_heart');

  e.create('wither_heart')
    .tag('kubejs:wither_heart')
    .displayName('§7Wither Heart')
    .maxStackSize(64)
    .texture('kubejs:item/wither_heart');

  e.create('warden_heart')
    .tag('kubejs:warden_heart')
    .displayName('§1Warden Heart')
    .maxStackSize(64)
    .texture('kubejs:item/warden_heart');

  e.create('creeper_heart')
    .tag('kubejs:creeper_heart')
    .displayName('§2Creeper Heart')
    .maxStackSize(64)
    .texture('kubejs:item/creeper_heart');

  e.create('blaze_heart')
    .tag('kubejs:blaze_heart')
    .displayName('§6Blaze Heart')
    .maxStackSize(64)
    .texture('kubejs:item/blaze_heart');

  e.create('compressed_warden_tendril')
    .tag('kubejs:compressed_warden_tendril')
    .displayName('Compressed Warden Tendril')
    .maxStackSize(64)
    .texture('kubejs:item/compressed_warden_tendril');

  //#region infinity 1-12 items
  e.create('infinity_1')
    .tag('forge:ingots/infinity_1')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1');
  e.create('infinity_1_333333')
    .displayName('Infinity 1.333333')
    .tag('forge:ingots/infinity_1_333333')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1_333333');
  e.create('infinity_1_666666')
    .displayName('Infinity 1.666666')
    .tag('forge:ingots/infinity_1_666666')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1_666666');
  e.create('infinity_1_999999')
    .displayName('Infinity 1.999999')
    .tag('forge:ingots/infinity_1_999999')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_1_999999');
  e.create('infinity_2')
    .tag('forge:ingots/infinity_2')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_2');
  e.create('infinity_3')
    .tag('forge:ingots/infinity_3')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_3');
  e.create('infinity_4')
    .tag('forge:ingots/infinity_4')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_4');
  e.create('infinity_5')
    .tag('forge:ingots/infinity_5')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_5');
  e.create('infinity_6')
    .tag('forge:ingots/infinity_6')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_6');
  e.create('infinity_7')
    .tag('forge:ingots/infinity_7')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_7');
  e.create('infinity_8')
    .tag('forge:ingots/infinity_8')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_8');
  e.create('infinity_9')
    .tag('forge:ingots/infinity_9')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_9');
  e.create('infinity_10')
    .tag('forge:ingots/infinity_10')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_10');
  e.create('infinity_11')
    .tag('forge:ingots/infinity_11')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_11');
  e.create('infinity_12')
    .tag('forge:ingots/infinity_12')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .texture('kubejs:item/infinityingot/infinity_12');

  //#region silent items
  function createingot (e, input) {
    e.create(input)
      .tag('forge:ingots/' + input)
      .tag('forge:ingots')
      .tag('balm:ingots')
      .texture('kubejs:item/silent/' + input);
  }

  createingot(e, 'arcmetal_ingot');
  createingot(e, 'solarmetal_ingot');
  createingot(e, 'voidmetal_ingot');
  createingot(e, 'plasteel_ingot');
  createingot(e, 'azure_electrum_ingot');
  createingot(e, 'azure_silver_ingot');
  createingot(e, 'blaze_gold_ingot');
  createingot(e, 'bunny_steel_ingot');
  createingot(e, 'midnight_iron_ingot');
  createingot(e, 'sculk_alloy_ingot');
  createingot(e, 'crimson_iron_ingot');
  createingot(e, 'crimson_steel_ingot');
  createingot(e, 'crystalline_alloy');
  createingot(e, 'tyrian_steel_ingot');

  function createdust (e, input) {
    e.create(input)
      .tag('forge:dusts/' + input)
      .tag('forge:dusts')
      .tag('c:dusts')
      .texture('kubejs:item/silent/' + input);
  }

  createdust(e, 'azure_electrum_dust');
  createdust(e, 'azure_silver_dust');
  createdust(e, 'blaze_gold_dust');
  createdust(e, 'crimson_iron_dust');
  createdust(e, 'crimson_steel_dust');
  createdust(e, 'tyrian_steel_dust');
  createdust(e, 'starmetal_dust');

  function createraw (e, input) {
    e.create(input)
      .tag('c:raw_materials/' + input)
      .tag('forge:raw_materials/' + input)
      .tag('forge:raw_materials')
      .texture('kubejs:item/silent/' + input);
  }

  createraw(e, 'raw_arcmetal');
  createraw(e, 'raw_solarmetal');
  createraw(e, 'raw_voidmetal');
  createraw(e, 'raw_plasteel');

  e.create('soul_gem')
    .texture('kubejs:item/silent/soul_gem');

  //#region starmetal ingot
  e.create('starmetal_ingot')
    .tag('forge:ingots/starmetal_ingot')
    .tag('forge:ingots')
    .tag('balm:ingots')
    .maxStackSize(64);

  //#region Element Ingots
  e.create('fire_ingot')
    .maxStackSize(64)
    .displayName('Fire Ingot')
    .tag('forge:ingots/fire_ingot')
    .tag('forge:ingots')
    .tag('balm:ingots');
  e.create('air_ingot')
    .maxStackSize(64)
    .displayName('Air Ingot')
    .tag('forge:ingots/air_ingot')
    .tag('forge:ingots')
    .tag('balm:ingots');
  e.create('water_ingot')
    .displayName('Water Ingot')
    .maxStackSize(64)
    .tag('forge:ingots/water_ingot')
    .tag('forge:ingots')
    .tag('balm:ingots');
  e.create('earth_ingot')
    .displayName('Earth Ingot')
    .maxStackSize(64)
    .tag('forge:ingots/earth_ingot')
    .tag('forge:ingots')
    .tag('balm:ingots');
  e.create('element_ingot')
    .displayName('Element Ingot')
    .maxStackSize(64)
    .tag('forge:ingots/element_ingot')
    .tag('forge:ingots')
    .tag('balm:ingots');

  //#region coins
  e.create('apotheotic_coin').tag('minecraft:beacon_payment_items');
  e.create('infused_coin').tag('minecraft:beacon_payment_items');
  e.create('ascended_coin').tag('minecraft:beacon_payment_items');

  e.create('azure_silver_ore_chunk').tag('exdeorum:ore_chunks');

  //tier 1-6 crafting seeds
  e.create('tier1_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier1_crafting_seed')
    .displayName('§aTier 1 Crafting Seed');
  e.create('tier2_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier2_crafting_seed')
    .displayName('§2Tier 2 Crafting Seed');
  e.create('tier3_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier3_crafting_seed')
    .displayName('§6Tier 3 Crafting Seed');
  e.create('tier4_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier4_crafting_seed')
    .displayName('§9Tier 4 Crafting Seed');
  e.create('tier5_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier5_crafting_seed')
    .displayName('§4Tier 5 Crafting Seed');
  e.create('tier6_crafting_seed')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier6_crafting_seed')
    .displayName('§5Tier 6 Crafting Seed');

  //tier 1-6 super essence and ultimate essence
  e.create('tier1_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier1_super_essence')
    .displayName('§aTier 1 Super Essence');
  e.create('tier2_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier2_super_essence')
    .displayName('§2Tier 2 Super Essence');
  e.create('tier3_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier3_super_essence')
    .displayName('§6Tier 3 Super Essence');
  e.create('tier4_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier4_super_essence')
    .displayName('§9Tier 4 Super Essence');
  e.create('tier5_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier5_super_essence')
    .displayName('§4Tier 5 Super Essence');
  e.create('tier6_super_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/tier6_super_essence')
    .displayName('§5Tier 6 Super Essence');
  e.create('infinity_essence')
    .maxStackSize(64)
    .texture('kubejs:item/mysticalagriculture/infinity_essence')
    .displayName('§dInfinity Essence');

  //#region Chaotic Essence
  e.create('chaotic_essence')
    .maxStackSize(64)
    .displayName('§5Chaotic Essence')
    .texture('kubejs:item/chaotic_essence')
    .glow(true)
    .tag('kubejs:chaotic_essence');

  //#region Chaos Guardian Prediction
  e.create('chaos_guardian_prediction')
    .maxStackSize(64)
    .displayName('§5Chaos Guardian Prediction')
    .texture('kubejs:item/chaos_guardian_prediction')
    .glow(true)
    .tag('kubejs:chaos_guardian_prediction');

  //#region Industrial Foregoing Addons
  function createAddon (e, input) {
    e.create(input)
      .texture('kubejs:item/industrial_forgegoing/' + input)
      .tag('industrialforegoing:addon')
      .displayName(
        input
          .replace(/_/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          ) + ' Dummy Item'
      );
  }
  createAddon(e, 'efficiency_addon_1');
  createAddon(e, 'efficiency_addon_2');
  createAddon(e, 'efficiency_addon_3');
  createAddon(e, 'efficiency_addon_4');
  createAddon(e, 'efficiency_addon_5');
  createAddon(e, 'processing_addon_1');
  createAddon(e, 'processing_addon_2');
  createAddon(e, 'processing_addon_3');
  createAddon(e, 'processing_addon_4');
  createAddon(e, 'processing_addon_5');
  createAddon(e, 'speed_addon_1');
  createAddon(e, 'speed_addon_2');
  createAddon(e, 'speed_addon_3');
  createAddon(e, 'speed_addon_4');
  createAddon(e, 'speed_addon_5');

  //#region Draconic Evolution
  function createDraconic (e, input) {
    e.create(input)
      .texture('kubejs:item/draconic/' + input)
      .displayName(
        input
          .replace(/_/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          ) + ' Dummy Item'
      );
  }
  createDraconic(e, 'creative_capacitor');
  createDraconic(e, 'chaotic_axe');
  createDraconic(e, 'chaotic_bow');
  createDraconic(e, 'chaotic_capacitor');
  createDraconic(e, 'chaotic_hoe');
  createDraconic(e, 'chaotic_pickaxe');
  createDraconic(e, 'chaotic_shovel');
  createDraconic(e, 'chaotic_staff');
  createDraconic(e, 'chaotic_sword');
  createDraconic(e, 'draconic_axe');
  createDraconic(e, 'draconic_bow');
  createDraconic(e, 'draconic_capacitor');
  createDraconic(e, 'draconic_hoe');
  createDraconic(e, 'draconic_pickaxe');
  createDraconic(e, 'draconic_shovel');
  createDraconic(e, 'draconic_staff');
  createDraconic(e, 'draconic_sword');
  createDraconic(e, 'wyvern_axe');
  createDraconic(e, 'wyvern_bow');
  createDraconic(e, 'wyvern_capacitor');
  createDraconic(e, 'wyvern_hoe');
  createDraconic(e, 'wyvern_pickaxe');
  createDraconic(e, 'wyvern_shovel');
  createDraconic(e, 'wyvern_sword');
  createDraconic(e, 'wyvern_chestpiece');
  createDraconic(e, 'draconic_chestpiece');
  createDraconic(e, 'chaotic_chestpiece');
  createDraconic(e, 'wyvern_necklace');
  createDraconic(e, 'draconic_necklace');
  createDraconic(e, 'chaotic_necklace');

  //#region Powah
  function createPowah (e, input) {
    e.create(input)
      .texture('kubejs:item/powah/' + input)
      .displayName(
        input
          .replace(/_/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          )
          .replace(/(\w+)$/, '($1)') + ' Dummy Item'
      );
  }
  createPowah(e, 'full_battery_nitro');
  createPowah(e, 'empty_battery_nitro');

  //#region EnderIO Items
  function createEnderIO (e, input) {
    e.create(input)
      .texture('kubejs:item/enderio/' + input)
      .displayName(
        input
          .replace(/_/g, ' ')
          .replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
          ) + ' Dummy Item'
      );
  }
  createEnderIO(e, 'filled_witch_soul_vial');
  createEnderIO(e, 'filled_enderman_soul_vial');
  createEnderIO(e, 'filled_shulker_soul_vial');
  createEnderIO(e, 'filled_zombie_soul_vial');
  createEnderIO(e, 'filled_villager_soul_vial');

  //#region Mekanism
  function createMekanismCompressed (e, item) {
    e.create('compressed_enriched_' + item)
      .displayName(
        'Compressed Enriched ' + item.charAt(0).toUpperCase() + item.slice(1)
      )
      .texture('kubejs:item/mekanism/compressed_enriched_' + item);

    e.create('double_compressed_enriched_' + item)
      .displayName(
        'Double Compressed Enriched ' +
          item.charAt(0).toUpperCase() +
          item.slice(1)
      )
      .texture('kubejs:item/mekanism/double_compressed_enriched_' + item);
  }

  const mekanismEnrichedMaterialsToCompress = [
    'redstone',
    'carbon',
    'diamond',
    'refined_obsidian',
    'uranium',
    'better_gold',
    'plaslitherite',
    'radiance',
    'thermonuclear',
    'shining',
    'spectrum',
  ];

  mekanismEnrichedMaterialsToCompress.forEach((material) => {
    createMekanismCompressed(e, material);
  });

  e.create('compressed_yellow_cake_uranium')
    .tag('kubejs:compressed_yellow_cake_uranium')
    .displayName('Compressed Yellow Cake Uranium')
    .maxStackSize(64)
    .texture('kubejs:item/mekanism/compressed_yellow_cake_uranium');

  //#region Misc
  e.create('full_nbt_remover')
    .displayName('Full NBT Remover')
    .texture('kubejs:item/full_nbt_remover');

  e.create('tank_nbt_remover')
    .displayName('Tank NBT Remover')
    .texture('kubejs:item/tank_nbt_remover');

  e.create('nuclearcraft_copy_paste_tool')
    .displayName('Nuclearcraft Copy Paste Tool')
    .texture('kubejs:item/nuclearcraft_copy_paste_tool');

  e.create('universal_wireless_terminal_uncrafter')
    .displayName('Universal Wireless Terminal Uncrafter')
    .texture('kubejs:item/universal_wireless_terminal_uncrafter');

  e.create('extra_data_model_uncrafter')
    .displayName('Extra Data Model Uncrafter')
    .texture('kubejs:item/extra_data_model_uncrafter');

  e.create('fluid_tank_token')
    .displayName('Fluid Tank Token')
    .texture('kubejs:item/fluid_tank_token');

  e.create('chemical_tank_token')
    .displayName('Chemical Tank Token')
    .texture('kubejs:item/chemical_tank_token');

  e.create('fake_transmutation_tablet')
    .displayName('Fake Transmutation Tablet')
    .texture('kubejs:item/fake_transmutation_tablet');
});
