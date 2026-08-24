MMEvents.registerControllers((event) => {
  event
    .create('auto_sieve_controller')
    .name('Auto Sieve Machine Controller')
    .type('mm:machine')
    .recipeSelectionMode('round_robin_input_item');
});
