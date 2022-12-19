onEvent('player.inventory.changed', event => {
	if (event.item.id == 'mowziesmobs:wrought_axe' && !event.player.stages.has('overworld')) {
        event.player.stages.add('overworld')
        event.server.scheduleInTicks(100, event.server, function (callback) {
            callback.server.runCommandSilent('execute in overworld run tp ' + event.player.name + ' 0 256 0')
            callback.server.runCommandSilent('effect give ' + event.player.name + ' slow_falling 30 0')
        })
    }
})
