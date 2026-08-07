// Consolidated JEI hide script (optimized)
// Reads config once and performs batch hides to reduce expensive tag lookups.
(function() {
  const config = JsonIO.read('kubejs/config/jei_config.json') || {};

  JEIEvents.hideItems((event) => {
  // hide_betterblockz
  if (config.betterblockz !== false) {
    (function () {
      const keepSpecific = [
        'betterblockz:omni_spade',
        'betterblockz:block_disconnect',
        'betterblockz:block_randomizer',
        'betterblockz:better_builder',
        'betterblockz:checkered_spade',
        'betterblockz:color_changer',
        'betterblockz:blockz_core',
        'betterblockz:flat_lamp',
        'betterblockz:aurora_blockz',
        'betterblockz:stone_blockz',
      ];
      const keepRegex = /^betterblockz:.*_0$/;
      const items = Ingredient.of('@betterblockz').getItemIds();
      const toHide = [];
      items.forEach((id) => {
        if (!keepSpecific.includes(id) && !keepRegex.test(id)) toHide.push(id);
      });
      if (toHide.length) event.hide(toHide);
    })();
  }

  // hide_chisel_chipped_integration
  if (config.chisel_chipped_integration !== false) {
    (function () {
      const keep = [
        'chisel_chipped_integration:futura_mysterious_cube',
        'chisel_chipped_integration:futura_me_controller_ae_2',
        'chisel_chipped_integration:futura_fabulously_wavy',
        'chisel_chipped_integration:futura_purple_me_controller',
        'chisel_chipped_integration:futura_rainbowliciously_wavy',
        'chisel_chipped_integration:futura_cyan_screen',
        'chisel_chipped_integration:futura_gray_screen',
        'chisel_chipped_integration:futura_me_controller',
        'chisel_chipped_integration:technical_fan',
        'chisel_chipped_integration:factory_blue_framed_circuit',
        'chisel_chipped_integration:factory_blue_wireframe',
        'chisel_chipped_integration:factory_dotted_rusty_plate',
        'chisel_chipped_integration:factory_ice_ice_ice',
        'chisel_chipped_integration:laboratory_small_steel',
        'chisel_chipped_integration:technical_caution_framed_plates',
        'chisel_chipped_integration:ender_offset_wand',
      ];
      // use tag subtract where possible to batch-hide
      try {
        event.hide(Ingredient.of('@chisel_chipped_integration').subtract(keep));
      } catch (e) {
        const items = Ingredient.of('@chisel_chipped_integration').getItemIds();
        const toHide = [];
        items.forEach((id) => {
          if (!keep.includes(id)) toHide.push(id);
        });
        if (toHide.length) event.hide(toHide);
      }
    })();
  }

  // hide_enviromats
  if (config.enviromats !== false) {
    (function () {
      const hideRegex = /^enviromats:.*(cobble|polished|brick|tile).*$/;
      const items = Ingredient.of('@enviromats').getItemIds();
      const toHideEnv = [];
      items.forEach((id) => {
        if (hideRegex.test(id)) toHideEnv.push(id);
      });
      if (toHideEnv.length) event.hide(toHideEnv);
    })();
  }

  // hide_chipped
  if (config.chipped !== false) {
    (function () {
      const excluded = [
        'chipped:botanist_workbench',
        'chipped:glassblower',
        'chipped:carpenters_table',
        'chipped:loom_table',
        'chipped:mason_table',
        'chipped:alchemy_bench',
        'chipped:tinkering_table',
      ];
      event.hide(Ingredient.of('@chipped').subtract(excluded));
    })();
  }

  // hide_rechiseled
  if (config.rechiseled !== false) {
    (function () {
      const excluded = ['rechiseled:chisel'];
      event.hide(Ingredient.of('@rechiseled').subtract(excluded));
    })();
  }

  // hide_compressium
  if (config.compressium !== false) {
    (function () {
      const blocks = [
        'compressium:stone_4',
        'compressium:stone_5',
        'compressium:stone_6',
        'compressium:stone_7',
        'compressium:stone_8',
        'compressium:stone_9',
        'compressium:sand_7',
        'compressium:sand_8',
        'compressium:sand_9',
        'compressium:gravel_7',
        'compressium:gravel_8',
        'compressium:gravel_9',
        'compressium:netherrack_7',
        'compressium:netherrack_8',
        'compressium:netherrack_9',
        'compressium:snow_2',
        'compressium:snow_3',
        'compressium:snow_4',
        'compressium:snow_5',
        'compressium:snow_6',
        'compressium:snow_7',
        'compressium:snow_8',
        'compressium:snow_9',
        'compressium:soulsand_7',
        'compressium:soulsand_8',
        'compressium:soulsand_9',
        'compressium:iron_3',
        'compressium:iron_4',
        'compressium:iron_5',
        'compressium:iron_6',
        'compressium:iron_7',
        'compressium:iron_8',
        'compressium:iron_9',
        'compressium:gold_2',
        'compressium:gold_3',
        'compressium:gold_4',
        'compressium:gold_5',
        'compressium:gold_6',
        'compressium:gold_7',
        'compressium:gold_8',
        'compressium:gold_9',
        'compressium:diamond_3',
        'compressium:diamond_4',
        'compressium:diamond_6',
        'compressium:diamond_7',
        'compressium:diamond_8',
        'compressium:diamond_9',
        'compressium:diamond_5',
        'compressium:emerald_2',
        'compressium:emerald_3',
        'compressium:emerald_4',
        'compressium:emerald_5',
        'compressium:emerald_6',
        'compressium:emerald_7',
        'compressium:emerald_8',
        'compressium:emerald_9',
        'compressium:clay_2',
        'compressium:clay_3',
        'compressium:clay_4',
        'compressium:clay_5',
        'compressium:clay_6',
        'compressium:clay_7',
        'compressium:clay_8',
        'compressium:clay_9',
        'compressium:netherite_2',
        'compressium:netherite_3',
        'compressium:netherite_4',
        'compressium:netherite_5',
        'compressium:netherite_6',
        'compressium:netherite_7',
        'compressium:netherite_8',
        'compressium:netherite_9',
        'compressium:dirt_7',
        'compressium:dirt_8',
        'compressium:dirt_9',
        'compressium:coal_3',
        'compressium:coal_4',
        'compressium:coal_5',
        'compressium:coal_6',
        'compressium:coal_7',
        'compressium:coal_8',
        'compressium:coal_9',
        'compressium:redsand_2',
        'compressium:redsand_3',
        'compressium:redsand_4',
        'compressium:redsand_5',
        'compressium:redsand_6',
        'compressium:redsand_7',
        'compressium:redsand_8',
        'compressium:redsand_9',
        'compressium:endstone_7',
        'compressium:endstone_8',
        'compressium:endstone_9',
        'compressium:obsidian_7',
        'compressium:obsidian_8',
        'compressium:obsidian_9',
        'compressium:lapis_3',
        'compressium:lapis_4',
        'compressium:lapis_5',
        'compressium:lapis_6',
        'compressium:lapis_7',
        'compressium:lapis_8',
        'compressium:lapis_9',
        'compressium:quartz_2',
        'compressium:quartz_3',
        'compressium:quartz_4',
        'compressium:quartz_5',
        'compressium:quartz_6',
        'compressium:quartz_7',
        'compressium:quartz_8',
        'compressium:quartz_9',
        'compressium:redstone_2',
        'compressium:redstone_3',
        'compressium:redstone_4',
        'compressium:redstone_5',
        'compressium:redstone_6',
        'compressium:redstone_7',
        'compressium:redstone_8',
        'compressium:redstone_9',
        'compressium:andesite_2',
        'compressium:andesite_3',
        'compressium:andesite_4',
        'compressium:andesite_5',
        'compressium:andesite_6',
        'compressium:andesite_7',
        'compressium:andesite_8',
        'compressium:andesite_9',
        'compressium:diorite_2',
        'compressium:diorite_3',
        'compressium:diorite_4',
        'compressium:diorite_5',
        'compressium:diorite_6',
        'compressium:diorite_7',
        'compressium:diorite_8',
        'compressium:diorite_9',
        'compressium:copper_3',
        'compressium:copper_4',
        'compressium:copper_5',
        'compressium:copper_6',
        'compressium:copper_7',
        'compressium:copper_8',
        'compressium:copper_9',
        'compressium:granite_2',
        'compressium:granite_3',
        'compressium:granite_4',
        'compressium:granite_5',
        'compressium:granite_6',
        'compressium:granite_7',
        'compressium:granite_8',
        'compressium:granite_9',
      ];
      event.hide(blocks);
    })();
  }

  // hide_botanypots
  (function () {
    const colors = [
      'white',
      'orange',
      'magenta',
      'light_blue',
      'yellow',
      'lime',
      'pink',
      'gray',
      'light_gray',
      'cyan',
      'purple',
      'blue',
      'brown',
      'green',
      'red',
      'black',
    ];
    const types = [
      '_terracotta_botany_pot',
      '_terracotta_hopper_botany_pot',
      '_concrete_botany_pot',
      '_concrete_hopper_botany_pot',
      '_glazed_terracotta_botany_pot',
      '_glazed_terracotta_hopper_botany_pot',
    ];
    const toHide = [];
    colors.forEach((color) => {
      types.forEach((type) => {
        toHide.push(`botanypots:${color}${type}`);
        toHide.push(`botanypotstiers:elite_${color}${type}`);
        toHide.push(`botanypotstiers:ultra_${color}${type}`);
        toHide.push(`botanypotstiers:creative_${color}${type}`);
      });
    });
    event.hide(toHide);
  })();

    // hide_jei_cakes (year cakes)
    (function() {
      const unixStart = 1747346400000;
      const cakes = [];
      for (let i = 1; i <= 12; i++) {
        // only hide future cakes (match original logic)
        if (Date.now() <= unixStart + i * 31536000000)
          cakes.push(`kubejs:year_${i}_cake`);
      }
      if (cakes.length) event.hide(cakes);
    })();
  });
})();
