<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="logo">
			<image @click="changeImg" :src="userInfo.avatar?filesUrl1+userInfo.avatar:'../../static/default_user.png'" mode="widthFix"></image>
		</view>
		<view class="form">
			<view class="form-item" @click="setUser">
				<view class="label">
					<text>UserName</text>
				</view>
				<view class="input">
					<view class="box">
						<image class="img1" src="../../static/user_icon1.png" mode="widthFix"></image>
						<input type="text" v-model="userInfo.nickname" :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow2.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Login password</text>
				</view>
				<view class="input" @click="setLoginPassword">
					<view class="box">
						<image class="img1" src="../../static/user_icon2.png" mode="widthFix"></image>
						<input type="password" v-model="userInfo.password"   :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow2.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Transaction password</text>
				</view>
				<view class="input" @click="setTransactionPassword">
					<view class="box">
						<image class="img1" src="../../static/user_icon2.png" mode="widthFix"></image>
						<input type="password" v-model="formData.transactionPassword" :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow2.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="form-item"  @click="helpFnc1">
				<view class="label" >
					<text>Email</text>
					<image src="../../static/help.png" mode="widthFix"></image>
				</view>
				<view class="input">
					<image class="img1" src="../../static/user_icon3.png" mode="widthFix"></image>
					<input style="width: 100%;" type="text" v-model="userInfo.email" :disabled="true" />
					<!-- <image class="arrow" src="../../static/right_arrow.png" mode="widthFix"></image> -->
				</view>
			</view>
			<view class="form-item" :style="sysInfo.screenHeight < 850 ? 'padding-bottom:200rpx' : ''">
				<view class="label">
					<text>Withdrawal address</text>
				</view>
				<view class="input" style="margin-bottom: 20rpx;"  @click="setAddress(1)">
					<view class="box">
						<image class="img1" src="../../static/user_icon4.png" mode="widthFix"></image>
						<input type="text" v-model="userInfo.trc20_address" placeholder="USDT-TRC20"  :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow2.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="input"  @click="setAddress(2)">
					<view class="box">
						<image class="img1" src="../../static/user_icon4.png" mode="widthFix"></image>
						<input type="text" v-model="userInfo.bep20_address" placeholder="USDT-BNB Smart Chain/BEP20"  :disabled="true" />
					</view>
					<view class="arrow">
						<image src="../../static/right_arrow2.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>

		<!-- <view class="" style="padding-top: 212rpx;padding-bottom: 36rpx;">
			<DefaultFooter />
		</view> -->
		<DefaultFooter />
		<UserPopup ref="userPopup"  @updateData="updateData"  />
		<Recharge ref="rechargePopup"  @updateData="updateData"  />
		<ImgPopup ref="imgPopup" @updateData="updateData"  />
		<LoginPopup ref="loginPopup" @updateData="updateData" />
		<TransactionPassword ref="transactionPassword"  @updateData="updateData" />
		<FixedCom />
	</view>
</template>

<script>
	import {
		$request,$totast,filesUrl
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	import UserPopup from './components/userPopup.vue';
	import ImgPopup from './components/imgPopup.vue';
	import LoginPopup from './components/loginPopup.vue';
	import Recharge from './components/recharge.vue';
	import TransactionPassword from './components/transactionPassword.vue';
	import FixedCom from '@/components/fixed.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter,
			UserPopup,
			ImgPopup,
			LoginPopup,
			TransactionPassword,
			Recharge,
			FixedCom
		},
		data() {
			return {
				formData: {
					form1: 'test',
					form2: "123456",
					transactionPassword:'******'
				},
				sysInfo: {screenHeight:100},
				userInfo:{}
			};
		},
		computed:{
			filesUrl1(){
				return filesUrl
			}
		},
		onLoad(e) {
			let sysInfo = uni.getSystemInfo({
				success:(res)=>{
					console.log(res.screenHeight)
					this.sysInfo = res;
				}
			})
			this.getUser();
			if(e&&e.type=='trc20_address'){
				this.$nextTick(()=>{
					this.$refs.rechargePopup.open(1);
				})
			}
			if(e&&e.type=='bep20_address'){
				this.$nextTick(()=>{
				this.$refs.rechargePopup.open(2);
				})
			}
			// this.sysInfo = sysInfo.screenHeight;
			// console.log(sysInfo.screenHeight)
		},
		methods:{
			helpFnc1(){
				console.log('11122',uni.showToast)
				// uni.showLoading()
				// this.$refs.rechargePopup.open();
				// uni.showToast({
				// 	icon:'none',
				// 	title:'1111'
				// })
				// uni.showToast({
				// 	// icon:'none',
				// 	data:'Email is used for verifying changes to transaction passwords, login passwords, forgotten passwords, and other operations'
				// })
				$totast('Email is used for verifying changes to transaction passwords, login passwords, forgotten passwords, and other operations')
			},
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
			},
			updateData(){
				this.getUser()
			},
			async getUser(){
				let res = await $request('userInfo',{});
				// console.log(res)
				if(res.data.code==200){
					this.userInfo = res.data.data;
				}
			},
			setAddress(type){
				this.$refs.rechargePopup.open(type);
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		// background-color: #000;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		// background: #121613 url('../../static/login_bk.png') no-repeat 100% 100%;
		position: relative;
		z-index: 10;
	}

	text {
		line-height: 0;
	}

	@import url("../../static/default.less");

	.page-container {
		height: 100%;
		// background-color: red;
		padding-bottom: 40rpx;
		// background-color: #000;

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
						width: 35rpx;
						height: 35rpx;
						border-radius: 50%;
					}
				}

				.input {
					width: calc(100% - 45.77rpx);
					height: 78rpx;
					border: 1px solid #999999;
					background-color: #111111;
					border-radius: 20rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					padding-left: 20rpx;
					
					.box {
						width: 100%;
						.flex-direction;

						.img1 {
							width: 35rpx;
							height: 35rpx;
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
						width: 35rpx;
						height: 35rpx;
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