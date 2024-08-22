<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="recharge">
			<view class="recharge-container">
				<view class="header">
					<view class="title">
						<text>Recharge</text>
					</view>
					<!-- <view class="icon">
						<image src="../../static/order.png" mode="widthFix"></image>
					</view> -->
					<view class="time">
						<view class="box"><text>11</text></view>
						<view class="fu"><text>:</text></view>
						<view class="box"><text>11</text></view>
						<view class="fu"><text>:</text></view>
						<view class="box"><text>11</text></view>
					</view>
				</view>
				<view class="content">
					<view class="input">
						<image src="../../static/me_icon.png" mode="widthFix"></image>
						<view class="input-con">
							<input type="number" v-model="formData.num" />
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
					<view class="recharge-submit">
						<view class="con">
							<text>recharge</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import DefaultHeader from '../../components/defaultHeader.vue';
	// import DefaultFooter from '../../components/defaultFooter.vue';
	export default {
		components: {
			DefaultHeader,
			// DefaultFooter
		},
		data() {
			return {
				radioIndex: 0,
				formData:{
					num:''
				}
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
		padding-top: 61rpx;
		box-sizing: border-box;
		padding-left: 47rpx;
		padding-right: 47rpx;
		.recharge-container {
			width: 100%;

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 78rpx;

				.title {
					font-size: 42rpx;
					color: white;
				}
				.time{
					.flex-direction;
					.box{
						width: 35rpx;
						height: 35rpx;
						background: linear-gradient( 146deg, rgba(68,68,68,0.5) 0%, rgba(0,0,0,0.5) 100%);
						box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84,84,84,0.2118);
						border-radius: 4rpx 4rpx 4rpx 4rpx;
						border: 1rpx solid #666666;
						.flex-center;
						color: #FFFFFF;
						font-size: 24rpx;
						margin-right: 7rpx;
					}
					.fu{
						color: #FFFFFF;
						font-size: 24rpx;
						margin-right: 7rpx;
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
					margin-bottom: 381rpx;
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
							.active{
								width: 11rpx;
								height: 11rpx;
								background: #FFFFFF;
								border-radius: 18rpx 18rpx 18rpx 18rpx;
							}
						}
					}
				}
				.recharge-submit{
					width: 100%;
					padding-bottom: 200rpx;
					.flex-center;
					.con{
						width: 526rpx;
						height: 88rpx;
						background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
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