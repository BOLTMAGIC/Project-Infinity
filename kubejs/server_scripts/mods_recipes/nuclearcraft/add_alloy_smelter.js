ServerEvents.recipes((event) => {
  function alloy_smelter (
    event,
    input_count1,
    input_item1,
    input_count2,
    input_item2,
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
        type: 'nuclearcraft:alloy_smelter',
        input: [
          {
            count: input_count1,
            item: input_item1,
          },
          {
            count: input_count2,
            item: input_item2,
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
      .id('alloy_smelting_' + output_item.replace(/:/g, '_'));
  }

  alloy_smelter(
    event,
    1,
    'thermal:steel_block',
    1,
    'nuclearcraft:boron_block',
    2,
    'kubejs:ferroboron_block'
  );
  alloy_smelter(
    event,
    1,
    'kubejs:ferroboron_block',
    1,
    'nuclearcraft:lithium_block',
    2,
    'kubejs:tough_alloy_block'
  );
  alloy_smelter(
    event,
    1,
    'minecraft:diamond_block',
    1,
    'nuclearcraft:graphite_block',
    2,
    'kubejs:hard_carbon_block'
  );
  alloy_smelter(
    event,
    1,
    'kubejs:tough_alloy_block',
    1,
    'kubejs:hard_carbon_block',
    2,
    'kubejs:extreme_block'
  );
});
