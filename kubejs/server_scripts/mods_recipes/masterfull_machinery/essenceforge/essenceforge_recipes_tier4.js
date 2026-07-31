priority: 1;
MMEvents.createProcesses((event) => {
  // --- Tier 1 ---
  const tier1Seeds = [
    'mysticalagriculture:earth_seeds',
    'mysticalagriculture:water_seeds',
    'mysticalagriculture:air_seeds',
    'mysticalagriculture:fire_seeds',
    'mysticalagriculture:inferium_seeds',
    'mysticalagriculture:stone_seeds',
    'mysticalagriculture:dirt_seeds',
    'mysticalagriculture:wood_seeds',
    'mysticalagriculture:ice_seeds',
    'mysticalagriculture:deepslate_seeds',
  ];

  // --- Tier 2 ---
  const tier2Seeds = [
    'mysticalagriculture:niter_seeds',
    'mysticalagriculture:plastic_seeds',
    'mysticalagriculture:nature_seeds',
    'mysticalagriculture:dye_seeds',
    'mysticalagriculture:nether_seeds',
    'mysticalagriculture:coal_seeds',
    'mysticalagriculture:coral_seeds',
    'mysticalagriculture:honey_seeds',
    'mysticalagriculture:pig_seeds',
    'mysticalagriculture:chicken_seeds',
    'mysticalagriculture:cow_seeds',
    'mysticalagriculture:sheep_seeds',
    'mysticalagriculture:squid_seeds',
    'mysticalagriculture:fish_seeds',
    'mysticalagriculture:slime_seeds',
    'mysticalagriculture:turtle_seeds',
    'mysticalagriculture:amethyst_seeds',
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
  ];

  // --- Tier 3 ---
  const tier3Seeds = [
    'mysticalagriculture:boron_seeds',
    'mysticalagriculture:quartz_enriched_iron_seeds',
    'mysticalagriculture:cognizant_dust_seeds',
    'mysticalagriculture:lithium_seeds',
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
    'mysticalagriculture:sky_stone_seeds',
    'mysticalagriculture:certus_quartz_seeds',
    'mysticalagriculture:creeper_seeds',
    'mysticalagriculture:skeleton_seeds',
    'mysticalagriculture:spider_seeds',
    'mysticalagriculture:zombie_seeds',
    'mysticalagriculture:basalz_seeds',
    'mysticalagriculture:blizz_seeds',
    'mysticalagriculture:blitz_seeds',
    'mysticalagriculture:rabbit_seeds',
  ];

  // --- Tier 4 ---
  const tier4Seeds = [
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
  ];

  // --- Tier 5 ---
  const tier5Seeds = [
    'mysticalagriculture:ignitium_seeds',
    'mysticalagriculture:sky_steel_seeds',
    'mysticalagriculture:vibrant_alloy_seeds',
    'mysticalagriculture:end_steel_seeds',
    'mysticalagriculture:diamond_seeds',
    'mysticalagriculture:emerald_seeds',
    'mysticalagriculture:terrasteel_seeds',
    'mysticalagriculture:draconium_seeds',
    'mysticalagriculture:netherite_seeds',
    'mysticalagriculture:wither_skeleton_seeds',
    'mysticalagriculture:platinum_seeds',
    'mysticalagriculture:iridium_seeds',
    'mysticalagriculture:niotic_crystal_seeds',
    'mysticalagriculture:spirited_crystal_seeds',
    'mysticalagriculture:enderium_seeds',
    'mysticalagriculture:flux_infused_gem_seeds',
    'mysticalagriculture:uraninite_seeds',
    'mysticalagriculture:manyullyn_seeds',
  ];

  // --- Tier 6 ---
  const tier6Seeds = [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:dark_metal_ingot_seeds',
    'mysticalagriculture:plutonium_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
    'mysticalagriculture:nether_star_seeds',
    'mysticalagriculture:dragon_egg_seeds',
    'mysticalagriculture:gaia_spirit_seeds',
    'mysticalagriculture:awakened_draconium_seeds',
    'mysticalagriculture:neutronium_seeds',
    'mysticalagriculture:nitro_crystal_seeds',
  ];
  const seedToCrux = {
    'mysticalagriculture:allthemodium_seeds': 'allthemodium:allthemodium_block',
    'mysticalagriculture:dark_metal_ingot_seeds':
      'born_in_chaos_v1:dark_metal_block',
    'mysticalagriculture:plutonium_seeds': 'evolvedmekanism:block_better_gold',
    'mysticalagriculture:unobtainium_seeds': 'allthemodium:unobtainium_block',
    'mysticalagriculture:vibranium_seeds': 'allthemodium:vibranium_block',
    'mysticalagriculture:nether_star_seeds':
      'mysticalagradditions:nether_star_crux',
    'mysticalagriculture:dragon_egg_seeds':
      'mysticalagradditions:dragon_egg_crux',
    'mysticalagriculture:gaia_spirit_seeds':
      'mysticalagradditions:gaia_spirit_crux',
    'mysticalagriculture:awakened_draconium_seeds':
      'mysticalagradditions:awakened_draconium_crux',
    'mysticalagriculture:neutronium_seeds':
      'mysticalagradditions:neutronium_crux',
    'mysticalagriculture:nitro_crystal_seeds':
      'mysticalagradditions:nitro_crystal_crux',
  };

  const tiers = [
    tier1Seeds,
    tier2Seeds,
    tier3Seeds,
    tier4Seeds,
    tier5Seeds,
    tier6Seeds,
  ];
  // Ether gas amount per seed for tiers 1..6 (per seed)
  const gasPerSeed = [75, 125, 175, 225, 275, 350];

  for (var i = 0; i < 6; i++) {
    var recipeId = `mm:essenceforge_tier4_tier${i + 1}_seeds`;
    var seeds = tiers[i];

    var recipe = event
      .create(recipeId)
      .structureId('mm:essenceforge_tier4_structure')
      .ticks(20)
      .parallelProcessing(false)
      .input({
        type: 'mm:input/consume',
        ingredient: { type: 'mm:energy', amount: 2147483647 },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:fluid',
          fluid: 'industrialforegoing:ether_gas',
          amount: gasPerSeed[i] * seeds.length,
        },
      });

    seeds.forEach((seed) => {
      recipe
        .input({
          type: 'mm:input/consume',
          chance: 0.0,
          ingredient: { type: 'mm:item', item: seed, count: 1 },
        })
        .output({
          type: 'mm:output/simple',
          ingredient: {
            type: 'mm:item',
            item: seed.replace('_seeds', '_essence'),
            count: 1024,
          },
        });
      if (i == 5) {
        const crux = seedToCrux[seed];
        if (!crux) {
          console.error(`No Crux found for: ${seed}`);
          return;
        }
        recipe.input({
          type: 'mm:input/consume',
          chance: 0.0,
          ingredient: { type: 'mm:item', item: crux, count: 1 },
        });
      }
    });
  }
});

