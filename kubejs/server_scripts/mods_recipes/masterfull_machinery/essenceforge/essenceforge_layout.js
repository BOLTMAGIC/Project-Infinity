priority: 1;
MMEvents.createStructures((event) => {
  event
    .create('mm:essenceforge_tier1_structure')
    .controllerId('mm:essenceforge_controller')
    .name('EssenceForge Tier 1')
    .maxParallelRecipes(3)
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer(['AAAAA', 'ADDDA', 'ADDDA', 'ADDDA', 'AAAAA'])
        .layer([' HQH ', 'HHHHH', 'QHHHQ', 'HHHHH', ' HQH '])
        .layer(['     ', '  H  ', ' H H ', '  H  ', '     '])
        .layer(['     ', ' DHD ', ' HHH ', ' DUD ', '     '])
        .layer(['DFHFD', 'H   H', 'I   I', 'H   H', 'DECGD'])
        .layer(['AAAAA', 'ABBBA', 'ABBBA', 'ABBBA', 'AAAAA'])
        .key('A', {
          block: 'chisel_chipped_integration:futura_fabulously_wavy',
        })
        .key('B', {
          block: 'mysticalagriculture:prudentium_farmland',
        })
        .key('D', {
          block: 'chisel_chipped_integration:futura_mysterious_cube',
        })
        .key('E', {
          portType: 'mm:item',
          input: true,
        })
        .key('F', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('G', {
          portType: 'mm:item',
          input: false,
        })
        .key('H', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('I', {
          portType: 'mm:energy',
          input: true,
        })
        .key('Q', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('U', {
          block: 'igleelib:blazum_block',
        });
    });

      event
    .create('mm:essenceforge_tier2_structure')
    .controllerId('mm:essenceforge_controller')
    .name('EssenceForge Tier 2')
    .maxParallelRecipes(3)
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer(['AAAAA', 'ADDDA', 'ADDDA', 'ADDDA', 'AAAAA'])
        .layer(['PHQHR', 'HHHHH', 'QHHHQ', 'HHHHH', 'SHQHT'])
        .layer(['     ', '  H  ', ' H H ', '  H  ', '     '])
        .layer(['     ', ' DHD ', ' HHH ', ' DUD ', '     '])
        .layer(['DFHFD', 'H   H', 'I   I', 'H   H', 'DECGD'])
        .layer(['AAAAA', 'ABBBA', 'ABBBA', 'ABBBA', 'AAAAA'])
        .key('A', {
          block: 'chisel_chipped_integration:futura_fabulously_wavy',
        })
        .key('B', {
          block: 'mysticalagriculture:imperium_farmland',
        })
        .key('D', {
          block: 'chisel_chipped_integration:futura_mysterious_cube',
        })
        .key('E', {
          portType: 'mm:item',
          input: true,
        })
        .key('F', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('G', {
          portType: 'mm:item',
          input: false,
        })
        .key('H', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('I', {
          portType: 'mm:energy',
          input: true,
        })
        .key('P', {
          block: 'mysticalagriculture:imperium_block',
        })
        .key('Q', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('R', {
          block: 'mysticalagriculture:tertium_block',
        })
        .key('S', {
          block: 'mysticalagriculture:inferium_block',
        })
        .key('T', {
          block: 'mysticalagriculture:prudentium_block',
        })
        .key('U', {
          block: 'igleelib:blazum_block',
        });
    });

      event
    .create('mm:essenceforge_tier3_structure')
    .controllerId('mm:essenceforge_controller')
    .name('EssenceForge Tier 3')
    .maxParallelRecipes(0)
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer(['AAAAA', 'ADDDA', 'ADDDA', 'ADDDA', 'AAAAA'])
        .layer(['PHQHR', 'HHHHH', 'QHHHQ', 'HHHHH', 'SHQHT'])
        .layer(['     ', ' LHM ', ' H H ', ' NHO ', '     '])
        .layer(['     ', ' DHD ', ' HHH ', ' DUD ', '     '])
        .layer(['DFHFD', 'H   H', 'I   I', 'H   H', 'DECGD'])
        .layer(['AAAAA', 'ABBBA', 'ABBBA', 'ABBBA', 'AAAAA'])
        .key('A', {
          block: 'chisel_chipped_integration:futura_fabulously_wavy',
        })
        .key('B', {
          block: 'mysticalagradditions:insanium_farmland',
        })
        .key('D', {
          block: 'chisel_chipped_integration:futura_mysterious_cube',
        })
        .key('E', {
          portType: 'mm:item',
          input: true,
        })
        .key('F', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('G', {
          portType: 'mm:item',
          input: false,
          minTier: 9,
        })
        .key('H', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('I', {
          block: 'mm:gigantic_energy_port_input',
        })
        .key('L', {
          block: 'botanicalextramachinery:crimson_ingot_block',
        })
        .key('M', {
          block: 'botanicalextramachinery:shadow_ingot_block',
        })
        .key('N', {
          block: 'botanicalextramachinery:malachite_ingot_block',
        })
        .key('O', {
          block: 'botanicalextramachinery:saffron_ingot_block',
        })
        .key('P', {
          block: 'mysticalexpansion:divinium_block',
        })
        .key('Q', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('R', {
          block: 'mysticalexpansion:etherium_block',
        })
        .key('S', {
          block: 'mysticalagradditions:insanium_block',
        })
        .key('T', {
          block: 'mysticalexpansion:extremium_block',
        })
        .key('U', {
          block: 'igleelib:blazum_block',
        });
    });

      event
    .create('mm:essenceforge_tier4_structure')
    .controllerId('mm:essenceforge_controller')
    .name('EssenceForge Tier 4')
    .maxParallelRecipes(0)
    .layout((a) => {
      a.portsAnywhere(true);
      a.layer(['AAAAA', 'ADDDA', 'ADDDA', 'ADDDA', 'AAAAA'])
        .layer(['PHQHR', 'HHHHH', 'QHHHQ', 'HHHHH', 'SHQHT'])
        .layer(['     ', ' LHM ', ' H H ', ' NHO ', '     '])
        .layer(['     ', ' DHD ', ' HHH ', ' DUD ', '     '])
        .layer(['DFHFD', 'E   I', 'H   H', 'E   I', 'DGCGD'])
        .layer(['AAAAA', 'AWVWA', 'AVBVA', 'AWVWA', 'AAAAA'])
        .key('A', {
          block: 'chisel_chipped_integration:futura_fabulously_wavy',
        })
        .key('B', {
          block: 'ifeu:simulated_hydroponic_bed',
        })
        .key('D', {
          block: 'chisel_chipped_integration:futura_mysterious_cube',
        })
        .key('E', {
          portType: 'mm:item',
          input: true,
        })
        .key('F', {
          portType: 'mm:fluid',
          input: true,
        })
        .key('G', {
          portType: 'mm:item',
          input: false,
          minTier: 9,
        })
        .key('H', {
          block: 'chisel_chipped_integration:factory_blue_framed_circuit',
        })
        .key('I', {
          block: 'mm:gigantic_energy_port_input',
        })
        .key('L', {
          block: 'botanicalextramachinery:crimson_ingot_block',
        })
        .key('M', {
          block: 'botanicalextramachinery:shadow_ingot_block',
        })
        .key('N', {
          block: 'botanicalextramachinery:malachite_ingot_block',
        })
        .key('O', {
          block: 'botanicalextramachinery:saffron_ingot_block',
        })
        .key('P', {
          block: 'mysticalexpansion:divinium_block',
        })
        .key('Q', {
          block: 'chisel_chipped_integration:technical_fan',
        })
        .key('R', {
          block: 'mysticalexpansion:etherium_block',
        })
        .key('S', {
          block: 'mysticalagradditions:insanium_block',
        })
        .key('T', {
          block: 'mysticalexpansion:extremium_block',
        })
        .key('U', {
          block: 'kubejs:infinity_8_block',
        })
        .key('V', {
          block: 'bloodmagic:accelerationrune2',
        })
        .key('W', {
          block: 'bloodmagic:speedrune2',
        });
    });
});
