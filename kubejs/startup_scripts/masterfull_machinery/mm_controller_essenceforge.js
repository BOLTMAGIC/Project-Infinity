MMEvents.registerControllers((event) => {
  event
    .create('essenceforge_controller')
    .name('Essenceforge Controller')
    .type('mm:machine')
    .recipeSelectionMode('round_robin_input_item');
});
