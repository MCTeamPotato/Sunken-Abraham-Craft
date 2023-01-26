onEvent('ftbschools.load_schools', event => {
    event.add("ftbacademy:spawn", p => {})
})

onEvent('ftbschools.config', event => {
    event.setInitialSchool("ftbacademy:spawn")
    event.disableCommand("tp")
    event.disableCommand("tpa")
    event.disableCommand("tpaccept")
    event.disableCommand("tpahere")
    event.disableCommand("home")
    event.disableCommand("sethome")
    event.disableCommand("spawn")
    event.disableCommand("setworldspawn")
    event.disableCommand("warp")
    event.disableCommand("setwarp")
})

onEvent('player.inventory.changed', event => {
	if (event.item.id == 'mowziesmobs:wrought_axe' && !event.player.stages.has('overworld')) {
        event.player.stages.add('overworld')
        event.server.scheduleInTicks(100, event.server, function (callback) {
            callback.server.runCommandSilent('/school leave ' + event.player.name)
        })
    }
})

onEvent('player.logged_in', event => {
    var stages = event.player.stages
    if (stages.has("logged_in")) return
    stages.add("logged_in")
    event.server.runCommandSilent('/epicfight skill add ' + event.player.name + ' epicfight:guard')
    event.server.runCommandSilent('/epicfight skill add ' + event.player.name + ' epicfight:roll')
})