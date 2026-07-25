ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('fluxnetworks:flux_point'),
    [
      'fluxnetworks:flux_configurator',
      'fluxnetworks:flux_point'
    ]
  )
    .modifyResult((grid, result) => {
      let fc = grid.find(Item.of('fluxnetworks:flux_configurator'));
      
      if (!fc || !fc.nbt) {
        return Item.of('fluxnetworks:flux_point');
      }
      
      let data = fc.nbt.FluxConfig;
      let newData = {
        FluxData:{
          limit:data.limit,
          networkID:data.networkID,
          priority:data.priority,
          disableLimit:data.disableLimit,
          surgeMode:data.surgeMode
        }
      }
      return Item.of('fluxnetworks:flux_point').withNBT(newData);
    })
    .keepIngredient('fluxnetworks:flux_configurator');
});

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('fluxnetworks:flux_plug'),
    [
      'fluxnetworks:flux_configurator',
      'fluxnetworks:flux_plug'
    ]
  )
    .modifyResult((grid, result) => {
      let fc = grid.find(Item.of('fluxnetworks:flux_configurator'));
      
      if (!fc || !fc.nbt) {
        return Item.of('fluxnetworks:flux_plug');
      }
      
      let data = fc.nbt.FluxConfig;
      let newData = {
        FluxData:{
          limit:data.limit,
          networkID:data.networkID,
          priority:data.priority,
          disableLimit:data.disableLimit,
          surgeMode:data.surgeMode
        }
      }
      return Item.of('fluxnetworks:flux_plug').withNBT(newData);
    })
    .keepIngredient('fluxnetworks:flux_configurator');
});
