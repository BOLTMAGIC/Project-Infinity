BlockEvents.rightClicked('mekanism:creative_bin', (event) => {
  const { player, item, block, facing } = event;

  if (item.isEmpty()) return;

  if (item.isBlock() && player.isCrouching()) return;

  // Items always banned
  // format: 'string'|/^regex$/
  const bannedItems = [
    'industrialforegoing:infinity_backpack', // uuid based item, can't filter with NBT

    /^sophisticatedbackpacks:(.*backpack.*)$/, // uuid based item, can't filter with NBT

    /^sophisticatedstorage:.*shulker_box.*$/, // uuid based item, can't filter with NBT

    'cyclic:crate', // dumb item that doesn't use NBT correctly
    'cyclic:storage_bag',

    'minecraft:bundle',

    /^refinedstorage:.*_storage_(disk|block)$/, // uuid based item, can't filter with NBT

    'expatternprovider:package',

    'cyclic:mob_container',

    'ae2wtlib:wireless_universal_terminal',
    'ae2:wireless_crafting_terminal',
    'nuclearcraft:basic_storage_container',
    'nuclearcraft:advanced_storage_container',
    'nuclearcraft:du_storage_container',
    'nuclearcraft:elite_storage_container',

    'justdirethings:inventoryholder',
    'justdirethings:creaturecatcher',
    'refinedstorageaddons:wireless_crafting_grid',
    'refinedstorageaddons:creative_wireless_crafting_grid',
    'universalgrid:wireless_universal_grid',
    'universalgrid:creative_wireless_universal_grid',
    'megacells:bulk_item_cell',

    /^ae2:portable_item_cell_.*$/,
    /^megacells:portable_item_cell_.*$/,

    'rftoolsbuilder:builder',
    'rftoolsbuilder:mover',
    'rftoolsbuilder:vehicle_builder',
    'rftoolscontrol:craftingstation',
    'rftoolscontrol:processor',
    'rftoolscontrol:programmer',
    'rftoolscontrol:workbench',
    'rftoolsdim:dimlet_workbench',
    'rftoolsstorage:storage_scanner',
    'rftoolsutility:screen',
    'rftoolsutility:matter_beamer',

    'dankstorage:dank_1',
    'dankstorage:dank_2',
    'dankstorage:dank_3',
    'dankstorage:dank_4',
    'dankstorage:dank_5',
    'dankstorage:dank_6',
    'dankstorage:dank_7',
  ];
  // check for bannedItems
  for (const banned of bannedItems) {
    if (matchesPattern(item.id, banned)) {
      player.tell(Text.red('§lBanned Item:§r'));
      player.tell(
        Text.white(
          item.getDisplayName().getString() +
            ' cannot be inserted into the Creative Bin'
        )
      );
      event.cancel();
      return;
    }
  }

  if (!item.hasNBT()) return;

  /* Commented because not used, conditionalBannedItems should already cover these cases and is more flexible, but can be re-added if needed
  // Items only banned if they have NBT data (for the items losing their NBT data when empty)
  // format: 'string'|/^regex$/
  const bannedIfHasNBT = [
  ];

  // check for bannedIfHasNBT
  for (const bannedPattern of bannedIfHasNBT) {
    if (matchesPattern(item.id, bannedPattern)) {
      player.tell(Text.red("§lBlocked:§r "));
      player.tell(Text.white(item.getDisplayName().getString() + " has NBT data and cannot be inserted"));
      event.cancel();
      return;
    }
  }
  */

  // Items only banned if they have certain NBT data (like containing items/fluids) that don't reset when empty
  // format: { pattern: 'string'|/^regex$/, nbtPath: 'NBT.PATH', check: (value) => boolean evaluation }
  const conditionalBannedItems = [
    {
      pattern: /^minecraft:.*shulker_box$/,
      nbtPath: 'BlockEntityTag.Items',
      check: (value) => value && value.length > 0,
    },

    {
      pattern: /^industrialforegoing:.*_black_hole_unit$/,
      nbtPath: 'BlockEntityTag.stored',
      check: (value) => value && value !== 0,
    },
    {
      pattern: /^industrialforegoing:.*_black_hole_tank$/,
      nbtPath: 'BlockEntityTag.tank.Amount',
      check: (value) => value && value !== 0,
    },

    {
      pattern: 'thermal:satchel',
      nbtPath: 'ItemInv.ItemInv',
      check: (value) => value && value.length > 0,
    },

    {
      pattern: /^functionalstorage:.*$/,
      nbtPath: 'Tile',
      check: (value) => value,
    },

    {
      pattern: /^sophisticatedstorage:(.*barrel.*|.*chest.*)$/,
      nbtPath: 'uuid',
      check: (value) => value,
    },

    {
      pattern: 'mekanism:cardboard_box',
      nbtPath: 'mekData',
      check: (value) => value,
    },

    { pattern: /^ae2:.*_cell_.*$/, nbtPath: 'keys', check: (value) => value },

    {
      pattern: /^ae2omnicells:.*$/,
      nbtPath: 'ae_universal_cell_types_usage',
      check: (value) => value,
    },

    { pattern: /^appflux:fe.*$/, nbtPath: 'power', check: (value) => value },

    { pattern: /^appbot:mana.*$/, nbtPath: 'amount', check: (value) => value },
    { pattern: /^appbot:portable.*$/, nbtPath: 'amount', check: (value) => value },
    { pattern: /^appbot:creative.*$/, nbtPath: 'amount', check: (value) => value },

    {
      pattern: /^megacells:mana.*$/,
      nbtPath: 'amount',
      check: (value) => value,
    },
    {
      pattern: /^megacells:.*_storage_cell_.*$/,
      nbtPath: 'keys',
      check: (value) => value,
    },
    {
      pattern: /^megacells:.*portable_.*$/,
      nbtPath: 'keys',
      check: (value) => value,
    },
    {
      pattern: /^megacells:.*bulk.*$/,
      nbtPath: 'keys',
      check: (value) => value,
    },

    { pattern: /^crazyae2addons:.*/, nbtPath: 'keys', check: (value) => value },

    {
      pattern: 'mbtool:mbtool',
      nbtPath: 'Inventory.Items',
      check: (value) => value && value.length > 0,
    },

    {
      pattern: /^.*qio_drive_.*/,
      nbtPath: 'mekData.qioMetaCount',
      check: (value) => value,
    },

    {
      pattern: 'cyclic:filter_data',
      nbtPath: 'itemCount',
      check: (value) => value && value != 0,
    },
    {
      pattern: 'cyclic:ender_item_shelf',
      nbtPath: 'Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'cyclic:ender_shelf',
      nbtPath: 'Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'cyclic:tile_transporter',
      nbtPath: 'block',
      check: (value) => value,
    },

    {
      pattern: 'pneumaticcraft:liquid_hopper',
      nbtPath: 'BlockEntityTag',
      check: (value) => value,
    },

    {
      pattern: 'enderio:impulse_hopper',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:xp_vacuum',
      nbtPath: 'BlockEntityTag.Fluid.Tanks[0].Amount',
      check: (value) => value != 0,
    },

    {
      pattern: 'enderio:soul_binder',
      nbtPath: 'BlockEntityTag.Fluid.Tanks[0].Amount',
      check: (value) => value != 0,
    },
    {
      pattern: 'enderio:soul_binder',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:fluid_tank',
      nbtPath: 'BlockEntityTag.Fluid.Tanks[0].Amount',
      check: (value) => value != 0,
    },
    {
      pattern: 'enderio:fluid_tank',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:pressurized_fluid_tank',
      nbtPath: 'BlockEntityTag.Fluid.Tanks[0].Amount',
      check: (value) => value != 0,
    },
    {
      pattern: 'enderio:pressurized_fluid_tank',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:drain',
      nbtPath: 'BlockEntityTag.Fluid.Tanks[0].Amount',
      check: (value) => value != 0,
    },
    {
      pattern: 'enderio:drain',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:soul_engine',
      nbtPath: 'BlockEntityTag.Fluid.Tanks[0].Amount',
      check: (value) => value != 0,
    },
    {
      pattern: 'enderio:soul_engine',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:painting_machine',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:wired_charger',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:stirling_generator',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:sag_mill',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:slice_and_splice',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:powered_spawner',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:alloy_smelter',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:vacuum_chest',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:enchanter',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:crafter',
      nbtPath: 'BlockEntityTag.Items.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'enderio:filled_soul_vial',
      nbtPath: 'BlockEntityTag',
      check: (value) => value,
    },
    {
      pattern: 'industrialforegoing:mob_imprisonment_tool',
      nbtPath: 'entity',
      check: (value) => value,
    },
    {
      pattern: 'draconicevolution:draconium_chest',
      nbtPath: 'bc_tile_data.bc_caps.crafting_inv.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'draconicevolution:draconium_chest',
      nbtPath: 'bc_tile_data.bc_caps.energy_inv.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'draconicevolution:draconium_chest',
      nbtPath: 'bc_tile_data.bc_caps.furnace_inv.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'draconicevolution:draconium_chest',
      nbtPath: 'bc_tile_data.bc_caps.main_inv.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'draconicevolution:grinder',
      nbtPath: 'bc_tile_data.bc_caps.inventory.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'draconicevolution:awakened_crafting_injector',
      nbtPath: 'bc_tile_data.bc_caps.inventory.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'draconicevolution:basic_crafting_injector',
      nbtPath: 'bc_tile_data.bc_caps.inventory.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'draconicevolution:chaotic_crafting_injector',
      nbtPath: 'bc_tile_data.bc_caps.inventory.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'draconicevolution:crafting_core',
      nbtPath: 'bc_tile_data.bc_caps.inventory.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'draconicevolution:wyvern_crafting_injector',
      nbtPath: 'bc_tile_data.bc_caps.inventory.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'rftoolsutility:crafter1',
      nbtPath: 'BlockEntityTag.McItems',
      check: (value) => value && rftoolsCheck(value),
    },
    {
      pattern: 'rftoolsutility:crafter2',
      nbtPath: 'BlockEntityTag.McItems',
      check: (value) => value && rftoolsCheck(value),
    },
    {
      pattern: 'rftoolsutility:crafter3',
      nbtPath: 'BlockEntityTag.McItems',
      check: (value) => value && rftoolsCheck(value),
    },
    {
      pattern: 'pneumaticcraft:smart_chest',
      nbtPath: 'BlockEntityTag',
      check: (value) => value,
    },
    {
      pattern: 'pneumaticcraft:reinforced_chest',
      nbtPath: 'BlockEntityTag',
      check: (value) => value,
    },
    {
      pattern: 'avaritia:compressed_chest',
      nbtPath: 'stackCount',
      check: (value) => value > 0,
    },
    {
      pattern: /^.*mekanism.*/,
      nbtPath: 'mekData.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: /^.*mekanism.*/,
      nbtPath: 'mekData.componentUpgrade.upgrades',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: /^.*mekanism.*/,
      nbtPath: 'mekData.componentUpgrade.Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: /^.*mekanism.*/,
      nbtPath: 'mekData.FluidTanks',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: /^.*mekanism.*/,
      nbtPath: 'mekData.GasTanks',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: /^.*mekanism.*/,
      nbtPath: 'mekData.InfusionTanks',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'crazyae2addons:crazy_pattern_provider',
      nbtPath: 'returnInv',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'toolbelt:belt',
      nbtPath: 'Items',
      check: (value) => value && value.length > 0,
    },
    {
      pattern: 'botanicalmachinery:mechanical_mana_pool',
      nbtPath: 'BlockEntityTag.inv.Items',
      check: (value) => value && value.length > 0,
    },
  ];

  function rftoolsCheck (array) {
    for (const item of array) {
      if (item.id != 10.0) {
        console.log('true');
        return true;
      }
    }
    return false;
  }

  // check for conditionalBannedItems
  let nbtValue;
  for (const conditionalItem of conditionalBannedItems) {
    if (matchesPattern(item.id, conditionalItem.pattern)) {
      nbtValue = getNbtValue(item.nbt, conditionalItem.nbtPath);
      if (conditionalItem.check(nbtValue)) {
        player.tell(Text.red('§lBlocked:§r '));
        player.tell(
          Text.white(
            item.getDisplayName().getString() +
              ' contains items/fluids and cannot be inserted.'
          )
        );
        player.tell(Text.white('Empty it and try again'));
        event.cancel();
        return;
      }
    }
  }
});

function matchesPattern (itemId, pattern) {
  if (typeof pattern === 'string') return itemId === pattern;
  if (pattern instanceof RegExp) return pattern.test(itemId);
  return false;
}

function getNbtValue (nbt, path) {
  var parts = path.split('.');
  var value = nbt;
  for (var i = 0; i < parts.length; i++) {
    if (value === null || value === undefined) return undefined;
    value = value[parts[i]];
  }
  return value;
}
