import requestObj from '@/utils/requestObj.js'
export let filesUrl = 'https://maojian886.oss-ap-northeast-1.aliyuncs.com/';
export let url = 'https://api.uk.goldkites.com'
export let urlPath = 'http://2405.devnft.top'

export const $request = (requestName,params,headerType=0)=>{
	let reqObj = requestObj[requestName];
	let token = uni.getStorageSync('token');
	// let language = uni.getLocale();
	// console.log(language)
	// // let languageObj = {'en':'en'}
	
	// let languageObj = {"zh-Hans":"zh_CN","en":"en","fr": "fr","es": "es","pt":"pt","ru":"ru","ara":"ara","mn":"mn"}
	// let shareInfo = {
	// 	'invitation_code':'',
	// 	'scene':'',
	// 	'associated_id':'',
	// }
	// if(params.invite_code&&params.type&&params.associated_id){
	// 	shareInfo.invitation_code = params.invite_code;
	// 	shareInfo.scene = params.type;
	// 	shareInfo.associated_id = params.id;
	// }
	let headerObj = [
		{
			"Content-Type":"application/json",
			"Authorization":token?`${token}`:'',
			"Accept":"application/json",
			"Accept-Language":'en',
			//  'Invitation-Code':shareInfo.invitation_code,
			// 'Scene':shareInfo.scene,
			// 'Associated-Id':shareInfo.associated_id
		},
		{
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization":token?`${token}`:'',
			"Accept":"application/json",
			"Accept-Language":'en',
			// 'Invitation-Code':shareInfo.invitation_code,
			// 'Scene':shareInfo.scene,
			// 'Associated-Id':shareInfo.associated_id
		}
	]
	
	let reqUrl = reqObj?.otherGet?`${url}${reqObj?.url}/${params}`:`${url}${reqObj?.url}`
	let data = reqObj?.otherGet?{}:params;
	if(params.invite_code&&params.type&&params.associated_id){
		data = {id:params.id}
	}
	return new Promise((resolve,reject)=>{
		uni.request({
		    url: reqUrl, 
			method:requestObj[requestName]?.type,
		    data,
		    header: headerObj[headerType],
		    success: (res) => {
				if(res.data.code==403){
					uni.hideLoading()
					uni.clearStorageSync();
					uni.showToast({
						icon:'none',
						title:res.data.message
					})
					setTimeout(()=>{
						uni.reLaunch({
							url:'/pages/login/login'
						})
					},1000)
					return
				}
		        resolve(res)
		    },
			fail: (err) => {
				console.log(err,'-------------')
				reject(err)
			}
		});

	})
}

export const $totast = (title,icon=false)=>{
	uni.showToast({
		icon:icon?'success':'none',
		title
	})
}