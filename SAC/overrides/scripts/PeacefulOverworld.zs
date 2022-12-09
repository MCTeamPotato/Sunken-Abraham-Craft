import crafttweaker.api.event.entity.MCEntityJoinWorldEvent;
import crafttweaker.api.events.CTEventManager;

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
