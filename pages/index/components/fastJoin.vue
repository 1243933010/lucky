<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="bottom">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../../../static/close.png" mode="widthFix"></image>
				</view>
				<view class="title1">
					<image src="../../../static/popup_icon.png" mode="widthFix"></image>
				   <!-- <view class=""> -->
				   	<text>CHOOSE A</text>
				   	<text>TABLE</text>
				   <!-- </view> -->
				</view>
				<view class="tab">
					<view class="container">
						<view class="box">
							<view class="item" :class="index==0?'item-active':''" @click="changeTab(0)">
								<view class="title">
									<text>Junior table</text>
								</view>
								<view class="active" v-if="index==0"></view>
							</view>
							<view class="item" :class="index==1?'item-active':''" @click="changeTab(1)">
								<view class="title">
									<text>Premium Table</text>
								</view>
								<view class="active" v-if="index==1"></view>
							</view>
						</view>
						<view class="content">
							<view class="con-item" v-for="(item,index) in list" :key="index">
								<view class="fixed">
									<text>{{item.id}}</text>
								</view>
								<view class="usdt">
									<view class="">
										<text>{{item.num}}USDT</text>
									</view>
								</view>
								<view class="bottom">
									<view class="img-list">
										<image src="../../../static/logo.png" mode="widthFix"></image>
									    <image src="../../../static/logo.png" mode="widthFix"></image>
									</view>
									<view class="text">
										<text>(08)</text>
									</view>
								</view>
								<!-- <image src="../../../static/u1.png" mode="widthFix"></image>
								<text>10.00</text> -->
							</view>
							<!-- <view class="con-item1">
								<image src="../../../static/u2.png" mode="widthFix"></image>
								<text>10.00</text>
							</view> -->
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
				type: 'bottom',
				index: 0,
				list:[
					{num:2,id:'030',imgList:[]},
					{num:2,id:'030',imgList:[]},
				]
			};
		},
		methods: {
			open(options = {type: 'center'}) {
				this.type = options.type;
				this.$refs.popup.open()
			},
			changeTab(ind){
				this.index = ind;
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../static/default.less");
	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;
	}

	.popup-content {
		width: 750rpx;
		// height: 1118rpx;
		max-height: 800rpx;
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
			right: 43rpx;
			top: 43rpx;
			image {
				width: 43rpx;
			}
		}
		.title1{
			width: 100%;
			position: relative;
			padding-left: 43rpx;
			display: flex;
			flex-direction: column;
			margin-bottom: 50rpx;
			image{
				width: 185rpx;
				position: absolute;
				top: 0;
				left: 43rpx;
			}
			view{
				width: 100%;
			}
			text{
				font-size: 70rpx;
				font-weight: 600;
				color: white;
				padding-left: 120rpx;
				line-height: 1;
			}
		}
		.tab {
			width: 681rpx;
			// height: 165rpx;
			margin: 0 auto;
			background: #131413;
			border: 1rpx solid #333333;
			border-radius: 25rpx;
			padding-bottom: 27rpx;
			margin-bottom: 52rpx;
		
			// border: 1px solid #C2C2C2;
			// border-image: linear-gradient(180deg, rgba(68.00000354647636, 68.00000354647636, 68.00000354647636, 1), rgba(0, 0, 0, 0)) 2 2;
			.container {
				display: flex;
				flex-direction: column;
		
				.box {
					width: 100%;
					margin-bottom: 84rpx;
					.flex-direction;
		
					.item {
						box-sizing: border-box;
						padding: 13rpx 34rpx;
						font-size: 34rpx;
						font-weight: 600;
						color: white;
						position: relative;
		
						.active {
							position: absolute;
							left: 10%;
							bottom: 0;
							width: 80%;
							height: 5rpx;
							background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
							border-radius: 17rpx;
						}
					}
		
					.item-active {
						box-sizing: border-box;
						border-top-right-radius: 25rpx;
						border-top-left-radius: 15rpx;
						border: 1px solid #333333;
						border-bottom: none;
						background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
						-webkit-background-clip: text;
						background-clip: text;
						color: transparent;
		
					}
				}
		
				.content {
					width: 100%;
					box-sizing: border-box;
					padding: 27rpx 31rpx;
					// .flex-direction;
					.flex-space-between;
					flex-wrap: wrap;
					.con-item,
					.con-item1 {
						width: 262rpx;
						box-sizing: border-box;
						padding: 10rpx 17rpx;
						background: #222222;
						border-radius: 9rpx;
						margin-right: 17rpx;
						font-weight: 600;
						position: relative;
						padding-bottom: 64rpx;
						.flex-center;
						.fixed{
							position: absolute;
							top: 0;
							right: 0;
							// width: 58rpx;
							height: 28rpx;
							background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
							border-radius: 2rpx 9rpx 2rpx 18rpx;
							.flex-center;
							color: #024F15;
							font-size: 17rpx;
							box-sizing: border-box;
							padding:  0 5rpx;
						}
						.usdt{
							box-sizing: border-box;
							border-top-right-radius: 25rpx;
							border-top-left-radius: 15rpx;
							border: 1px solid #333333;
							border-bottom: none;
							background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
							-webkit-background-clip: text;
							background-clip: text;
							color: transparent;
							font-size: 28rpx;
						}
						.bottom{
							width: calc(100% - 17rpx);
							margin: 0 auto;
							position: absolute;
							bottom: 0rpx;
							// left: 0rpx;
							box-sizing: border-box;
							padding-bottom: 15rpx;
							padding-left: 20rpx;
							.flex-space-between;
							.img-list{
								.flex-direction;
								image{
									width: 28rpx;
									border-radius: 50%;
									margin-left: -20rpx;
								}
							}
							.text{
								color: #EEEEEE;
								font-size: 17rpx;
							}
						}
						// image {
						// 	width: 26rpx;
						// 	margin-right: 17rpx;
						// }
					}
		
					// .con-item1 {
					// 	border: 2rpx solid #38D1DC;
					// 	background: none;
					// 	color: #38D1DC;
					// }
				}
			}
		}
		
	}
</style>