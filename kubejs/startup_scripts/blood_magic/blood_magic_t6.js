StartupEvents.postInit(event => {
    const BloodMagicAPI = Java.loadClass('wayoftime.bloodmagic.impl.BloodMagicAPI');

    const capstoneState = Block.getBlock('avaritia:infinity').defaultBlockState();

    BloodMagicAPI.INSTANCE.registerAltarComponent(capstoneState, "CRYSTAL");
});