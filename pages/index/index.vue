<template>
	<view class="page-container">
		<view class="page-header">
			<view class="logo1">
				<image src="../../static/me_icon.png" mode="widthFix"></image>
				<text>10000</text>
				<image class="img" src="../../static/logo.png" mode="widthFix"></image>
			</view>
			<view class="setting">
				<view class=""></view>
				<view class=""></view>
			</view>
		</view>
		<view class="invite">
			<view class="container">
				<view class="people">
					<view class="left">
						<image src="../../static/people.png" mode="widthFix"></image>
						<text>0</text>
					</view>
					<view class="right">
						<view class="btn">
							<image src="../../static/invite.png" mode="widthFix"></image>
							<text>invitation</text>
						</view>
					</view>
				</view>
				<view class="team">
					<view class="posi">
						<view class="box">
							<view class="add">
								<image src="../../static/add.png" mode="widthFix"></image>
							</view>
							<view class="add">
								<image src="../../static/add.png" mode="widthFix"></image>
							</view>
							<view class="add">
								<image src="../../static/add.png" mode="widthFix"></image>
							</view>
							<view class="add">
								<image src="../../static/add.png" mode="widthFix"></image>
							</view>
							<view class="num">
								<view class="add1">
									<image src="../../static/add.png" mode="widthFix"></image>
								</view>
								<view class="text">
									<text>X1000</text>
								</view>
								<!-- <image src="../../static/add.png" mode="widthFix"></image> -->
							</view>
						</view>
					</view>
					<view class="earn">
						<view class="top"><span>1</span></view>
						<view class="bottom">
							<view class="left">
								<image src="../../static/team.png" mode="widthFix"></image>
								<view class="text">
									<text>Team up to earn</text>
								</view>
							</view>
							<view class="right">
								<text>1000</text>
								<image src="../../static/right_arrow.png" mode="widthFix"></image>
							</view>

						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="future">
			<view class="label">
				<view class="text">
					<view class="text1">
						<text>THE</text>
					</view>
					<view class="text2">
						<text>FUTURE.</text>
					</view>
				</view>
				<view class="rich">
					<text>Global real-person U battle, joint betting creates a bonus pool, and wealth is randomly
						distributed! Lucky airdrop up to 100 times!</text>
				</view>
			</view>
			<view class="bk">
				<image class="peo" src="../../static/peo1.png" mode="widthFix"></image>
				<view class="po"></view>
			</view>
		</view>
		<view class="tab">
			<view class="container">
				<view class="box">
					<view class="item" :class="index==0?'item-active':''">
						<view class="title">
							<text>Junior table</text>
						</view>
						<view class="active" v-if="index==0"></view>
					</view>
					<view class="item" :class="index==1?'item-active':''">
						<view class="title">
							<text>Premium Table</text>
						</view>
						<view class="active" v-if="index==1"></view>
					</view>
				</view>
				<view class="content">
					<view class="con-item">
						<image src="../../static/u1.png" mode="widthFix"></image>
						<text>10.00</text>
					</view>
					<view class="con-item1">
						<image src="../../static/u2.png" mode="widthFix"></image>
						<text>10.00</text>
					</view>
				</view>
			</view>
		</view>
		<view class="uni-margin-wrap" style="margin-bottom: 173rpx;">
			<!-- 轮播图 -->
			<swiper class="banner-container" :indicator-dots="false" :autoplay="false" :circular="false" previous-margin="120rpx" next-margin="120rpx" @change="swipterChange" :current="swipterActive">
				<block v-for="(item,index) in swiperData" :key="index">
					<swiper-item class="banner-item" >
						<view class="banner-box" :class="swipterActive==index-1?'previous':swipterActive==index+1?'next':''">
							<image mode="widthFix" class="banner-img" :src="item.imgUrl"></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="Falling">
			<view class="container">
				<view class="logo">
					<image src="../../static/u3.png" mode="widthFix"></image>
				</view>
				<view class="right">
					<view class="text">
						<view class="title">
							<text>Random lucky airdrop with a single drop of up to</text>
						</view>
						<view class="label">
							<text>100 times USDT</text>
						</view>
					</view>
					<view class="bottom">
						<text>It has fallen today <span style="color: #2cd7b5;">03</span>times</text>
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				swiperData: [{
						imgUrl: '../../static/index_bk.png'
					},
					{
						imgUrl: '../../static/index_bk.png'
					},
					{
						imgUrl: '../../static/index_bk.png'
					},
				],
				swipterActive:0
			}
		},
		onLoad() {

		},
		methods: {
			swipterChange(e){
				this.swipterActive = e.detail.current;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");

	page {
		height: 100%;
		background-color: #23222d;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		// background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
	}

	/* 轮播图 */
	.banner-container {
		width: 100%;
		height: 555rpx;
		
	}

	.banner-item {
		display: flex;
		justify-content: center;
		position: relative;
	}

	.banner-box {
		width: 100%;
		/* 控制两张图片的间距 */
		height: 100%;
		padding-left: 10%;
	}
	.previous{
		transform: rotate(10deg) !important;
		 transition: transform 0.7s ease;
		 position: absolute;
		 right: -72rpx;
		// padding-top: 20rpx;
		// padding-right: 120rpx;
	}
	.next{
		transform: rotate(-10deg) !important;
		 transition: transform 0.7s ease;
		 position: absolute;
		 left: -50rpx;
	}

	.banner-img {
		width: 468rpx;
		margin: 0 auto;
		height: 554rpx;
		border-radius: 5px;
	}


	.page-header {
		width: calc(100% - 47rpx);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 73rpx;

		.logo1 {

			// height: 40rpx;
			.flex-direction;

			image {
				width: 40rpx;
			}

			text {
				color: #FFFFFF;
				font-size: 31rpx;
				margin-right: 12rpx;
			}

			.img {
				width: 27rpx;
				border-radius: 50%;
			}
		}

		.setting {
			display: flex;
			flex-direction: column;
			align-items: center;

			view {
				width: 33rpx;
				height: 5rpx;
				background: #FFFFFF;
				margin-bottom: 10rpx;
				// border: 4rpx solid #FFFFFF;
			}
		}
	}

	.invite {
		width: 100%;
		padding-top: 62rpx;

		.container {
			width: 685rpx;
			margin: 0 auto;
			background: #000000;
			box-shadow: 2rpx 2rpx 3rpx 0rpx rgba(255, 255, 255, 0.3);
			border-radius: 35rpx;
			// border: 1rpx solid;
			// opacity: 0.2;
			border-image: linear-gradient(180deg, rgba(153.00000607967377, 153.00000607967377, 153.00000607967377, 1), rgba(0, 0, 0, 0)) 1 1;
			// border-radius: 45rpx;
			padding-bottom: 8rpx;

			.people {
				background: gainsboro;
				border-radius: 45rpx;
				height: 104rpx;
				.flex-space-between;
				box-sizing: border-box;
				padding-left: 41rpx;
				padding-right: 26rpx;
				margin-bottom: 76rpx;

				// border-top-right-radius: 35rpx;
				// border-top-left-radius: 35rpx;
				.left {
					.flex-direction;

					image {
						width: 48rpx;
						margin-right: 7rpx;
					}

					text {
						color: #FFFFFF;
						font-size: 31rpx;
					}
				}

				.right {
					.btn {
						width: 186rpx;
						height: 63rpx;
						background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
						border-radius: 31rpx 31rpx 31rpx 31rpx;
						.flex-space-between;
						box-sizing: border-box;
						padding: 0 17rpx;

						// justify-content: space-around;
						image {
							width: 31rpx;
							margin-right: 10rpx;
						}

						text {
							color: #000000;
							font-size: 24rpx;
						}
					}
				}
			}

			.team {
				margin: 0 auto;
				width: 663rpx;
				height: 149rpx;
				border-radius: 38rpx;
				border: 2rpx solid #232323;
				position: relative;

				.posi {
					width: 100%;
					position: absolute;
					top: -40rpx;
					left: 0;

					.box {
						display: flex;
						justify-content: center;
						align-items: flex-start;

						.add {
							width: 69rpx;
							height: 69rpx;
							background: linear-gradient(360deg, #212121 3%, #0E0E0E 100%);
							border-radius: 14rpx;
							border: 2rpx solid #232323;
							.flex-center;
							margin-right: 26rpx;

							image {
								width: 26rpx;
							}
						}

						.num {
							width: 215rpx;
							height: 87rpx;
							background: #222222;
							border-radius: 17rpx;
							.flex-center;

							.add1 {
								width: 49rpx;
								height: 49rpx;
								background: linear-gradient(360deg, #212121 3%, #0E0E0E 100%);
								border-radius: 14rpx;
								border: 2rpx solid #232323;
								.flex-center;
								margin-right: 20rpx;

								image {
									width: 20rpx;
								}
							}

							.text {
								color: #CACACA;
								font-size: 24rpx;
							}
						}
					}
				}

				.earn {
					box-sizing: border-box;
					padding: 32rpx 43rpx 27rpx 43rpx;
					.flex-column;

					.top {
						opacity: 0;
					}

					.bottom {
						width: 100%;
						.flex-space-between;

						.left {
							.flex-direction;

							image {
								width: 43rpx;
								margin-right: 19rpx;
							}

							text {
								color: #BEBEBE;
								font-size: 24rpx;
							}
						}

						.right {
							.flex-direction;

							text {
								color: #525252;
								font-size: 24rpx;
								margin-right: 12rpx;
								font-weight: 600;
							}

							image {
								width: 12rpx;
							}
						}
					}
				}
			}
		}
	}

	.future {
		width: 100%;
		box-sizing: border-box;
		padding: 67rpx 32rpx 0 67rpx;
		display: flex;
		justify-self: flex-start;
		margin-bottom: 59rpx;

		.label {
			display: flex;
			flex-direction: column;

			.text {
				display: flex;
				flex-direction: column;
				margin-bottom: 30rpx;

				.text1 {
					font-size: 62rpx;
					font-weight: 600;
					background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
					-webkit-background-clip: text;
					background-clip: text;
					color: transparent;
				}

				.text2 {
					font-size: 62rpx;
					font-weight: 600;
					color: white;
				}
			}

			.rich {
				color: #C2C2C2;
				font-size: 24rpx;
				line-height: 39rpx;
			}
		}

		.bk {
			position: relative;
			margin-bottom: 59rpx;

			.peo {
				padding-top: 10rpx;
				width: 206rpx;
				height: 248rpx;
				z-index: 10;
			}

			.po {
				position: absolute;
				top: 0;
				left: 0;
				width: 176rpx;
				height: 290rpx;
				background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
				border-radius: 151rpx 151rpx 151rpx 151rpx;
				transform: rotate(30deg);
			}
		}
	}

	.tab {
		width: 681rpx;
		height: 165rpx;
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
				.flex-direction;

				.con-item,
				.con-item1 {
					box-sizing: border-box;
					padding: 10rpx 17rpx;
					background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
					border-radius: 174rpx;
					margin-right: 17rpx;
					font-weight: 600;

					image {
						width: 26rpx;
						margin-right: 17rpx;
					}
				}

				.con-item1 {
					border: 2rpx solid #38D1DC;
					background: none;
					color: #38D1DC;
				}
			}
		}
	}
    .Falling{
		.container{
			width: 680rpx;
			// height: 208rpx;
			margin: 0 auto;
			background: linear-gradient( 146deg, #555555 0%, #000000 100%);
			box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84,84,84,0.2118);
			border-radius: 28rpx;
			border: 2rpx solid #666666;
			box-sizing: border-box;
			padding: 22rpx 26rpx;
			.flex-space-between;
			.logo{
				width: 142rpx;
				margin-right: 20rpx;
				image{
					width: 100%;
				}
			}
			.right{
				width: calc(100% - 71rpx);
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex-grow: 1;
				.text{
					display: flex;
					flex-direction: column;
					margin-bottom: 20rpx;
					.title{
						color: #FFFFFF;
						font-size: 35rpx;
					}
					.label{
						background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
						-webkit-background-clip: text;
						background-clip: text;
						color: transparent;
						font-size: 35rpx;
					}
				}
				.bottom{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					text{
						color: #AAAAAA;
						font-size: 27rpx;
						.flex-center;
						line-height: 1;
					}
					image{
						width: 11rpx;
					}
				}
			}
		}
	}
</style>