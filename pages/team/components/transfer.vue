<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../../../static/close.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text>Transfer to trading account</text>
				</view>
				<view class="form">
					<view class="form-item">
						<input v-model="formData.amount" type="text" placeholder="Input Transfer Amount ">
					</view>
					<view class="text-item">
						<text>Transferable amount：{{mount}}USDT</text>
					</view>
					<!-- <view class="form-item">
						<input type="text" placeholder="名字">
					</view>
					<view class="form-item">
						<input type="text" placeholder="用户名">
					</view>
					<view class="send">
						<input type="text" placeholder="Email Verification Code">
						<view class="btn">
							<view class="">
								<text>Send</text>
							</view>
						</view>
					</view> -->
					<view class="submit" @click="submitBtn">
						<text>complete</text>
					</view>
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
				mount:''
			};
		},
		methods: {
			open(mount) {
				this.mount = mount;
				this.$refs.popup.open()
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
		max-height: 800rpx;
		// overflow-y: auto;
		background: #000000;
		box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		border-radius: 61rpx 61rpx 61rpx 61rpx;
		border: 4rpx solid;
	}

	.popup-content {
		position: relative;
	
		padding-top: 52rpx;

		.close {
			position: absolute;
			right: 43rpx;
			top: 43rpx;

			image {
				width: 43rpx;
			}
		}

		.title {
			color: #FFFFFF;
			font-weight: 45rpx;
			font-weight: 600;
			margin-bottom: 61rpx;
			box-sizing: border-box;
			padding-left: 52rpx;
			padding-right: 52rpx;
		}
		.form{
			width: 100%;
			box-sizing: border-box;
			padding-left: 52rpx;
			padding-right: 52rpx;
			padding-bottom: 52rpx;
			
			.form-item{
				width: 596rpx;
				height: 70rpx;
				background: #111111;
				border-radius: 18rpx 18rpx 18rpx 18rpx;
				border: 1rpx solid #999999;
				margin-bottom: 17rpx;
				box-sizing: border-box;
				padding-left: 17rpx;
				padding-top: 21rpx;
				padding-bottom: 21rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				input{
					color: #999999;
					font-size: 24rpx;
				}
			}
			.text-item{
				width: 596rpx;
				height: 70rpx;
				background: #111111;
				border-radius: 18rpx 18rpx 18rpx 18rpx;
				// border: 1rpx solid #999999;
				// margin-bottom: 35rpx;
				box-sizing: border-box;
				padding-left: 17rpx;
				// padding-top: 21rpx;
				// padding-bottom: 21rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				color: #CCCCCC;
				font-size: 24rpx;
			}
			.send{
				width: 105%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 106rpx;
				input{
					width: 350rpx;
					height: 70rpx;
					background: #111111;
					border-radius: 18rpx 18rpx 18rpx 18rpx;
					border: 1rpx solid #999999;
					// margin-bottom: 35rpx;
					box-sizing: border-box;
					padding-left: 17rpx;
					padding-top: 21rpx;
					padding-bottom: 21rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					color: #999999;
					font-size: 24rpx;
				}
				.btn{
					width: 175rpx;
					display: flex;
					// flex-grow: 1;
					height: 70rpx;
					background: #222222;
					border-radius: 44rpx 44rpx 44rpx 44rpx;
					
					view{
						width: 100%;
						height: 100%;
						font-weight: 500;
						font-size: 32rpx;
						background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
						-webkit-background-clip: text;
						background-clip: text;
						color: transparent;
						.flex-center;
					}
				}
			}
			.submit{
				width: 526rpx;
				height: 88rpx;
				background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
				border-radius: 44rpx 44rpx 44rpx 44rpx;
				margin: 0 auto;
				color: #000000;
				font-size: 31rpx;
				margin-top: 262rpx;
				.flex-center;
			}
		}

		
	}
</style>