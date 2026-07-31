ServerEvents.recipes((event) => {
  create2x2(event, 'advanced_ae:adv_pattern_provider_upgrade', [
    'minecraft:iron_ingot',
    'ae2:capacity_card',
    'ae2:capacity_card',
    'ae2:engineering_processor',
  ]);

  create2x2(event, 'advanced_ae:adv_pattern_provider_capacity_upgrade', [
    'minecraft:iron_ingot',
    'minecraft:redstone',
    'minecraft:ender_pearl',
    'ae2:logic_processor',
  ]);

  create3x3(event, 'advanced_ae:regeneration_card', [
    'ae2omnicells:quantum_omni_cell_16m',
    Item.of('armorplus:slayer_helmet', '{Damage:0}'),
    'ae2omnicells:quantum_omni_cell_16m',
    'kubejs:infinity_1',
    'advanced_ae:quantum_upgrade_base',
    'cyclic:heart',
    'ae2omnicells:quantum_omni_cell_16m',
    'draconicevolution:item_wyvern_auto_feed',
    'ae2omnicells:quantum_omni_cell_16m',
  ]);

  // advanced_ae:reaction_chamber
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['ABCBA', 'BDEDB', 'CFGFC', 'BDHDB', 'ABIBA'],
      key: {
        A: {
          item: 'ae2omnicells:omni_link_processor',
        },
        B: {
          item: 'ae2:fluix_dust',
        },
        C: {
          item: 'justdirethings:eclipsealloy_ingot',
        },
        D: {
          item: 'mekanism:alloy_atomic',
        },
        E: {
          item: 'ae2:condenser',
        },
        F: {
          item: 'mysticalagradditions:insanium_ingot',
        },
        G: {
          item: 'ae2:vibration_chamber',
        },
        H: {
          item: 'crazyae2addons:super_singularity',
        },
        I: {
          item: 'extendedae_plus:basic_core',
        },
      },
      result: {
        item: 'advanced_ae:reaction_chamber',
      },
    })
    .id('advanced_ae:reaction_chamber');
});
