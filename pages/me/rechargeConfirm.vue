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
						<!-- <view class="box"><text>11</text></view>
						<view class="fu"><text>:</text></view>
						<view class="box"><text>11</text></view>
						<view class="fu"><text>:</text></view>
						<view class="box"><text>11</text></view> -->
						<view class="con">
							<view class="item" :class="countdownText[index]==':'?'active':''"
								v-for="(item,index) in countdownText.length">
								<text>{{countdownText[index]}}</text>
							</view>
						</view>
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
						<view class="item" style="margin-bottom: 10rpx;">
							<view class="title">
								<text>Please recharge:</text>
								<image src="../../static/warning.png" mode="widthFix"></image>
							</view>
							<view class="num">
								<image src="../../static/me_icon.png" mode="widthFix"></image>
								<text>{{rechargeConfig.amount*1}}</text>
							</view>
						</view>
						<view class="tip">
							<view class="con-item">
								<text>Please strictly follow the USDT address for transfer, and the balance must be consistent with the current page credit amount, otherwise it cannot be credited to the account.</text>
							</view>
							<view class="posi">
								
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
					<!-- <view class="recharge-submit">
						<view class="con" @click="payment">
							<text>Payment Completed</text>
						</view>
					</view> -->
					<view class="footer-text">
						<text>choose your cryptocurrency: Please scan the QR codsor copy the details to your wallet or exchange tocomplete the payment.</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- <DefaultPopup ref="defaultPopup" :rechargeConfig="rechargeConfig" /> -->
		<FixedCom />
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
	import FixedCom from '@/components/fixed.vue';
	export default {
		components: {
			DefaultHeader,
			ayQrcode,
			DefaultPopup,
			FixedCom
			// DefaultFooter
		},
		data() {
			return {
				radioIndex: 0,
				formData: {
					num: ''
				},
				
				rechargeConfig:{},
				polling:false,
				id:'',
				countdownText: '', // 用于显示格式化后的倒计时
				intervalId:null,
				firstReqBool:false
			};
		},
		mounted() {
			let that = this;
			that.showQrcode(); //一加载生成二维码
			this.startPolling()
		},
		computed:{
			logoUrl(){
				console.log(getApp().globalData)
				return getApp().globalData.indexConfig.system_logo
			},
			options(){
				return {
					value: '',
					foregroundImageSrc: getApp().globalData.indexConfig.system_logo
				}
			}
		},
		onLoad(e) {
			// e.id = 1;
			if(!e.id){
				e.id = '1'
			}
			this.id = e.id;
			this.getOrderDetail(e.id);
			this.startCountdown(e.id)
		},
		destroyed(){
			this.polling = false
		},
		methods: {
			async startCountdown(id) {
				let res = await $request('rechargeDetail',{id});
				console.log(res)
				
				if(res.data.code==200){
					if(res.data.data.status==0){
						// startCountdown
						let endTime = new Date(res.data.data.expired_at).getTime()
						let startTime = new Date(res.data.data.created_at).getTime()
						let time = endTime - startTime;
						// console.log(endTime,startTime)
						// if()
						// this.clearCountdown();
						// this.startCountdown(endTime-startTime)
						if(this.intervalId){
							return
						}
						// 每秒更新一次倒计时
						this.intervalId = setInterval(() => {
							time -= 1000;
									
							// 更新倒计时显示
							this.countdownText = this.formatCountdown(time);
									
							// 当倒计时为零或小于零时，清除定时器
							if (time <= 0) {
								this.clearCountdown();
								this.countdownText = "";
							}
						}, 1000);
									
						// 初始化时马上更新一次倒计时显示
						this.countdownText = this.formatCountdown(time);
					}
				}
				
				
			},
			formatCountdown(ms) {
				let totalSeconds = Math.floor(ms / 1000);
			
				const hours = Math.floor(totalSeconds / 3600);
				totalSeconds %= 3600;
				const minutes = Math.floor(totalSeconds / 60);
				const seconds = totalSeconds % 60;
			
				const formattedHours = hours < 10 ? `0${hours}` : hours;
				const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
				const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
			
				return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
			},
			clearCountdown() {
				if (this.intervalId) {
					clearInterval(this.intervalId);
					this.intervalId = null;
				}
			},
			async startPolling() {
				// 启动轮询，每隔 1 秒调用一次
				this.polling = true;
				while (this.polling) {
					await this.getOrderDetail(this.id); // 等待请求返回
					await this.sleep(6000); // 等待 1 秒后再继续轮询
				}
			},
			async getRoomInfo(){
				let res = await $request('heartbeat', {});
				// console.log(res)
			},
			sleep(ms) {
				return new Promise(resolve => setTimeout(resolve, ms));
			},
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
					this.options.value = res.data.data.address;
					if(res.data.data.status==0){
						// startCountdown
						// let endTime = new Date(res.data.data.expired_at).getTime()
						// let startTime = new Date(res.data.data.created_at).getTime()
						// // console.log(endTime,startTime)
						// // if()
						// this.clearCountdown();
						// this.startCountdown(endTime-startTime)
						// setTimeout(()=>{
						// 	this.firstReqBool = true;
						// },100)
					}
					if(res.data.data.status==-2){
						$totast('cancel')
						return
					}
					if(res.data.data.status==-1){
						$totast('fail')
						return
					}
					if(res.data.data.status==1){
						$totast('success')
						setTimeout(()=>{
							uni.reLaunch({
								url:'/pages/index/index'
							})
						})
						return
					}
				}
			},
			payment(){
				// this.$refs.defaultPopup.open({
				// 	type:'bottom'
				// })
				uni.reLaunch({
					url:'/pages/me/me'
				})
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
		// background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
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
					font-weight: 600
				}

				.time {
					.flex-direction;
					.con {
						.flex-center;
					
						.item {
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
					
						.active {
							width: 10rpx;
							height: 35rpx;
							background: none;
							border: none;
						}
					}
					// .box {
					// 	width: 35rpx;
					// 	height: 35rpx;
					// 	background: linear-gradient(146deg, rgba(68, 68, 68, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
					// 	box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84, 84, 84, 0.2118);
					// 	border-radius: 4rpx 4rpx 4rpx 4rpx;
					// 	border: 1rpx solid #666666;
					// 	.flex-center;
					// 	color: #FFFFFF;
					// 	font-size: 24rpx;
					// 	margin-right: 7rpx;
					// }

					// .fu {
					// 	color: #FFFFFF;
					// 	font-size: 24rpx;
					// 	margin-right: 7rpx;
					// }
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
							.flex-direction;
							image{
								width: 23rpx;
								margin-top: 8rpx;
								margin-left: 8rpx;
							}
						}

						.label {
							color: #FFFFFF;
							font-size: 24rpx;
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
					.tip{
						width: 100%;
						position: relative;
						.con-item{
							width: 100%;
							border-radius: 15rpx;
							border: 1px solid #663737;
							color: #FA4545;
							font-size: 24rpx;
							box-sizing: border-box;
							padding: 5rpx 10rpx;
						}
						.posi{
							position: absolute;
							top: -15rpx;
							background-color: #1e1c26;
							left: 192rpx;
							width: 25rpx;
							height: 25rpx;
							// border: 1px solid #663737;
							border-left: 1px solid #663737;
							border-top: 1px solid #663737;
							transform: rotate(45deg);
							background-color: black;
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
						width: 100%;
						// height: 70rpx;
						box-sizing: border-box;
						padding: 15rpx 17rpx;
						background: #111111;
						border-radius: 18rpx 18rpx 18rpx 18rpx;
						border: 1rpx solid #999999;
						.flex-space-between;
						.left{
							width: 85%;
							color: #999999;
							font-size: 24rpx;
							input{
								line-height: 1.5;
								font-size: 22rpx;
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