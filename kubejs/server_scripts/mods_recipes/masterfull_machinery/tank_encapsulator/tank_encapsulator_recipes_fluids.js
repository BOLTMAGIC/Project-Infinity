priority: 1;
MMEvents.createProcesses((event) => {
  const fluidTanks = {
    basic: {
      capacity: 32000,
      id: 'mekanism:basic_fluid_tank',
    },
    advanced: {
      capacity: 64000,
      id: 'mekanism:advanced_fluid_tank',
    },
    elite: {
      capacity: 128000,
      id: 'mekanism:elite_fluid_tank',
    },
    ultimate: {
      capacity: 256000,
      id: 'mekanism:ultimate_fluid_tank',
    },
    absolute: {
      capacity: 4096000,
      id: 'mekanism_extras:absolute_fluid_tank',
    },
    supreme: {
      capacity: 32768000,
      id: 'mekanism_extras:supreme_fluid_tank',
    },
    cosmic: {
      capacity: 262144000,
      id: 'mekanism_extras:cosmic_fluid_tank',
    },
    infinite: {
      capacity: 2097152000,
      id: 'mekanism_extras:infinite_fluid_tank',
    },
  };

  const TICKS = 20;

  function fluidTankEncapsulator (tank_level, fluid_id) {
    event
      .create(
        `mm:${fluid_id
          .replace(/[:]/g, '_')
          .toLowerCase()}_to_${tank_level.toLowerCase()}_fluid_tank_token`
      )
      .structureId('mm:tank_encapsulator_structure')
      .ticks(TICKS)
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: fluidTanks[tank_level].id,
          count: 1,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:fluid',
          fluid: fluid_id,
          amount: fluidTanks[tank_level].capacity,
        },
      })
      .output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: 'kubejs:fluid_tank_token',
          count: 1,
          nbt_snbt: `{tank_level:'${tank_level}', fluid_id:'${fluid_id}'}`,
        },
      });
  }

  fluidTankEncapsulator('elite', 'bloodmagic:life_essence_fluid');
  fluidTankEncapsulator('absolute', 'integrateddynamics:menril_resin');
  fluidTankEncapsulator('absolute', 'integrateddynamics:liquid_chorus');
  fluidTankEncapsulator('basic', 'thermal_extra:polyolefin');
  fluidTankEncapsulator('basic', 'nuclearcraft:xenorium_298');
  fluidTankEncapsulator('ultimate', 'mekanismgenerators:fusion_fuel');
  fluidTankEncapsulator('ultimate', 'mekanism:nutritional_paste');
  fluidTankEncapsulator('ultimate', 'woot_revived:enchanted_fluid');
  fluidTankEncapsulator('supreme', 'minecraft:lava');
  fluidTankEncapsulator(
    'supreme',
    'mekanism_extras:polonium_containing_solution'
  );
  fluidTankEncapsulator('ultimate', 'industrialforegoing:meat');
  fluidTankEncapsulator('supreme', 'mekanism:sodium');
  fluidTankEncapsulator('ultimate', 'crazyae2addons:research_fluid');
  fluidTankEncapsulator('supreme', 'minecraft:water');
  fluidTankEncapsulator('absolute', 'nuclearcraft:polonium');
  fluidTankEncapsulator('basic', 'exdeorum:witch_water');
  fluidTankEncapsulator('basic', 'cyclic:magma');
  fluidTankEncapsulator('basic', 'thermal_extra:paraffin_wax');
  fluidTankEncapsulator('basic', 'justdirethings:time_fluid');
  fluidTankEncapsulator('ultimate', 'pneumaticcraft:lpg');
  fluidTankEncapsulator('ultimate', 'kubejs:cryotheum_coolant');
  fluidTankEncapsulator('basic', 'woot_revived:mob_tears_fluid');
});
