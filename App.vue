<script>
	import {
		$request,
		filesUrl
	} from "@/utils/request";
	export default {
		data() {
			return {
				isPc: false
			}
		},
		globalData: {
			indexConfig: {}
		},
		onLaunch: function() {
			
			console.log('App Launch')
			this.startPolling();
			this.indexConfigFnc();
			uni.setStorageSync('thisSee', [])
			this.checkIfPc();
			if (this.isPc) {
				this.setAppViewLength();
			}
		},
		
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			checkIfPc() {
				const systemInfo = uni.getSystemInfoSync();
				const platform = systemInfo.platform;
				
				// 判断是否为PC端
				if (platform === 'mac' || platform === 'windows') {
					this.isPc = true;
				}
			},
			setAppViewLength() {
				// 这里假设你要设置的长度为一个固定值，例如1000px
				// #ifdef H5
				let res = document.getElementsByClassName('uni-body')
				// document.documentElement.style.width = '400px';
				// document.documentElement.style.margin = '0 auto';
				// const appElement = this.$refs.appView;
				// setTimeout(()=>{
					console.log(res, '---')
				// },500)
				if (res.length) {
					res[0].style.width = '400px';
					res[0].style.margin = '0 auto';
				}
				// #endif
			},
			async indexConfigFnc() {
				let res = await $request('indexConfig', {});
				// console.log(res)
				if (res.data.code == 200) {
					res.data.data.system_logo = filesUrl + res.data.data.system_logo
					getApp().globalData.indexConfig = res.data.data;
					uni.setStorageSync('indexConfig',res.data.data) 
					// console.log(res,getApp().globalData.indexConfig)
					// this.indexInfo = res.data.data;
				}
			},
			async startPolling() {
				// 启动轮询，每隔 1 秒调用一次
				this.polling = true;
				while (this.polling) {
					await this.getRoomInfo(); // 等待请求返回
					await this.sleep(6000); // 等待 1 秒后再继续轮询
				}
			},
			async getRoomInfo() {
				let res = await $request('heartbeat', {});
				// console.log(res)
			},
			sleep(ms) {
				return new Promise(resolve => setTimeout(resolve, ms));
			},
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>