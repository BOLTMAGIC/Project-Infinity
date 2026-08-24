priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:mechanical_empowerer_structure1')
    .controllerId('mm:mechanical_empowerer_controller')
    .name('Mechanical Empowerer Tier 1')
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer([' 67776 ', ' 18881 ', ' 67776 '])
        .layer([' 11111 ', '2344435', ' 11C11 '])
        .layer([' 11111 ', '1111111', ' 11111 '])
        .key('1', {
          block: 'enderio:dark_steel_block',
        })
        .key('2', {
          portType: 'mm:item',
          input: false,
        })
        .key('3', {
          block: 'enderio:end_steel_block',
        })
        .key('4', {
          block: 'kubejs:fake_mob_masher',
        })
        .key('5', {
          portType: 'mm:item',
          input: true,
        })
        .key('6', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('7', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('8', {
          portType: 'mm:energy',
          input: true,
        });
    });

  event
    .create('mm:mechanical_empowerer_structure2')
    .controllerId('mm:mechanical_empowerer_controller')
    .name('Mechanical Empowerer Tier 2')
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer([' 67776 ', ' 18881 ', ' 67776 '])
        .layer([' 11911 ', '2344435', ' 11C11 '])
        .layer([' 11111 ', '1111111', ' 11111 '])
        .key('1', {
          block: 'enderio:dark_steel_block',
        })
        .key('2', {
          portType: 'mm:item',
          input: false,
        })
        .key('3', {
          block: 'enderio:end_steel_block',
        })
        .key('4', {
          block: 'kubejs:infinity_4_block',
        })
        .key('5', {
          portType: 'mm:item',
          input: true,
        })
        .key('6', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('7', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('8', {
          portType: 'mm:energy',
          input: true,
        })
        .key('9', {
          block: 'mm:gigantic_fluid_port_input',
        });
    });
});
