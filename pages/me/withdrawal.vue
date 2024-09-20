<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="recharge">
			<view class="click">
				<view class="recharge-btn" @click="goUrl">
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
						<text>Withdraw</text>
					</view>
					<view class="icon" @click="orderPopupClick">
						<image src="../../static/order.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="content">
					<view class="input">
						<image src="../../static/me_icon.png" mode="widthFix"></image>
						<view class="all">
							<view class="input-con">
								<input type="number" :placeholder="`Minimum withdrawal amount ${withdrawConfig.withdraw_min}`"
									v-model="formData.amount" />

							</view>
							<text class="label">Withdrawable: 1000.33 USDT</text>
						</view>
					</view>
					<view class="radio">
						<view class="title">
							<text>Choose Payment Method</text>
						</view>
						<view class="radio-con">
							<view class="radio-item" v-for="(item,index) in rechargeConfig" :key="index">
								<view class="label">
									<text>{{item.account_name}}</text>
								</view>
								<view class="btn" @click="chooseRadio(index)">
									<view class="border">
										<view class="active" v-if="radioIndex==index"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- <view class="urcode">
						<view class="bk">
							<view class="white">
								<image src="../../static/add.png" mode="widthFix"></image>
							</view>
						</view>
					</view> -->
					<view class="copy">
						<view class="title">
							<text>Address Link:</text>
						</view>
						<view class="input">
							<view class="left">
								<input type="text" />
							</view>
							<!-- <view class="right">
								<text>Copy</text>
							</view> -->
						</view>
					</view>
					<view class="recharge-submit">
						<view class="con" @click="openPopUpHandle">
							<text>recharge</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<defaultPopup ref="popup" @listenData="listenData" :withdrawConfig="withdrawConfig"></defaultPopup>
		<OrderPopup ref="orderPopup" ></OrderPopup>
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import defaultPopup from '../../components/defaultPopup.vue';
	import OrderPopup from '../../components/orderPopup.vue';
	export default {
		components: {
			DefaultHeader,
			defaultPopup,
			OrderPopup
		},
		data() {
			return {
				radioIndex: 0,
				formData: {
					amount: '',
					channel:'',
					pay_password:''
				},
				rechargeConfig:[],
				withdrawConfig:{}
			};
		},
		mounted(){
			this.getWithdrawalConfig()
			this.getRechargeConfig()
		},
		methods: {
			goUrl(){
				uni.navigateTo({
					url:'/pages/me/recharge'
				})
			},
			orderPopupClick(){
				this.$refs.orderPopup.open()
				
			},
			chooseRadio(index) {
				this.radioIndex = index;
			},
			openPopUpHandle() {
				this.$refs.popup.open()
			},
			async getWithdrawalConfig(){
				let res = await $request('withdrawConfig',{});
				console.log(res)
				if(res.data.code==200){
					this.withdrawConfig = res.data.data;
				}
			},
			async getRechargeConfig(){
				let res = await $request('rechargeConfig',{});
				console.log(res)
				if(res.data.code==200){
					this.rechargeConfig = res.data.data;
				}
			},
			async withdrawCreate(){
				this.formData.channel = this.rechargeConfig[this.radioIndex].id
				let res = await $request('withdrawCreate',this.formData);
				console.log(res)
				$totast(res.data.message);
				if(res.data.code==200){
					this.rechargeConfig = res.data.data;
				}
			},
			listenData(data){
				this.formData.pay_password = data.join('')
				this.withdrawCreate()
				console.log(this.formData)
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
				// background: #222222;
				// box-shadow: -2rpx -2rpx 5rpx 0rpx rgba(255, 255, 255, 0.25);
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
				background: #201f29 url('../../static/bk_icon1.png') no-repeat center center / 100%;
				;

				text {
					margin-right: 14rpx;
				}
			}

			.withdraw {
				padding-right: 21rpx;
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				background: #201f29 url('../../static/bk_icon2.png') no-repeat center center / 100%;
				;

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
					// .flex-direction;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;

					image {
						width: 70rpx;
						margin-right: 7rpx;
					}

					.all {
						display: flex;
						flex-direction: column;
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

						input {
							width: 100%;
							font-size: 28rpx;
						}

					}

					.label {
						color: #EEEEEE;
						font-size: 24rpx;
						padding-top: 5rpx;
						line-height: 1;
					}
				}

				.radio {
					display: flex;
					flex-direction: column;
					margin-bottom: 105rpx;

					.title {
						color: #AAAAAA;
						font-size: 24rpx;
						line-height: 1.5;
						margin-bottom: 14rpx;
					}

					.radio-con {
						width: 643rpx;
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

							.active {
								width: 11rpx;
								height: 11rpx;
								background: #FFFFFF;
								border-radius: 18rpx 18rpx 18rpx 18rpx;
							}
						}
					}
				}

				.urcode {
					width: 100%;
					margin-bottom: 35rpx;
					.flex-center;

					.bk {
						background: #666666;
						box-sizing: border-box;
						padding: 17rpx;
						background: linear-gradient(146deg, rgba(68, 68, 68, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
						box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84, 84, 84, 0.2118);
						border-radius: 25rpx;
						border: 1rpx solid #666666;

						.white {
							width: 322rpx;
							height: 315rpx;
							margin: 0 auto;
							box-sizing: border-box;
							padding: 20rpx;
							background: #2F2F2F;
							border-radius: 25rpx;
							.flex-center;

							image {
								width: 43rpx;
							}
						}
					}
				}

				.copy {
					width: 100%;
					display: flex;
					flex-direction: column;
					margin-bottom: 82rpx;

					.title {
						color: #AAAAAA;
						font-size: 24rpx;
						margin-bottom: 17rpx;
					}

					.input {
						width: 613rpx;
						// height: 70rpx;
						box-sizing: border-box;
						padding: 15rpx 17rpx;
						background: #111111;
						border-radius: 18rpx 18rpx 18rpx 18rpx;
						border: 1rpx solid #999999;
						.flex-space-between;

						.left {
							color: #999999;
							font-size: 24rpx;

							input {
								line-height: 1.5;
							}
						}

						.right {
							background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
							-webkit-background-clip: text;
							background-clip: text;
							color: transparent;
							font-size: 28rpx;
							padding-left: 21rpx;
							border-left: 1px solid #555555;

						}
					}
				}

				.recharge-submit {
					width: 100%;
					padding-bottom: 200rpx;
					.flex-center;

					.con {
						width: 526rpx;
						height: 88rpx;
						background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
						border-radius: 44rpx;
						.flex-center;
						color: #000000;
						font-size: 31rpx;
					}
				}
			}

		}
		
		
	}
</style>