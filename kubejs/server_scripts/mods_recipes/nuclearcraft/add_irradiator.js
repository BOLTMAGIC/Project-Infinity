ServerEvents.recipes((event) => {
  function irradiator_item_fluid_give_item (
    event,
    input_item,
    input_fluid_count,
    input_fluid,
    output_item,
    powerModifier,
    radiation,
    timeModifier
  ) {
    if (powerModifier === undefined) powerModifier = 1.0;
    if (radiation === undefined) radiation = 1.0;
    if (timeModifier === undefined) timeModifier = 0.5;

    event
      .custom({
        type: 'nuclearcraft:irradiator',
        input: [
          {
            item: input_item,
          },
        ],
        inputFluids: [
          {
            amount: input_fluid_count,
            tag: input_fluid,
          },
        ],
        output: [
          {
            item: output_item,
          },
        ],
        powerModifier: powerModifier,
        radiation: radiation,
        timeModifier: timeModifier,
      })
      .id('irradiator_' + output_item.replace(/:/g, '_'));
  }

  irradiator_item_fluid_give_item(
    event,
    'outer_end:ancient_ice',
    1000,
    'forge:cryotheum',
    'nuclearcraft:supercold_ice_block'
  );
});
