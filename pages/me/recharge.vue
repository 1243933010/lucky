<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="recharge">
			<view class="click">
				<view class="recharge-btn">
					<text>Recharge</text>
					<image src="../../static/recharge.png" mode="widthFix"></image>
				</view>
				<view class="logo">
					<image src="../../static/logo.png" mode="widthFix"></image>
				</view>
				<view class="withdraw">

					<image src="../../static/withdraw.png" mode="widthFix"></image>
					<text>Withdraw</text>
				</view>
			</view>
			<view class="recharge-container">
				<view class="header">
					<view class="title">
						<text>Recharge</text>
					</view>
					<view class="icon">
						<image src="../../static/order.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="content">
					<view class="input">
						<image src="../../static/me_icon.png" mode="widthFix"></image>
						<view class="input-con">
							<input type="number" />
						</view>
					</view>
					<view class="radio">
						<view class="title">
							<text>Choose Payment Method</text>
						</view>
						<view class="radio-con">
							<view class="radio-item">
								<view class="label">
									<text>USDT-TRC20</text>
								</view>
								<view class="btn" @click="chooseRadio(0)">
									<view class="border">
										<view class="active" v-if="radioIndex==0"></view>
									</view>
								</view>
							</view>
							<view class="radio-item">
								<view class="label">
									<text>USDT-BNB Smart Chain/BEP20</text>
								</view>
								<view class="btn" @click="chooseRadio(1)">
									<view class="border">
										<view class="active" v-if="radioIndex==1"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter
		},
		data() {
			return {
				radioIndex: 0
			};
		},
		methods:{
			chooseRadio(index){
				this.radioIndex = index;
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
		background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
	}

	.recharge {
		width: 100%;
		padding-top: 87rpx;
		box-sizing: border-box;
		padding-left: 52rpx;
		padding-right: 52rpx;

		.click {
			width: 100%;
			margin-bottom: 127rpx;
			.flex-space-between;

			.recharge-btn,
			.withdraw {
				width: 267rpx;
				height: 91rpx;
				background: #222222;
				box-shadow: -2rpx -2rpx 5rpx 0rpx rgba(255, 255, 255, 0.25);
				border-radius: 18rpx 18rpx 18rpx 18rpx;

				.flex-direction;

				text {
					color: #DDDDDD;
					font-size: 21rpx;
				}

				image {
					width: 50rpx;
				}
			}

			.recharge-btn {
				padding-left: 21rpx;

				text {
					margin-right: 14rpx;
				}
			}

			.withdraw {
				padding-right: 21rpx;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;

				text {
					margin-left: 14rpx;
				}
			}

			.logo {
				width: 105rpx;
				margin: 0 32rpx;

				image {
					width: 100%;
					border-radius: 50%;
				}
			}
		}

		.recharge-container {
			width: 100%;

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 54rpx;

				.title {
					font-size: 42rpx;
					color: white;
				}

				.icon {
					width: 61rpx;
					height: 61rpx;
					background: #222222;
					box-shadow: 2rpx -2rpx 5rpx 0rpx rgba(255, 255, 255, 0.3);
					border-radius: 50%;
					.flex-center;

					image {
						width: 28rpx;
					}
				}
			}

			.content {
				width: 100%;

				.input {
					margin-bottom: 29rpx;
					.flex-direction;

					image {
						width: 70rpx;
						margin-right: 7rpx;
					}

					.input-con {
						width: 554rpx;
						height: 70rpx;
						background: #111111;
						border-radius: 18rpx 18rpx 18rpx 18rpx;
						border: 1rpx solid #999999;
						color: #999999;
						.flex-direction;
						padding-left: 25rpx;
					}
				}

				.radio {
					display: flex;
					flex-direction: column;

					.title {
						color: #AAAAAA;
						font-size: 24rpx;
						line-height: 1.5;
						margin-bottom: 14rpx;
					}

					.radio-con {
						width: 613rpx;
						// height: 140rpx;
						background: linear-gradient(146deg, rgba(68, 68, 68, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
						box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84, 84, 84, 0.2118);
						border-radius: 25rpx 25rpx 25rpx 25rpx;
						border: 1rpx solid #666666;
						box-sizing: border-box;
						padding: 26rpx 26rpx 0 26rpx;
						.radio-item {
							.flex-space-between;
							box-sizing: border-box;
							margin-bottom: 26rpx;
							.label {
								color: #999999;
								font-size: 28rpx;
							}

							.btn {
								width: 28rpx;
								height: 28rpx;
								background: #111111;
								border-radius: 18rpx 18rpx 18rpx 18rpx;
								border: 1rpx solid #999999;
								.flex-center;
							}
							.active{
								width: 11rpx;
								height: 11rpx;
								background: #FFFFFF;
								border-radius: 18rpx 18rpx 18rpx 18rpx;
							}
						}
					}
				}
			}

		}
	}
</style>