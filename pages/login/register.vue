<template>
	<view class="page-container">
		<view class="page-container-box">
			<view class="logo">
				<image src="../../static/logo.png" mode="widthFix"></image>
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
						<input type="password" v-model="formData.invite_code" />
					</view>
				</view>
			</view>
			<view class="submit-btn" @click="submitBtn">
				<view class="">
					<text>Login In</text>
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
		$request,$totast
	} from "@/utils/request";
	export default {
		data() {
			return {
				formData:{
					email:'',
					password:"",
					password_confirmation:'',
					invite_code:''
				}
			};
		},
		onLoad(e) {
			this.onLoadParams = e;
			let {
				invite_code,
				room_code
			} = this.onLoadParams;
			this.formData.invite_code = invite_code;
		},
		methods:{
			async submitBtn(){
				let res = await $request('region',this.formData);
				// console.log(res)
				$totast(res.data.message)
				// if(res.data.code==200){
					
				// }
			},
			goUrl(){
				if(this.onLoadParams.invite_code||this.onLoadParams.room_code){
					uni.reLaunch({
						url:`/pages/login/login?invite_code=${this.onLoadParams.invite_code}&room_code=${this.onLoadParams.room_code}`
					})
				}else{
					uni.reLaunch({
						url:`/pages/login/login`
					})
				}
			}
			
		}
	}
</script>

<style lang="less" scoped>
	page{
		height: 100%;
		background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		
	}
	text{
		line-height: 0;
	}
@import url("../../static/default.less");
.page-container{
	height: 100%;
	// background-color: red;
	background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
	padding-bottom: 140rpx;
	.page-container-box{
		// background:  url('../../static/login_bk.png') no-repeat center center / 100% 100%;
		background:#000000 url('../../static/login_bk.png') no-repeat top left;
		background-size: 100% auto;
	}
	.logo{
		width: 175rpx;
		height: 175rpx;
		margin: 0rpx auto;
		padding-top: 185rpx;
		image{
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
	.form{
		padding-top: 119rpx;
		width: calc(100% - 77rpx);
		margin: 0 auto;
		.form-item{
			width: 100%;
			display: flex;
			flex-direction: column;
			color: white;
			margin-bottom: 35rpx;
			.label{
				color: #FFFFFF;
				font-size: 28rpx;
				line-height: 1.5;
				margin-bottom: 8.7rpx;
			}
			.input{
				width: 100%;
				height: 70rpx;
				border: 1px solid #999999;
				background-color: #111111;
				border-radius: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				input{
					width: 100%;
					padding-left: 47rpx;
					color: #FFFFFF;
					font-size: 31.54rpx;
					color: white;
				}
			}
		}
	}
	.submit-btn{
		// position: fixed;
		// bottom: 154rpx;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 172rpx;
		
		view{
			width: 526rpx;
			height: 88rpx;
			background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
			border-radius: 44rpx 44rpx 44rpx 44rpx;
			.flex-center;
			color: #000000;
			font-size: 31.54rpx;
			font-weight: 500;
		}
	}
	.other{
		width: 100%;
		bottom: 122rpx;
		padding-top: 20rpx;
		.flex-center;
		color: #9E9E9E;
		font-size: 24rpx;
		.label{
			.flex-direction;
			.two{
				color: #38D1DC;
				text-decoration: underline;
			}
		}
	}
}

</style>
