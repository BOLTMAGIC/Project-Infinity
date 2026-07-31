// infinity to vitality_fuel_fluid
ServerEvents.recipes((event) => {
  event.recipes.woot_revived
    .fluid_infuser(
      { fluid: 'woot_revived:vitality_fuel_fluid', amount: 50000 }, // Output fluid
      50000, // Consumed energy
      { fluid: 'woot_revived:mob_tears_fluid', amount: 2000 }, // Input fluid
      ['kubejs:infinity_2'] // Input ingredient
    )
    .id('kubejs:infinity_to_vitality_fuel_fluid');
});
