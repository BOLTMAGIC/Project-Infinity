priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:prediction_chamber_structure')
    .controllerId('mm:prediction_chamber_controller')
    .name('Prediction Chamber Tier 1')
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer([
        '  AAA  ',
        ' ADDDA ',
        'ADDDDDA',
        'ADDDDDA',
        'ADDDDDA',
        ' ADDDA ',
        '  AAA  ',
      ])
        .layer([
          '  GGG  ',
          ' G   G ',
          'G     G',
          'G  F  G',
          'G     G',
          ' G   G ',
          '  GGG  ',
        ])
        .layer([
          '  GEG  ',
          ' G F G ',
          'G     G',
          'EF B FE',
          'G     G',
          ' G F G ',
          '  GEG  ',
        ])
        .layer([
          '  2H1  ',
          ' G   G ',
          'G     G',
          '3  F  3',
          'G     G',
          ' G   G ',
          '  1C2  ',
        ])
        .layer([
          '  HHH  ',
          ' HDDDH ',
          'HDDDDDH',
          'HDDDDDH',
          'HDDDDDH',
          ' HDDDH ',
          '  HHH  ',
        ])
        .key('A', {
          block: 'actuallyadditions:ender_casing',
        })
        .key('B', {
          block: 'botanicalextramachinery:crimson_dragonstone_block',
        })
        .key('D', {
          block: 'evolvedmekanism:apt_casing',
        })
        .key('E', {
          block: 'extrahnn:ultimate_loot_fabricator_v4',
        })
        .key('F', {
          block: 'mekanism:supercharged_coil',
        })
        .key('G', {
          block: 'ae2:quartz_glass',
        })
        .key('H', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('1', {
          portType: 'mm:item',
          input: true,
        })
        .key('2', {
          portType: 'mm:item',
          input: false,
          minTier: 8,
        })
        .key('3', {
          block: 'mm:gigantic_energy_port_input',
        });
    });

  event
    .create('mm:prediction_chamber_structure2')
    .controllerId('mm:prediction_chamber_controller')
    .name('Prediction Chamber Tier 2')
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer([
        '  AAA  ',
        ' ADDDA ',
        'ADDDDDA',
        'ADDDDDA',
        'ADDDDDA',
        ' ADDDA ',
        '  AAA  ',
      ])
        .layer([
          '  GGG  ',
          ' G   G ',
          'G     G',
          'G  F  G',
          'G     G',
          ' G   G ',
          '  GGG  ',
        ])
        .layer([
          '  GEG  ',
          ' G F G ',
          'G     G',
          'EF B FE',
          'G     G',
          ' G F G ',
          '  GEG  ',
        ])
        .layer([
          '  2H1  ',
          ' G   G ',
          'G     G',
          '3  F  3',
          'G     G',
          ' G   G ',
          '  1C2  ',
        ])
        .layer([
          '  HHH  ',
          ' HDDDH ',
          'HDDDDDH',
          'HDDDDDH',
          'HDDDDDH',
          ' HDDDH ',
          '  HHH  ',
        ])
        .key('A', {
          block: 'actuallyadditions:ender_casing',
        })
        .key('B', {
          block: 'kubejs:infinity_6_block',
        })
        .key('D', {
          block: 'evolvedmekanism:apt_casing',
        })
        .key('E', {
          block: 'extrahnn:ultimate_loot_fabricator_v4',
        })
        .key('F', {
          block: 'mekanism:supercharged_coil',
        })
        .key('G', {
          block: 'ae2:quartz_glass',
        })
        .key('H', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('1', {
          portType: 'mm:item',
          input: true,
        })
        .key('2', {
          portType: 'mm:item',
          input: false,
          minTier: 9,
        })
        .key('3', {
          block: 'mm:gigantic_energy_port_input',
        });
    });
});
