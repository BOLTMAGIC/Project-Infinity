priority: 1;
MMEvents.createProcesses((event) => {
  // Tier 1 Seeds
  createSeedRecipes(event, [
    'mysticalagriculture:inferium_seeds',
    'mysticalagriculture:stone_seeds',
    'mysticalagriculture:dirt_seeds',
    'mysticalagriculture:wood_seeds',
    'mysticalagriculture:ice_seeds',
    'mysticalagriculture:deepslate_seeds',
    'mysticalagriculture:earth_seeds',
    'mysticalagriculture:water_seeds',
    'mysticalagriculture:air_seeds',
    'mysticalagriculture:fire_seeds',
  ]);

  // Tier 2 Seeds
  createSeedRecipes(event, [
    'mysticalagriculture:niter_seeds',
    'mysticalagriculture:plastic_seeds',
    'mysticalagriculture:nature_seeds',
    'mysticalagriculture:dye_seeds',
    'mysticalagriculture:nether_seeds',
    'mysticalagriculture:coal_seeds',
    'mysticalagriculture:coral_seeds',
    'mysticalagriculture:honey_seeds',
    'mysticalagriculture:amethyst_seeds',
    'mysticalagriculture:pig_seeds',
    'mysticalagriculture:chicken_seeds',
    'mysticalagriculture:cow_seeds',
    'mysticalagriculture:sheep_seeds',
    'mysticalagriculture:squid_seeds',
    'mysticalagriculture:fish_seeds',
    'mysticalagriculture:slime_seeds',
    'mysticalagriculture:turtle_seeds',
    'mysticalagriculture:rubber_seeds',
    'mysticalagriculture:silicon_seeds',
    'mysticalagriculture:sulfur_seeds',
    'mysticalagriculture:aluminum_seeds',
    'mysticalagriculture:apatite_seeds',
    'mysticalagriculture:grains_of_infinity_seeds',
    'mysticalagriculture:mystical_flower_seeds',
    'mysticalagriculture:menril_seeds',
    'mysticalagriculture:marble_seeds',
    'mysticalagriculture:basalt_seeds',
  ]);

  // Tier 3 Seeds
  createSeedRecipes(event, [
    'mysticalagriculture:boron_seeds',
    'mysticalagriculture:creeper_seeds',
    'mysticalagriculture:basalz_seeds',
    'mysticalagriculture:quartz_enriched_iron_seeds',
    'mysticalagriculture:spider_seeds',
    'mysticalagriculture:cognizant_dust_seeds',
    'mysticalagriculture:lithium_seeds',
    'mysticalagriculture:rabbit_seeds',
    'mysticalagriculture:tin_seeds',
    'mysticalagriculture:iron_seeds',
    'mysticalagriculture:copper_seeds',
    'mysticalagriculture:bronze_seeds',
    'mysticalagriculture:copper_alloy_seeds',
    'mysticalagriculture:redstone_alloy_seeds',
    'mysticalagriculture:zinc_seeds',
    'mysticalagriculture:nether_quartz_seeds',
    'mysticalagriculture:glowstone_seeds',
    'mysticalagriculture:brass_seeds',
    'mysticalagriculture:conductive_alloy_seeds',
    'mysticalagriculture:manasteel_seeds',
    'mysticalagriculture:silver_seeds',
    'mysticalagriculture:redstone_seeds',
    'mysticalagriculture:obsidian_seeds',
    'mysticalagriculture:lead_seeds',
    'mysticalagriculture:steeleaf_seeds',
    'mysticalagriculture:ironwood_seeds',
    'mysticalagriculture:graphite_seeds',
    'mysticalagriculture:prismarine_seeds',
    'mysticalagriculture:zombie_seeds',
    'mysticalagriculture:blizz_seeds',
    'mysticalagriculture:sky_stone_seeds',
    'mysticalagriculture:certus_quartz_seeds',
    'mysticalagriculture:blitz_seeds',
    'mysticalagriculture:skeleton_seeds',
  ]);

  // Tier 4 Seeds
  createSeedRecipes(event, [
    'mysticalagriculture:gold_seeds',
    'mysticalagriculture:lapis_lazuli_seeds',
    'mysticalagriculture:end_seeds',
    'mysticalagriculture:experience_seeds',
    'mysticalagriculture:blaze_seeds',
    'mysticalagriculture:ghast_seeds',
    'mysticalagriculture:enderman_seeds',
    'mysticalagriculture:steel_seeds',
    'mysticalagriculture:nickel_seeds',
    'mysticalagriculture:constantan_seeds',
    'mysticalagriculture:electrum_seeds',
    'mysticalagriculture:invar_seeds',
    'mysticalagriculture:tungsten_seeds',
    'mysticalagriculture:titanium_seeds',
    'mysticalagriculture:ruby_seeds',
    'mysticalagriculture:sapphire_seeds',
    'mysticalagriculture:peridot_seeds',
    'mysticalagriculture:soulium_seeds',
    'mysticalagriculture:signalum_seeds',
    'mysticalagriculture:lumium_seeds',
    'mysticalagriculture:flux_infused_ingot_seeds',
    'mysticalagriculture:cobalt_seeds',
    'mysticalagriculture:rose_gold_seeds',
    'mysticalagriculture:soularium_seeds',
    'mysticalagriculture:dark_steel_seeds',
    'mysticalagriculture:pulsating_alloy_seeds',
    'mysticalagriculture:energetic_alloy_seeds',
    'mysticalagriculture:elementium_seeds',
    'mysticalagriculture:osmium_seeds',
    'mysticalagriculture:fluorite_seeds',
    'mysticalagriculture:refined_glowstone_seeds',
    'mysticalagriculture:refined_obsidian_seeds',
    'mysticalagriculture:knightmetal_seeds',
    'mysticalagriculture:fiery_ingot_seeds',
    'mysticalagriculture:compressed_iron_seeds',
    'mysticalagriculture:fluix_seeds',
    'mysticalagriculture:energized_steel_seeds',
    'mysticalagriculture:blazing_crystal_seeds',
    'mysticalagriculture:uranium_seeds',
  ]);
});

function createSeedRecipes (event, seeds) {
  seeds.forEach((seed) => {
    const essence = seed.replace('_seeds', '_essence');

    event
      .create(`mm:essenceforge_${seed.replace(':', '_')}`)
      .structureId('mm:essenceforge_tier1_structure')
      .ticks(400)
      .parallelProcessing(true)
      // Input Energy
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:energy',
          amount: 1000000,
        },
      })
      // Input Ether
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:fluid',
          fluid: 'industrialforegoing:ether_gas',
          amount: 100,
        },
      })
      // Input Seed
      .input({
        type: 'mm:input/consume',
        chance: 0.0,
        ingredient: {
          type: 'mm:item',
          item: seed,
          count: 1,
        },
      })

      // Output Essence
      .output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: essence,
          count: 64,
        },
      });
  });
}
