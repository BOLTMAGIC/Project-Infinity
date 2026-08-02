ServerEvents.recipes((event) => {
  //Creative Energy Cube
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'ABCDAEFDA',
        'DCCGHIJCB',
        'FJBGKLBCC',
        'EILMGNGGD',
        'AHKGOGKHA',
        'DGGNGMLIE',
        'CCBLKGBJF',
        'BCJIHGCCD',
        'ADFEADCBA',
      ],
      key: {
        A: {
          item: 'evolvedmekanism:creative_control_circuit',
        },
        B: {
          item: 'mysticalagradditions:creative_essence',
        },
        C: {
          item: 'kubejs:infinity_12',
        },
        D: {
          item: 'evolvedmekanism:alloy_creative',
        },
        E: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        F: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        G: {
          item: 'avaritia:infinity_ingot',
        },
        H: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        I: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        J: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        K: {
          item: 'mekanism:creative_energy_cube',
        },
        L: {
          item: 'mekanism_extras:alloy_spectrum',
        },
        M: {
          item: 'mekanism_extras:infinite_induction_cell',
        },
        N: {
          item: 'mekanism_extras:infinite_induction_provider',
        },
        O: {
          type: 'forge:partial_nbt',
          item: 'appflux:fe_256k_portable_cell',
          count: 1,
          nbt: '{power:274877906944L}',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'mekanism:creative_energy_cube',
        count: 1,
        nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
      },
    })
    .id('mekanism:creative_energy_cube');
});
