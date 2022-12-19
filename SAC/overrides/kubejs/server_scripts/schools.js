onEvent('ftbschools.load_schools', event => {
    event.add("ftbacademy:spawn", p => {})
    event.add("ftbacademy:tech", p => {})
    event.add("ftbacademy:botania", p => {})
    event.add("ftbacademy:astralsorcery", p => {p.night=true})
    // event.add("ftbacademy:graduation", p => {})
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

onEvent('block.detector.leave_school.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.runCommand('/school leave')
    })
})
onEvent('block.detector.leave_spawn_message.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('Follow the quests!')
        p.tell(['You can use either the ', Text.yellow('Quest Book'), ' or the button at the top left of your inventory!'])
    })
})
onEvent('block.detector.spawn_easter_egg_1.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_spawn_1')
    })
})
onEvent('block.detector.spawn_easter_egg_2.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_spawn_2')
    })
})
onEvent('block.detector.spawn_easter_egg_3.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_spawn_3')
    })
})
onEvent('block.detector.spawn_easter_egg_4.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_spawn_4')
    })
})
onEvent('block.detector.spawn_easter_egg_5.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_spawn_5')
    })
})
onEvent('block.detector.spawn_easter_egg_6.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_spawn_6')
    })
})
onEvent('block.detector.spawn_easter_egg_7.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_spawn_7')
    })
})
onEvent('block.detector.spawn_easter_egg_8.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_spawn_8')
    })
})
onEvent('block.detector.astral_easter_egg_1.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_astral_1')
    })
})
onEvent('block.detector.astral_easter_egg_2.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_astral_2')
    })
})
onEvent('block.detector.tech_easter_egg_1.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_tech_1')
    })
})
onEvent('block.detector.tech_easter_egg_2.powered', event => {
    event.block.playersInRadius.forEach(p => {
        p.tell('You found an easter egg!')
        p.data.gamestages.add('easter_egg_tech_2')
    })
})