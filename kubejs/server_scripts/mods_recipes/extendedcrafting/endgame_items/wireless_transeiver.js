ServerEvents.recipes((event) => {
  //Wireless Transeiver
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AA   AA',
        'ABB BBA',
        ' BCDCB ',
        ' FGHIF ',
        ' BCJCB ',
        'ABB BBA',
        'AA   AA',
      ],
      key: {
        A: {
          item: 'ae2:quantum_ring',
        },
        B: {
          item: 'ae2:quantum_link',
        },
        C: {
          item: 'ae2omnicells:quantum_omni_cell_component_64k',
        },
        D: {
          item: 'ae2omnicells:spent_nuclear_waste_singularity',
        },
        F: {
          item: 'kubejs:infinity_1',
        },
        G: {
          item: 'ae2:singularity',
        },
        H: {
          item: 'ae2omnicells:singularity_block',
        },
        I: {
          item: 'extendedae_plus:oblivion_singularity',
        },
        J: {
          item: 'aeinfinitybooster:dimension_card',
        },
      },
      result: {
        item: 'extendedae_plus:wireless_transceiver',
      },
    })
    .id('extendedae_plus:wireless_transceiver4');
});
