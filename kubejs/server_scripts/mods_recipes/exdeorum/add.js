ServerEvents.recipes((event) => {
  event
    .shapeless('thermal:steel_ingot', [
      'minecraft:iron_ingot',
      'minecraft:coal',
      'minecraft:coal',
      'minecraft:coal',
      'minecraft:coal',
      '#exdeorum:hammers',
    ])
    .damageIngredient('#exdeorum:hammers', 1);

  event.shapeless('thermal:steel_ingot', [
    'minecraft:iron_ingot',
    'minecraft:coal',
    'minecraft:coal',
    'minecraft:coal',
    'minecraft:coal',
    '#exdeorum:hammers2',
  ]);

  create2x2same(event, 'common_ore_library:zinc_ore', [
    'exdeorum:zinc_ore_chunk',
  ]);

  create2x2same(event, 'common_ore_library:aluminum_ore', [
    'exdeorum:aluminum_ore_chunk',
  ]);

  create2x2same(event, 'thermal:nickel_ore', ['exdeorum:nickel_ore_chunk']);

  create2x2same(event, 'thermal:silver_ore', ['exdeorum:silver_ore_chunk']);

  create2x2same(event, 'thermal:lead_ore', ['exdeorum:lead_ore_chunk']);

  create2x2same(event, 'thermal:tin_ore', ['exdeorum:tin_ore_chunk']);

  create2x2same(event, 'mekanism:osmium_ore', ['exdeorum:osmium_ore_chunk']);

  create2x2same(event, 'common_ore_library:cobalt_ore', [
    'exdeorum:cobalt_ore_chunk',
  ]);

  create2x2same(event, 'common_ore_library:platinum_ore', [
    'exdeorum:platinum_ore_chunk',
  ]);

  create2x2same(event, 'mekanism:uranium_ore', ['exdeorum:uranium_ore_chunk']);

  create2x2same(event, 'common_ore_library:iridium_ore', [
    'exdeorum:iridium_ore_chunk',
  ]);

  shapeless(event, '3x minecraft:paper', ['3x exdeorum:wood_chippings']);
});
