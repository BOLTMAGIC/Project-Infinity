priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:tank_encapsulator_structure')
    .controllerId('mm:tank_encapsulator_controller')
    .name('Tank Encapsulator')
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer(['ABFBA', 'BDEDB', 'ABBBA']);
      a.layer(['GLBMG', 'HI JK', 'GGCGG']);
      a.layer(['ABOBA', 'NDBDB', 'ABBBA'])
        .key('A', {
          block: 'chisel_chipped_integration:futura_mysterious_cube',
        })
        .key('B', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('D', {
          block: 'minecraft:piston',
        })
        .key('E', {
          block: 'mm:gigantic_fluid_port_input',
        })
        .key('F', {
          block: 'mm:colossal_gas_port_input',
        })
        .key('G', {
          block: 'ae2:quartz_glass',
        })
        .key('H', {
          portType: 'mm:item',
          input: true,
          minTier: 6,
        })
        .key('I', {
          block: 'mekanism_extras:absolute_fluid_tank',
        })
        .key('J', {
          block: 'mekanism_extras:absolute_chemical_tank',
        })
        .key('K', {
          portType: 'mm:item',
          input: false,
          minTier: 6,
        })
        .key('L', {
          block: 'mm:colossal_infuse_port_input',
        })
        .key('M', {
          block: 'mm:colossal_slurry_port_input',
        })
        .key('N', {
          block: 'chisel_chipped_integration:futura_fabulously_wavy',
        })
        .key('O', {
          block: 'mm:colossal_pigment_port_input',
        });
    });
});
