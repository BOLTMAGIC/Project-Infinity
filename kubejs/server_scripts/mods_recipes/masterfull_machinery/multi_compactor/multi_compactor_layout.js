priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:multi_compactor_structure')
    .controllerId('mm:multi_compactor_controller')
    .name('Multi Compactor')
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer([
        '        ',
        '        ',
        '   FF   ',
        '  AEEB  ',
        '  BEEA  ',
        '   FF   ',
        '        ',
        '        ',
      ])
        .layer([
          '        ',
          '  EEEE  ',
          ' EE  EE ',
          ' E    E ',
          ' E    E ',
          ' EE  EE ',
          '  EEEE  ',
          '        ',
        ])
        .layer([
          '   EE   ',
          ' EE  EE ',
          ' E    E ',
          'E      E',
          'E      E',
          ' E    E ',
          ' EE  EE ',
          '   EE   ',
        ])
        .layer([
          '  EIIE  ',
          ' E    E ',
          'E      E',
          'I      I',
          'I      I',
          'E      E',
          ' E    E ',
          '  EIIE  ',
        ])
        .layer([
          '  EIIE  ',
          ' E    E ',
          'E      E',
          'I      I',
          'I      I',
          'E      E',
          ' E    E ',
          '  EIIE  ',
        ])
        .layer([
          '   EE   ',
          ' EE  EE ',
          ' E    E ',
          'E      E',
          'E      E',
          ' E    E ',
          ' EE  EE ',
          '   EC   ',
        ])
        .layer([
          '        ',
          '   EE   ',
          '  EGHE  ',
          ' EH  GE ',
          ' EG  HE ',
          '  EHGE  ',
          '   EE   ',
          '        ',
        ])
        .layer([
          '        ',
          '        ',
          '   FF   ',
          '  AEEB  ',
          '  BEEA  ',
          '   FD   ',
          '        ',
          '        ',
        ])
        .key('A', {
          block: 'mm:gigantic_fluid_port_input',
        })
        .key('B', {
          block: 'mm:gigantic_energy_port_input',
        })
        .key('D', {
          portType: 'mm:item',
          input: false,
          minTier: 8,
        })
        .key('E', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('F', {
          portType: 'mm:item',
          input: true,
        })
        .key('G', {
          block: 'compressium:cobblestone_7',
        })
        .key('H', {
          block: 'extendedcrafting:compressor',
        })
        .key('I', {
          block: 'ae2:quartz_glass',
        });
    });
});
