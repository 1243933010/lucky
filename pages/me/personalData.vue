<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="logo">
			<image src="../../static/logo.png" mode="widthFix"></image>
		</view>
		<view class="form">
			<view class="form-item">
				<view class="label">
					<text>Name</text>
				</view>
				<view class="input">
					<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
					<input type="text" v-model="formData.form1" />
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Login password</text>
				</view>
				<view class="input">
					<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
					<input type="password" v-model="formData.form2" />
					<image class="arrow" src="../../static/right_arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Email</text>
					<image src="../../static/logo.png" mode="widthFix"></image>
				</view>
				<view class="input">
					<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
					<input type="password" v-model="formData.form2" />
					<image class="arrow" src="../../static/right_arrow.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="form-item">
				<view class="label">
					<text>Withdrawal address</text>
				</view>
				<view class="input">
					<image class="img1" src="../../static/logo.png" mode="widthFix"></image>
					<input type="password" v-model="formData.form2" />
					<image class="arrow" src="../../static/right_arrow.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		<!-- <view class="" style="padding-top: 212rpx;padding-bottom: 36rpx;">
			<DefaultFooter />
		</view> -->
		<DefaultFooter />
	</view>
</template>

<script>
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	export default {
		components:{DefaultHeader,DefaultFooter},
		data() {
			return {
				formData: {
					form1: '',
					form2: ""
				}
			};
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
			width: calc(100% - 77rpx);
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
					.arrow{
						width: 11rpx;
						margin-right: 20rpx;
						// height: 35rpx;
					}
				}
			}
		}

		
	}
</style>