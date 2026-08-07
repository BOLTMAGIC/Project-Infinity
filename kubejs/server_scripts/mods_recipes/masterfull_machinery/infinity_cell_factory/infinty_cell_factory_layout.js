priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:infinity_cell_factory_structure')
    .controllerId('mm:infinity_cell_factory_controller')
    .name('Infinity Cell Factory')
    .maxParallelRecipes(1)
    .layout((a) => {
      a.layer(['AAAAA', 'ABDBA', 'ADEDA', 'ABDBA', 'AAAAA']);
      a.layer(['FHDGF', 'IDDDI', 'DDEDD', 'IDDDI', 'FGCHF']);
      a.layer(['KDNDK', 'DDLDD', 'MLELM', 'DDLDD', 'KDDDK']);
      a.layer(['DODOD', 'ODDDO', 'DDEDD', 'ODDDO', 'DODOD'])
        .key('A', {
          block: 'chisel_chipped_integration:futura_purple_me_controller',
        })
        .key('B', {
          block: 'kubejs:triple_compressed_iron_block',
        })
        .key('D', {
          block: 'chisel_chipped_integration:futura_me_controller',
        })
        .key('E', {
          block: 'botanicalextramachinery:saffron_ingot_block',
        })
        .key('F', {
          block: 'evolvedmekanism:block_better_gold',
        })
        .key('G', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('H', {
          portType: 'mm:item',
          input: true,
          minTier: 6,
        })
        .key('I', {
          block: 'mm:gigantic_energy_port_input',
        })
        .key('K', {
          block: 'kubejs:thermonuclear_alloy_block',
        })
        .key('L', {
          block: 'bloodmagic:dislocationrune',
        })
        .key('M', {
          portType: 'mm:item',
          input: false,
          minTier: 6,
        })
        .key('N', {
          block: 'voidminers:solar_ultimate_block',
        })
        .key('O', {
          block: 'mysticalexpansion:etherium_gemstone_block',
        });
    });
});
