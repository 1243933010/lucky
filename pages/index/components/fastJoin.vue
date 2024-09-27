<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="bottom">
			<view class="popup-content">
				<view class="close"  @click.stop="close">
					<image  @click="close" src="../../../static/close.png" mode="widthFix"></image>
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
									<text>Beginner Table</text>
								</view>
								<view class="active" v-if="index==0"></view>
							</view>
							<view class="item" :class="index==1?'item-active':''" @click="changeTab(1)">
								<view class="title">
									<text>Advanced Table</text>
								</view>
								<view class="active" v-if="index==1"></view>
							</view>
							<view class="item" :class="index==2?'item-active':''" @click="changeTab(2)">
								<view class="title">
									<text>Friend's Table</text>
								</view>
								<view class="active" v-if="index==2"></view>
							</view>
						</view>
						<view class="content" v-if="index==0">
							<view class="con-item" v-for="(item,index) in list" :key="index" @click="goItem(item,'1')">
								<view class="fixed">
									<text>{{item.id}}</text>
								</view>
								<view class="usdt">
									<view class="">
										<text class="num">{{item.bet_amount*1}}</text>
										<text>USDT</text>
									</view>
								</view>
								<!-- <view class="bottom">
									<view class="img-list">
										<image src="../../../static/logo.png" mode="widthFix"></image>
										<image src="../../../static/logo.png" mode="widthFix"></image>
									</view>
									<view class="text">
										<text>(08)</text>
									</view>
								</view> -->
								<!-- <image src="../../../static/u1.png" mode="widthFix"></image>
								<text>10.00</text> -->
							</view>
							<!-- <view class="con-item1">
								<image src="../../../static/u2.png" mode="widthFix"></image>
								<text>10.00</text>
							</view> -->
						</view>
						<view class="content" v-if="index==1">
							<view class="con-item" v-for="(item,index) in list" :key="index" @click="goItem(item,'5')">
								<view class="fixed">
									<text>{{item.id}}</text>
								</view>
								<view class="usdt">
									<view class="">
										<text class="num">{{item.bet_amount*1}}</text>
										<text>USDT</text>
									</view>
								</view>
							</view>
						</view>
						<view class="create" v-if="index==2">
							<view class="left">
								<view class="text">
									<text>Create a table, invite friends, and dominate the game</text>
								</view>
								<view class="bk"  @click="friendJoin">
									<view class="tit">
										<text>Create</text>
									</view>
									<image src="../../../static/u5-1.png" mode="widthFix"></image>
								</view>

							</view>
							<view class="right-all">
								<view class="right">
								
									<view class="btn" @click="friendJoin">
										<view class="">
											<text>+</text>
										</view>
									</view>
									<view class="join"  @click="friendJoin1">
										<image src="../../../static/u6.png" mode="widthFix"></image>
									</view>
								</view>
								<view class="txt">
									<text>Join the table, accept the challenge, and strive for glory</text>
								</view>
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
		$request,
		$totast
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		data() {
			return {
				type: 'bottom',
				index: 0,
				list: [{
						num: 2,
						id: '030',
						imgList: []
					},
					{
						num: 2,
						id: '030',
						imgList: []
					},
				],
				swiperData:[],
				swipterActive:0
			};
		},
		mounted(){
			this.getRoomList();
		},
		methods: {
			async goItem(item,type){
				console.log(item,type)
				let res = await $request('joinSystem', {
					room_id: item.id
				});
				// console.log(res)
				if (res.data.code == 200) {
					this.$refs.popup.close()
					uni.removeStorageSync('loopNum');
					uni.removeStorageSync('loopArr');
					uni.removeStorageSync('newLoopBool');
					uni.navigateTo({
						url: `/pages/index/hall/hall?id=${item.id}&type=${type}&bet_amount=${item.bet_amount}`
					})
					return
				}
				$totast(res.data.message)
			
			},
			async getRoomList() {
				let type = '';
				if (this.index == 0) {
					type = '1'
				} else {
					type = '5'
				}
				let res = await $request('roomList',{type});
				// console.log(res)
				if (res.data.code == 200) {
					this.list = res.data.data;
					// this.swipterActive = 0;
				}
			},
			open(options = {
				type: 'center'
			}) {
				this.type = options.type;
				this.$refs.popup.open()
			},
			changeTab(ind) {
				this.index = ind;
				this.getRoomList()
			},
			close(){
				console.log('111')
				this.$refs.popup.close()
			},
			friendJoin(){
				this.$refs.popup.close()
				uni.navigateTo({
					url:'/pages/index/room/room'
				})
			},
			friendJoin1(){
				this.$refs.popup.close()
				uni.navigateTo({
					url:'/pages/index/room/room?type=1'
				})
			}
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
		border-radius: 61rpx 61rpx 61rpx 61rpx;
		border: 4rpx solid;
		overflow-y: auto;
	}

	.popup-content {
		position: relative;
		padding-top: 52rpx;

		.close {
			position: absolute;
			right: 43rpx;
			top: 43rpx;
			z-index: 10;
			image {
				width: 43rpx;
			}
		}

		.title1 {
			width: 100%;
			position: relative;
			padding-left: 43rpx;
			display: flex;
			flex-direction: column;
			margin-bottom: 50rpx;

			image {
				width: 185rpx;
				position: absolute;
				top: 0;
				left: 43rpx;
			}

			view {
				width: 100%;
			}

			text {
				max-width: 500rpx;
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
			// background: #131413;
			// border: 1rpx solid #333333;
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
					// .flex-direction;
					.flex-space-between;

					.item {
						box-sizing: border-box;
						padding: 13rpx 0rpx;
						font-size: 34rpx;
						font-weight: 600;
						color: white;
						position: relative;

						.title {
							font-size: 28rpx;
						}

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
						// border: 1px solid #333333;
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
					min-height: 300rpx;
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
						padding-bottom: 24rpx;
						padding-top: 64rpx;
						margin-bottom: 50rpx;
						// .flex-center;
						display: flex;
						flex-direction: column;
						align-items: flex-end;
						justify-content: flex-end;
						.fixed {
							position: absolute;
							top: 0;
							right: 0;
							// width: 58rpx;
							height: 28rpx;
							background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
							border-radius: 2rpx 9rpx 2rpx 18rpx;
							.flex-center;
							color: #024F15;
							font-size: 17rpx;
							box-sizing: border-box;
							padding: 0 5rpx;
						}

						.usdt {
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
							// position: relative;
							.num{
								position: absolute;
								top: 0;
								left: 30rpx;
								font-size: 90rpx;
								color: white;
								font-weight: 600;
								
							}
						}

						.bottom {
							width: calc(100% - 17rpx);
							margin: 0 auto;
							position: absolute;
							bottom: 0rpx;
							// left: 0rpx;
							box-sizing: border-box;
							padding-bottom: 15rpx;
							padding-left: 20rpx;
							.flex-space-between;

							.img-list {
								.flex-direction;

								image {
									width: 28rpx;
									border-radius: 50%;
									margin-left: -20rpx;
								}
							}

							.text {
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

				.create {
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					// height: 1100rpx;
					// margin-bottom: 53rpx;
					padding-bottom: 152rpx;
					.left {
						width: 313rpx;
						margin-right: 24rpx;

						.text {
							color: #999999;
							font-size: 23rpx;
							margin-bottom: 24rpx;
						}

						image {
							width: 100%;
						}

						.bk {
							width: 315rpx;
							height: 403rpx;
							background: #222222;
							border-radius: 18rpx 53rpx 53rpx 88rpx;
							border-image: linear-gradient(180deg, rgba(68.00000354647636, 68.00000354647636, 68.00000354647636, 1), rgba(0, 0, 0, 0)) 2 2;
							// .flex-column;
							display: flex;
							flex-direction: column;
							justify-content: space-between;

							.tit {
								background-image: linear-gradient(55.53466053deg, #9DFE00 0%, #14D9E5 100%);
								-webkit-background-clip: text;
								background-clip: text;
								color: transparent;
								font-size: 33px;
								padding-left: 24rpx;
							}
						}
					}
					.right-all{
						 .flex-column;
						 .txt{
							 color: #999999;
							 font-size: 24rpx;
						 }
					}
					.right {
						// .flex-column;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 263rpx;
						height: 350rpx;
						background: #222222;
						border-radius: 18rpx 88rpx 53rpx 53rpx;
						margin-bottom: 17rpx;
						// border: 2rpx solid;
						border-image: linear-gradient(180deg, rgba(68.00000354647636, 68.00000354647636, 68.00000354647636, 1), rgba(0, 0, 0, 0)) 2 2;

						.join {
							width: 130rpx;

							image {
								width: 100%;
							}
						}

						.btn {


							// border: 9rpx solid ;
							// background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
							.flex-center;

							view {
								width: 122rpx;
								height: 122rpx;
								border-radius: 88rpx;
								background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
								border-radius: 87rpx;
								.flex-center;

								text {
									height: 20rpx;
									font-size: 80rpx;
									color: white;
									font-weight: 600;
									// line-height: 2;
								}

								// border-radius: 87rpx;
							}
						}
					}
				}
			}
		}

	}
</style>