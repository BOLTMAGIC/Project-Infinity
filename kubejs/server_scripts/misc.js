// misc.js is for if a mod has less then 2 recipe changes it it's add.js
ServerEvents.recipes((event) => {
  //#region actuallyadditions
  shapeless(event, 'actuallyadditions:ender_star', [
    'minecraft:nether_star',
    'minecraft:dragon_breath',
    'actuallyadditions:black_quartz',
    'minecraft:prismarine_shard',
  ]);

  create2x2same(event, 'actuallyadditions:black_quartz_brick_block', [
    'actuallyadditions:black_quartz_block',
  ]);

  //#region angelblockrenewed
  create3x3(event, 'angelblockrenewed:angel_block', [
    'minecraft:stick',
    'minecraft:feather',
    'minecraft:stick',
    'minecraft:feather',
    'minecraft:ender_eye',
    'minecraft:feather',
    'minecraft:stick',
    'minecraft:feather',
    'minecraft:stick',
  ]);

  //#region avaritia
  create3x3same(event, 'avaritia:blaze_cube', ['avaritia_expand:blaze_nugget']);

  //#region born_in_chaos_v1
  event.smelting(
    'born_in_chaos_v1:dark_metal_ingot',
    'born_in_chaos_v1:pileof_dark_metal'
  );

  //#region botanypotstiers
  shapeless(event, 'botanypotstiers:creative_terracotta_hopper_botany_pot', [
    'botanypotstiers:creative_terracotta_botany_pot',
    'minecraft:hopper',
  ]);

  //#region cataclysm
  create3x3same(event, 'cataclysm:enderite_block', [
    'cataclysm:enderite_ingot',
  ]);

  shapeless(event, '9x cataclysm:enderite_ingot', ['cataclysm:enderite_block']);

  //#region draconicevolution
  create3x3(event, 'draconicevolution:item_draconic_flight', [
    'kubejs:infinity_1',
    'draconicevolution:wyvern_core',
    'kubejs:infinity_2',
    'draconicevolution:wyvern_core',
    'draconicevolution:item_wyvern_flight',
    'draconicevolution:wyvern_core',
    'kubejs:infinity_3',
    'minecraft:firework_rocket',
    'kubejs:infinity_4',
  ]);

  create3x3(event, 'draconicevolution:grinder', [
    'draconicevolution:draconium_ingot',
    'kubejs:draconic_sword',
    'draconicevolution:draconium_ingot',
    'mythicbotany:alfsteel_sword',
    'draconicevolution:draconic_energy_core',
    'mysticalagriculture:awakened_supremium_sword',
    'draconicevolution:draconium_ingot',
    'minecraft:dragon_head',
    'draconicevolution:draconium_ingot',
  ]);

  //#region mysticalagriculture
  create3x3(event, 'mysticalagriculture:master_infusion_crystal', [
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    '#matc:supremium',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
    'kubejs:infinity_4',
    'mysticalagriculture:prosperity_shard',
  ]);

  //#region enchantinginfuser
  create3x3(event, 'enchantinginfuser:enchanting_infuser', [
    'allthemodium:unobtainium_allthemodium_alloy_ingot',
    'minecraft:book',
    'allthemodium:unobtainium_allthemodium_alloy_ingot',
    'minecraft:amethyst_shard',
    'minecraft:crying_obsidian',
    'minecraft:amethyst_shard',
    'minecraft:crying_obsidian',
    'minecraft:enchanting_table',
    'minecraft:crying_obsidian',
  ]);

  create3x3(event, 'enchantinginfuser:advanced_enchanting_infuser', [
    'allthemodium:unobtainium_gear',
    'minecraft:book',
    'allthemodium:unobtainium_gear',
    'minecraft:netherite_ingot',
    'minecraft:crying_obsidian',
    'minecraft:netherite_ingot',
    'minecraft:crying_obsidian',
    'enchantinginfuser:enchanting_infuser',
    'minecraft:crying_obsidian',
  ]);

  //#region ender_dragon_loot
  create3x3(event, Item.of('ender_dragon_loot:dragon_upgrade_template', 2), [
    'minecraft:netherite_ingot',
    'mysticalagradditions:dragon_scale',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
    'ender_dragon_loot:dragon_upgrade_template',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
  ]);

  //#region extendedcrafting
  shapeless(event, '9x extendedcrafting:crystaltine_ingot', [
    'extendedcrafting:crystaltine_block',
  ]);

  create3x3(event, 'extendedcrafting:redstone_ingot', [
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
    'minecraft:air',
  ]);

  //#region functionalstorage
  create3x3(event, 'functionalstorage:max_storage_upgrade', [
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'kubejs:infinity_1',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
    'functionalstorage:netherite_upgrade',
  ]);

  //#region gateways
  shapeless(
    event,
    Item.of('gateways:gate_pearl', '{gateway:"gateways:emerald_grove_easy"}'),
    [
      'minecraft:ender_pearl',
      '#minecraft:flowers',
      '#minecraft:flowers',
      '#minecraft:flowers',
    ]
  );

  //#region hostilenetworks
  create3x3(
    event,
    Item.of(
      'hostilenetworks:data_model',
      '{data_model:{data:6,id:"hostilenetworks:born_in_chaos/lord_pumpkinhead"}}'
    ),
    [
      'born_in_chaos_v1:bagof_candy',
      'born_in_chaos_v1:pumpkin_bullet',
      'born_in_chaos_v1:lord_pumpkinheads_hat_helmet',
      'born_in_chaos_v1:smoldering_infernal_ember',
      'born_in_chaos_v1:pumpkinhandgun',
      'born_in_chaos_v1:soulbane',
      'born_in_chaos_v1:magical_holiday_candy',
      Item.of(
        'hostilenetworks:data_model',
        '{data_model:{id:"hostilenetworks:born_in_chaos/lord_pumpkinhead"}}'
      ).weakNBT(),
      'born_in_chaos_v1:magical_holiday_candy',
    ]
  );

  //#region industrialforegoing
  create3x3(event, 'industrialforegoing:mycelial_meatallurgic', [
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'minecraft:iron_ingot',
    'industrialforegoing:meat_bucket',
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'industrialforegoing:machine_frame_supreme',
    'minecraft:redstone',
  ]);
  create3x3(event, 'industrialforegoing:enchantment_applicator', [
    '#forge:plastic',
    '#forge:plastic',
    '#forge:plastic',
    'evolvedmekanism:alloy_hypercharged',
    'ifeu:ultimate_machine_frame',
    'mekanism_extras:alloy_radiance',
    'allthemodium:unobtainium_gear',
    'mekanism:alloy_atomic',
    'allthemodium:unobtainium_gear',
  ]);

  //#region ironfurnaces
  shapeless(event, '8x ironfurnaces:rainbow_plating', [
    'ironfurnaces:item_xmas',
    'ironfurnaces:iron_furnace',
    'ironfurnaces:gold_furnace',
    'ironfurnaces:diamond_furnace',
    'ironfurnaces:emerald_furnace',
    'ironfurnaces:obsidian_furnace',
    'ironfurnaces:crystal_furnace',
    'ironfurnaces:netherite_furnace',
  ]);

  create3x3(event, 'ironfurnaces:rainbow_core', [
    'minecraft:red_stained_glass',
    'minecraft:orange_stained_glass',
    'minecraft:yellow_stained_glass',
    'ironfurnaces:allthemodium_furnace',
    'ironfurnaces:vibranium_furnace',
    'ironfurnaces:unobtainium_furnace',
    'minecraft:blue_stained_glass',
    'minecraft:purple_stained_glass',
    'minecraft:magenta_stained_glass',
  ]);

  //#region logisticsnetworks
  create3x3(event, 'logisticsnetworks:mekanism_chemical_upgrade', [
    'mekanism:basic_chemical_tank',
    'mekanism:alloy_atomic',
    'mekanism:basic_chemical_tank',
    'minecraft:chest',
    'logisticsnetworks:diamond_upgrade',
    'minecraft:chest',
    'mekanism:basic_chemical_tank',
    'mekanism:alloy_atomic',
    'mekanism:basic_chemical_tank',
  ]);

  //#region patchouli
  shapeless(
    event,
    Item.of('patchouli:guide_book', '{"patchouli:book":"cyclic:guide_book"}'),
    ['minecraft:book', 'compressium:cobblestone_1']
  );

  //#region projectexpansion
  event
    .shaped(
      Item.of('projectexpansion:basic_collector'),
      ['ABA', 'ACA', 'ADA'],
      {
        A: 'minecraft:glowstone',
        B: 'projecte:collector_mk2',
        C: 'projecte:aeternalis_fuel_block',
        D: 'kubejs:fake_transmutation_tablet',
      }
    );

  create3x3(event, 'projectexpansion:basic_emc_link', [
    'projecte:low_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:high_covalence_dust',
    'projecte:aeternalis_fuel',
    'projecte:alchemical_chest',
    'projecte:aeternalis_fuel',
    'projecte:high_covalence_dust',
    'projecte:medium_covalence_dust',
    'projecte:low_covalence_dust',
  ]);

  event.shapeless('kubejs:fake_transmutation_tablet', 'projecte:transmutation_table');

  //#region refinedstorage
  shapeless(event, 'refinedstorage:creative_storage_block', [
    'refinedstorage:creative_storage_disk',
    'refinedstorage:machine_casing',
  ]);

  shapeless(event, 'refinedstorage:creative_fluid_storage_block', [
    'refinedstorage:creative_fluid_storage_disk',
    'refinedstorage:machine_casing',
  ]);

  //#region rftoolsutility
  create3x3(event, Item.of('rftoolsutility:computer_module', '{Damage:0}'), [
    'minecraft:air',
    Item.of('rftoolsutility:button_module', '{Damage:0}'),
    'minecraft:air',
    Item.of('rftoolsutility:counterplus_module', '{Damage:0}'),
    'minecraft:diamond_block',
    Item.of('rftoolsutility:fluidplus_module', '{Damage:0}'),
    'minecraft:air',
    Item.of('rftoolsutility:machineinformation_module', '{Damage:0}'),
    'minecraft:air',
  ]);

  //#region rsinfinitybooster
  create3x3(event, 'rsinfinitybooster:infinity_card', [
    'minecraft:ender_eye',
    'refinedstorage:range_upgrade',
    'minecraft:ender_eye',
    'refinedstorage:range_upgrade',
    'minecraft:nether_star',
    'refinedstorage:range_upgrade',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
    'minecraft:netherite_ingot',
  ]);

  create3x3(event, 'rsinfinitybooster:dimension_card', [
    'rsinfinitybooster:infinity_card',
    'minecraft:nether_star',
    'rsinfinitybooster:infinity_card',
    'minecraft:nether_star',
    'minecraft:ender_eye',
    'minecraft:nether_star',
    'rsinfinitybooster:infinity_card',
    'minecraft:nether_star',
    'rsinfinitybooster:infinity_card',
  ]);

  //#region sfm
  create3x3(event, Item.of('sfm:cable', 16), [
    'advanced_ae:quantum_alloy',
    'minecraft:light_weighted_pressure_plate',
    'kubejs:crystalline_alloy',
    'minecraft:iron_bars',
    '#forge:chests',
    'minecraft:iron_bars',
    'kubejs:crystalline_alloy',
    'minecraft:light_weighted_pressure_plate',
    'advanced_ae:quantum_alloy',
  ]);

  //#region telepastries
  create3x3(event, 'telepastries:custom_cake', [
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:cake',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
    'minecraft:oak_log',
  ]);

  create3x3(event, 'telepastries:lost_city_cake', [
    'minecraft:skeleton_skull',
    'minecraft:diamond_block',
    'minecraft:skeleton_skull',
    'minecraft:white_bed',
    'minecraft:cake',
    'minecraft:skeleton_skull',
    'minecraft:skeleton_skull',
    'minecraft:diamond_block',
    'minecraft:skeleton_skull',
  ]);

  //#region twilightforest
  create3x3(event, Item.of('twilightforest:aurora_block', 8), [
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    '#forge:dyes',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
    'minecraft:stone_bricks',
  ]);

  //#region cyclic
  create3x3(event, Item.of('cyclic:biomass', 8), [
    '#minecraft:leaves',
    '#silentgems:glowroses',
    '#minecraft:leaves',
    '#silentgems:glowroses',
    '#minecraft:saplings',
    '#silentgems:glowroses',
    '#minecraft:leaves',
    '#silentgems:glowroses',
    '#minecraft:leaves',
  ]);
});
