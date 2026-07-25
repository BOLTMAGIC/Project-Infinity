StartupEvents.registry('fluid', (event) => {
  event
    .create('molten_basalz')
    .thickTexture(0x800000)
    .noBucket()
    .displayName('Molten Basalz')
    .tag('kubejs:molten_basalz');
  event
    .create('molten_blizz')
    .thickTexture(0x00c6e0)
    .noBucket()
    .displayName('Molten Blizz')
    .tag('kubejs:molten_blizz');
  event
    .create('molten_blitz')
    .thickTexture(0xedfdff)
    .noBucket()
    .displayName('Molten Blitz');

  event
    .create('cryotheum_coolant')
    .thickTexture(0xa1fff7)
    .bucketColor(0xa1fff7)
    .displayName('Cryotheum Coolant')
    .noBucket()
    .displayName('Molten Blitz')
    .tag('kubejs:molten_blitz');
});
