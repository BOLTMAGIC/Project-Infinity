BlockEvents.rightClicked('minecraft:grindstone', (event) => {
  const { item, player, hand } = event;

  if (hand !== 'MAIN_HAND') event.cancel();

  if (
    !item ||
    item.id != 'kubejs:extra_data_model_uncrafter' ||
    !item.nbt ||
    !item.nbt.data_model ||
    !item.nbt.data_model.ids
  )
    return;

  item.count = 0;

  item.nbt.data_model.ids.forEach((mobID) => {
    const str = mobID.toString();
    const mobIDString = str.slice(1, -1);
    player.give(
      Item.of(
        'hostilenetworks:data_model',
        `{data_model:{data:1254,id:"${mobIDString}"}}`
      )
    );
  });

  event.cancel();
});
