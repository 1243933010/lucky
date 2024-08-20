<template>
	<view>
		<view class="page-header">
			<view class="logo1">
				<image src="../static/logo.png" mode="widthFix"></image>
			</view>
			<view class="setting">
				<view class=""></view>
				<view class=""></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "defaultHeader",
		data() {
			return {

			};
		}
	}
</script>

<style lang="less" scoped>
	.page-header {
		width: calc(100% - 47rpx);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 73rpx;

		.logo1 {
			width: 100rpx;
			height: 100rpx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		.setting {
			display: flex;
			flex-direction: column;
			align-items: center;

			view {
				width: 33rpx;
				height: 5rpx;
				background: #FFFFFF;
				margin-bottom: 10rpx;
				// border: 4rpx solid #FFFFFF;
			}
		}
	}
</style>