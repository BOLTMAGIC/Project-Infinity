ServerEvents.recipes((event) => {
  //Creative Jetpack
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        ' A     A ',
        'ABA   ABA',
        'CBCDEDCBC',
        'FBFGHGFBF',
        'IJIKLKIJI',
        'FBFGHGFBF',
        'CBCDMDCBC',
        'ABA   ABA',
        ' A     A ',
      ],
      key: {
        A: {
          type: 'forge:partial_nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:12000000,Id:\"ironjetpacks:steel\"}',
        },
        B: {
          item: 'kubejs:infinity_12',
        },
        C: {
          type: 'forge:partial_nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:100000,Id:\"ironjetpacks:stone\"}',
        },
        D: {
          item: 'evolvedmekanism:block_plaslitherite',
        },
        E: {
          type: 'forge:partial_nbt',
          item: 'ironjetpacks:capacitor',
          count: 1,
          nbt: '{Id:\"ironjetpacks:creative\"}',
        },
        F: {
          type: 'forge:partial_nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:12000000,Id:\"ironjetpacks:invar\"}',
        },
        G: {
          type: 'forge:partial_nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:48000000,Id:\"ironjetpacks:emerald\"}',
        },
        H: {
          item: 'evolvedmekanism:creative_control_circuit',
        },
        I: {
          type: 'forge:partial_nbt',
          item: 'ironjetpacks:jetpack',
          count: 1,
          nbt: '{Energy:1200000,Id:\"ironjetpacks:silver\"}',
        },
        J: {
          type: 'forge:partial_nbt',
          item: 'ironjetpacks:thruster',
          count: 1,
          nbt: '{Id:\"ironjetpacks:creative\"}',
        },
        K: {
          item: 'ironjetpacks:strap',
        },
        L: {
          item: 'better_angel_ring:angel_ring',
        },
        M: {
          type: 'forge:partial_nbt',
          item: 'appflux:fe_256k_portable_cell',
          count: 1,
          nbt: '{power:274877906944L}',
        },
      },
      result: {
        type: 'forge:nbt',
        item: 'ironjetpacks:jetpack',
        count: 1,
        nbt: '{Id:"ironjetpacks:creative",Throttle:1.0d}',
      },
    })
    .id('creative_jetpack');
});
