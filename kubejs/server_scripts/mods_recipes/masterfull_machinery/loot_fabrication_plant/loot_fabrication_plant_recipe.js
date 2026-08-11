//priority: 1

(function () {
  const lootByMob = {
    'allthemodium/piglich': [
      { item: 'allthemodium:piglich_heart', outCount: 4 },
    ],

    blaze: [
      { item: 'minecraft:blaze_rod', outCount: 16 },
      { item: 'igleelib:blaze_shard', outCount: 2 },
      { item: 'kubejs:blaze_heart', outCount: 4 },
    ],

    'bomd/gauntlet': [
      { item: 'bosses_of_mass_destruction:blazing_eye', outCount: 1 },
      { item: 'minecraft:obsidian', outCount: 16 },
      { item: 'minecraft:crying_obsidian', outCount: 16 },
      { item: 'minecraft:ancient_debris', outCount: 1 },
    ],

    'bomd/lich': [
      { item: 'bosses_of_mass_destruction:ancient_anima', outCount: 1 },
      { item: 'minecraft:bone', outCount: 64 },
      { item: 'minecraft:diamond', outCount: 16 },
    ],

    'bomd/obsidilith': [
      { item: 'bosses_of_mass_destruction:obsidian_heart', outCount: 1 },
      { item: 'minecraft:obsidian', outCount: 32 },
      { item: 'minecraft:purpur_block', outCount: 64 },
    ],

    'bomd/void_blossom': [
      { item: 'bosses_of_mass_destruction:void_thorn', outCount: 1 },
      { item: 'minecraft:chorus_fruit', outCount: 64 },
      { item: 'minecraft:oak_sapling', outCount: 64 },
      { item: 'bosses_of_mass_destruction:crystal_fruit', outCount: 1 },
    ],

    'born_in_chaos/dark_vortex': [
      { item: 'born_in_chaos_v1:ethereal_spirit', outCount: 4 },
    ],

    'born_in_chaos/dire_hound_leader': [
      { item: 'born_in_chaos_v1:monster_flesh', outCount: 32 },
      { item: 'born_in_chaos_v1:fangofthe_hound_leader', outCount: 8 },
    ],

    'born_in_chaos/lord_pumpkinhead': [
      { item: 'born_in_chaos_v1:lord_pumpkinheads_lamp', outCount: 1 },
      { item: 'minecraft:pumpkin_seeds', outCount: 64 },
      { item: 'born_in_chaos_v1:holiday_candy', outCount: 16 },
    ],

    'born_in_chaos/missioner': [
      { item: 'born_in_chaos_v1:pieceofdarkmetal', outCount: 3 },
      { item: 'born_in_chaos_v1:ethereal_spirit', outCount: 1 },
      { item: 'bhc:red_heart', outCount: 1 },
    ],

    'botania/gaia_spirit': [{ item: 'botania:life_essence', outCount: 1 }],

    'cataclysm/ancient_remnant': [
      { item: 'cataclysm:ancient_metal_ingot', outCount: 4 },
      { item: 'cataclysm:necklace_of_the_desert', outCount: 1 },
    ],

    'cataclysm/ender_golem': [
      { item: 'cataclysm:enderite_ingot', outCount: 4 },
      { item: 'cataclysm:void_core', outCount: 1 },
      { item: 'cataclysm:void_jaw', outCount: 1 },
      { item: 'kubejs:voidmetal_ingot', outCount: 4 },
    ],

    'cataclysm/harbinger': [{ item: 'cataclysm:witherite_ingot', outCount: 4 }],

    'cataclysm/maledictus': [
      { item: 'cataclysm:cursium_ingot', outCount: 4 },
      { item: 'cataclysm:athame', outCount: 1 },
    ],

    chicken: [
      { item: 'minecraft:chicken', outCount: 32 },
      { item: 'minecraft:feather', outCount: 24 },
    ],

    cod: [
      { item: 'minecraft:cod', outCount: 32 },
      { item: 'minecraft:bone_meal', outCount: 2 },
      { item: 'born_in_chaos_v1:rotten_fish', outCount: 4 },
    ],

    cow: [
      { item: 'minecraft:beef', outCount: 32 },
      { item: 'minecraft:leather', outCount: 24 },
    ],

    creeper: [
      { item: 'minecraft:gunpowder', outCount: 32 },
      { item: 'minecraft:creeper_head', outCount: 4 },
      { item: 'kubejs:creeper_heart', outCount: 4 },
    ],

    drowned: [
      { item: 'minecraft:rotten_flesh', outCount: 64 },
      { item: 'minecraft:copper_ingot', outCount: 4 },
    ],

    elder_guardian: [
      { item: 'minecraft:cod', outCount: 16 },
      { item: 'minecraft:salmon', outCount: 16 },
      { item: 'minecraft:pufferfish', outCount: 16 },
      { item: 'minecraft:tropical_fish', outCount: 16 },
      { item: 'minecraft:prismarine_crystals', outCount: 16 },
      { item: 'minecraft:prismarine_shard', outCount: 16 },
      { item: 'minecraft:wet_sponge', outCount: 16 },
    ],

    ender_dragon: [
      { item: 'minecraft:dragon_breath', outCount: 16 },
      { item: 'minecraft:dragon_egg', outCount: 1 },
      { item: 'kubejs:left_dragon_heart', outCount: 1 },
      { item: 'kubejs:right_dragon_heart', outCount: 1 },
      { item: 'bhc:green_heart', outCount: 1 },
    ],

    enderman: [
      { item: 'minecraft:ender_pearl', outCount: 16 },
      { item: 'minecraft:end_crystal', outCount: 1 },
      { item: 'enderio:enderman_head', outCount: 1 },
      { item: 'outer_end:stalker_meat', outCount: 32 },
    ],

    evoker: [
      { item: 'minecraft:totem_of_undying', outCount: 2 },
      { item: 'minecraft:emerald', outCount: 16 },
    ],

    ghast: [
      { item: 'minecraft:ghast_tear', outCount: 16 },
      { item: 'minecraft:gunpowder', outCount: 32 },
    ],

    glow_squid: [{ item: 'minecraft:glow_ink_sac', outCount: 32 }],

    guardian: [
      { item: 'minecraft:cod', outCount: 24 },
      { item: 'minecraft:prismarine_crystals', outCount: 16 },
    ],

    hoglin: [
      { item: 'minecraft:porkchop', outCount: 32 },
      { item: 'minecraft:leather', outCount: 16 },
    ],

    iron_golem: [
      { item: 'minecraft:iron_ingot', outCount: 32 },
      { item: 'minecraft:poppy', outCount: 24 },
    ],

    magma_cube: [{ item: 'minecraft:magma_cream', outCount: 32 }],

    mooshroom: [
      { item: 'minecraft:beef', outCount: 32 },
      { item: 'minecraft:leather', outCount: 24 },
      { item: 'minecraft:red_mushroom', outCount: 16 },
      { item: 'minecraft:brown_mushroom', outCount: 16 },
    ],

    phantom: [{ item: 'minecraft:phantom_membrane', outCount: 8 }],

    pig: [{ item: 'minecraft:porkchop', outCount: 32 }],

    polar_bear: [
      { item: 'minecraft:cod', outCount: 32 },
      { item: 'minecraft:salmon', outCount: 8 },
    ],

    rabbit: [
      { item: 'minecraft:rabbit_hide', outCount: 32 },
      { item: 'minecraft:rabbit', outCount: 32 },
      { item: 'minecraft:rabbit_foot', outCount: 8 },
    ],

    sheep: [
      { item: 'minecraft:white_wool', outCount: 32 },
      { item: 'minecraft:orange_wool', outCount: 32 },
      { item: 'minecraft:magenta_wool', outCount: 32 },
      { item: 'minecraft:light_blue_wool', outCount: 32 },
      { item: 'minecraft:yellow_wool', outCount: 32 },
      { item: 'minecraft:lime_wool', outCount: 32 },
      { item: 'minecraft:pink_wool', outCount: 32 },
      { item: 'minecraft:gray_wool', outCount: 32 },
      { item: 'minecraft:light_gray_wool', outCount: 32 },
      { item: 'minecraft:cyan_wool', outCount: 32 },
      { item: 'minecraft:purple_wool', outCount: 32 },
      { item: 'minecraft:blue_wool', outCount: 32 },
      { item: 'minecraft:brown_wool', outCount: 32 },
      { item: 'minecraft:green_wool', outCount: 32 },
      { item: 'minecraft:red_wool', outCount: 32 },
      { item: 'minecraft:black_wool', outCount: 32 },
      { item: 'minecraft:mutton', outCount: 32 },
    ],

    shulker: [
      { item: 'minecraft:shulker_shell', outCount: 32 },
      { item: 'minecraft:end_rod', outCount: 32 },
      { item: 'kubejs:plasteel_ore', outCount: 32 },
    ],

    skeleton: [
      { item: 'minecraft:arrow', outCount: 32 },
      { item: 'minecraft:bone', outCount: 24 },
      { item: 'minecraft:skeleton_skull', outCount: 4 },
      { item: 'bhc:red_heart', outCount: 1 },
    ],

    slime: [
      { item: 'minecraft:slime_ball', outCount: 32 },
      { item: 'minecraft:slime_block', outCount: 8 },
    ],

    snow_golem: [{ item: 'minecraft:snowball', outCount: 32 }],

    spider: [
      { item: 'minecraft:string', outCount: 32 },
      { item: 'minecraft:spider_eye', outCount: 16 },
      { item: 'minecraft:cobweb', outCount: 4 },
    ],

    squid: [{ item: 'minecraft:ink_sac', outCount: 32 }],

    'thermal/basalz': [{ item: 'thermal:basalz_rod', outCount: 16 }],

    'thermal/blizz': [{ item: 'thermal:blizz_rod', outCount: 16 }],

    'twilightforest/alpha_yeti': [
      { item: 'twilightforest:ice_bomb', outCount: 32 },
      { item: 'twilightforest:alpha_yeti_trophy', outCount: 4 },
      { item: 'twilightforest:alpha_yeti_fur', outCount: 16 },
      { item: 'kubejs:arcmetal_ingot', outCount: 4 },
    ],

    'twilightforest/death_tome': [
      { item: 'minecraft:paper', outCount: 32 },
      { item: 'minecraft:book', outCount: 32 },
      { item: 'minecraft:writable_book', outCount: 32 },
      { item: 'twilightforest:magic_map_focus', outCount: 32 },
    ],

    'twilightforest/deer': [
      { item: 'twilightforest:raw_venison', outCount: 32 },
      { item: 'minecraft:leather', outCount: 24 },
    ],

    'twilightforest/giant': [
      { item: 'twilightforest:giant_sword', outCount: 1 },
      { item: 'twilightforest:giant_pickaxe', outCount: 1 },
      { item: 'twilightforest:giant_cobblestone', outCount: 16 },
      { item: 'twilightforest:giant_log', outCount: 16 },
      { item: 'twilightforest:giant_leaves', outCount: 16 },
      { item: 'twilightforest:giant_obsidian', outCount: 16 },
    ],

    'twilightforest/goblin': [
      { item: 'twilightforest:armor_shard', outCount: 16 },
    ],

    'twilightforest/hydra': [
      { item: 'twilightforest:hydra_trophy', outCount: 4 },
      { item: 'twilightforest:hydra_chop', outCount: 24 },
      { item: 'twilightforest:fiery_blood', outCount: 16 },
      { item: 'kubejs:solarmetal_ingot', outCount: 2 },
    ],

    'twilightforest/knight_phantom': [
      { item: 'twilightforest:knightmetal_ingot', outCount: 16 },
      { item: 'twilightforest:knight_phantom_trophy', outCount: 4 },
    ],

    'twilightforest/lich': [
      { item: 'twilightforest:lich_trophy', outCount: 4 },
      { item: 'minecraft:ender_pearl', outCount: 24 },
      { item: 'minecraft:bone', outCount: 32 },
      { item: 'twilightforest:lifedrain_scepter', outCount: 1 },
      { item: 'twilightforest:fortification_scepter', outCount: 1 },
      { item: 'twilightforest:zombie_scepter', outCount: 1 },
      { item: 'twilightforest:twilight_scepter', outCount: 1 },
    ],

    'twilightforest/minoshroom': [
      { item: 'twilightforest:meef_stroganoff', outCount: 16 },
      { item: 'twilightforest:minoshroom_trophy', outCount: 4 },
      { item: 'twilightforest:diamond_minotaur_axe', outCount: 1 },
      { item: 'twilightforest:borer_essence', outCount: 8 },
    ],

    'twilightforest/minotaur': [
      { item: 'twilightforest:raw_meef', outCount: 32 },
      { item: 'twilightforest:maze_map_focus', outCount: 1 },
    ],

    'twilightforest/naga': [
      { item: 'twilightforest:naga_trophy', outCount: 4 },
      { item: 'twilightforest:naga_scale', outCount: 16 },
    ],

    'twilightforest/skeleton_druid': [
      { item: 'twilightforest:torchberries', outCount: 32 },
      { item: 'minecraft:bone', outCount: 32 },
      { item: 'minecraft:skeleton_skull', outCount: 4 },
    ],

    'twilightforest/snow_queen': [
      { item: 'minecraft:snowball', outCount: 32 },
      { item: 'minecraft:packed_ice', outCount: 24 },
      { item: 'twilightforest:snow_queen_trophy', outCount: 4 },
      { item: 'twilightforest:triple_bow', outCount: 1 },
    ],

    'twilightforest/troll': [
      { item: 'twilightforest:magic_beans', outCount: 4 },
    ],

    'twilightforest/ur_ghast': [
      { item: 'twilightforest:carminite', outCount: 32 },
      { item: 'twilightforest:fiery_tears', outCount: 16 },
      { item: 'twilightforest:ur_ghast_trophy', outCount: 4 },
    ],

    vindicator: [
      { item: 'minecraft:emerald', outCount: 8 },
      { item: 'minecraft:iron_axe', outCount: 1 },
    ],

    warden: [
      { item: 'apotheosis:warden_tendril', outCount: 1 },
      { item: 'minecraft:echo_shard', outCount: 2 },
      { item: 'bhc:blue_heart', outCount: 1 },
      { item: 'kubejs:warden_heart', outCount: 1 },
    ],

    witch: [
      { item: 'minecraft:redstone', outCount: 16 },
      { item: 'minecraft:glowstone', outCount: 16 },
      { item: 'minecraft:sugar', outCount: 32 },
      { item: 'minecraft:stick', outCount: 32 },
      { item: 'minecraft:spider_eye', outCount: 16 },
      { item: 'minecraft:glass_bottle', outCount: 16 },
    ],

    wither: [
      { item: 'minecraft:nether_star', outCount: 1 },
      { item: 'bhc:yellow_heart', outCount: 1 },
      { item: 'kubejs:wither_heart', outCount: 1 },
    ],

    wither_skeleton: [
      { item: 'wstweaks:fragment', outCount: 32 },
      { item: 'minecraft:bone', outCount: 24 },
      { item: 'minecraft:coal', outCount: 32 },
      { item: 'minecraft:wither_skeleton_skull', outCount: 3 },
      { item: 'bhc:wither_bone', outCount: 2 },
    ],

    zombie: [
      { item: 'minecraft:rotten_flesh', outCount: 32 },
      { item: 'minecraft:iron_ingot', outCount: 8 },
      { item: 'minecraft:carrot', outCount: 16 },
      { item: 'minecraft:potato', outCount: 16 },
      { item: 'bhc:red_heart', outCount: 1 },
      { item: 'born_in_chaos_v1:rotten_fish', outCount: 16 },
    ],

    zombified_piglin: [
      { item: 'minecraft:rotten_flesh', outCount: 64 },
      { item: 'minecraft:gold_ingot', outCount: 8 },
    ],

    'twilightforest/redcap': [
      { item: 'minecraft:coal', outCount: 32 },
      { item: 'minecraft:iron_pickaxe', outCount: 32 },
    ],

    'thermal/blitz': [{ item: 'thermal:blitz_rod', outCount: 16 }],
  };

  const MULT = 512;
  const STRUCTURE = 'mm:loot_fabrication_plant_structure';
  const ENERGY = 1073621824;
  const PRED_ITEM = 'hostilenetworks:prediction';

  function safeIdPart (str) {
    return str.replace(/[:/]/g, '_');
  }

  function createLootFabRecipe (event, mob, spec) {
    const mobHNN = `hostilenetworks:${mob}`;
    const rid = `mm:loot_fab_${safeIdPart(mob)}_${safeIdPart(
      spec.item
    )}_${MULT}`;

    event
      .create(rid)
      .structureId(STRUCTURE)
      .ticks(50)
      .input({
        type: 'mm:input/consume',
        ingredient: { type: 'mm:energy', amount: ENERGY },
      })
      .input({
        type: 'mm:input/consume',
        chance: 0.0,
        ingredient: { type: 'mm:item', item: spec.item, count: 1 },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: PRED_ITEM,
          count: MULT,
          nbt_snbt: `{data_model:{id:"${mobHNN}"}}`,
          nbt_match: 'weak',
        },
      })
      .output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: spec.item,
          count: spec.outCount * MULT,
        },
        perTick: true,
      });
  }

  MMEvents.createProcesses((event) => {
    Object.keys(lootByMob)
      .sort()
      .forEach((mob) => {
        lootByMob[mob].forEach((spec) => createLootFabRecipe(event, mob, spec));
      });
  });
})();
