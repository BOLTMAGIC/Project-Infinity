ServerEvents.recipes((event) => {
  //Cooling
  event
    .custom({
      type: 'neoecoae:cooling',
      conditions: [
        {
          type: 'forge:mod_loaded',
          modid: 'mekanism',
        },
      ],
      coolant: 25000,
      input: {
        amount: 100,
        fluid: 'neoecoae:cryotheum_solution',
      },
      max_overclock: 15,
      output: {
        amount: 10,
        fluid: 'kubejs:cryotheum_coolant',
      },
    })
    .id('kubejs:cooling/cryotheum_coolant');
});
