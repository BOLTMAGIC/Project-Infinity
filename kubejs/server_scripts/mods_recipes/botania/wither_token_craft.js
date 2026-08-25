ServerEvents.recipes(event => {

  event.shapeless(
    'kubejs:wither_token',
    [
      Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:wither"}}').weakNBT(),
    ]
  ).modifyResult((grid, result) => {

    let model = grid.find(Item.of('hostilenetworks:data_model'));

    if(model.nbt.data_model.data < 1254) {
      return Item.of('kubejs:wither_token', {
        data_model: {
          data: model.nbt.data_model.data,
          id: "hostilenetworks:wither",
          iterations: model.nbt.data_model.iterations
        },
        self_aware: false,
      })
    }

    return Item.of('kubejs:wither_token', {
      self_aware: true,
    })
  })

  event.shapeless(
    Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:wither"}}').weakNBT(),
    [
      'kubejs:wither_token',
    ]
  ).modifyResult((grid, result) => {

    let token = grid.find(Item.of('kubejs:wither_token'));

    if (!token.nbt) {
      return result;
    }

    if(token.nbt.self_aware) {
      return Item.of('hostilenetworks:data_model', {
        data_model: {
          data: 1254,
          id: "hostilenetworks:wither",
          iterations: 0
        }
      })
    }

    return Item.of('hostilenetworks:data_model', {
      data_model: {
        data: token.nbt.data_model.data,
        id: "hostilenetworks:wither",
        iterations: token.nbt.data_model.iterations
      }
    })
  })
})
