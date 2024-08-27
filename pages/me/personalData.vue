<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="logo">
			<image @click="changeImg" src="../../static/logo.png" mode="widthFix"></image>
		</view>
		<view class="form">
			<view class="form-item" @click="setUser">
				<view class="label">
					<text>UserName</text>
				</view>
				<view class="input">
					<view class="box">
						<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
						<input type="text" v-model="formData.form1" :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Login password</text>
				</view>
				<view class="input" @click="setLoginPassword">
					<view class="box">
						<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
						<input type="password" v-model="formData.form2"   :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Transaction password</text>
				</view>
				<view class="input" @click="setTransactionPassword">
					<view class="box">
						<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
						<input type="password" v-model="formData.form2" :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Email</text>
					<image src="../../static/logo.png" mode="widthFix"></image>
				</view>
				<view class="input">
					<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
					<input style="width: 100%;" type="text" v-model="formData.form2" :disabled="true" />
					<!-- <image class="arrow" src="../../static/right_arrow.png" mode="widthFix"></image> -->
				</view>
			</view>
			<view class="form-item" :style="sysInfo.screenHeight < 800 ? 'padding-bottom:200rpx' : ''">
				<view class="label">
					<text>Withdrawal address{{sysInfo.screenHeight}}1</text>
				</view>
				<view class="input" style="margin-bottom: 20rpx;">
					<view class="box">
						<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
						<input type="text" v-model="formData.form1"  :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="input">
					<view class="box">
						<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
						<input type="text" v-model="formData.form1"  :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>

		<!-- <view class="" style="padding-top: 212rpx;padding-bottom: 36rpx;">
			<DefaultFooter />
		</view> -->
		<DefaultFooter />
		<UserPopup ref="userPopup" />
		<ImgPopup ref="imgPopup" />
		<LoginPopup ref="loginPopup" />
		<TransactionPassword ref="transactionPassword" />
	</view>
</template>

<script>
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	import UserPopup from './components/userPopup.vue';
	import ImgPopup from './components/imgPopup.vue';
	import LoginPopup from './components/loginPopup.vue';
	import TransactionPassword from './components/transactionPassword.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter,
			UserPopup,
			ImgPopup,
			LoginPopup,
			TransactionPassword
		},
		data() {
			return {
				formData: {
					form1: 'test',
					form2: "123456"
				},
				sysInfo: {screenHeight:100}
			};
		},
		onLoad() {
			let sysInfo = uni.getSystemInfo({
				success:(res)=>{
					console.log(res.screenHeight)
					this.sysInfo = res;
				}
			})
			// this.sysInfo = sysInfo.screenHeight;
			// console.log(sysInfo.screenHeight)
		},
		methods:{
			changeImg(){
				// this.userPopup
				this.$refs.imgPopup.open();
			},
			setUser(){
				this.$refs.userPopup.open();
			},
			setLoginPassword(){
				this.$refs.loginPopup.open();
				
			},
			setTransactionPassword(){
				this.$refs.transactionPassword.open();
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		// background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		background: #09090c url('../../static/login_bk.png') no-repeat 100% 100%;
	}

	text {
		line-height: 0;
	}

	@import url("../../static/default.less");

	.page-container {
		height: 100%;
		// background-color: red;
		padding-bottom: 40rpx;


		.logo {
			width: 175rpx;
			height: 175rpx;
			margin: 0rpx auto;
			padding-top: 120rpx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		.form {
			padding-top: 136rpx;
			width: calc(100% - 84rpx);
			margin: 0 auto;

			.form-item {
				width: 100%;
				display: flex;
				flex-direction: column;
				color: white;
				margin-bottom: 35rpx;

				.label {
					color: #FFFFFF;
					font-size: 28rpx;
					line-height: 1.5;
					margin-bottom: 14rpx;

					text {
						margin-right: 15.77rpx;
						line-height: 1.2;
					}

					.flex-direction;

					image {
						width: 30rpx;
						height: 30rpx;
						border-radius: 50%;
					}
				}

				.input {
					width: calc(100% - 45.77rpx);
					height: 91rpx;
					border: 1px solid #999999;
					background-color: #111111;
					border-radius: 20rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					padding-left: 43.81rpx;
					
					.box {
						width: 100%;
						.flex-direction;

						.img1 {
							width: 26rpx;
							height: 26rpx;
							margin-right: 24rpx;
						}

						input {
							width: 100%;
							color: #FFFFFF;
							font-size: 31.54rpx;
							color: white;
						}
					}

					.img1 {
						width: 26rpx;
						height: 26rpx;
						margin-right: 24rpx;
					}

					.arrow {
						width: 11rpx;
						margin-right: 20rpx;
						image{
							width: 100%;
						}
						// height: 35rpx;
					}
				}
			}
		}


	}
</style>