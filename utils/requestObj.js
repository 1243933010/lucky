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
		name: "邮箱验证码（需要登录）",
		url: '/api/email/send_code_login',
		type: 'POST'
	},
	emailPassword:{
		name: "邮箱验证码",
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
}
export default requestObj;