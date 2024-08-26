<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../../../static/close.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text>user name</text>
				</view>
				<view class="form">
					<view class="form-item">
						<input type="text" placeholder="姓氏">
					</view>
					<view class="form-item">
						<input type="text" placeholder="名字">
					</view>
					<view class="form-item">
						<input type="text" placeholder="用户名">
					</view>
					<view class="send">
						<input type="text" placeholder="邮箱验证码">
						<view class="btn">
							<text>send out</text>
						</view>
					</view>
					<view class="submit">
						<text>complete</text>
					</view>
				</view>
			</view>
	</uni-popup>
	</view>
</template>

<script>
	export default {
		name: "defaultPopup",
		data() {
			return {
				type: 'center',
				list:[],
				formData:{
					
				}
				
			};
		},
		methods: {
			open(options = {type: 'center'}) {
				this.type = options.type;
				this.$refs.popup.open()
			},
		}
	}
</script>

<style lang="less" scoped>
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
		border-radius: 61rpx 61rpx 0rpx 0rpx;
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
			.form-item{
				width: 596rpx;
				height: 70rpx;
				background: #111111;
				border-radius: 18rpx 18rpx 18rpx 18rpx;
				border: 1rpx solid #999999;
				margin-bottom: 35rpx;
			}
		}

		
	}
</style>