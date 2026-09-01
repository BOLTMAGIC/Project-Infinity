//Netherite Varient Hammers
StartupEvents.registry('item', event => {
    
    event.create('netherite_iron_hammer', 'pickaxe')
        .tier('netherite')
        .tag('exdeorum:hammers')
        .modifyTier(tier => {
            tier.uses = 2313;
        });
    
    event.create('netherite_gold_hammer', 'pickaxe')
        .tier('netherite')
        .tag('exdeorum:hammers')
        .modifyTier(tier => {
            tier.uses = 2313;
        });
    
    event.create('netherite_emerald_hammer', 'pickaxe')
        .tier('netherite')
        .tag('exdeorum:hammers')
        .modifyTier(tier => {
            tier.uses = 2651;
        });
    
    event.create('netherite_diamond_hammer', 'pickaxe')
        .tier('netherite')
        .tag('exdeorum:hammers')
        .modifyTier(tier => {
            tier.uses = 3092;
        });
});

//ATM Varient Hammers
StartupEvents.registry('item', event => {
    
    event.create('allthemodium_hammer', 'pickaxe')
        .tier('netherite')
        .tag('exdeorum:hammers2')
        .modifyTier(tier => {
            tier.uses = -1;
        });
        
    event.create('vibranium_hammer', 'pickaxe')
        .tier('netherite')
        .tag('exdeorum:hammers2')
        .modifyTier(tier => {
            tier.uses = -1;
        })
        
    event.create('unobtainium_hammer', 'pickaxe')
        .tier('netherite')
        .tag('exdeorum:hammers2')
        .modifyTier(tier => {
            tier.uses = -1;
        })
        
    event.create('allthemodium_alloy_hammer', 'pickaxe')
        .tier('netherite')
        .tag('exdeorum:hammers2')
        .modifyTier(tier => {
            tier.uses = -1;
        })

});