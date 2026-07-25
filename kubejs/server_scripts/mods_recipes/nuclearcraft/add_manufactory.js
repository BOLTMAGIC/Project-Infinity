ServerEvents.recipes((event) => {
  function manufactoring (
    event,
    input_item,
    output_count,
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
        type: 'nuclearcraft:manufactory',
        input: [
          {
            item: input_item,
          },
        ],
        output: [
          {
            count: output_count,
            item: output_item,
          },
        ],
        powerModifier: powerModifier,
        radiation: radiation,
        timeModifier: timeModifier,
      })
      .id('manufactoring_' + output_item.replace(/:/g, '_'));
  }

  manufactoring(
    event,
    'common_ore_library:cobalt_ore',
    2,
    'common_ore_library:cobalt_dust'
  );
  manufactoring(
    event,
    'nuclearcraft:thorium_ore',
    2,
    'nuclearcraft:thorium_dust'
  );
  manufactoring(
    event,
    'nuclearcraft:magnesium_ore',
    2,
    'nuclearcraft:magnesium_dust'
  );
  manufactoring(
    event,
    'nuclearcraft:lithium_ore',
    2,
    'nuclearcraft:lithium_dust'
  );
  manufactoring(event, 'nuclearcraft:boron_ore', 2, 'nuclearcraft:boron_dust');
  manufactoring(
    event,
    'exdeorum:aluminum_ore_chunk',
    2,
    'common_ore_library:aluminum_dust'
  );
  manufactoring(event, 'exdeorum:nickel_ore_chunk', 2, 'thermal:nickel_dust');
  manufactoring(
    event,
    'exdeorum:iridium_ore_chunk',
    2,
    'common_ore_library:iridium_dust'
  );

  manufactoring(
    event,
    'draconicevolution:draconium_ingot',
    1,
    'draconicevolution:draconium_dust'
  );
});
