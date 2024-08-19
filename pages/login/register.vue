<template>
	<view class="page-container">
		<view class="logo">
			<image src="../../static/logo.png" mode="widthFix"></image>
		</view>
		<view class="form">
			<view class="form-item">
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
			</view>
			<view class="form-item">
				<view class="label">
					<text>Email</text>
				</view>
				<view class="input">
					<input type="password" v-model="formData.form2" />
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Login password</text>
				</view>
				<view class="input">
					<input type="password" v-model="formData.form2" />
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Confirm password</text>
				</view>
				<view class="input">
					<input type="password" v-model="formData.form2" />
				</view>
			</view>
		</view>
		<view class="submit-btn">
			<view class="">
				<text>Login In</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData:{
					form1:'',
					form2:""
				}
			};
		}
	}
</script>

<style lang="less" scoped>
	page{
		height: 100%;
		// background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
	background: #09090c url('../../static/login_bk.png') no-repeat 100% 100%;
	}
	text{
		line-height: 0;
	}
@import url("../../static/default.less");
.page-container{
	height: 100%;
	// background-color: red;
	
	
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
		padding-bottom: 136rpx;
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
}

</style>
