<template>
	<view>
		<!-- <uni-popup ref="popup" borderRadius="20 20 20 20 " type="center" > -->
			<view class="fixed" v-show="showBool">
				<view class="" style="padding-bottom: 20rpx;">
					<view class="popup-content">
						<view class="box">
							<view class="label">
								<text>waiting for other players to place bets</text>
							</view>
							<view class="num">
								<text>{{time}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		<!-- </uni-popup> -->
		<Popup ref="popupRef" />
	</view>
</template>

<script>
	import Popup from './dialog.vue';
	import {
		$request,
		$totast
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		components:{Popup},
		data() {
			return {
				showBool:false,
				options: {},
				time:'',
				sleepBool:false
			};
		},
		methods: {
			async getGameResult() {
				let res = await $request('gameResult', {
					room_id: this.options.room_id
				});
				if (res.data.code == 200) {
					this.$refs.popupRef.open(res.data.data)
				}
				// console.log(res)
			},
			close(){
				this.showBool = false;
				this.sleepBool = false;
			},
			open(data) {
				 // console.log(data)
				 if(this.options.num===data.num&&!data.random){
				 	return
				 }else{
					 this.sleepBool = false;
				 }
				  this.options = data;
				if(!this.options.num){
					this.showBool = false;
					this.sleepBool = false;
					return
				}
				
				
				if(this.options.num){
						let thisData = new Date().getTime()/1000;
						let oldData = new Date(this.options.num).getTime()/1000;
						// console.log(oldData-thisData)
						if(oldData>thisData){
							this.time = (oldData-thisData).toFixed();
							this.sleepBool = true;
							this.timeFnc()
							this.showBool = true;
						}else{
							this.sleepBool = false;
							 this.showBool = false;
							 return
						}
						
				}
			},
			sleep(ms) {
				return new Promise(resolve => setTimeout(resolve, ms));
			},
			async timeFnc() {
				while (this.sleepBool) {
					this.time--;
					if(this.time<=0){
						this.sleepBool = false;
						 this.time = null;
						 this.showBool = false;
						 this.getGameResult()
					}
					await this.sleep(1000); // 等待 1 秒后再继续轮询
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("@/static/default.less");

	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;

		// background: url('../../../../static/share_bk.png') no-repeat 100% 100%/cover;
		// padding-bottom: 20rpx;
	}

	.fixed{
		position: fixed;
		width: 100%;
		// background: red;
		min-height: 600rpx;
		top: 25%;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.popup-content {
		background: rgba(0, 0, 0, 0.4);
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: 100%;
		border-radius: 20rpx;
		.box{
			.flex-column;
			box-sizing: border-box;
			padding: 60rpx 50rpx;
			.label{
				font-size: 26rpx;
				margin-bottom: 60rpx;
			}
			.num{
				font-size: 70rpx;
				font-weight: 600;
				text-align: center;
			}
		}
	}
</style>