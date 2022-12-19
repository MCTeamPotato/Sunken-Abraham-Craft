// priority: 0
onEvent('item.registry', event => {
	event.create('bamboo_staff').type('sword').tier('diamond')//竹杖
	event.create('awei_sword').type('sword').tier('diamond')//阿伟的剑
	event.create('roll_coin').maxStackSize(16)//抽奖币
	event.create('curios_extender')//增加饰品栏
		.maxStackSize(1)
		.food((food) => {
			food.hunger(8).saturation(0.5).alwaysEdible().eaten(ctx=>{
				ctx.player.tell('饰品获得了新的槽位')
			})
		})
})
