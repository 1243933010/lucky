<template>
	<view>
		<view :class="fiexed?'fixed':'fixed1'" >
			<view class="submit-btn">
				<view class=""></view>
				<view class="text">
					<text>Create a room</text>
					<text>Quick start</text>
					<text>Share link</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "defaultFooter",
		props:{
			fiexed:{
				default:true
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less" scoped>
	.fixed{
		position: fixed;
		width: 100%;
		bottom: 36rpx;
		z-index: 10;
	}
	.fixed1{
		// position: fixed;
		width: 100%;
		// bottom: 36rpx;
		z-index: 10;
	}
	.submit-btn {
		width: 666rpx;
		height: 105rpx;
		margin: 0rpx auto;
		border-radius: 61rpx 61rpx 61rpx 61rpx;
		background: rgba(255, 255, 255, 0.1);
		opacity: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.text {
			width: calc(100% - 92rpx);
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #9E9E9E;
			font-size: 21rpx;
		}
	}
</style>