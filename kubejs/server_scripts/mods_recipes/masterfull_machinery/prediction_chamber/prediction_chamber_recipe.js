//priority: 1;

const dataModelsVanillaArray = [
  'blaze',
  'chicken',
  'cod',
  'cow',
  'creeper',
  'drowned',
  'enderman',
  'ghast',
  'glow_squid',
  'guardian',
  'hoglin',
  'iron_golem',
  'magma_cube',
  'mooshroom',
  'phantom',
  'pig',
  'polar_bear',
  'rabbit',
  'sheep',
  'shulker',
  'skeleton',
  'slime',
  'snow_golem',
  'spider',
  'squid',
  'vindicator',
  'witch',
  'wither_skeleton',
  'zombie',
  'zombified_piglin',
];

const dataModelsBossArray = [
  'twilightforest/alpha_yeti',
  'cataclysm/ancient_remnant',
  'draconicevolution/draconic_guardian',
  'elder_guardian',
  'ender_dragon',
  'cataclysm/ender_golem',
  'evoker',
  'botania/gaia_spirit',
  'twilightforest/hydra',
  'twilightforest/knight_phantom',
  'twilightforest/lich',
  'cataclysm/maledictus',
  'twilightforest/minoshroom',
  'twilightforest/naga',
  'bomd/gauntlet',
  'bomd/lich',
  'bomd/obsidilith',
  'allthemodium/piglich',
  'twilightforest/snow_queen',
  'twilightforest/ur_ghast',
  'cataclysm/harbinger',
  'bomd/void_blossom',
  'warden',
  'wither',
  'born_in_chaos/lord_pumpkinhead',
];

const dataModelsMiscArray = [
  'thermal/basalz',
  'thermal/blitz',
  'thermal/blizz',
  'born_in_chaos/dark_vortex',
  'twilightforest/death_tome',
  'twilightforest/deer',
  'born_in_chaos/dire_hound_leader',
  'twilightforest/minotaur',
  'born_in_chaos/missioner',
  'twilightforest/redcap',
  'twilightforest/skeleton_druid',
  'twilightforest/troll',
  'twilightforest/giant',
  'twilightforest/goblin',
];



function safeIdPart (str) {
  return str.split(':').join('_').split('/').join('_');
}

function createPredictionChamberRecipes (event, mobs) {
  mobs.forEach((mob) => {
    const mobHNN = `hostilenetworks:${mob}`;
    const rid = `mm:prediction_chamber_recipe_${safeIdPart(mob)}`;

    event
      .create(rid)
      .structureId('mm:prediction_chamber_structure')
      .ticks(100)
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'extrahnn:extra_data_model',
          count: 1,
          nbt_snbt: `{data_model:{data:22375,ids:["${mobHNN}","${mobHNN}","${mobHNN}","${mobHNN}"]}}`,
        },
        chance: 0.0,
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'hostilenetworks:prediction_matrix',
          count: 256,
        },
        chance: 0.5,
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:energy',
          amount: 2147483647,
        },
      })
      .output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: 'hostilenetworks:prediction',
          count: 1024,
          nbt_snbt: `{data_model:{id:"${mobHNN}"}}`,
        },
        perTick: true,
      });
  });
}

MMEvents.createProcesses((event) => {
  createPredictionChamberRecipes(event, dataModelsVanillaArray);
  createPredictionChamberRecipes(event, dataModelsBossArray);
  createPredictionChamberRecipes(event, dataModelsMiscArray);
});


function createPredictionChamberRecipes2 (event, mobs) {
  mobs.forEach((mob) => {
    const mobHNN = `hostilenetworks:${mob}`;
    const rid = `mm:prediction_chamber_recipe_2_${safeIdPart(mob)}`;

    event
      .create(rid)
      .structureId('mm:prediction_chamber_structure2')
      .ticks(1)
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'extrahnn:extra_data_model',
          count: 1,
          nbt_snbt: `{data_model:{data:22375,ids:["${mobHNN}","${mobHNN}","${mobHNN}","${mobHNN}"]}}`,
        },
        chance: 0.0,
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: 'hostilenetworks:prediction_matrix',
          count: 2048,
        },
        chance: 0.25,
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:energy',
          amount: 2147483647,
        },
      })
      .output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: 'hostilenetworks:prediction',
          count: 8192,
          nbt_snbt: `{data_model:{id:"${mobHNN}"}}`,
        },
        perTick: true,
      });
  });
}

MMEvents.createProcesses((event) => {
  createPredictionChamberRecipes2(event, dataModelsVanillaArray);
  createPredictionChamberRecipes2(event, dataModelsBossArray);
  createPredictionChamberRecipes2(event, dataModelsMiscArray);
});