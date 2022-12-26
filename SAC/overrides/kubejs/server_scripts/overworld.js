onEvent('player.inventory.changed', event => {
	if (event.item.id == 'mowziesmobs:wrought_axe' && !event.player.stages.has('overworld')) {
        event.player.stages.add('overworld')
        event.server.scheduleInTicks(100, event.server, function (callback) {
            callback.server.runCommandSilent('school leave ' + event.player.name)
        })
    }
})
