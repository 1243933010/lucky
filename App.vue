<script>
	import {
		$request
	} from "@/utils/request";
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.startPolling();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			async startPolling() {
				// 启动轮询，每隔 1 秒调用一次
				this.polling = true;
				while (this.polling) {
					await this.getRoomInfo(); // 等待请求返回
					await this.sleep(6000); // 等待 1 秒后再继续轮询
				}
			},
			async getRoomInfo(){
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
