onEvent('item.tooltip', t => {
    t.addAdvanced('chromaticarsenal:ward_crystal', (item, advanced, text) => {
      if (!t.isShift()) {
        text.add(1, [Text.of('使用 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
      }
      if (t.isShift()) {
        text.add(1, [Text.of('攻击一下生物可攻击2下 ').blue()])
      }})

      t.addAdvanced('gateofbabylon:diamond_haladie', (item, advanced, text) => {
        if (!t.isShift()) {
          text.add(1, [Text.of('使用 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
        }
        if (t.isShift()) {
          text.add(1, [Text.of('攻击一下生物可攻击2下 ').blue()])
        }
      })
        t.addAdvanced('gateofbabylon:golden_haladie', (item, advanced, text) => {
          if (!t.isShift()) {
            text.add(1, [Text.of('使用 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
          }
          if (t.isShift()) {
            text.add(1, [Text.of('攻击一下生物可攻击2下 ').blue()])
          }
        })
          t.addAdvanced('gateofbabylon:iron_haladie', (item, advanced, text) => {
            if (!t.isShift()) {
              text.add(1, [Text.of('使用 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
            }
            if (t.isShift()) {
              text.add(1, [Text.of('攻击一下生物可攻击2下 ').blue()])
            }
          })
            t.addAdvanced('gateofbabylon:stone_haladie', (item, advanced, text) => {
              if (!t.isShift()) {
                text.add(1, [Text.of('使用 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
              }
              if (t.isShift()) {
                text.add(1, [Text.of('攻击一下生物可攻击2下 ').blue()])
              }
            })
              t.addAdvanced('gateofbabylon:wooden_haladie', (item, advanced, text) => {
                if (!t.isShift()) {
                  text.add(1, [Text.of('使用 ').gold(), Text.of('Shift ').yellow(), Text.of('看到更多信息.').gold()])
                }
                if (t.isShift()) {
                  text.add(1, [Text.of('攻击一下生物可攻击2下 ').blue()])
                }
    })
  })