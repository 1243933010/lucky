<template>
	<view>
		<view class="start">
			<view class="button">
				<view class="title">
					<text>Play to Win, Challenge Your Friends!</text>
				</view>
				<view class="btn">
					<view class="login" @click="goUrl('/pages/login/login')">
						<text>Log In</text>
					</view>
					<view class="up" @click="goUrl('/pages/login/register')">
						<text>Sign Up</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goUrl(url){
				uni.redirectTo({
					url
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");
	page {
		height: 100%;
		// background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		// background: #201f29 url('../../static/start.png') no-repeat 20% 100%/cover;
		background:#000000 url('../../static/start.png') no-repeat top left;
		background-size: 100% auto;

	}
	.start{
		width: 100%;
		position: absolute;
		top: 48%;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		padding: 0 100rpx;
		.button{
			text-align: center;
			.title{
				margin-bottom: 245rpx;
			}
			text{
				color: #999999;
				font-size: 38rpx;
			}
			.btn{
				display: flex;
				flex-direction: column;
				align-items: center;
				.login{
					width: 491rpx;
					height: 88rpx;
					background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
					border-radius: 44rpx 44rpx 44rpx 44rpx;
					.flex-center;
					margin-bottom: 36rpx;
					text{
						color: #000000;
					}
					font-size: 31rpx;
					
				}
				.up{
					width: 491rpx;
					height: 88rpx;
					background: #222222;
					border-radius: 44rpx 44rpx 44rpx 44rpx;
					border: 2rpx solid #333333;
					.flex-center;
					font-size: 31rpx;
					text{
						color: #999999;
					}
				}
			}
		}
		
	}
</style>
