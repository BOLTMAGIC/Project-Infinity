MMEvents.registerControllers((event) => {
  event
    .create('auto_crusher_controller')
    .name('Auto Crusher Machine Controller')
    .type('mm:machine')
    .recipeSelectionMode('round_robin_input_item');
});
