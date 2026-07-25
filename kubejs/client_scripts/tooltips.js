ItemEvents.tooltip((event) => {
  // Avaritia
  event.add(
    ['avaritia:infinity_pickaxe', 'avaritia:infinity_shovel'],
    Text.translate('tooltip.avaritia.infinity_tools')
  );

  // NuclearCraft - Water Collectors
  event.add(
    'nuclearcraft:water_collector',
    Text.translate('tooltip.nuclearcraft.water_collector', '200')
  );
  event.add(
    'nuclearcraft:compact_water_collector',
    Text.translate('tooltip.nuclearcraft.water_collector', '2,000')
  );
  event.add(
    'nuclearcraft:dense_water_collector',
    Text.translate('tooltip.nuclearcraft.water_collector', '10,000')
  );

  // Allthemodium
  event.addAdvanced('allthemodium:allthemodium_upgrade_smithing_template', (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.allthemodium_template'));
  });

  event.addAdvanced('allthemodium:vibranium_upgrade_smithing_template', (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.vibranium_template'));
  });

  event.addAdvanced('allthemodium:unobtainium_upgrade_smithing_template', (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.unobtainium_template'));
  });

  // EnderIO Conduits
  const conduits = [
    { id: 'enderio:conductive_conduit', val: '2,048' },
    { id: 'enderio:energetic_conduit', val: '8,192' },
    { id: 'enderio:vibrant_conduit', val: '32,768' },
    { id: 'enderio:endsteel_conduit', val: '131,072' },
    { id: 'enderio:lumium_conduit', val: '524,288' },
    { id: 'enderio:signalum_conduit', val: '2,097,152' },
    { id: 'enderio:enderium_conduit', val: '4,194,304' },
    { id: 'enderio:sculk_superconductor_conduit', val: '134,217,728' },
    { id: 'enderio:energy_conduit', val: '2,147,483,647' },
  ];

  conduits.forEach((conduit) => {
    event.add(
      conduit.id,
      Text.translate('tooltip.enderio.conduit_transfer', conduit.val)
    );
  });

  // KubeJS Credits
  event.add(
    ['kubejs:infinity_7', 'kubejs:infinity_8'],
    Text.translate('tooltip.kubejs.texture_credit', 'Astrageldon')
  );
  event.add(
    'kubejs:infinity_9',
    Text.translate('tooltip.kubejs.texture_credit', 'Elpximso')
  );
  event.add('kubejs:infinity_9', Text.translate('tooltip.kubejs.infinity_9_1'));
  event.add('kubejs:infinity_9', Text.translate('tooltip.kubejs.infinity_9_2'));

  event.add(
    'kubejs:infinity_10_block',
    Text.translate('tooltip.kubejs.infinity_10')
  );
  event.add(
    'kubejs:infinity_10_1_block',
    Text.translate('tooltip.kubejs.infinity_10_1')
  );
  event.add(
    'kubejs:infinity_10_2_block',
    Text.translate('tooltip.kubejs.infinity_10_2')
  );

  // --- Master Machinery Ports Tooltips ---

  // Item Ports
  event.add(
    ['mm:tiny_item_port_input', 'mm:tiny_item_port_output'],
    Text.translate('tooltip.mm.item_port_1')
  );
  event.add(
    ['mm:small_item_port_input', 'mm:small_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['2x2', '4'])
  );
  event.add(
    ['mm:normal_item_port_input', 'mm:normal_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['3x3', '9'])
  );
  event.add(
    ['mm:big_item_port_input', 'mm:big_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['4x4', '16'])
  );
  event.add(
    ['mm:enormous_item_port_input', 'mm:enormous_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['5x5', '25'])
  );
  event.add(
    ['mm:gigantic_item_port_input', 'mm:gigantic_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['6x6', '36'])
  );
  event.add(
    ['mm:colossal_item_port_input', 'mm:colossal_item_port_output'],
    Text.translate('tooltip.mm.item_port', ['6x8', '48'])
  );
  event.add(
    [
      'mm:titanic_item_port_input',
      'mm:titanic_item_port_output',
      'mm:compressed_titanic_item_port_input',
      'mm:compressed_titanic_item_port_output',
      'mm:super_compressed_titanic_item_port_input',
      'mm:super_compressed_titanic_item_port_output',
    ],
    Text.translate('tooltip.mm.item_port', ['8x12', '96'])
  );

  event.add(
    ['mm:titanic_item_port_input', 'mm:titanic_item_port_output'],
    Text.translate('tooltip.mm.item_port2', ['64'])
  );
  event.add(
    [
      'mm:compressed_titanic_item_port_input',
      'mm:compressed_titanic_item_port_output',
    ],
    Text.translate('tooltip.mm.item_port3', ['512'])
  );
  event.add(
    [
      'mm:super_compressed_titanic_item_port_input',
      'mm:super_compressed_titanic_item_port_output',
    ],
    Text.translate('tooltip.mm.item_port4', ['16384'])
  );
  event.add(
    [
      'mm:super_compressed_titanic_item_port_input',
      'mm:super_compressed_titanic_item_port_output',
    ],
    Text.translate('tooltip.mm.item_port5')
  );

  event.add(
    ['kubejs:fake_mob_masher'],
    Text.translate('tooltip.kubejs.fake_mob_masher')
  );

  // Fluid Ports
  const fluidPorts = [
    { id: 'mm:small_fluid_port', val: '640,000' },
    { id: 'mm:normal_fluid_port', val: '2,560,000' },
    { id: 'mm:big_fluid_port', val: '10,240,000' },
    { id: 'mm:enormous_fluid_port', val: '163,840,000' },
    { id: 'mm:gigantic_fluid_port', val: '2,147,483,647' },
  ];

  fluidPorts.forEach((port) => {
    event.add(
      [`${port.id}_input`, `${port.id}_output`],
      Text.translate('tooltip.mm.fluid_port', port.val)
    );
  });

  // Energy Ports
  event.add(
    ['mm:tiny_energy_port_input', 'mm:tiny_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', ['25,000', '5,000', '2,500'])
  );
  event.add(
    ['mm:small_energy_port_input', 'mm:small_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', ['100,000', '20,000', '10,000'])
  );
  event.add(
    ['mm:normal_energy_port_input', 'mm:normal_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', [
      '1,000,000',
      '200,000',
      '100,000',
    ])
  );
  event.add(
    ['mm:big_energy_port_input', 'mm:big_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', [
      '10,000,000',
      '2,000,000',
      '1,000,000',
    ])
  );
  event.add(
    ['mm:enormous_energy_port_input', 'mm:enormous_energy_port_output'],
    Text.translate('tooltip.mm.energy_port', [
      '25,000,000',
      '5,000,000',
      '2,500,000',
    ])
  );
  event.add(
    ['mm:gigantic_energy_port_input', 'mm:gigantic_energy_port_output'],
    Text.translate('tooltip.mm.energy_port_gigantic', '2,147,483,647')
  );

  // Mekanism Gas Ports
  event.add(
    ['mm:colossal_gas_port_input', 'mm:colossal_gas_port_output'],
    Text.translate('tooltip.mm.gas_port', '2,147,483,647')
  );

  // Compact Machines
  event.add(
    ['compactmekanismmachines:compact_industrial_turbine'],
    Text.translate('tooltip.compactmachines.info')
  );

  // --- Advanced Tooltips ---

  const holdShiftText = () => [
    Text.translate('tooltip.general.hold').gold(),
    Text.translate('tooltip.general.shift').yellow(),
    Text.translate('tooltip.general.more_info').gold(),
  ];

  event.addAdvanced(
    ['mm:multi_compactor_controller'],
    (item, advanced, text) => {
      let refundText = Text.translate('tooltip.mm.controller_refund');
      text.add(1, refundText.white());
    }
  );

  event.addAdvanced(
    [
      'avaritia:neutron_pile',
      'avaritia:neutron_nugget',
      'avaritia:neutron_ingot',
    ],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShiftText());
      } else {
        text.add(
          1,
          Text.translate('tooltip.avaritia.neutron').green().bold(true)
        );
      }
    }
  );

  event.addAdvanced(
    ['mekanism_extras:end_naquadah_ore'],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShiftText());
      } else {
        text.add(1, Text.translate('tooltip.mekanism_extras.naquadah').green());
      }
      text.remove(2);
    }
  );

  event.addAdvanced(['mbtool:mbtool'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, holdShiftText());
    } else {
      text.add(1, Text.translate('tooltip.mbtool.usage_1').green());
      text.add(2, Text.translate('tooltip.mbtool.usage_2').green());
    }
  });

  event.addAdvanced(['armorplus:lava_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.add(2, holdShiftText());
    } else {
      text.add(1, Text.translate('tooltip.armorplus.lava_crystal').green());
    }
  });

  event.addAdvanced(['armorplus:frost_crystal'], (item, advanced, text) => {
    if (!event.shift) {
      text.remove(1);
      text.add(1, holdShiftText());
    } else {
      text.add(1, Text.translate('tooltip.armorplus.frost_crystal_1').green());
      text.add(2, Text.translate('tooltip.armorplus.frost_crystal_2').white());
      text.remove(3);
    }
  });

  event.addAdvanced(
    [
      'kubejs:arcmetal_ore',
      'kubejs:solarmetal_ore',
      'kubejs:plasteel_ore',
      'kubejs:voidmetal_ore',
    ],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShiftText());
      } else {
        text.add(1, Text.translate('tooltip.kubejs.ore_mining_dim').green());
      }
    }
  );

  event.addAdvanced(
    ['born_in_chaos_v1:chaos_component'],
    (item, advanced, text) => {
      if (!event.shift) {
        text.add(1, holdShiftText());
      } else {
        text.add(
          1,
          Text.translate('tooltip.born_in_chaos.chaos_component').green()
        );
      }
    }
  );

  event.addAdvanced(['outer_end:ancient_ice'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.outer_end.ancient_ice').green());
  });

  // Credit Recipes
  const kemCredits = [
    'integrateddynamics:energy_battery_creative',
    'mekanism:creative_energy_cube',
    'mekanism:creative_chemical_tank',
    'mm:advanced_awakening_altar_controller',
    'botanicalextramachinery:catalyst_mana_infinity',
    'botanicalmachinery:mana_battery_creative',
  ];

  event.addAdvanced(kemCredits, (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.credit.recipe_added', 'Kem5540').red());
  });

  event.addAdvanced(
    ['pneumaticcraft:creative_compressor'],
    (item, advanced, text) => {
      text.add(
        1,
        Text.translate('tooltip.credit.recipe_added', 'Itz_izumito').red()
      );
    }
  );

  event.addAdvanced(
    ['pneumaticcraft:creative_compressed_iron_block'],
    (item, advanced, text) => {
      text.add(
        1,
        Text.translate('tooltip.credit.recipe_added', '.json01').red()
      );
    }
  );

  event.addAdvanced(
    [
      'appflux:fe_creative_cell',
      'ae2omnicells:creative_ae_cell_long',
      'thermal:machine_efficiency_creative_augment',
    ],
    (item, advanced, text) => {
      text.add(
        1,
        Text.translate('tooltip.credit.recipe_added', 'kylesexton').red()
      );
    }
  );

  event.addAdvanced(
    [
      'born_in_chaos_v1:lord_pumpkinheads_hat_helmet',
      'born_in_chaos_v1:transmuting_elixir',
    ],
    (item, advanced, text) => {
      text.add(1, Text.translate('tooltip.born_in_chaos.pumpkinhead').green());
    }
  );

  event.addAdvanced(['kubejs:ultimate_prediction'], (item, advanced, text) => {
    text.add(
      1,
      Text.translate('tooltip.credit.recipe_item_added', 'realspinelle').red()
    );
    text.add(2, Text.translate('tooltip.credit.joke').red());
  });

  event.addAdvanced(['mekanism:creative_bin'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.credit.recipe_added', 'RxDnz').red());
    text.add(2, Text.translate('tooltip.credit.joke').red());
  });

  event.addAdvanced(
    ['ae2omnicells:multidimensional_expansion_processor'],
    (item, advanced, text) => {
      text.add(1, Text.translate('tooltip.credit.recipe_added', 'Anti').red());
    }
  );
  //Industrial Foregoing Addons Warning
  const addons = [
    'kubejs:speed_addon_1',
    'kubejs:speed_addon_2',
    'kubejs:speed_addon_3',
    'kubejs:speed_addon_4',
    'kubejs:speed_addon_5',
    'kubejs:speed_addon_6',
    'kubejs:efficiency_addon_1',
    'kubejs:efficiency_addon_2',
    'kubejs:efficiency_addon_3',
    'kubejs:efficiency_addon_4',
    'kubejs:efficiency_addon_5',
    'kubejs:efficiency_addon_6',
    'kubejs:processing_addon_1',
    'kubejs:processing_addon_2',
    'kubejs:processing_addon_3',
    'kubejs:processing_addon_4',
    'kubejs:processing_addon_5',
    'kubejs:processing_addon_6',
  ];

  for (const addon of addons) {
    event.add(
      addon,
      Text.translate('tooltip.industrialforegoing.addon_warning')
    );
  }

  // Wither Aconite Autocrafting Warning
  event.addAdvanced(['mythicbotany:wither_aconite'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.mythicbotany.wither_aconite_warning'));
    text.add(
      2,
      Text.translate(
        'tooltip.botanicalmachineryextra.wither_aconite_mana_storage'
      ).red()
    );
  });

  event.addAdvanced(
    ['ifeu:big_dissolution_chamber'],
    (item, advanced, text) => {
      text.add(
        1,
        Text.translate('tooltip.ifeu.big_dissolution_chamber_warning_1')
      );
      text.add(
        2,
        Text.translate('tooltip.ifeu.big_dissolution_chamber_warning_2')
      );
    }
  );

  event.addAdvanced(['kubejs:full_nbt_remover'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.full_nbt_remover_1'));
    text.add(2, Text.translate('tooltip.kubejs.full_nbt_remover_2').red());
  });

  event.addAdvanced(['kubejs:tank_nbt_remover'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.tank_nbt_remover_1'));
    text.add(2, Text.translate('tooltip.kubejs.tank_nbt_remover_2'));
  });

  event.addAdvanced(
    ['kubejs:nuclearcraft_copy_paste_tool'],
    (item, advanced, text) => {
      text.add(
        1,
        Text.translate('tooltip.kubejs.nuclearcraft_copy_paste_tool_1')
      );
      text.add(
        2,
        Text.translate('tooltip.kubejs.nuclearcraft_copy_paste_tool_2')
      );
    }
  );

  const mekanismEnrichedMaterialsToCompress = [
    { id: 'redstone', machine: 'Elite' },
    { id: 'carbon', machine: 'Elite' },
    { id: 'diamond', machine: 'Elite' },
    { id: 'refined_obsidian', machine: 'Elite' },
    { id: 'uranium', machine: 'Elite' },
    { id: 'better_gold', machine: 'Elite' },
    { id: 'plaslitherite', machine: 'Elite' },
    { id: 'radiance', machine: 'Elite' },
    { id: 'thermonuclear', machine: 'Advanced' },
    { id: 'shining', machine: 'Advanced' },
    { id: 'spectrum', machine: 'Advanced' },
  ];

  mekanismEnrichedMaterialsToCompress.forEach((material) => {
    event.add(
      'kubejs:double_compressed_enriched_' + material.id,
      Text.translate(
        'tooltip.kubejs.compressed_material_warning',
        material.machine
      )
    );
  });

  event.add(
    'mekanism_extras:enriched_osmium',
    Text.translate('tooltip.mekanism_extras.enriched_osmium')
  );

  const meshes = [
    'exdeorum:string_mesh',
    'exdeorum:flint_mesh',
    'exdeorum:iron_mesh',
    'exdeorum:golden_mesh',
    'exdeorum:diamond_mesh',
    'exdeorum:netherite_mesh',
    'kubejs:allthemodium_mesh',
    'kubejs:vibranium_mesh',
  ];

  meshes.forEach((mesh) => {
    event.add(mesh, Text.translate('tooltip.exdeorum.mesh_enchant_warning'));
  });

  event.addAdvanced(['kubejs:wither_token'], (item, advanced, text) => {
    if (!item.nbt) {
      text.add(Text.translate('tooltip.kubejs.wither_token').darkAqua());
      return;
    }

    if (item.nbt.self_aware == false) {
      text.add(
        Text.translate('tooltip.kubejs.wither_token_not_self_aware').red()
      );
    } else {
      text.add(
        Text.translate('tooltip.kubejs.wither_token_self_aware').green()
      );
    }
  });

  event.addAdvanced(
    ['mekanism_extras:absolute_fluid_tank'],
    (item, advanced, text) => {
      if (!item.nbt) return;

      if (
        item.nbt.mekData.FluidTanks[0].stored.FluidName ==
        'nuclearcraft:polonium'
      ) {
        text.add(
          Text.translate(
            'tooltip.mekanism.absolute_fluid_tank_nuclearcraft_polonium'
          ).red()
        );
      }
    }
  );

  event.addAdvanced(['bmaddon:blood_generator'], (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.bmaddon.blood_generator_1').yellow());
    text.add(2, Text.translate('tooltip.bmaddon.blood_generator_2').yellow());
  });

  event.addAdvanced(
    ['kubejs:universal_wireless_terminal_uncrafter'],
    (item, advanced, text) => {
      text.add(
        1,
        Text.translate('tooltip.kubejs.universal_wireless_terminal_uncrafter_1')
      );
      text.add(
        2,
        Text.translate('tooltip.kubejs.universal_wireless_terminal_uncrafter_2')
      );
      text.add(
        3,
        Text.translate(
          'tooltip.kubejs.universal_wireless_terminal_uncrafter_3'
        ).red()
      );
    }
  );

  event.add(
    ['thermal:compost'],
    Text.translate('tooltip.thermal.compost').green()
  );

  event.addAdvanced(
    ['kubejs:extra_data_model_uncrafter'],
    (item, advanced, text) => {
      text.add(
        1,
        Text.translate('tooltip.kubejs.extra_data_model_uncrafter_1')
      );
      text.add(
        2,
        Text.translate('tooltip.kubejs.extra_data_model_uncrafter_2')
      );
      text.add(
        3,
        Text.translate('tooltip.kubejs.extra_data_model_uncrafter_3').red()
      );
    }
  );

  event.add(
    ['sanguine_networks:virtual_sacrificer'],
    Text.translate('tooltip.sanguine_networks.virtual_sacrificer').green()
  );

  event.addAdvanced(['hostilenetworks:data_model'], (item, advanced, text) => {
    if (
      item.nbt.data_model.id == 'hostilenetworks:born_in_chaos/lord_pumpkinhead'
    ) {
      text.add(
        Text.translate(
          'tooltip.hostilenetworks.data_model.lord_pumpkinhead'
        ).red()
      );
    }
  });

  event.addAdvanced(['kubejs:fluid_tank_token'], (item, advanced, text) => {
    if (!item.nbt) return;

    const tankLevelToQuantity = {
      basic: '32,000',
      advanced: '64,000',
      elite: '128,000',
      ultimate: '256,000',
      absolute: '4,096,000',
      supreme: '32,768,000',
      cosmic: '262,144,000',
      infinite: '2,097,152,000',
    };

    const fluidID = item.nbt.fluid_id;
    const parts = fluidID.split(':');
    const first = parts[0];

    const fluidName = Fluid.of(fluidID).getFluidStack().name.getString();
    const mod_name = Platform.mods[first].name;

    text.add(
      1,
      Text.translate(
        'tooltip.kubejs.tank_tokens_1',
        tankLevelToQuantity[item.nbt.tank_level],
        fluidName
      )
    );
    text.add(2, Text.translate('tooltip.kubejs.tank_tokens_2', mod_name));
  });

  event.addAdvanced(['kubejs:chemical_tank_token'], (item, advanced, text) => {
    if (!item.nbt) return;

    const tankLevelToQuantity = {
      basic: '64,000',
      advanced: '128,000',
      elite: '1,024,000',
      ultimate: '8,192,000',
      absolute: '131,072,000',
      supreme: '4,194,304,000',
      cosmic: '268,435,456,000',
      infinite: '34,359,738,368,000',
    };

    const modIDToTranslationKey = {
      mekanism: [
        'gas.mekanism.',
        'pigment.mekanism.',
        'slurry.mekanism.',
        'infuse_type.mekanism.',
      ],
      mekanismgenerators: ['gas.mekanismgenerators.'],
      mekanism_extras: ['gas.mekanism_extras.'],
      evolvedmekanism: ['infuse_type.evolvedmekanism.'],
      alltheores: ['slurry.alltheores.'],
      allthemodium: ['slurry.allthemodium.'],
    };

    const chemID = item.nbt.chemical_id;
    const parts = chemID.split(':');
    const first = parts[0];
    const second = parts[1];

    let chemicalTK;

    for (const prefix of modIDToTranslationKey[first]) {
      if (
        !Text.translatable(prefix + second)
          .getString()
          .equals(prefix + second)
      ) {
        chemicalTK = prefix;
        break;
      }
    }

    const chemical_name = Text.translatable(chemicalTK + second).getString();
    const mod_name = Platform.mods[first].name;

    text.add(
      1,
      Text.translate(
        'tooltip.kubejs.tank_tokens_1',
        tankLevelToQuantity[item.nbt.tank_level],
        chemical_name
      )
    );
    text.add(2, Text.translate('tooltip.kubejs.tank_tokens_2', mod_name));
  });

  const cakes = {
    year_1_cake: 3,
    year_2_cake: 3,
    year_3_cake: 3,
    year_4_cake: 4,
    year_5_cake: 3,
    year_6_cake: 3,
    year_7_cake: 3,
    year_8_cake: 5,
    year_9_cake: 3,
    year_10_cake: 3,
    year_11_cake: 4,
    year_12_cake: 6,
  };

  Object.keys(cakes).forEach((cake) => {
    event.addAdvanced([`kubejs:${cake}`], (item, advanced, text) => {
      for (let i = 1; i <= cakes[cake]; i++) {
        text.add(i, Text.translate(`tooltip.kubejs.${cake}_${i}`));
      }
    });
  });

  event.addAdvanced(
    'kubejs:fake_transmutation_tablet',
    (item, advanced, text) => {
      text.add(
        1,
        Text.translate(
          'tooltip.kubejs.fake_transmutation_tablet.warning_1'
        ).red()
      );
      text.add(
        2,
        Text.translate(
          'tooltip.kubejs.fake_transmutation_tablet.warning_2'
        ).red()
      );
      text.add(
        3,
        Text.translate(
          'tooltip.kubejs.fake_transmutation_tablet.warning_3'
        ).red()
      );
    }
  );

  event.addAdvanced('botanicalextramachinery:catalyst_speed', (item, advanced, text) => {
    text.add(1, Text.translate('tooltip.kubejs.botanicalextramachinery_catalyst_speed'));
  });
});
