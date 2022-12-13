import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.tick.MCPlayerTickEvent;
import crafttweaker.api.event.entity.MCEntityJoinWorldEvent;
import crafttweaker.api.event.entity.player.MCPlayerLoggedInEvent;
import crafttweaker.api.event.entity.player.interact.MCRightClickBlockEvent;
import crafttweaker.api.event.entity.living.MCLivingEntityUseItemFinishEvent;

CTEventManager.register<MCPlayerTickEvent>((event) => {
    var player = event.player;
    var world = player.world;
    if (world.remote) return;
    var name = player.getName().formattedText;
    if (player.removeTag("trinkets_extend")) world.asServerWorld().server.executeCommand("execute at " + name + " run curios add trinkets " + name + " 1", true);
});

CTEventManager.register<MCRightClickBlockEvent>((event) => {
    var player = event.player;
    var world = player.world;
    if (world.remote) return;
    var server = world.asServerWorld().server;
    if ("stone_button" in world.getBlockState(event.blockPos).commandString && "overworld" in world.dimension) {
        event.cancel();
        server.executeCommand("execute in sac:adventure run tp " + player.uuid + " 0 200 0", true);
        if (player.isCreative()) return;
        server.executeCommand("effect give " + player.uuid + " slow_falling 30 0", true);
    }
});

CTEventManager.register<MCPlayerLoggedInEvent>((event) => {
    var player = event.player;
    var world = player.world;
    if (world.remote) return;
    if (player.removeTag("logged")) {
        player.addTag("logged");
        return;
    }
    player.addTag("logged");
    player.give(<item:bonfires:estus_flask>.withTag({estus: 3 as int, reinforce_level: 0 as int, uses: 3 as int, reinforce_max: 10 as int}));
    player.give(<item:epicfight:skillbook>.withTag({skill: "epicfight:guard" as string}));
    player.give(<item:epicfight:skillbook>.withTag({skill: "epicfight:roll" as string}));
});

CTEventManager.register<MCLivingEntityUseItemFinishEvent>((event) => {
    var entity = event.entityLiving;
    if (entity.world.remote) return;
    if (event.item.registryName.path == "curios_extender") {
        if (entity.removeTag("eat_one")) return;
        entity.addTag("trinkets_extend");
        entity.addTag("eat_one");
    }
});

CTEventManager.register<MCEntityJoinWorldEvent>((event) => {
    var entity = event.entity;
    var world = entity.world;
    if (world.remote) return;
    var type = entity.type;
    var name = type.commandString;

    if ("monster" in type.classification.commandString && "overworld" in world.dimension) {
        if ("wroughtnaut" in name || "dummmmmmy" in name || "armor_stand" in name) return;
        event.cancel();
    }
});
