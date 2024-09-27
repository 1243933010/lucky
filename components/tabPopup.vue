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
						<image v-if="userInfo.avatar" class="image" :src="filesUrl1+userInfo.avatar" mode="widthFix"></image>
						<image v-if="!userInfo.avatar" class="image" src="../static/default_user.png" mode="widthFix"></image>
						<view class="text">
							<view class="name">
								<text>{{userInfo.nickname}}</text>
							</view>
							<view class="price">
								<image src="../static/me_icon.png" mode="widthFix"></image>
							    <text>{{userInfo.balance}}</text>
								<view class="add" @click="goUrl('/pages/me/recharge')">
									<text>+</text>
								</view>
							</view>
						</view>
					</view>
					<view class="list">
						<view class="item" @click="goUrl('/pages/index/index')">
							<text>Home Page</text>
						</view>
						<view class="item" @click="goUrl('/pages/me/me')">
							<text>Personal Center</text>
						</view>
						<view class="item" @click="goUrl('/pages/team/team')">
							<text>My Team</text>
						</view>
						<view class="item" @click="goUrl('/pages/index/room/room')">
							<text>Create Table</text>
						</view>
						<view class="item" @click="goUrl('/pages/index/room/room?type=1')">
							<text>Join Table</text>
						</view>
						<view class="item" @click="goUrl('/pages/me/fqas')">
							<text>FAQ</text>
						</view>
					</view>
					<view class="icon">
						<view class="box">
							<view class="item" @click="outLink(indexInfo.system_facebook)">
								<image src="../static/icon_1.png" mode="widthFix"></image>
								<text>Facebook</text>
							</view>
							<view class="tt">/</view>
							<view class="item" @click="outLink(indexInfo.system_twitter)">
								<image src="../static/icon_2.png" mode="widthFix"></image>
								<text>Twitter </text>
							</view>
							<view class="tt">/</view>
							<view class="item" @click="outLink(indexInfo.system_telegram)">
								<image src="../static/icon_3.png" mode="widthFix"></image>
								<text> Tele. </text>
							</view>
							<view class="tt">/</view>
							<view class="item" @click="outLink(indexInfo.system_discord)">
								<image src="../static/icon_4.png" mode="widthFix"></image>
								<text> Disco.</text>
							</view>
						</view>
					</view>
				</view>
				<view class="fixed-icon">
					<image src="../static/shou.png" mode="widthFix"></image>
				</view>
			</view>
	</uni-popup>
	</view>
</template>

<script>
	import {
		$request,$totast,filesUrl
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		data() {
			return {
				type: 'center',
				list:[],
				userInfo:{},
				indexInfo:{}
			};
		},
		computed:{
			filesUrl1(){
				return filesUrl
			}
		},
		mounted(){
			this.getUser();
			this.indexConfigFnc()
		},
		methods: {
			async indexConfigFnc() {
				let res = await $request('indexConfig', {});
				// console.log(res)
				if (res.data.code == 200) {
					res.data.data.system_logo = filesUrl+res.data.data.system_logo
					// getApp().globalData.indexConfig=res.data.data;
					// console.log(res,getApp().globalData.indexConfig)
					this.indexInfo = res.data.data;
				}
			},
			open(options = {type: 'center'}) {
				this.type = options.type;
				this.$refs.popup.open()
			},
			async getUser(){
				let res = await $request('userInfo',{});
				// console.log(res)
				if(res.data.code==200){
					this.userInfo = res.data.data;
				}
			},
			goUrl(url){
				uni.navigateTo({
					url
				})
			},
			outLink(type){
				// #ifdef H5
				console.log(type)
				// window.open('https://www.baidu.com')
				location.href = type;
				// location.href = 'https://www.baidu.com';
				// #endif
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
		// border-radius: 61rpx 61rpx 61rpx 61rpx;
		border: 4rpx solid;
		position: relative;
	}
	.fixed-icon{
		position: absolute;
		width: 251rpx;
		height: 256rpx;
		background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
		border-radius: 168rpx 168rpx 168rpx 168rpx;
		top: -60rpx;
		right: -60rpx;
		.flex-center;
		image{
			width: 155rpx;
		}
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
						text{
							margin-right: 5rpx;
						}
						.add{
							width: 28rpx;
							height: 28rpx;
							background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
							// border: 1rpx solid #DDDDDD;
							.flex-center;
							border-radius: 28rpx;
							text{
								line-height: 1;
								padding-left: 2rpx;
								padding-bottom: 1rpx;
							}
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
				left: 49rpx;
				bottom: 122rpx;
				.box{
					.flex-direction;
					.item{
						width: 112rpx;
						// height: 52rpx;
						// margin-right: 70rpx;
						.flex-column;
						image{
							width: 52rpx;
							margin-bottom: 30rpx;
						}
						text{
							color: #FFFFFF;
							font-size: 24rpx;
						}
					}
					.tt{
						color: white;
						font-size: 24rpx;
						display: flex;
						// align-self: flex-end;
						padding-top: 85rpx;
						padding-left: 20rpx;
					}
				}
			}
		}
		

		
	}
</style>