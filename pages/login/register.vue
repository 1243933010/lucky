<template>
	<view class="page-container">
		<view class="page-container-box">
			<view class="logo">
				<image :src="indexInfo.system_logo" mode="widthFix"></image>
			</view>
			<view class="form">
				<!-- <view class="form-item">
					<view class="label">
						<text>Surname</text>
					</view>
					<view class="input">
						<input type="text" v-model="formData.form1" />
					</view>
				</view>
				<view class="form-item">
					<view class="label">
						<text>Name</text>
					</view>
					<view class="input">
						<input type="password" v-model="formData.form2" />
					</view>
				</view> -->
				<view class="form-item">
					<view class="label">
						<text>Email</text>
					</view>
					<view class="input">
						<input type="text" v-model="formData.email" />
					</view>
				</view>
				<view class="form-item">
					<view class="label">
						<text>Login Password </text>
					</view>
					<view class="input">
						<input type="password" v-model="formData.password" />
					</view>
				</view>
				<view class="form-item">
					<view class="label">
						<text>Confirm Password</text>
					</view>
					<view class="input">
						<input type="password" v-model="formData.password_confirmation" />
					</view>
				</view>
				<view class="form-item">
					<view class="label">
						<text>Invitation Code</text>
					</view>
					<view class="input">
						<input type="text" v-model="formData.invite_code" />
					</view>
				</view>
			</view>
			<view class="submit-btn">
				<view class=""  @click="submitBtn">
					<text>Register</text>
				</view>
			</view>
			<view class="other">
				<view class="label">
					<text class="one">Already have an account? </text>
					<text class="two" @click="goUrl"> Go to Login</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		$request,
		$totast,
		filesUrl
	} from "@/utils/request";
	export default {
		data() {
			return {
				formData: {
					email: '',
					password: "",
					password_confirmation: '',
					invite_code: ''
				},
				indexInfo: {}
			};
		},
		computed: {
		
		},
		onLoad(e) {
			this.onLoadParams = e;
			let {
				invite_code,
				room_code
			} = this.onLoadParams;
			this.formData.invite_code = invite_code||'';
			
			this.indexConfigFnc()
		},
		methods: {
			async indexConfigFnc() {
				let res = await $request('indexConfig', {});
				if (res.data.code == 200) {
					res.data.data.system_logo = filesUrl + res.data.data.system_logo
					getApp().globalData.indexConfig = res.data.data;
					// console.log(res,getApp().globalData.indexConfig)
					this.indexInfo = res.data.data;
				}
			},
			async submitBtn() {
				let res = await $request('region', this.formData);
				// console.log(res)
				// $totast(res.data.message)
				if(res.data.code==200){
					$totast('Email verification to be sent within 5 minutes')
					return
				}
				$totast(res.data.message)
			},
			goUrl() {
				// if (this.onLoadParams.invite_code || this.onLoadParams.room_code) {
				// 	uni.reLaunch({
				// 		url: `/pages/login/login?invite_code=${this.onLoadParams.invite_code}&room_code=${this.onLoadParams.room_code}`
				// 	})
				// } else {
				// 	uni.reLaunch({
				// 		url: `/pages/login/login`
				// 	})
				// }
				
				
				if(this.onLoadParams.page&&this.onLoadParams.page=='friend'){
					if (this.onLoadParams.invite_code && this.onLoadParams.room_code) {
						uni.reLaunch({
							url: `/pages/login/login?invite_code=${this.onLoadParams.invite_code}&room_code=${this.onLoadParams.room_code}`
						})
					} 
				}else if(this.onLoadParams.page&&this.onLoadParams.page=='hall'){
					if (this.onLoadParams.roomId && this.onLoadParams.roomType) {
						// uni.reLaunch({
						// 	url: `/pages/index/index?invite_code=${this.onLoadParams.invite_code}&room_code=${this.onLoadParams.room_code}`
						// })
						uni.reLaunch({
							url: `/pages/login/login?roomId=${this.onLoadParams.roomId}&roomType=${this.onLoadParams.roomType}&bet_amount=${this.onLoadParams.bet_amount}`
						})
					} 
				}else{
					uni.reLaunch({
						url: `/pages/login/login`
					})
				}
				
				
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100%;
		background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);

	}

	text {
		line-height: 0;
	}

	@import url("../../static/default.less");

	.page-container {
		height: 100%;
		// background-color: red;
		background: linear-gradient(0deg, #040405 0%, #23212c 100%);
		// padding-bottom: 140rpx;

		.page-container-box {
			// background:  url('../../static/login_bk.png') no-repeat center center / 100% 100%;
			background: #000000 url('../../static/login_bk.png') no-repeat top left;
			background-size: 100% auto;
			
		}

		.logo {
			width: 175rpx;
			height: 175rpx;
			margin: 0rpx auto;
			padding-top: 185rpx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		.form {
			padding: 206rpx 77rpx 0rpx 77rpx;
			margin: 0 auto;

			.form-item {
				width: 596rpx;
				display: flex;
				flex-direction: column;
				color: white;
				margin-bottom: 35rpx;

				.label {
					color: #FFFFFF;
					font-size: 28rpx;
					line-height: 1.5;
					margin-bottom: 8.7rpx;
				}

				.input {
					height: 70rpx;
					border: 1px solid #999999;
					background-color: #111111;
					border-radius: 20rpx;
					display: flex;
					justify-content: center;
					align-items: center;

					input {
						width: 100%;
						padding-left: 47rpx;
						color: #FFFFFF;
						font-size: 31.54rpx;
						color: white;
					}
				}
			}
		}

		.submit-btn {
			// position: fixed;
			// bottom: 154rpx;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 172rpx;

			view {
				width: 526rpx;
				height: 88rpx;
				background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
				border-radius: 44rpx 44rpx 44rpx 44rpx;
				.flex-center;
				color: #000000;
				font-size: 31.54rpx;
				font-weight: 500;
			}
		}

		.other {
			width: 100%;
			bottom: 122rpx;
			padding-top: 40rpx;
			.flex-center;
			color: #9E9E9E;
			font-size: 24rpx;
			padding-bottom: 140rpx;
			.label {
				.flex-direction;

				.two {
					padding-left: 10rpx;
					color: #38D1DC;
					text-decoration: underline;
				}
			}
		}
	}
</style>