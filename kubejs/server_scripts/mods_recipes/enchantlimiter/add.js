//requires: enchantlimiter
ServerEvents.recipes((event) => {
  create3x3(event, 'enchantlimiter:rare_crystal', [
    'enchantlimiter:uncommon_crystal',
    'allthemodium:allthemodium_block',
    'enchantlimiter:uncommon_crystal',
    'allthemodium:allthemodium_block',
    'kubejs:infinity_4',
    'allthemodium:allthemodium_block',
    'enchantlimiter:uncommon_crystal',
    'allthemodium:allthemodium_block',
    'enchantlimiter:uncommon_crystal',
  ]);

  create3x3(event, 'enchantlimiter:legendary_crystal', [
    'enchantlimiter:rare_crystal',
    'kubejs:infinity_9',
    'enchantlimiter:rare_crystal',
    'kubejs:infinity_9',
    'extendedcrafting:the_ultimate_block',
    'kubejs:infinity_9',
    'enchantlimiter:rare_crystal',
    'kubejs:infinity_9',
    'enchantlimiter:rare_crystal',
  ]);
});
