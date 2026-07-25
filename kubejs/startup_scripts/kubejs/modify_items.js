ItemEvents.modification((event) => {
  event.modify('rftoolsbase:infused_diamond', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('dimensionalpocketsii:dimensional_ingot_enhanced', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('cataclysm:void_core', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('minecraft:ender_pearl', (item) => {
    item.maxStackSize = 64;
  });
  event.modify('exdeorum:sculk_core', (item) => {
    item.maxStackSize = 64;
  });
  event.modify(
    [
      'extrahnn:upgrade_speed',
      'extrahnn:upgrade_module_stack',
      'extrahnn:upgrade_data_kill',
    ],
    (item) => {
      item.maxStackSize = 1;
    }
  );
});