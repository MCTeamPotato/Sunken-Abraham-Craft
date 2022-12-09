// priority: 0
onEvent('item.registry', event => {
	event.create('bamboo_staff').type('sword').tier('diamond')//竹杖
	event.create('awei_sword').type('sword').tier('diamond')//阿伟的剑
	event.create('roll_coin').maxStackSize(16)//抽奖币
})
