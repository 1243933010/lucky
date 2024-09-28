<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<!-- <image src="../static/close.png" mode="widthFix"></image> -->
				</view>
				<view class="title">
					<text>{{options.title}}</text>
				</view>
				<view class="form">
					<view class="con">
						<text>{{options.content}}</text>
					</view>
					<view class="btn">
						<view class="cancel" @click="$refs.popup.close()">
							<text>{{options.cancelText}}</text>
						</view>
						<view class="confirm" @click="confirm">
							<text>{{options.confirmText}}</text>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		$request,
		$totast
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		data() {
			return {
				options: {},
			};
		},
		methods: {
			open(options) {
				this.options = options;
				this.$refs.popup.open()
			},
			confirm() {
				uni.reLaunch({
					url: `/pages/me/personalData?type=${this.options.type}`
				})
			}
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
			// padding-left: 52rpx;
			// padding-right: 52rpx;
			text-align: center;
		}

		.form {
			width: 100%;
			color: white;
			padding-bottom: 50rpx;

			.con {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 50rpx;
			}

			.btn {
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 0 50rpx;

				.cancel {}

				.confirm {
					color: green;
				}
			}
		}


	}
</style>