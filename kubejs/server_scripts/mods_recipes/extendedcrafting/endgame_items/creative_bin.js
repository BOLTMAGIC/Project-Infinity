ServerEvents.recipes((event) => {
  //Creative Bin
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCCBCCBA',
        'BEFGEGFEB',
        'CFHIIIJFC',
        'KGLMNMOGK',
        'BUMNPNMUB',
        'KGQMNMRGK',
        'CFSIIITFC',
        'BEFGEGFEB',
        'ABCCBCCBA',
      ],
      key: {
        A: {
          item: 'mekanism_extras:infinite_control_circuit',
        },
        B: {
          item: 'avaritia:infinity',
        },
        C: {
          item: 'extendedcrafting:the_ultimate_block',
        },
        E: {
          item: 'botanicalextramachinery:crimson_dragonstone_block',
        },
        F: {
          item: 'avaritia:neutron',
        },
        G: {
          item: 'compressium:cobblestone_9',
        },
        H: {
          item: 'mekanism_extras:absolute_bin',
        },
        I: {
          item: 'mysticalagradditions:creative_essence',
        },
        J: {
          item: 'mekanism_extras:cosmic_bin',
        },
        K: {
          item: 'kubejs:infinity_12',
        },
        L: {
          item: 'botanicalmachinery:mana_battery_creative',
        },
        M: {
          item: 'evolvedmekanism:alloy_creative',
        },
        N: {
          item: 'draconicevolution:creative_op_capacitor',
        },
        O: {
          item: 'mekanism:creative_chemical_tank',
        },
        P: {
          item: 'kubejs:infinity_12',
        },
        Q: {
          item: 'mekanism:creative_fluid_tank',
        },
        R: {
          item: 'pneumaticcraft:creative_compressor',
        },
        S: {
          item: 'mekanism_extras:infinite_bin',
        },
        T: {
          item: 'mekanism_extras:supreme_bin',
        },
        U: {
          item: 'woot_revived:netherite_cell',
        },
      },
      result: {
        item: 'mekanism:creative_bin',
      },
    })
    .id('mekanism:creative_bin');
});
