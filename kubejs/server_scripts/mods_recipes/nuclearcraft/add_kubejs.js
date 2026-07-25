ServerEvents.recipes((event) => {
  shapeless(event, '9x nuclearcraft:ferroboron_ingot', [
    'kubejs:ferroboron_block',
  ]);
  create3x3same(event, 'kubejs:ferroboron_block', [
    'nuclearcraft:ferroboron_ingot',
  ]);

  shapeless(event, '9x nuclearcraft:tough_alloy_ingot', [
    'kubejs:tough_alloy_block',
  ]);
  create3x3same(event, 'kubejs:tough_alloy_block', [
    'nuclearcraft:tough_alloy_ingot',
  ]);

  shapeless(event, '9x nuclearcraft:extreme_ingot', ['kubejs:extreme_block']);
  create3x3same(event, 'kubejs:extreme_block', ['nuclearcraft:extreme_ingot']);

  shapeless(event, '9x nuclearcraft:hard_carbon_ingot', [
    'kubejs:hard_carbon_block',
  ]);
  create3x3same(event, 'kubejs:hard_carbon_block', [
    'nuclearcraft:hard_carbon_ingot',
  ]);

  event.smelting(
    'nuclearcraft:manganese_oxide_dust',
    'nuclearcraft:rhodochrosite_dust'
  );
});
