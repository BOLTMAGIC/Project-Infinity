priority: 1;
MMEvents.createProcesses((event) => {
  const chemicalTanks = {
    basic: {
      capacity: 64000,
      id: 'mekanism:basic_chemical_tank'
    },
    advanced: {
      capacity: 128000,
      id: 'mekanism:advanced_chemical_tank'
    },
    elite: {
      capacity: 1024000,
      id: 'mekanism:elite_chemical_tank'
    },
    ultimate: {
      capacity: 8192000,
      id: 'mekanism:ultimate_chemical_tank'
    },
    absolute: {
      capacity: 131072000,
      id: 'mekanism_extras:absolute_chemical_tank'
    },
    supreme: {
      capacity: 4194304000,
      id: 'mekanism_extras:supreme_chemical_tank'
    },
    cosmic: {
      capacity: 268435456000,
      id: 'mekanism_extras:cosmic_chemical_tank'
    },
    infinite: {
      capacity: 34359738368000,
      id: 'mekanism_extras:infinite_chemical_tank'
    }
  }

  const TICKS = 20

  const modIDToTranslationKey = {
    mekanism: [
      'gas.mekanism.',
      'pigment.mekanism.',
      'slurry.mekanism.',
      'infuse_type.mekanism.'
    ],
    mekanismgenerators: ['gas.mekanismgenerators.'],
    mekanism_extras: ['gas.mekanism_extras.'],
    evolvedmekanism: ['infuse_type.evolvedmekanism.'],
    alltheores: ['slurry.alltheores.'],
    allthemodium: ['slurry.allthemodium.']
  }

  function chemicalTankEncapsulator(tank_level, chemical_id, chemical_type) {
    const chemID = chemical_id; // mekanism:dirty_gold
    const parts = chemID.split(':');
    const first = parts[0]; // mekanism
    const second = parts[1]; // dirty_gold

    let chemicalTK

    for (const prefix of modIDToTranslationKey[first]) {
      if(!Text.translatable(prefix + second).getString().equals(prefix + second)) {
        chemicalTK = prefix;
        break
      }
    }
    
    const ingredientInput = {
      type: `mm:mekanism/${chemical_type}`,
      amount: chemicalTanks[tank_level].capacity,
    };

    ingredientInput[chemical_type] = chemical_id;

    event
      .create(`mm:${chemical_id.replace(/[:]/g, '_').toLowerCase()}_to_${tank_level.toLowerCase()}_fluid_tank_token`)
      .structureId('mm:tank_encapsulator_structure')
      .ticks(TICKS)
      .input({
        type: 'mm:input/consume',
        ingredient: {
          type: 'mm:item',
          item: chemicalTanks[tank_level].id,
          count: 1,
        },
      })
      .input({
        type: 'mm:input/consume',
        ingredient: ingredientInput,
      })
      .output({
        type: 'mm:output/simple',
        ingredient: {
          type: 'mm:item',
          item: 'kubejs:chemical_tank_token',
          count: 1,
          nbt_snbt: `{tank_level:'${tank_level}', chemical_id:'${chemical_id}'}`,
        },
      });
  }

  chemicalTankEncapsulator('basic', 'evolvedmekanism:plaslitherite', 'infuse');
  chemicalTankEncapsulator('basic', 'mekanism_extras:molten_thermonuclear', 'gas');
  chemicalTankEncapsulator('basic', 'mekanism_extras:naquadah_hexafluoride', 'gas');
  chemicalTankEncapsulator('basic', 'evolvedmekanism:better_gold', 'infuse');
  chemicalTankEncapsulator('ultimate', 'mekanism:yellow', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:green', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:lime', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:cyan', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:light_blue', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:orange', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:chlorine', 'gas');
  chemicalTankEncapsulator('ultimate', 'mekanism:fissile_fuel', 'gas');
  chemicalTankEncapsulator('ultimate', 'mekanismgenerators:tritium', 'gas');
  chemicalTankEncapsulator('ultimate', 'mekanism:red', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:brown', 'pigment');
  chemicalTankEncapsulator('absolute', 'mekanism:oxygen', 'gas');
  chemicalTankEncapsulator('advanced', 'mekanism:antimatter', 'gas');
  chemicalTankEncapsulator('absolute', 'mekanism:hydrogen', 'gas');
  chemicalTankEncapsulator('ultimate', 'mekanism:uranium_hexafluoride', 'gas');
  chemicalTankEncapsulator('ultimate', 'mekanism:sulfuric_acid', 'gas');
  chemicalTankEncapsulator('elite', 'allthemodium:clean_allthemodium', 'slurry');
  chemicalTankEncapsulator('elite', 'allthemodium:clean_unobtainium', 'slurry');
  chemicalTankEncapsulator('elite', 'allthemodium:clean_vibranium', 'slurry');
  chemicalTankEncapsulator('ultimate', 'mekanism:blue', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:purple', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanismgenerators:deuterium', 'gas');
  chemicalTankEncapsulator('ultimate', 'mekanism:sulfur_trioxide', 'gas');
  chemicalTankEncapsulator('ultimate', 'mekanism:sodium', 'gas');
  chemicalTankEncapsulator('ultimate', 'mekanism:magenta', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:black', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:gray', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:light_gray', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:white', 'pigment');
  chemicalTankEncapsulator('ultimate', 'mekanism:pink', 'pigment');
});
