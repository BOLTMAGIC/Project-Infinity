ServerEvents.recipes((event) => {
  create323(event, '4x mysticalagriculture:cognizant_dust', [
    'mysticalagriculture:cognizant_dust_essence',
  ]);

  create323(event, '4x born_in_chaos_v1:dark_metal_ingot', [
    'mysticalagriculture:dark_metal_ingot_essence',
  ]);

  create323(event, '4x cataclysm:ignitium_ingot', [
    'mysticalagriculture:ignitium_essence',
  ]);

  create323(event, 'avaritia:neutron_pile', [
    'mysticalagriculture:neutronium_essence',
  ]);

  create323(event, '2x industrialforegoing:plastic', [
    'mysticalagriculture:plastic_essence',
  ]);

  create323(event, 'allthemodium:vibranium_nugget', [
    'mysticalagriculture:vibranium_essence',
  ]);

  create323(event, '4x mekanism:ingot_uranium', [
    'mysticalagriculture:uranium_essence',
  ]);

  create323(event, 'allthemodium:unobtainium_nugget', [
    'mysticalagriculture:unobtainium_essence',
  ]);

  create323(event, '4x thermal:niter', ['mysticalagriculture:niter_essence']);

  create323(event, '8x nuclearcraft:boron_ingot', [
    'mysticalagriculture:boron_essence',
  ]);

  create323(event, 'allthemodium:allthemodium_nugget', [
    'mysticalagriculture:allthemodium_essence',
  ]);

  create323(event, 'thermal:cured_rubber', [
    'mysticalagriculture:rubber_essence',
  ]);

  create3x3same(event, '9x botania:life_essence', [
    'mysticalagriculture:gaia_spirit_essence',
  ]);

  create323(event, '8x nuclearcraft:lithium_ingot', [
    'mysticalagriculture:lithium_essence',
  ]);

  create3x3same(event, '8x minecraft:crying_obsidian', [
    'mysticalagriculture:obsidian_essence',
  ]);

  create3x3same(event, 'mekanism:pellet_plutonium', [
    'mysticalagriculture:plutonium_essence',
  ]);

  create323(event, '6x common_ore_library:manyullyn_ingot', [
    'mysticalagriculture:manyullyn_essence',
  ]);

  create323(event, '6x common_ore_library:cobalt_ingot', [
    'mysticalagriculture:cobalt_essence',
  ]);

  create323(event, '6x thermal:rose_gold_ingot', [
    'mysticalagriculture:rose_gold_essence',
  ]);

  create323(event, '24x minecraft:basalt', [
    'mysticalagriculture:basalt_essence',
  ]);

  create323(event, '24x enviromats:marble', [
    'mysticalagriculture:marble_essence',
  ]);

  create323(event, '8x silentgems:peridot', [
    'mysticalagriculture:peridot_essence',
  ]);

  create323(event, '4x nuclearcraft:titanium_ingot', [
    'mysticalagriculture:titanium_essence',
  ]);

  create323(event, '8x common_ore_library:tungsten_ingot', [
    'mysticalagriculture:tungsten_essence',
  ]);

  create323(event, '6x nuclearcraft:graphite_ingot', [
    'mysticalagriculture:graphite_essence',
  ]);

  create323(event, '8x common_ore_library:zinc_ingot', [
    'mysticalagriculture:zinc_essence',
  ]);

  create323(event, '24x enderio:silicon', [
    'mysticalagriculture:silicon_essence',
  ]);

  create3x3same(event, '24x nuclearcraft:silicon_gem', [
    'mysticalagriculture:silicon_essence',
  ]);

  create323(event, '4x megacells:sky_steel_ingot', [
    'mysticalagriculture:sky_steel_essence',
  ]);

  create3x3same(event, '2x pneumaticcraft:plastic', [
    'mysticalagriculture:plastic_essence',
  ]);
  
  event.shaped(Item.of('ae2:silicon', 20), ['EEE', ' E ', 'EEE'], {
    E: 'mysticalagriculture:silicon_essence',
  });
  
  event.shaped(Item.of('mysticalagriculture:soulstone_cobble', 4), ['ABA', 'CDC', 'ABA'], {
    A: 'mysticalagriculture:nether_essence',
    B: 'mysticalagriculture:soulium_essence',
    C: 'mysticalagriculture:stone_essence',
    D: 'mysticalagriculture:creeper_essence',
  });
});
