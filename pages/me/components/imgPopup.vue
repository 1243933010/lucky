<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../../../static/close.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text>user picture</text>
				</view>
				<view class="list">
					<view class="item upload">
						<image src="../../../static/add.png" mode="widthFix"></image>
					</view>
					<view class="item" :class="index==activeIndex?'active':''" v-for="(item,index) in list" :key="index">
						<image :src="item.url" mode="aspectFill"></image>
					</view>
				</view>
				<view class="submit">
					<text>complete</text>
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
				list:[{url:'../../../static/close.png'}],
				activeIndex:null
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
		border-radius: 61rpx 61rpx 0rpx 0rpx;
		border: 4rpx solid;
	}

	.popup-content {
		position: relative;
	
		padding-top: 52rpx;
		padding-bottom: 52rpx;
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
		.list{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin-bottom: 52rpx;
			box-sizing: border-box;
			padding: 0 26rpx;
			.item{
				width: 140rpx;
				height: 140rpx;
				background: #111111;
				border-radius: 18rpx 18rpx 18rpx 18rpx;
				// border: 1rpx solid #999999;
				margin-right: 17rpx;
				
			}
			.upload{
				.flex-center;
				border: 1rpx solid #999999;
				image{
					width: 30rpx;
				}
			}
			.active{
				border: 1px solid #9DFE00;
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
			.flex-center;
		}
		
	}
</style>