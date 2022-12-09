// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// 
event.hide('crossroads:molten_iron')
event.hide('crossroads:molten_copper')
event.hide('crossroads:molten_tin')
event.hide('crossroads:molten_gold')

event.hide('crossroads:molten_iron_bucket')
event.hide('crossroads:molten_copper_bucket')
event.hide('crossroads:molten_tin_bucket')
event.hide('crossroads:molten_gold_bucket')

event.hide('crossroads:ingot_copper')
event.hide('iceandfire:copper_ingot')
event.hide('tconstruct:copper_ingot')

event.hide('crossroads:block_copper')
event.hide('iceandfire:copper_block')
event.hide('tconstruct:copper_block')

event.hide('crossroads:nugget_copper')
event.hide('iceandfire:copper_nugget')
event.hide('tconstruct:copper_nugget')

event.hide('neapolitan:milk_bottle')
event.hide('vanillacookbook:milk_bottle')
event.hide('vanillacookbook:cooked_egg')

event.hide('crossroads:dust_gold')
event.hide('crossroads:dust_iron')

event.hide('appliedenergistics2:flour')
event.hide('tconstruct:scorched_alloyer')

event.hide('crossroads:shell_glass')
event.hide('crossroads:shell_cryst')

event.hide('crossroads:fluid_tube')
event.hide('crossroads:redstone_fluid_tube')
event.hide('crossroads:rotary_pump')

event.hide('industrialforegoing:pitiful_generator')

event.hide('crossroads:ore_tin')

event.hide('crossroads:ore_copper')
event.hide('iceandfire:copper_ore')
event.hide('tconstruct:copper_ore')
event.hide('mekanism:copper_ore')

})

onEvent('item.tooltip', tooltip => {
  // 批量添加tooltip
tooltip.add(['kubejs:creation_anemone'], ['毕业物品'])
tooltip.add(['industrialforegoing:ore_laser_base'], ['无法放置于下界Y122以上'])
tooltip.add(['kubejs:blaze_love_bucket'], ['2000℃的爱'])
tooltip.add(['kubejs:siren_milk_bucket'], ['从塞壬身上获得'])
tooltip.add(['kubejs:gorgon_blood_bucket'], ['从蛇发女妖身上获得'])
tooltip.add(['kubejs:ocean_cupcake'], ['海洋的歌声平息了下界的烈焰'])
tooltip.add(['kubejs:zincream'], ['锌与冰淇淋烹煮得到'])
tooltip.add(['kubejs:fake_enderman'], ['右击黑曜石召唤4只末影人'])
tooltip.add(['kubejs:fake_wither_skeleton'], ['右击红色下界砖块召唤2只凋灵骷髅'])
tooltip.add(['kubejs:chaos_simulation'], ['绝对不是闪电炒蛋'])

tooltip.add(['crossroads:alch_tube'], ['用于导流试剂，可用扳手调整流向。'])
tooltip.add(['crossroads:crystal_alch_tube'], ['用于导流试剂，可用扳手调整流向。'])

tooltip.add(['create:zinc_ore'], ['默认不生成，推荐JEI搜索“双锌物语”。'])
tooltip.add(['mekanism:osmium_ore'], ['默认不生成，推荐JEI搜索“四氧化锇”。'])

tooltip.add(['farmersdelight:cutting_board'], ['可用发射器自动切制，砧板上有东西时将通过比较器输出红石信号。'])

tooltip.add(['kubejs:coal_blaze_rod'], ['烈焰人窒息而死时掉落。'])



tooltip.add(['kubejs:iron_seed'], ['授予自动化达人的奖章。'])
tooltip.add(['kubejs:zinc_seed'], ['授予自动化达人的奖章。'])
tooltip.add(['kubejs:tin_seed'], ['授予自动化达人的奖章。'])

 /* tooltip.add(['minecraft:diorite', 'minecraft:granite', 'minecraft:andesite'], '三 大 废 岩')*/
  })

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:tsubame_block', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('青雀方块被破坏时，')])
      text.add(2, [Text.of('会将附近的青雀方块转化为燕方块。')])
      text.add(3, [Text.of('吞噬'), Text.of('“过去”').aqua(), Text.of('吧')])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:aogara_block', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('无掉落，按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('雏鸟方块被破坏时，')])
      text.add(2, [Text.of('会将附近的雏鸟方块转化为青雀方块。')])
      text.add(3, [Text.of('吞噬'), Text.of('“过去”').aqua(), Text.of('吧')])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:hinatori_block', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('雏鸟方块被破坏时，')])
      text.add(2, [Text.of('会将附近的雏鸟方块转化为青雀方块。')])
      text.add(3, [Text.of('吞噬'), Text.of('“过去”').aqua(), Text.of('吧')])
    }
  })
})




onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:siren_milk_bucket', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('桶装纯白液体，蕴含着汐海的力量')])
      text.add(2, [Text.of('人们认为塞壬的歌声是死亡的诱惑')])
      text.add(3, [Text.of('可被称为'), Text.of('“美人鱼”').aqua(), Text.of('之物对人的爱始终存在')])
      text.add(4, [Text.of('不知为何连同歌声和面容一同扭曲了')])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:gorgon_blood_bucket', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('桶装血液，带有些许蛇发女妖的诅咒。')])
      text.add(2, [Text.of('石化的原理是魂魄的完全剥夺，')])
      text.add(3, [Text.of('她却能保留自身的灵魂，')])
      text.add(4, [Text.of('如同蛇毒不会伤害蛇自身')])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:rotten_solution_bucket', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('桶装腐臭液体，能够腐化有机物。')])
      text.add(2, [Text.of('须知腐化也是生命的机能，')])
      text.add(3, [Text.of('熵无可避免地增加，')])
      text.add(4, [Text.of('生者也不可避免地一同走向衰亡。')])
    }
  })
})


onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:empty_broken_egg', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('失去内容物的蛋壳')])
      text.add(2, [Text.of('因此失去了与生命的连接。')])
      text.add(3, [Text.of('或许不该这样化为尘埃，')])
      text.add(4, [Text.of('若能获得生命的填充，哪怕是虚假的也好。')])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:sugarcane_fibre', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('甘蔗榨出糖分后的残渣，')])
      text.add(2, [Text.of('在原版的Minecraf世界中不该存在。')])
      text.add(3, [Text.of('甘蔗曾是纯粹的糖和纸，')])
      text.add(4, [Text.of('在整合包作者的恶意注入后便不再如此。')])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:dendro_ash', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('焚烧植物得到的余烬，')])
      text.add(2, [Text.of('虽说已化为灰烬，')])
      text.add(3, [Text.of('仍然蕴含草木的精华，')])
      text.add(4, [Text.of('也许能以某种形式再度燃烧。')])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:prototype_andesite_alloy', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('安山合金的原胚，')])
      text.add(2, [Text.of('经过烧炼能成为真正的安山合金。')])
      text.add(3, [Text.of('若安山合金只是一种幻想，')])
      text.add(4, [Text.of('那么这就是梦的种子。')])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:washed_sand_pile', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('沙子经过冲洗的产物，')])
      text.add(2, [Text.of('精细而含有大量硅质，')])
      text.add(3, [Text.of('可以很好的融入岩石中。')])
      text.add(4, [Text.of('遗憾的是洗不出金子。')])
    }
  })
})



onEvent('item.tooltip', e => {
  e.addAdvanced('mobcatcher:net', (item, advanced, text) => {
    if (!e.isShift()) {
      
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('记录刹那的法器，').darkAqua()])
      text.add(2, [Text.of('某物的灵魂被束缚其中，').darkAqua()])
      text.add(3, [Text.of('时空的封锁比锁链和拴绳更为强大。').darkAqua()])
      text.add(4, [Text.of('只是谁知道再次释放出的是不是【原本】呢？').darkAqua()])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:fake_egg', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('由无缘的蛋壳转化而来，').darkAqua()])
      text.add(2, [Text.of('虚假的人造之卵。').darkAqua()])
      text.add(3, [Text.of('人造生命并非易事。').darkAqua()])
      text.add(4, [Text.of('因此这只是另一种生命的转移和重组。').darkAqua()])
	  text.add(5, [Text.of('又名“鸡儿假蛋”。').yellow()])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:chaos_simulation', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('闪电击中虚伪之卵的产物，').darkAqua()])
      text.add(2, [Text.of('外形好似原初的混沌。').darkAqua()])
      text.add(3, [Text.of('学者认为有机物诞生自雷霆下的大海，').darkAqua()])
      text.add(4, [Text.of('又说虚假也是真实的一部分。').darkAqua()])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:ignorance_lock', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('消耗品，右击消除生物AI。').gold()])
      text.add(2, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('邪恶的无形之锁，').darkAqua()])
      text.add(2, [Text.of('能封印生物的精神，').darkAqua()])
      text.add(3, [Text.of('使其任人玩弄宰割，').darkAqua()])
      text.add(4, [Text.of('但无知也会带来出人意料的效果。').darkAqua()])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:wisdom_spark', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('消耗品，右击回复生物AI。').gold()])
      text.add(2, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('涌动的精神之火，').darkAqua()])
      text.add(2, [Text.of('能重新赋予生物灵智。').darkAqua()])
      text.add(3, [Text.of('那是遥远的过去').darkAqua()])
      text.add(4, [Text.of('最初的悸动。').darkAqua()])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:gorgon_tube', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('用以制作蛇发女妖计算机').gold()])
      text.add(2, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('饱含诅咒的电子管，').darkAqua()])
      text.add(2, [Text.of('由蛇发女妖的首级改造而来。').darkAqua()])
      text.add(3, [Text.of('据说曾有一台头颅装配机，').darkAqua()])
      text.add(4, [Text.of('只是不知何日再见了。').darkAqua()])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:gorgon_computer', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('放置于绯红菌柄上召唤蛇发女妖').gold()])
      text.add(2, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('查看更多信息。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('机械与魔法结合的邪异造物，').darkAqua()])
      text.add(2, [Text.of('封锁了极为可怖的存在。').darkAqua()])
      text.add(3, [Text.of('所幸经过智者的调整，').darkAqua()])
      text.add(4, [Text.of('已经抹杀了其中的精神。').darkAqua()])
    }
  })
})

onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:heart_of_sirius', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('LOVE').gold()])
      text.add(2, [Text.of('按下').gold(), Text.of('[Shift]').yellow(), Text.of('获得更多提示。').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('字母间记得用“/”隔开，共计3个。').darkAqua()])
    }
  })
})



onEvent('jei.information', event => {
  event.add('kubejs:creation_anemone', ['本整合包的毕业物品。'])
  
  event.add('mekanism:tin_ore', ['急旋的动力锯伤害了雪傀儡，其苍白之血浸染脚下翠绿之瓜，于是锡就此诞生。'])
  event.add('mekanism:fluorite_ore', ['多出现于花岗岩中。'])
  
  event.add('kubejs:secret_aperitif_glass', ['非常的新鲜，非常的美味。'])
  
  event.add('kubejs:s_block', ['手持光辉石右击新生魔艺的魔法光。'])
  event.add('kubejs:sekai_block', ['将S方块置于地，按以下顺序持物右击获得：生意面、冰块、生意面、生意面、冰块。'])
  
  event.add('mobcatcher:net', ['将烈焰人之头颅置于平地，取8发条轴承围成3*3形状，持恶魂之泪右击。'])
  event.add('crossroads:flux_sink', ['将末影龙之头颅置于平地，取8个蜜汁火腿围成3*3形状，持末影珍珠右击，亦可获得。'])
})


/*
onEvent('item.tooltip', e => {
  e.addAdvanced('kubejs:test_item', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      text.add(1, [Text.of('Default: '), Text.of('50 '), Text.of('mB/t')])
      text.add(2, [Text.of('Basic: '), Text.of('100 '), Text.of('mB/t')])
      text.add(3, [Text.of('Improved: ').gold(), Text.of('500 ').yellow(), Text.of('mB/t').gold()])
      text.add(4, [Text.of('Advanced: ').darkAqua(), Text.of('2,000 ').aqua(), Text.of('mB/t').darkAqua()])
      text.add(5, [Text.of('Ultimate: ').darkGray(), Text.of('10,000 ').gray(), Text.of('mB/t').darkGray()])
      text.add(6, [Text.of('Infinity: ').darkPurple(), Text.of('2,147,483,647 ').lightPurple(), Text.of('mB/t').darkPurple()])
    }
  })
})
*/