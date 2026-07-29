ServerEvents.recipes((event) => {
  // voidminers:caerium_miner
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['AAAAA', 'ABCBA', 'DEFED', 'DBCBD', 'DDGDD'],
      key: {
        A: {
          tag: 'forge:glass',
        },
        B: {
          item: 'kubejs:azure_silver_ingot',
        },
        C: {
          item: 'actuallyadditions:phantom_breaker',
        },
        D: {
          item: 'voidminers:caerium_block',
        },
        E: {
          item: 'kubejs:thermonuclear_alloy_block',
        },
        F: {
          item: 'voidminers:azurine_miner',
        },
        G: {
          item: 'minecraft:obsidian',
        },
      },
      result: {
        item: 'voidminers:caerium_miner',
      },
    })
    .id('voidminers:caerium_miner');
});

ServerEvents.recipes((event) => {
  // voidminers:solar_caerium_panel
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: ['AAAAA', 'ABCBA', 'DEFED', 'DBCBD', 'DDGDD'],
      key: {
        A: {
          tag: 'forge:glass',
        },
        B: {
          item: 'kubejs:azure_silver_ingot',
        },
        C: {
          item: 'solarflux:sp_de.wyvern',
        },
        D: {
          item: 'voidminers:solar_caerium_block',
        },
        E: {
          item: 'kubejs:thermonuclear_alloy_block',
        },
        F: {
          item: 'voidminers:azurine_miner',
        },
        G: {
          item: 'minecraft:obsidian',
        },
      },
      result: {
        item: 'voidminers:solar_caerium_panel',
      },
    })
    .id('voidminers:solar_caerium_panel');
});

ServerEvents.recipes((event) => {
  // voidminers:amethystine_miner
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAA',
        'ABCDCBA',
        'AEBFBEA',
        'AGEBEGA',
        'HEBFBEH',
        'HBCDCBH',
        'HHHHHHH',
      ],
      key: {
        A: {
          tag: 'forge:glass',
        },
        B: {
          item: 'kubejs:element_ingot',
        },
        C: {
          item: 'justdirethings:eclipsealloy_ingot',
        },
        D: {
          item: 'justdirethings:blockbreakert2',
        },
        E: {
          item: 'kubejs:shining_alloy_block',
        },
        F: {
          item: 'silentgems:white_diamond',
        },
        G: {
          item: 'voidminers:caerium_miner',
        },
        H: {
          item: 'voidminers:amethystine_block',
        },
      },
      result: {
        item: 'voidminers:amethystine_miner',
      },
    })
    .id('voidminers:amethystine_miner');
});

ServerEvents.recipes((event) => {
  // voidminers:solar_amethystine_panel
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAA',
        'ABCDCBA',
        'AEBFBEA',
        'AGEBEGA',
        'HEBFBEH',
        'HBCDCBH',
        'HHHHHHH',
      ],
      key: {
        A: {
          tag: 'forge:glass',
        },
        B: {
          item: 'kubejs:element_ingot',
        },
        C: {
          item: 'justdirethings:eclipsealloy_ingot',
        },
        D: {
          item: 'solarflux:sp_de.draconic',
        },
        E: {
          item: 'kubejs:shining_alloy_block',
        },
        F: {
          item: 'silentgems:white_diamond',
        },
        G: {
          item: 'voidminers:caerium_miner',
        },
        H: {
          item: 'voidminers:solar_amethystine_block',
        },
      },
      result: {
        item: 'voidminers:solar_amethystine_panel',
      },
    })
    .id('voidminers:solar_amethystine_panel');
});

ServerEvents.recipes((event) => {
  // voidminers:rosarium_miner
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAAAA',
        'ABCDEDFGA',
        'AHDIJKDLA',
        'ADMNONPDA',
        'AEQOROQEA',
        'SDTNONTDS',
        'STDUJVDTS',
        'SGUDEDVBS',
        'SSSSSSSSS',
      ],
      key: {
        A: {
          tag: 'forge:glass',
        },
        B: {
          item: 'projectexpansion:pink_matter',
        },
        C: {
          item: 'cataclysm:lacrima',
        },
        D: {
          item: 'ifeu:dragon_star_block',
        },
        E: {
          item: 'voidminers:amethystine_miner',
        },
        F: {
          item: 'cataclysm:essence_of_the_storm',
        },
        G: {
          item: 'projectexpansion:violet_matter',
        },
        H: {
          item: 'cataclysm:ancient_metal_ingot',
        },
        I: {
          item: 'cataclysm:witherite_ingot',
        },
        J: {
          item: 'kubejs:spectrum_alloy_block',
        },
        K: {
          item: 'cataclysm:ignitium_ingot',
        },
        L: {
          item: 'cataclysm:cursium_ingot',
        },
        M: {
          item: 'armorplus:guardian_scale',
        },
        N: {
          item: 'nuclearcraft:neutronium_ingot',
        },
        O: {
          item: 'kubejs:infinity_1',
        },
        P: {
          item: 'armorplus:ender_dragon_scale',
        },
        Q: {
          item: 'evolvedmekanism:block_alloy_exoversal',
        },
        R: {
          item: 'thermalendergy:endergy_upgrade_3',
        },
        S: {
          item: 'voidminers:rosarium_block',
        },
        T: {
          item: 'kubejs:zahraanite',
        },
        U: {
          item: 'kubejs:starmetal_block',
        },
        V: {
          item: 'kubejs:empowered_super_block',
        },
      },
      result: {
        item: 'voidminers:rosarium_miner',
      },
    })
    .id('voidminers:rosarium_miner');
});

ServerEvents.recipes((event) => {
  // voidminers:solar_rosarium_panel
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AAAAAAAAA',
        'ABCDEDFGA',
        'AHDIJKDLA',
        'ADMNONPDA',
        'AEQOROQEA',
        'SDTNONTDS',
        'STDUJVDTS',
        'SGUDEDVBS',
        'SSSSSSSSS',
      ],
      key: {
        A: {
          item: 'minecraft:glass',
        },
        B: {
          item: 'projectexpansion:pink_matter',
        },
        C: {
          item: 'cataclysm:lacrima',
        },
        D: {
          item: 'ifeu:dragon_star_block',
        },
        E: {
          item: 'voidminers:amethystine_miner',
        },
        F: {
          item: 'cataclysm:essence_of_the_storm',
        },
        G: {
          item: 'projectexpansion:violet_matter',
        },
        H: {
          item: 'cataclysm:ancient_metal_ingot',
        },
        I: {
          item: 'cataclysm:witherite_ingot',
        },
        J: {
          item: 'kubejs:spectrum_alloy_block',
        },
        K: {
          item: 'cataclysm:ignitium_ingot',
        },
        L: {
          item: 'cataclysm:cursium_ingot',
        },
        M: {
          item: 'armorplus:guardian_scale',
        },
        N: {
          item: 'solarflux:sp_de.chaotic',
        },
        O: {
          item: 'kubejs:infinity_1',
        },
        P: {
          item: 'armorplus:ender_dragon_scale',
        },
        Q: {
          item: 'evolvedmekanism:block_alloy_exoversal',
        },
        R: {
          item: 'thermalendergy:endergy_upgrade_3',
        },
        S: {
          item: 'voidminers:rosarium_block',
        },
        T: {
          item: 'kubejs:zahraanite',
        },
        U: {
          item: 'kubejs:starmetal_block',
        },
        V: {
          item: 'kubejs:empowered_super_block',
        },
      },
      result: {
        item: 'voidminers:solar_rosarium_panel',
      },
    })
    .id('voidminers:solar_rosarium_panel');
});
