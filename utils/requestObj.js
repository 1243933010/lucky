let requestObj = {
	region: {
		name: "注册",
		url: '/api/auth/register',
		type: 'POST'
	},
	login: {
		name: "登录",
		url: '/api/auth/login',
		type: 'POST'
	},
	loginByCode: {
		name: "Email Verification Code（需要登录）",
		url: '/api/email/send_code_login',
		type: 'POST'
	},
	emailPassword:{
		name: "Email Verification Code",
		url: '/api/email/send_code',
		type: 'POST'
	},
	changePayPassword: {
		name: "修改/设置 支付密码",
		url: '/api/auth/change_pay_password',
		type: 'POST'
	},
	changePssword: {
		name: "修改登录密码",
		url: '/api/auth/change_password',
		type: 'POST'
	},
	forgetPassword:{
		name: "忘记密码",
		url: '/api/auth/forget',
		type: 'POST'
	},
	userInfo:{
		name: "个人信息",
		url: '/api/user/info',
		type: 'POST'
	},
	recharges_and_withdraws:{
		name: "充值提现列表",
		url: '/api/user/recharges_and_withdraws',
		type: 'POST'
	},
	userUpdate:{
		name: "修改个人信息(昵称、头像等)",
		url: '/api/user/update',
		type: 'POST'
	},
	accountLogs:{
		name: "账单列表",
		url: '/api/user/account_logs',
		type: 'POST'
	},
	rechargeConfig:{
		name: "通道列表",
		url: '/api/recharge/config',
		type: 'POST'
	},
	rechargeCreate:{
		name: "添加订单",
		url: '/api/recharge/create',
		type: 'POST'
	},
	rechargeDetail:{
		name: "充值详情",
		url: '/api/recharge/detail',
		type: 'POST'
	},
	upload:{
		name: "上传图片",
		url: '/api/upload',
		type: 'POST'
	},
	faq:{
		name: "faq列表",
		url: '/api/faq/index',
		type: 'POST'
	},
	withdrawConfig:{
		name: "提现配置",
		url: '/api/withdraw/config',
		type: 'POST'
	},
	withdrawCreate:{
		name: "提现申请",
		url: '/api/withdraw/create',
		type: 'POST'
	},
	teamAccountLogs:{
		name: "团队账单",
		url: '/api/user/team_account_logs',
		type: 'POST'
	},
	inviteRecords:{
		name: "邀请记录",
		url: '/api/user/invite_records',
		type: 'POST'
	},
	inviteLink:{
		name: "邀请好友",
		url: '/api/user/create_invite_link',
		type: 'POST'
	},
	todayGameRank:{
		name: "团队游戏排名",
		url: '/api/user/today_game_rank',
		type: 'POST'
	},
	transfer:{
		name: "划转佣金",
		url: '/api/user/transfer',
		type: 'POST'
	},
	commissionInfo:{
		name: "佣金信息",
		url: '/api/user/commission_info',
		type: 'POST'
	},
	gameRecords:{
		name: "游戏记录",
		url: '/api/user/game_records',
		type: 'POST'
	},
	indexConfig:{
		name: "首页配置",
		url: '/api/index/config',
		type: 'POST'
	},
	teamInfo:{
		name: "团队信息",
		url: '/api/index/team_info',
		type: 'POST'
	},
	amountList:{
		name: "系统房金额列表",
		url: '/api/room/amount_list',
		type: 'POST'
	},
	roomList:{
		name: "房间列表",
		url: '/api/room/lists',
		type: 'POST'
	},
	joinSystem:{
		name: "加入系统房间",
		url: '/api/room/join_system',
		type: 'POST'
	},
	roomDetail:{
		name: "房间详情",
		url: '/api/room/detail',
		type: 'POST'
	},
	roomInfo:{
		name: "房间动态信息",
		url: '/api/game/room_info',
		type: 'POST'
	},
	gameStatus:{
		name: "游戏状态",
		url: '/api/game/status',
		type: 'POST'
	},
	switchSystemRoom:{
		name: "切换系统房间",
		url: '/api/room/switch_system',
		type: 'POST'
	},
	roomLeave:{
		name: "退出房间",
		url: '/api/room/leave',
		type: 'POST'
	},
	roomCreate:{
		name: "创建房间",
		url: '/api/room/create',
		type: 'POST'
	},
	roomJoin:{
		name: "加入房间",
		url: '/api/room/join',
		type: 'POST'
	},
	roomHistory:{
		name: "房间历史",
		url: '/api/room/history',
		type: 'POST'
	},
	amountListInRoom:{
		name: "房间内金额列表",
		url: '/api/room/amount_list_in_room',
		type: 'POST'
	},
	gameJoin:{
		name: "参与游戏",
		url: '/api/game/join',
		type: 'POST'
	},
	gameResult:{
		name: "游戏结果",
		url: '/api/game/result',
		type: 'POST'
	},
	heartbeat:{
		name: "全局心跳",
		url: '/api/heartbeat',
		type: 'GET'
	},
	threeCommissionInfo:{
		name: "三级佣金信息",
		url: '/api/user/three_commission_info',
		type: 'POST'
	},
	
}
export default requestObj;