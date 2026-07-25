ServerEvents.recipes((event) => {
  function fluidInfuser (
    event,
    input_item,
    input_fluid_amount,
    input_fluid_tag,
    output_item,
    powerModifier,
    radiation,
    timeModifier
  ) {
    if (powerModifier === undefined) powerModifier = 1.0;
    if (radiation === undefined) radiation = 1.0;
    if (timeModifier === undefined) timeModifier = 1.0;

    event
      .custom({
      type: 'nuclearcraft:fluid_infuser',
      input: [
        {
          item: input_item
        }
      ],
      inputFluids: [
        {
          amount: input_fluid_amount,
          tag: input_fluid_tag
        }
      ],
      output: [
        {
          item: output_item
        }
      ],
      powerModifier: 1.0,
      radiation: 1.0,
      timeModifier: 1.0
    })
      .id('fluid_infusing_' + output_item.replace(/:/g, '_'));
  }

  fluidInfuser(event, 'kubejs:infinity_1', 500, 'kubejs:molten_basalz', 'kubejs:infinity_1_333333');
  fluidInfuser(event, 'kubejs:infinity_1', 500, 'kubejs:molten_blizz', 'kubejs:infinity_1_666666');
  fluidInfuser(event, 'kubejs:infinity_1', 500, 'kubejs:molten_blitz', 'kubejs:infinity_1_999999');
});
