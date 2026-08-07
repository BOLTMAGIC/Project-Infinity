(function () {
  StartupEvents.registry('painting_variant', (event) => {
    const SquarePaintingSizes = {
      project_infinity_logo: [1, 2, 3, 4, 5],
      project_infinity_logo_with_stars: [1, 2, 3, 4, 5],
    };

    const RectanglePaintingSizes = {
      infinity_symbol: [1, 2, 3],
      infinity_symbol_with_stars: [1, 2, 3],
      project_infinity: [1, 2, 3],
      project_infinity_and_credit: [1, 2, 3],
    };

    Object.keys(SquarePaintingSizes).forEach((painting) => {
      SquarePaintingSizes[painting].forEach((size) => {
        event
          .create(`kubejs:${painting}_${size}`)
          .height(16 * size)
          .width(16 * size)
          .tag('minecraft:placeable');
      });
    });

    Object.keys(RectanglePaintingSizes).forEach((painting) => {
      RectanglePaintingSizes[painting].forEach((size) => {
        event
          .create(`kubejs:${painting}_${size}`)
          .height(16 * size)
          .width(16 * size * 2)
          .tag('minecraft:placeable');
      });
    });
  })();
});
