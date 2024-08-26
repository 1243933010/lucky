<template>
	<view class="page-container">
		<DefaultHeader />

		<view class="team">
			<view class="top-page">
				<view class="page-name">
					<text class="tit">Gifts collections to friends</text>
					<text class="img">
						<image class="pic" src="../../static/gift.png" mode="widthFix"></image>
					</text>
				</view>
				<view class="info-box">
					<view class="num-box">
						<view class="icon-num">
							<view class="icon">
								<image class="pic" src="../../static/me_icon.png" mode="widthFix"></image>
							</view>
							<view class="num">
								<text>20000.00 <view class="wen">?</view></text>
							</view>
						</view>
						<view class="copy-icon">
							<!-- TODO: 暂用图片 -->
							<image class="pic" src="../../static/order.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="desc">Received a reward of 300 USDT today</view>
					<view class="btn-box">Transfer</view>
				</view>
				<view class="storage-total">
					<view class="img">
						<image src="../../static/piggy_bank.png" mode="widthFix" class="pic"></image>
					</view>
					<div class="total-list">
						<view class="total-num">
							<view class="num-box">
								<view class="icon">
									<image src="../../static/preson.png" mode="widthFix" class="pic"></image>
								</view>
								<view class="num">1800</view>
							</view>
							<view class="desc">
								<view class="desc-1">Received a reward of</view>
								<view class="desc-2">100 USDT</view>
							</view>
						</view>
						<view class="total-num">
							<view class="num-box">
								<view class="icon">
									<image src="../../static/preson.png" mode="widthFix" class="pic"></image>
								</view>
								<view class="num">1800</view>
							</view>
							<view class="desc">
								<view class="desc-1">Received a reward of</view>
								<view class="desc-2">100 USDT</view>
							</view>
						</view>
						<view class="total-num">
							<view class="num-box">
								<view class="icon">
									<image src="../../static/preson.png" mode="widthFix" class="pic"></image>
								</view>
								<view class="num">1800</view>
							</view>
							<view class="desc">
								<view class="desc-1">Received a reward of</view>
								<view class="desc-2">100 USDT</view>
							</view>
						</view>
					</div>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import DefaultHeader from '../../components/defaultHeader.vue';
	export default {
		components: {
			DefaultHeader,
		},
		data() {
			return {
				list: []
			};
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");

	page {
		height: 100%;
		background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
	}

	.team {
		.top-page {
			padding: 42rpx;

			.page-name {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;

				.tit {
					margin-top: 8rpx;
					flex-grow: 1;
					font-weight: 600;
					font-size: 35rpx;
					color: #BBBBBB;
					line-height: 1.4;
				}

				.img {
					flex-shrink: 0;
					width: 115rpx;

					.pic {
						width: 100%;
					}
				}
			}

			.info-box {
				margin-top: -20rpx;
				border-radius: 35rpx;
				padding: 35rpx 38rpx;
				background-color: rgba(0, 0, 0, 0.4);

				.num-box {
					display: flex;
					align-items: center;

					.icon-num {
						flex-grow: 1;
						display: flex;
						align-items: center;

						.icon {
							width: 70rpx;
							flex-shrink: 0;

							.pic {
								width: 100%;
							}
						}

						.num {
							padding-left: 20rpx;
							flex-grow: 1;

							text {
								font-weight: 500;
								font-size: 54rpx;
								color: #EEEEEE;
								line-height: 1.4;
								position: relative;
								max-width: 100%;

								.wen {
									position: absolute;
									right: -10rpx;
									top: 0;
									transform: translateX(100%);

									border-radius: 50%;
									color: #000;
									background-color: #999999;
									width: 24rpx;
									height: 24rpx;
									font-size: 14rpx;

									display: flex;
									align-items: center;
									justify-content: center;
								}
							}
						}
					}

					.copy-icon {
						flex-shrink: 0;
						width: 26rpx;

						.pic {
							width: 100%;
						}
					}
				}

				.desc {
					margin-top: 14rpx;
					font-weight: 350;
					font-size: 21rpx;
					color: #FFFFFF;
					line-height: 1.4;
					text-decoration-line: underline;
				}

				.btn-box {
					margin-top: 28rpx;
					border-radius: 44rpx;
					border: 2rpx solid #333333;
					padding: 14rpx;
					background-color: #222;
					text-align: center;
					font-weight: 500;
					font-size: 32rpx;
					color: #CCCCCC;
					line-height: 1.28;
				}
			}

			.storage-total {
				padding: 300rpx 0 68rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;

				.img {
					width: 60vw;

					.pic {
						width: 100%;
					}
				}

				.total-list {
					position: absolute;
					top: 128rpx;
					left: 0;
					right: 0;
					bottom: 0;
				
					.total-num {
						position: absolute;
						left: 0;
						bottom: 0;
						
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						
						&:first-child {
							top: 0;
							left: 50%;
							bottom: auto;
							transform: translateX(-50%);
						}
						
						&:last-child {
							right: 0;
							left: auto;
						}

						.num-box {
							display: flex;
							align-items: flex-end;

							.icon {
								width: 28rpx;

								.pic {
									width: 100%;
								}
							}

							.num {
								font-weight: 500;
								font-size: 56rpx;
								color: #EEEEEE;
								line-height: 1.4;
							}
						}

						.desc {
							color: #BBBBBB;
							text-align: center;

							.desc-1 {
								font-size: 21rpx;
							}

							.desc-2 {
								font-size: 28rpx;
							}
						}
					}
				}
			}
		}
	}
</style>