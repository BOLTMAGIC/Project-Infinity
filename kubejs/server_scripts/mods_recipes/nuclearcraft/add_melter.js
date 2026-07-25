ServerEvents.recipes((event) => {
  function melter (
    event,
    input_item,
    output_amount,
    output_fluid_tag,
    powerModifier,
    radiation,
    timeModifier
  ) {
    if (powerModifier === undefined) powerModifier = 1.0;
    if (radiation === undefined) radiation = 1.0;
    if (timeModifier === undefined) timeModifier = 1.0;

    event
      .custom({
        type: 'nuclearcraft:melter',
        input: [
          {
            item: input_item
          }
        ],
        outputFluids: [
          {
            amount: output_amount,
            tag: output_fluid_tag
          }
        ],
        powerModifier: powerModifier,
        radiation: radiation,
        timeModifier: timeModifier
      })
      .id('melting_' + output_fluid_tag.replace(/:/g, '_'));
  }

  melter(event, 'thermal:basalz_rod', 1000, 'kubejs:molten_basalz');
  melter(event, 'thermal:blizz_rod', 1000, 'kubejs:molten_blizz');
  melter(event, 'thermal:blitz_rod', 1000, 'kubejs:molten_blitz');
});
