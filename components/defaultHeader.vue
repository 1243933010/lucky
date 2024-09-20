<template>
	<view>
		<view class="page-header">
			<view class="logo1">
				<image src="../static/logo.png" @click="goIndex" mode="widthFix"></image>
			</view>
			<view class="setting" @click="openDialog">
				<view class=""></view>
				<view class=""></view>
			</view>
		</view>
		<TabPopup ref="tabPopup" />
	</view>
</template>

<script>
	import TabPopup from './tabPopup.vue';
	export default {
		name: "defaultHeader",
		components:{TabPopup},
		data() {
			return {

			};
		},
		methods:{
			openDialog(){
				this.$refs.tabPopup.open()
			},
			goIndex(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
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