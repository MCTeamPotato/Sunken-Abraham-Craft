onEvent('item.tooltip', t => {
  t.addAdvanced('kubejs:curios_extender', (item, advanced, text) => {
    if (!t.isShift()) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('使用之后获得新的饰品槽位，每个玩家只能使用一次').blue()])
    }
  })
  t.addAdvanced('chromaticarsenal:golden_heart',(item, advanced, text) => {
    if(!t.isShift()) {
      text.add(1, [Text.of('按住').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('给予玩家伤害吸收效果，附魔保护将增加最大生命值').blue()])
    }
  })
  t.addAdvanced('chromaticarsenal:glass_shield',(item, advanced, text) => {
    if(!t.isShift()) {
      text.add(1, [Text.of('按住 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('抵挡一次伤害然后破碎，之后需要充能，附魔经验修补可以减少充能时间，附魔耐久减少破碎的概率').blue()])
    }
  })
  t.addAdvanced('chromaticarsenal:ward_crystal',(item, advanced, text) => {
    if(!t.isShift()) {
      text.add(1, [Text.of('使用 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('同时减少受到的魔法伤害和造成的魔法伤害：75%').blue()])
    }
  })
  t.addAdvanced('chromaticarsenal:shadow_treads',(item, advanced, text) => {
    if(!t.isShift()) {
      text.add(1, [Text.of('按住 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('在暗处将获得速度效果，同时免疫缓慢，附魔灵魂疾行将提升速度效果的等级').blue()])
    }
  })
  t.addAdvanced('chromaticarsenal:duality_rings',(item, advanced, text) => {
    if(!t.isShift()) {
      text.add(1, [Text.of('按住 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('提升所有箭矢的伤害，在使用魔法蒜蓉面包的时候获得生命提升和饱和效果').blue()])
    }
  })
  t.addAdvanced('chromaticarsenal:friendly_fire_flower',(item, advanced, text) => {
    if(!t.isShift()) {
      text.add(1, [Text.of('按住 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('你将不能对自己造成伤害，着火时获得抗火效果，此效果有短暂前摇').blue()])
    }
  })
  t.addAdvanced('chromaticarsenal:lunar_crystal',(item, advanced, text) => {
    if(!t.isShift()) {
      text.add(1, [Text.of('按住 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('免疫摔落伤害，有十分之一的概率给予攻击目标短暂的强力漂浮效果').blue()])
    }
  })
  t.addAdvanced('chromaticarsenal:super_golden_heart',(item, advanced, text) => {
    if(!t.isShift()) {
      text.add(1, [Text.of('按住 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('抵挡一次伤害并给予玩家骨折效果：降低最大生命值；此效果有冷却时间').blue()])
    }
  })
  t.addAdvanced('chromaticarsenal:super_ward_crystal',(item, advanced, text) => {
    if(!t.isShift()) {
      text.add(1, [Text.of('按住 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
    }
    if (t.isShift()) {
      text.add(1, [Text.of('继承了监守水晶的效果，同时免疫所有的药水效果').blue()])
    }
  })
})