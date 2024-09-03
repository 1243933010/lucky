<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="right">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../static/close.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text></text>
				</view>
				<view class="link">
					<view class="label">
						<image class="image" src="../static/logo.png" mode="widthFix"></image>
						<view class="text">
							<view class="name">
								<text>{{userInfo.nickname}}</text>
							</view>
							<view class="price">
								<image src="../static/me_icon.png" mode="widthFix"></image>
							    <text>{{userInfo.balance}}</text>
							</view>
						</view>
					</view>
					<view class="list">
						<view class="item" @click="goUrl('/pages/index/index')">
							<text>home page</text>
						</view>
						<view class="item" @click="goUrl('/pages/me/personalData')">
							<text>Personal Center</text>
						</view>
						<view class="item" @click="goUrl('/pages/team/team')">
							<text>My team</text>
						</view>
						<view class="item" @click="goUrl('')">
							<text>Create a table</text>
						</view>
						<view class="item" @click="goUrl('')">
							<text>Join the table</text>
						</view>
						<view class="item" @click="goUrl('/pages/me/fqas')">
							<text>FAQ</text>
						</view>
					</view>
					<view class="icon">
						<view class="box">
							<view class="item">
								<image src="../static/icon_1.png" mode="widthFix"></image>
							</view>
							<view class="item">
								<image src="../static/icon_2.png" mode="widthFix"></image>
							</view>
							<view class="item">
								<image src="../static/icon_3.png" mode="widthFix"></image>
							</view>
							<view class="item">
								<image src="../static/icon_4.png" mode="widthFix"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
	</uni-popup>
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		data() {
			return {
				type: 'center',
				list:[],
				userInfo:{}
			};
		},
		mounted(){
			this.getUser();
		},
		methods: {
			open(options = {type: 'center'}) {
				this.type = options.type;
				this.$refs.popup.open()
			},
			async getUser(){
				let res = await $request('userInfo',{});
				console.log(res)
				if(res.data.code==200){
					this.userInfo = res.data.data;
				}
			},
			goUrl(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="less" scoped>
		@import url("@/static/default.less");
	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;
	}

	.popup-content {
		width: 595rpx;
		height: 100%;
		// max-height: 800rpx;
		// overflow-y: auto;
		background: #000000;
		box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		border-radius: 61rpx 61rpx 0rpx 0rpx;
		border: 4rpx solid;
	}

	.popup-content {
		position: relative;
	
		padding-top: 52rpx;

		.close {
			position: absolute;
			left: 43rpx;
			top: 43rpx;

			image {
				width: 43rpx;
			}
		}

		.title {
			color: #FFFFFF;
			font-weight: 45rpx;
			font-weight: 600;
			margin-bottom: 96rpx;
			box-sizing: border-box;
			padding-left: 52rpx;
			padding-right: 52rpx;
		}
		.link{
			width: 100%;
			// .flex-column;
			padding-left: 105rpx;
			
			.label{
				margin-bottom: 175rpx;
				.flex-direction;
				
				.image{
					width: 105rpx;
					border-radius: 50%;
					margin-right: 32rpx
				}
				.text{
					.flex-column;
					color: white;
					font-size: 32rpx;
					.name{
						margin-bottom: 8rpx;
					}
					.price{
						.flex-direction;
						image{
							width: 40rpx;
							margin-right: 5rpx;
						}
					}
				}
			}
			.list{
				color: white;
				font-size: 28rpx;
				.item{
					margin-bottom: 52rpx;
				}
			}
			.icon{
				position: absolute;
				left: 87rpx;
				bottom: 122rpx;
				.box{
					.flex-direction;
					.item{
						width: 52rpx;
						height: 52rpx;
						margin-right: 70rpx;
						image{
							width: 100%;
						}
					}
				}
			}
		}
		

		
	}
</style>