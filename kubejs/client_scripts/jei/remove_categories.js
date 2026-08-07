JEIEvents.removeCategories((event) => {
  // console.log(event.categoryIds)
  event.remove([
    'ali:block_loot',
    'ali:fishing_loot',
    'ali:hero_loot',
    'ali:archaelogy_loot',
    'ali:plant_loot',
    'ali:gameplay_loot',
    'ali:trade_loot',
    'cyclic:packager',
    'packagedauto:fluid_package_contents',
    'packagedauto:volume_package',
    'packagedauto:fluid_package_filling',
    'minecraft:tag_recipes/block',
    'minecraft:tag_recipes/entity_type',
    'minecraft:tag_recipes/fluid',
    'minecraft:tag_recipes/item',
  ]);
});