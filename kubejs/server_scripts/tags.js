priority: 0;

//add Tags to Items
ServerEvents.tags('item', (event) => {
  event.add('forge:dusts/aluminium', 'common_ore_library:aluminum_dust');

  event.add('forge:plastic', 'pneumaticcraft:plastic');

  event.add('mysticalagriculture:essences', [
    'mysticalagriculture:boron_essence',
    'mysticalagriculture:cognizant_dust_essence',
    'mysticalagriculture:dark_metal_ingot_essence',
    'mysticalagriculture:ignitium_essence',
    'mysticalagriculture:niter_essence',
    'mysticalagriculture:plastic_essence',
    'mysticalagriculture:sky_steel_essence',
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
    'mysticalagriculture:plutonium_essence',
    'mysticalagriculture:lithium_essence',
  ]);

  event.add('mysticalagriculture:seeds', [
    'mysticalagriculture:boron_seeds',
    'mysticalagriculture:cognizant_dust_seeds',
    'mysticalagriculture:dark_metal_ingot_seeds',
    'mysticalagriculture:niter_seeds',
    'mysticalagriculture:plastic_seeds',
    'mysticalagriculture:ignitium_seeds',
    'mysticalagriculture:sky_steel_seeds',
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
    'mysticalagriculture:plutonium_seeds',
    'mysticalagriculture:lithium_seeds',
  ]);

  event.add('forge:clay_balls', 'minecraft:clay_ball');
  event.add('forge:fruits/chorus', 'minecraft:chorus_fruit');
  event.add('forge:vegetables/beetroot', 'minecraft:beetroot');
  event.add('forge:rubber', 'thermal:cured_rubber');

  event.add('exdeorum:hammers', [
    'thermal_extra:signalum_hammer',
    'thermal_extra:lumium_hammer',
    'thermal_extra:enderium_hammer',
    'thermal_extra:soul_infused_hammer',
    'thermal_extra:shellite_hammer',
    'thermal_extra:twinite_hammer',
    'thermal_extra:dragonsteel_hammer',
    'thermal_extra:abyssal_hammer',
  ]);

  event.add('minecraft:wooden_slabs', 'minecraft:wooden_slabs');

  event.add('exdeorum:sieve', [
    'exdeorum:oak_sieve',
    'exdeorum:spruce_sieve',
    'exdeorum:birch_sieve',
    'exdeorum:jungle_sieve',
    'exdeorum:acacia_sieve',
    'exdeorum:dark_oak_sieve',
    'exdeorum:mangrove_sieve',
    'exdeorum:cherry_sieve',
    'exdeorum:bamboo_sieve',
    'exdeorum:crimson_sieve',
    'exdeorum:warped_sieve',
    'exdeorum:skyroot_sieve',
  ]);

  event.add('silentgems:goodgems', [
    'silentgems:carnelian',
    'silentgems:topaz',
    'silentgems:citrine',
    'silentgems:heliodor',
    'silentgems:moldavite',
    'silentgems:peridot',
    'silentgems:turquoise',
    'silentgems:kyanite',
    'silentgems:iolite',
    'silentgems:alexandrite',
    'silentgems:ammolite',
    'silentgems:rose_quartz',
    'silentgems:black_diamond',
    'silentgems:white_diamond',
  ]);

  event.add('curios:curio', 'compactmachines:personal_shrinking_device');
});

//remove Tags from Items
ServerEvents.tags('item', (event) => {
  event.remove(
    'mysticalagriculture:infusion_crystals',
    'mysticalagriculture:infusion_crystal'
  );
});

//add Tags to Fluids
ServerEvents.tags('fluid', (event) => {
  event.add('forge:uranium_hexafluoride', 'mekanism:uranium_hexafluoride');
  event.add('mekanism:bio', 'mekanism:bio');
  event.add('forge:chlorine', 'mekanism:chlorine');
  event.add('mekanism:water_vapor', ['mekanism:water_vapor', 'mekanism:steam']);
  event.add('mekanism:steam', ['mekanism:water_vapor', 'mekanism:steam']);
  event.add('forge:heavy_water', [
    'mekanism:heavy_water',
    'nuclearcraft:heavy_water',
  ]);
  event.add('forge:hydrogen_chloride', 'mekanism:hydrogen_chlorine');
  event.add('forge:sulfur_trioxide', 'mekanism:sulfur_trioxide');
  event.add('minecraft:water', 'minecraft:water');
  event.add('bloodmagic:life_essence_fluid', 'bloodmagic:life_essence_fluid');

  event.add('getittogetherdrops:ignored', [
    'minecraft:coal',
    'minecraft:coal_block',
    'minecraft:nether_star',
  ]);
});

//add Tags to Blocks
ServerEvents.tags('block', (event) => {
  event.add('mysticalagriculture:crops', [
    'mysticalagriculture:boron_crop',
    'mysticalagriculture:cognizant_dust_crop',
    'mysticalagriculture:dark_metal_ingot_crop',
    'mysticalagriculture:niter_crop',
    'mysticalagriculture:plastic_crop',
    'mysticalagriculture:ignitium_crop',
    'mysticalagriculture:sky_steel_crop',
    'mysticalagriculture:allthemodium_crop',
    'mysticalagriculture:unobtainium_crop',
    'mysticalagriculture:vibranium_crop',
    'mysticalagriculture:plutonium_crop',
    'mysticalagriculture:lithium_crop',
  ]);

  event.add('minecraft:beacon_base_blocks', [
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block',
  ]);

  event.add('buildinggadgets2:deny', [
    'botanicalmachinery:alfheim_market',
    'botanicalmachinery:industrial_agglomeration_factory',
    'botanicalmachinery:mana_battery',
    'botanicalmachinery:mana_battery_creative',
    'botanicalmachinery:mechanical_apothecary',
    'botanicalmachinery:mechanical_brewery',
    'botanicalmachinery:mechanical_daisy',
    'botanicalmachinery:mechanical_mana_pool',
    'botanicalmachinery:mechanical_runic_altar',
    'botanicalextramachinery:base_mana_pool',
    'botanicalextramachinery:upgraded_mana_pool',
    'botanicalextramachinery:advanced_mana_pool',
    'botanicalextramachinery:ultimate_mana_pool',
    'botanicalextramachinery:base_runic_altar',
    'botanicalextramachinery:upgraded_runic_altar',
    'botanicalextramachinery:advanced_runic_altar',
    'botanicalextramachinery:ultimate_runic_altar',
    'botanicalextramachinery:base_daisy',
    'botanicalextramachinery:upgraded_daisy',
    'botanicalextramachinery:advanced_daisy',
    'botanicalextramachinery:ultimate_daisy',
    'botanicalextramachinery:base_apothecary',
    'botanicalextramachinery:upgraded_apothecary',
    'botanicalextramachinery:advanced_apothecary',
    'botanicalextramachinery:ultimate_apothecary',
    'botanicalextramachinery:base_industrial_agglomeration_factory',
    'botanicalextramachinery:upgraded_industrial_agglomeration_factory',
    'botanicalextramachinery:advanced_industrial_agglomeration_factory',
    'botanicalextramachinery:ultimate_industrial_agglomeration_factory',
    'botanicalextramachinery:base_alfheim_market',
    'botanicalextramachinery:upgraded_alfheim_market',
    'botanicalextramachinery:advanced_alfheim_market',
    'botanicalextramachinery:ultimate_alfheim_market',
    'botanicalextramachinery:base_orechid',
    'botanicalextramachinery:upgraded_orechid',
    'botanicalextramachinery:advanced_orechid',
    'botanicalextramachinery:ultimate_orechid',
    'botanicalextramachinery:jaded_amaranthus',
    'botanicalextramachinery:greenhouse',
    'mekanism:creative_bin',
    'mekanism:creative_fluid_tank',
    'mekanism:creative_chemical_tank',
    'mekanism:creative_energy_cube',
  ]);

  event.add('justdirethings:tick_speed_deny', [
    'solarflux:sp_1',
    'solarflux:sp_2',
    'solarflux:sp_3',
    'solarflux:sp_4',
    'solarflux:sp_5',
    'solarflux:sp_6',
    'solarflux:sp_7',
    'solarflux:sp_8',
    'solarflux:sp_de.wyvern',
    'solarflux:sp_de.draconic',
    'solarflux:sp_de.chaotic',
    'solarflux:sp_avaritia.neutronium',
    'solarflux:sp_avaritia.infinity',
    'projectexpansion:basic_power_flower',
    'projectexpansion:dark_power_flower',
    'projectexpansion:red_power_flower',
    'projectexpansion:magenta_power_flower',
    'projectexpansion:pink_power_flower',
    'projectexpansion:purple_power_flower',
    'projectexpansion:violet_power_flower',
    'projectexpansion:blue_power_flower',
    'projectexpansion:cyan_power_flower',
    'projectexpansion:green_power_flower',
    'projectexpansion:lime_power_flower',
    'projectexpansion:yellow_power_flower',
    'projectexpansion:orange_power_flower',
    'projectexpansion:white_power_flower',
    'projectexpansion:fading_power_flower',
    'projectexpansion:final_power_flower',
  ]);

  event.add('justdirethings:paradox_deny', [
    'solarflux:sp_1',
    'solarflux:sp_2',
    'solarflux:sp_3',
    'solarflux:sp_4',
    'solarflux:sp_5',
    'solarflux:sp_6',
    'solarflux:sp_7',
    'solarflux:sp_8',
    'solarflux:sp_de.wyvern',
    'solarflux:sp_de.draconic',
    'solarflux:sp_de.chaotic',
    'solarflux:sp_avaritia.neutronium',
    'solarflux:sp_avaritia.infinity',
    'projectexpansion:basic_power_flower',
    'projectexpansion:dark_power_flower',
    'projectexpansion:red_power_flower',
    'projectexpansion:magenta_power_flower',
    'projectexpansion:pink_power_flower',
    'projectexpansion:purple_power_flower',
    'projectexpansion:violet_power_flower',
    'projectexpansion:blue_power_flower',
    'projectexpansion:cyan_power_flower',
    'projectexpansion:green_power_flower',
    'projectexpansion:lime_power_flower',
    'projectexpansion:yellow_power_flower',
    'projectexpansion:orange_power_flower',
    'projectexpansion:white_power_flower',
    'projectexpansion:fading_power_flower',
    'projectexpansion:final_power_flower',
  ]);
});
