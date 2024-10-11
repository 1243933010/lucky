<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center" :isMaskClick="true">
			<view class="test">
				<view class="popup-content">
					<view class="close" @click="$refs.popup.close()">
						<image src="@/static/close_icon2.png" mode="widthFix"></image>
					</view>
					<view class="copy"  @click="copy">
						<image src="../../../static/copy_icon.png" mode="widthFix"></image>
						<!-- <image :src="userInfo.avatar?filesUrl1+userInfo.avatar:'@/static/default_user.png'" mode="widthFix"></image> -->
					    <text>Copy Link</text>
					</view>
					<view class="nickname">
						<image :src="userInfo.avatar?filesUrl1+userInfo.avatar:'@/static/default_user.png'" mode="widthFix"></image>
						<text>{{userInfo.nickname}}</text>
					</view>
					<view class="my">
						<text>My invitation code</text>
					</view>
					<view class="code">
						<text>{{userInfo.invite_code}}</text>
					</view>
				</view>
			</view>
	</uni-popup>
	</view>
</template>

<script>
	import {
		$request,$totast,filesUrl
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		data() {
			return {
				formData:{
					amount:''
				},
				userInfo:{}
			};
		},
		mounted(){
			this.inviteLink();
		},
		computed: {
			filesUrl1() {
				return filesUrl
			}
		},
		methods: {
			open(options = {type: 'center'}) {
				this.type = options.type;
				this.$refs.popup.open()
			},
			async inviteLink(){
				let res = await $request('inviteLink',{});
				console.log(res)
				if(res.data.code==200){
					this.userInfo = res.data.data;
					// console.log(this.userInfo)
				}
			},
			async submitBtn(){
				let res = await $request("transfer", this.formData)
				// console.log(res)
				$totast(res.data.message)
				if(res.data.code==200){
					this.$refs.popup.close()
					this.$emit('updateData')
				}
			},
			copy(){
				let url = 'http://localhost:8080';
				url = this.userInfo.host_url;
				uni.setClipboardData({
					data:`${url}/#/pages/login/login?invite_code=${this.userInfo.invite_code}&page=bottom`,
					// data:`http://localhost:8080/#/pages/login/login?invite_code=${this.userInfo.invite_code}&room_code=${this.userInfo.room_code}`,
					success:(res)=>{
						
						uni.showToast({
							icon:'none',
							title:'success'
						})
						setTimeout(()=>{
							this.$refs.popup.close()
						},500)
					}
				})
				// uni.setClipboardData({
				// 	data:this.userInfo.invite_code,
				// 	success:(res)=>{
				// 		uni.showToast({
				// 			icon:'none',
				// 			title:'Copy Success'
				// 		})
				// 	}
				// })
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../static/default.less");
	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;
	}
	.test{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		// z-index: 100;
		// background-color: red;
	}
	.popup-content {
		width: 666rpx;
		
		// height: 1118rpx;
		height: 991rpx;
		// overflow-y: auto;
		// background: #000000;
		background: url('../../../static/yao_bk.png') no-repeat 100% 100%/cover;
		// box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		border-radius: 61rpx 61rpx 61rpx 61rpx;
		z-index: 1000;
		// border: 4rpx solid;
	}

	.popup-content {
		position: relative;
		padding-top: 52rpx;
		
		.close {
			position: absolute;
			left: 43rpx;
			top: -43rpx;
			// z-index: 1000;
			image {
				width: 43rpx;
			}
		}
		.copy{
			width: 100%;
			position: absolute;
			left:0rpx;
			bottom: -93rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			image {
				width: 87rpx;
				margin-bottom: 17rpx;
			}
			text{
				color: #EEEEEE;
				font-size: 24rpx;
			}
		}
		.nickname{
			position: absolute;
			left: 40rpx;
			top: 130rpx;
			color: #111111;
			font-size: 42rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			image{
				width: 59rpx;
				height: 59rpx;
				border-radius: 10rpx;
				margin-right: 19rpx;
			}
		}
		.code{
			position: absolute;
			left: 250rpx;
			bottom: 190rpx;
			color: #DAF60B;
			font-size: 49rpx;
			letter-spacing: 3px;
			font-weight: 600;
		}
		.my{
			position: absolute;
			left: 250rpx;
			bottom: 260rpx;
			color: #666666;
			font-size: 21rpx;
		}
		
	}
</style>