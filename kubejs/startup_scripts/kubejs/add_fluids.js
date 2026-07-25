StartupEvents.registry('fluid', (event) => {
  event
    .create('molten_basalz')
    .thickTexture(0x800000)
    .bucketColor(0x800000)
    .displayName('Molten Basalz');
  event
    .create('molten_blizz')
    .thickTexture(0x00c6e0)
    .bucketColor(0x00c6e0)
    .displayName('Molten Blizz');
  event
    .create('molten_blitz')
    .thickTexture(0xedfdff)
    .bucketColor(0xedfdff)
    .displayName('Molten Blitz');

  event
    .create('cryotheum_coolant')
    .thickTexture(0xa1fff7)
    .bucketColor(0xa1fff7)
    .displayName('Cryotheum Coolant');
});
