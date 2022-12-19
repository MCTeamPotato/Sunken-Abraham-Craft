import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.tick.MCPlayerTickEvent;
import crafttweaker.api.event.entity.player.MCPlayerRespawnEvent;
import crafttweaker.api.event.entity.player.MCPlayerLoggedInEvent;
import crafttweaker.api.event.entity.player.interact.MCRightClickItemEvent;
import crafttweaker.api.event.entity.living.MCLivingEntityUseItemFinishEvent;

CTEventManager.register<MCRightClickItemEvent>((event) => {
    var player = event.player;
    if (player.world.remote) return;
    if ("curios_extender" in event.itemStack.registryName.toString()) {
        if (player.removeTag("curiosextended")) {
            event.cancel();
            player.addTag("curiosextended");
            player.sendMessage("\u4e0d\u51c6\u6070\uff01");
        }
    }
});

CTEventManager.register<MCPlayerRespawnEvent>((event) => {
    var player = event.player;
    var world = player.world;
    if (world.remote) return;
    var server = world.asServerWorld().server;
    var data = player.data;
    if ("SpawnY" in data.asString() && "ftbschools" in data.getAt("SpawnDimension").asString() && !("ftbschools" in world.dimension)) {
        server.executeCommand("execute in overworld run tp " + player.uuid + " 0 256 0", true);
        server.executeCommand("effect give " + player.uuid + " slow_falling 30 0");
    }
});

CTEventManager.register<MCPlayerTickEvent>((event) => {
    var player = event.player;
    var world = player.world;
    if (world.remote) return;
    var name = player.getName().formattedText;
    if (player.removeTag("trinkets_extend")) world.asServerWorld().server.executeCommand("execute at " + name + " run curios add trinkets " + name + " 1", true);
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
    player.give(<item:bonfires:estus_flask>.withTag({estus: 3, reinforce_level: 0, uses: 3, reinforce_max: 10}));
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
        entity.addTag("curiosextended");
    }
});