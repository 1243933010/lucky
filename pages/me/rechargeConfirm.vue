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
					<view class="list">
						<view class="item">
							<view class="title">
								<text>Payment Method:</text>
							</view>
							<view class="label">
								<text>{{rechargeConfig.channel_name}}</text>
							</view>
						</view>
						<view class="item">
							<view class="title">
								<text>Amount:</text>
							</view>
							<view class="num">
								<image src="../../static/me_icon.png" mode="widthFix"></image>
								<text>{{rechargeConfig.amount*1}}</text>
							</view>
						</view>
					</view>
					<view class="urcode">
						<view class="bk">
							<view class="white">
								<uqrcode :size="160" ref="uqrcode" :options="options" canvas-id="qrcode" :value="options.value">
								</uqrcode>
							</view>
						</view>
					</view>
					<view class="copy">
						<view class="title">
							<text>Address Link:</text>
						</view>
						<view class="input">
							<view class="left">
								<input type="text" v-model="rechargeConfig.address" />
							</view>
							<view class="right" @click="copy(rechargeConfig.address)">
								<text>Copy</text>
							</view>
						</view>
					</view>
					<view class="recharge-submit">
						<view class="con" @click="payment">
							<text>Payment completed</text>
						</view>
					</view>
					<view class="footer-text">
						<text>choose your cryptocurrency: Please scan the QR codsor copy the details to your wallet or exchange tocomplete the payment.</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- <DefaultPopup ref="defaultPopup" :rechargeConfig="rechargeConfig" /> -->
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultPopup from '../../components/defaultPopup.vue';
	import logo from '../../static/logo.png'
	// import DefaultFooter from '../../components/defaultFooter.vue';
	import ayQrcode from "@/components/ay-qrcode/ay-qrcode.vue"
	export default {
		components: {
			DefaultHeader,
			ayQrcode,
			DefaultPopup
			// DefaultFooter
		},
		data() {
			return {
				radioIndex: 0,
				formData: {
					num: ''
				},
				options: {
					value: 'https://uqrcode.cn/doc',
					foregroundImageSrc: logo
				},
				rechargeConfig:{}
			};
		},
		mounted() {
			let that = this;
			that.showQrcode(); //一加载生成二维码
		},
		onLoad(e) {
			// e.id = 1;
			if(!e.id){
				e.id = '1'
			}
			this.getOrderDetail(e.id);
		},
		methods: {
			copy(str){
				uni.setClipboardData({
					data:str,
					success:()=>{
						$totast('success');
					}
				})
			},
			async getOrderDetail(id){
				let res = await $request('rechargeDetail',{id});
				console.log(res)
				if(res.data.code==200){
					this.rechargeConfig = res.data.data;
					this.options.value = res.data.data.channel_qr_code;
				}
			},
			payment(){
				// this.$refs.defaultPopup.open({
				// 	type:'bottom'
				// })
			},
			chooseRadio(index) {
				this.radioIndex = index;
			},
			// 展示二维码
			showQrcode() {
				let _this = this;
				this.modal_qr = true;
				// uni.showLoading()
				setTimeout(function() {
					// uni.hideLoading()
					_this.$refs.qrcode.crtQrCode()
				}, 50)
			},

			//传入组件的方法
			hideQrcode() {
				this.modal_qr = false;
			},
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

				.time {
					.flex-direction;

					.box {
						width: 35rpx;
						height: 35rpx;
						background: linear-gradient(146deg, rgba(68, 68, 68, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
						box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84, 84, 84, 0.2118);
						border-radius: 4rpx 4rpx 4rpx 4rpx;
						border: 1rpx solid #666666;
						.flex-center;
						color: #FFFFFF;
						font-size: 24rpx;
						margin-right: 7rpx;
					}

					.fu {
						color: #FFFFFF;
						font-size: 24rpx;
						margin-right: 7rpx;
					}
				}
			}

			.content {
				width: 100%;

				.list {
					width: 100%;
					margin-bottom: 140rpx;

					// background-color: red;
					.item {
						width: 100%;
						margin-bottom: 43rpx;
						.flex-space-between;

						.title {
							color: #AAAAAA;
							font-size: 24rpx;
						}

						.label {
							color: #FFFFFF;
							font-size: 28rpx;
						}

						.num {
							color: #FFFFFF;
							.flex-direction;
							image {
								width: 60rpx;
								margin-right: 24rpx;
							}

						}
					}
				}

				.urcode {
					width: 100%;
					margin-bottom: 87rpx;
					.flex-center;
					.bk{
						background: #666666;
						box-sizing: border-box;
						padding: 17rpx;
						background: linear-gradient( 146deg, rgba(68,68,68,0.5) 0%, rgba(0,0,0,0.5) 100%);
						box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84,84,84,0.2118);
						border-radius: 25rpx;
						border: 1rpx solid #666666;
						.white{
							box-sizing: border-box;
							padding: 20rpx;
							background: white;
							border-radius: 25rpx;
						}
					}
				}
				.copy{
					width: 100%;
					display: flex;
					flex-direction: column;
					margin-bottom: 194rpx;
					.title{
						color: #AAAAAA;
						font-size: 24rpx;
						margin-bottom: 17rpx;
					}
					.input{
						width: 613rpx;
						// height: 70rpx;
						box-sizing: border-box;
						padding: 15rpx 17rpx;
						background: #111111;
						border-radius: 18rpx 18rpx 18rpx 18rpx;
						border: 1rpx solid #999999;
						.flex-space-between;
						.left{
							color: #999999;
							font-size: 24rpx;
							input{
								line-height: 1.5;
							}
						}
						.right{
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
					// padding-bottom: 200rpx;
					margin-bottom: 35rpx;
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
				.footer-text{
					color: #AAAAAA;
					font-size: 24rpx;
					padding-bottom: 95rpx;
				}
			}

		}
	}
</style>