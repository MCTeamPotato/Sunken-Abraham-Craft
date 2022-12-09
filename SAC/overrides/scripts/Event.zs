import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.entity.player.MCPlayerLoggedInEvent;

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