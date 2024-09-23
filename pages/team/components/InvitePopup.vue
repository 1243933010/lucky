<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../../../static/close.png" mode="widthFix"></image>
				</view>
				<view class="copy" >
					<image src="../../../static/copy_icon.png" mode="widthFix"></image>
				    <text>Copy Link</text>
				</view>
				<view class="nickname">
					<image src="../../../static/logo.png" mode="widthFix"></image>
					<text>{{userInfo.nickname}}</text>
				</view>
				<view class="my">
					<text>My invitation code</text>
				</view>
				<view class="code">
					<text>{{userInfo.invite_code}}</text>
				</view>
			</view>
	</uni-popup>
	</view>
</template>

<script>
	import {
		$request,$totast
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
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../static/default.less");
	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;
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
		// border: 4rpx solid;
	}

	.popup-content {
		position: relative;
		padding-top: 52rpx;
		.close {
			position: absolute;
			left: 43rpx;
			top: -43rpx;

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