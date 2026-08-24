MMEvents.registerControllers((event) => {
  event
    .create('loot_fabrication_plant_controller')
    .name('Loot Fabrication Plant Controller')
    .type('mm:machine')
    .recipeSelectionMode('round_robin_input_item');
});
