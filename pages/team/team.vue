<template>
	<view class="page-container">
		<view class="" style="position: fixed;top: 0;width: 100%;z-index: 100;background: #000;">
			<DefaultHeader />
		</view>
		<view class="" style="opacity: 0;">
			<DefaultHeader />
		</view>

		<view class="team">
			<view class="top-page">
				<view class="page-name">
					<text class="tit">Gifts collections to friends</text>
					<text class="img">
						<image class="pic" src="../../static/gift.png" mode="widthFix"></image>
					</text>
				</view>
				<view class="info-box">
					<view class="num-box">
						<view class="icon-num">
							<view class="icon">
								<image class="pic" src="../../static/me_icon.png" mode="widthFix"></image>
							</view>
							<view class="num">
								<text>{{commissionInfo.commission}}
									<view class="wen" @click="ask(1)">?</view>
								</text>
							</view>
						</view>
						<view class="copy-icon">
							<!-- TODO: 暂用图片 -->
							<image @click="openOrder" class="pic" src="../../static/order.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="desc" @click="openOrder">Today Earned {{commissionInfo.today_commission}} USDT Reward
					</view>
					<view class="btn-box" @click="Transfer">Transfer</view>
				</view>
				<view class="storage-total">
					<view class="img" @click="goMsg">
						<image src="../../static/piggy_bank.png" mode="widthFix" class="pic"></image>
					</view>
					<div class="total-list" @click="goMsg">
						<view class="total-num">
							<view class="num-box">
								<view class="icon">
									<image src="../../static/preson.png" mode="widthFix" class="pic"></image>
								</view>
								<view class="num">{{threeCommissionInfo.level1_count}}</view>
							</view>
							<view class="desc">
								<view class="desc-1">Received a reward of</view>
								<view class="desc-2">{{threeCommissionInfo.level1_commission}} USDT</view>
							</view>
						</view>
						<view class="total-num">
							<view class="num-box">
								<view class="icon">
									<image src="../../static/preson.png" mode="widthFix" class="pic"></image>
								</view>
								<view class="num">{{threeCommissionInfo.level2_count}}</view>
							</view>
							<view class="desc">
								<view class="desc-1">Received a reward of</view>
								<view class="desc-2">{{threeCommissionInfo.level2_commission}} USDT</view>
							</view>
						</view>
						<view class="total-num">
							<view class="num-box">
								<view class="icon">
									<image src="../../static/preson.png" mode="widthFix" class="pic"></image>
								</view>
								<view class="num">{{threeCommissionInfo.level3_count}}</view>
							</view>
							<view class="desc">
								<view class="desc-1">Received a reward of</view>
								<view class="desc-2">{{threeCommissionInfo.level3_commission}} USDT</view>
							</view>
						</view>
					</div>
				</view>
				<view class="record">
					<view class="header">
						<view class="name">
							<image src="../../static/gift1.png" mode="widthFix"></image>
							<text>Invitation Records</text>
						</view>
						<view class="wen" @click="ask(2)">
							<image src="../../static/wen.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="record-list">
						<view class="record-list-header">
							<view class="time">Time</view>
							<view class="user-name">UserName</view>
							<view class="status">Game Status</view>
							<view class="reward">reward</view>
						</view>
						<scroll-view scroll-y="true" style="max-height: 500rpx;">
							<view class="item" v-for="(item,index) in list1" :key="index">
								<view class="time">{{item.create_time}}</view>
								<view class="user-name">{{item.nickname}}</view>
								<view class="status">{{item.status}}</view>
								<view class="reward">{{item.status_text}}</view>
							</view>
						</scroll-view>
					</view>
					<view class="record-btn">
						<view class="btn" @click="Invite">
							<text>Invite Friends</text>
						</view>
					</view>
				</view>
			</view>
			<view class="hr"></view>
			<view class="count">
				<view class="tab">
					<view class="item" :class="index==0?'active':''" @click="setIndex(0)">
						<text>Today's Team Games Count</text>
					</view>
					<view class="item" :class="index==1?'active':''" @click="setIndex(1)">
						<text>Total Historical Games Count</text>
					</view>
				</view>
				<view class="me" v-if="userInfoData">
					<view class="left">
						<view class="num">
							<text>{{userInfoData.rank}}</text>
						</view>
						<view class="logo">
							<image :src="userInfoData.avatar?userInfoData.avatar:'../../static/default_user.png'"
								mode="widthFix"></image>
						</view>
						<view class="name">
							<text>Me</text>
						</view>
					</view>
					<view class="num1">
						<text>{{userInfoData.total_game}}</text>
					</view>
				</view>
			</view>
			<view class="pai">
				<view class="header">
					<view class="item two" v-if="paiList.length&&paiList[1]">
						<view class="logo">
							<image :src="paiList[1].avatar?paiList[1].avatar:'../../static/default_user.png'" mode="widthFix">
							</image>
							<view class="text">
								<view class="name">
									<text>{{paiList[1].nickname||''}}</text>
								</view>
								<view class="num">
									<text>{{paiList[1].total_game||0}}</text>
								</view>
							</view>
						</view>
						<view class="fixed">
							<image class="two-logo" src="../../static/two.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="item one" v-if="paiList[0]">
						<view class="logo">
							<image :src="paiList[0].avatar?paiList[0].avatar:'../../static/default_user.png'" mode="widthFix"></image>
							<view class="text">
								<view class="name">
									<text>{{paiList[0].nickname||''}}</text>
								</view>
								<view class="num">
									<text>{{paiList[0].total_game||0}}</text>
								</view>
							</view>
						</view>
						<view class="fixed">
							<image class="one-logo" src="../../static/one.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="item three" v-if="paiList[2]">
						<view class="logo">
							<image :src="paiList[2].avatar?paiList[2].avatar:'../../static/default_user.png'"  mode="widthFix"></image>
							<view class="text">
								<view class="name">
									<text>{{paiList[2].nickname||''}}</text>
								</view>
								<view class="num">
									<text>{{paiList[2].total_game||0}}</text>
								</view>
							</view>
						</view>
						<view class="fixed">
							<image class="three-logo" src="../../static/three.png" mode="widthFix"></image>
						</view>
					</view>
				</view>

				<view class="pai-list">
					<view class="item" v-for="(item,index) in handlePaiList" :key="index">
						<view class="left">
							<view class="index">
								<text>{{item.rank||""}}</text>
							</view>
							<view class="logo">
								<image :src="item.avatar?item.avatar:'../../static/default_user.png'" mode="widthFix"></image>
							</view>
							<view class="name">
								<text>{{item.nickname||''}}</text>
							</view>
						</view>
						<view class="num">
							<text>{{item.total_game||''}}</text>
						</view>
					</view>
				</view>

			</view>
		</view>
		<view style="position: fixed;width: 100%;bottom: 0;" v-if="pageScrollBool">
			<view style="padding: 9rpx 0 35rpx 0;">
				<DefaultFooter :fiexed="false" @share="$refs.invitePopup.open()" />
			</view>
		</view>
		<!-- <DefaultFooter /> -->
		<view style="padding: 9rpx 0 35rpx 0;">
			<DefaultFooter :fiexed="false" @share="$refs.invitePopup.open()" />
		</view>
		<OrderPopup ref="orderPopup" />
		<Transfer ref="transfer" @updateData="updateData" />
		<InvitePopup ref="invitePopup" />
		<FixedCom :bkColor="1111" />
		<!-- <TransferPopup ref="transferPopup" /> -->
	</view>
</template>

<script>
	import {
		$request,
		$totast,
		filesUrl
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	import OrderPopup from './components/orderPopup.vue';
	import Transfer from './components/transfer.vue';
	import InvitePopup from './components/InvitePopup.vue';
	import FixedCom from '@/components/fixed.vue';
	// import TransferPopup from './components/transferPopup.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter,
			Transfer,
			InvitePopup,
			OrderPopup,
			FixedCom
		},
		data() {
			return {
				list: [],
				list1: [],
				index: 0,
				paiList: [],
				userInfoData: {},
				commissionInfo: {},
				pageScroll: 0,
				pageScrollBool: true,
				threeCommissionInfo: {},
				userInfo:{
					
				}
			};
		},
		onLoad() {
			this.getRecord();
			
			this.getCommissionInfo()
			this.threeCommissionInfoFnc();
			this.getUser();
		},
		computed: {
			handlePaiList() {
				return this.paiList.slice(3)
			},
			filesUrl1(){
				return filesUrl
			}
		},
		onReachBottom() {
			this.pageScrollBool = false;
		},
		onPageScroll(e) {
			console.log(e, this.pageScroll)
			if (this.pageScroll < e.scrollTop) {
				this.pageScrollBool = false;
			} else {
				this.pageScrollBool = true;
			}
			this.pageScroll = e.scrollTop;
		},
		methods: {
			async getUser(){
				let res = await $request('userInfo',{});
				// console.log(res)
				if(res.data.code==200){
					this.userInfo = res.data.data;
					this.getTodayGameRank()
				}
			},
			async threeCommissionInfoFnc() {
				let res = await $request('threeCommissionInfo', {});
				// console.log(res)
				if (res.data.code == 200) {
					this.threeCommissionInfo = res.data.data;

				}
			},
			goMsg() {
				console.log('111')
				uni.navigateTo({
					url: './msg'
				})
			},
			ask(type) {
				if (type == 1) {
					uni.showToast({
						icon: 'none',
						title: 'The commission wallet account is a real-time reward, and the balance can be transferred to the trading account to participate in betting or withdraw cash.',
						duration: 2000
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: 'Invite friends to register and bet for over 20 minutes,both parties receive a reward of 10U each person.',
						duration: 2000
					})
				}
			},
			setIndex(index) {
				this.index = index;
			},
			Invite() {
				this.$refs.invitePopup.open()
			},
			updateData() {

			},
			Transfer() {
				this.$refs.transfer.open()
			},
			openOrder() {
				this.$refs.orderPopup.open()
			},
			goUrl(url) {
				uni.navigateTo({
					url
				})
			},
			async getRecord() {
				let res = await $request('inviteRecords', {});
				// console.log(res)
				if (res.data.code == 200) {
					this.list1 = res.data.data.data;

				}
			},
			async getCommissionInfo() {
				let res = await $request('commissionInfo', {});

				if (res.data.code == 200) {
					this.commissionInfo = res.data.data;
					// console.log(res, this.commissionInfo, '---')
				}
			},
			async getTodayGameRank() {
				let arr = [
					{
						"player_id": 15,
						"nickname": "me",
						"avatar": this.userInfo.avatar,
						// "total_game": 3,
						"rank": 1,
					},
					{
						"player_id": 15,
						"nickname": "Number Two",
						"avatar": "",
						// "total_game": 2,
						"rank": 2,
					},
					{
						"player_id": 15,
						"nickname": "Number Three",
						"avatar": "",
						"rank": 3,
					}
				]
				let res = await $request('todayGameRank', {});
				
				if (res.data.code == 200) {
					
					if (res.data.data.list.length === 0) {
						res.data.data.list.push(...arr)
					}else if(res.data.data.list.length === 1){
						res.data.data.list.push(arr[1])
						res.data.data.list.push(arr[2])
					}else if(res.data.data.list.length === 2){
						res.data.data.list.push(arr[2])
					}
					console.log(res.data.data.list,'1111111111111111111')
					this.paiList = res.data.data.list;
					this.userInfoData = res.data.data.user_info;

				}
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");

	page {
		height: 100%;
		background: #000 url('../../static/team_bk.png') no-repeat 100% -50% /cover;
	}

	.team {
		.top-page {
			padding: 42rpx;

			.page-name {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;

				.tit {
					margin-top: 8rpx;
					flex-grow: 1;
					font-weight: 600;
					font-size: 35rpx;
					color: #BBBBBB;
					line-height: 1.4;
				}

				.img {
					flex-shrink: 0;
					width: 115rpx;

					.pic {
						width: 100%;
					}
				}
			}

			.info-box {
				margin-top: -20rpx;
				border-radius: 35rpx;
				padding: 35rpx 38rpx;
				background-color: rgba(0, 0, 0, 0.4);
				box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235,235,245,0.302);
				.num-box {
					display: flex;
					align-items: center;

					.icon-num {
						flex-grow: 1;
						display: flex;
						align-items: center;

						.icon {
							width: 70rpx;
							flex-shrink: 0;

							.pic {
								width: 100%;
							}
						}

						.num {
							padding-left: 20rpx;
							flex-grow: 1;

							text {
								font-weight: 500;
								font-size: 54rpx;
								color: #EEEEEE;
								line-height: 1.4;
								position: relative;
								max-width: 100%;

								.wen {
									position: absolute;
									right: -10rpx;
									top: 0;
									transform: translateX(100%);

									border-radius: 50%;
									color: #000;
									background-color: #999999;
									width: 24rpx;
									height: 24rpx;
									font-size: 14rpx;

									display: flex;
									align-items: center;
									justify-content: center;
								}
							}
						}
					}

					.copy-icon {
						flex-shrink: 0;
						width: 26rpx;

						.pic {
							width: 100%;
						}
					}
				}

				.desc {
					margin-top: 14rpx;
					font-weight: 350;
					font-size: 21rpx;
					color: #FFFFFF;
					line-height: 1.4;
					text-decoration-line: underline;
				}

				.btn-box {
					margin-top: 28rpx;
					border-radius: 44rpx;
					border: 2rpx solid #333333;
					padding: 14rpx;
					background-color: #222;
					text-align: center;
					font-weight: 500;
					font-size: 32rpx;
					color: #CCCCCC;
					line-height: 1.28;
				}
			}

			.storage-total {
				padding: 300rpx 0 68rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				margin-bottom: 45rpx;

				.img {
					width: 60vw;

					.pic {
						width: 100%;
					}
				}

				.total-list {
					position: absolute;
					top: 128rpx;
					left: 0;
					right: 0;
					bottom: 0;

					.total-num {
						position: absolute;
						left: 0;
						bottom: 0;

						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;

						&:first-child {
							top: 0;
							left: 50%;
							bottom: auto;
							transform: translateX(-50%);
						}

						&:last-child {
							right: 0;
							left: auto;
						}

						.num-box {
							display: flex;
							align-items: flex-end;

							.icon {
								width: 28rpx;

								.pic {
									width: 100%;
								}
							}

							.num {
								font-weight: 500;
								font-size: 56rpx;
								color: #EEEEEE;
								line-height: 1.4;
							}
						}

						.desc {
							color: #BBBBBB;
							text-align: center;

							.desc-1 {
								font-size: 21rpx;
							}

							.desc-2 {
								font-size: 28rpx;
							}
						}
					}
				}
			}

			.record {
				width: 100%;

				.header {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.name {
						display: flex;
						flex-direction: row;
						align-items: center;
						color: #EEEEEE;
						font-size: 38rpx;

						image {
							width: 82rpx;
						}
					}

					.wen {
						width: 26rpx;

						image {
							width: 100%;
						}
					}
				}

				.record-list {
					width: 666rpx;
					// height: 368rpx;
					background: linear-gradient(146deg, rgba(68, 68, 68, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%);
					box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84, 84, 84, 0.2118);
					border-radius: 28rpx 28rpx 28rpx 28rpx;
					border: 2rpx solid rgba(102, 102, 102, 0.5);
					box-sizing: border-box;
					padding: 17rpx 38rpx;
					margin-bottom: 86rpx;

					.record-list-header,
					.item {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 17rpx;

						view {
							display: flex;
							justify-content: center;
							align-items: center;
							color: #666666;
							font-size: 24rpx;
						}

						.time {
							width: 15%;
							// overflow: hidden;
						}

						.user-name {
							width: 40%;
						}

						.status {
							width: 30%;
						}

						.reward {
							width: 15%;
						}
					}

					.item {}
				}

				.record-btn {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 31rpx;

					view {
						width: 526rpx;
						height: 88rpx;
						background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
						border-radius: 44rpx 44rpx 44rpx 44rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #000000;
						font-size: 31rpx;
					}
				}
			}
		}

		.hr {
			width: 100%;
			height: 1px;
			// background: red;
			border-bottom: 1ps dashed #000000;
			margin-bottom: 98rpx;
		}

		.count {
			width: 757rpx;
			// height: 193rpx;
			background: linear-gradient(228deg, #000000 0%, #292734 100%);
			border-radius: 53rpx;
			border: 1rpx solid #454545;
			padding-bottom: 17rpx;
			margin-bottom: 45rpx;

			.tab {

				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 24rpx 31rpx 24rpx 31rpx;
				margin-bottom: 33rpx;

				.item {
					width: 50%;
					color: #FFFFFF;
					font-size: 31rpx;
				}

				.active {
					font-weight: 600;
				}
			}

			.me {
				margin: 0 auto;
				width: 666rpx;
				height: 70rpx;
				background: #282828;
				border-radius: 25rpx;
				border: 2rpx solid rgba(68, 68, 68, 0.5);
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 0 38rpx;

				.left {
					display: flex;
					flex-direction: row;
					align-items: center;

					.num {
						color: #86909C;
						font-size: 30rpx;
						margin-right: 17rpx;
					}

					.logo {
						width: 52rpx;
						height: 52rpx;
						border-radius: 50%;
						margin-right: 17rpx;

						image {
							width: 52rpx;
							height: 52rpx;
							border-radius: 50%;
							margin-right: 17rpx;
						}
					}

					.name {
						color: #D8D8D8;
						font-size: 28rpx;
					}
				}

				.num1 {
					color: #D8D8D8;
					font-size: 28rpx;
					font-weight: 600;
				}
			}
		}

		.pai {
			width: 100%;
			padding-bottom: 150rpx;

			.header {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 160rpx;

				.item {
					position: relative;
					width: 100rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0 45rpx;

					.logo {
						width: 98rpx;
						height: 98rpx;

						image {
							width: 100%;
							height: 100%;
							border-radius: 50%;
							margin-bottom: 21rpx;
						}

						.text {
							display: flex;
							flex-direction: column;
							align-items: center;

							.name {
								color: white;
								font-size: 31rpx;
								margin-bottom: 7rpx;
							}

							.num {
								color: #FFFFFF;
								font-size: 26rpx;
							}
						}
					}

					.fixed {
						width: 100%;
						position: absolute;
						top: -44rpx;
						left: 0;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.two-logo,
					.one-logo,
					.three-logo {
						width: 78rpx;
					}
				}

				.two {
					margin-top: 78rpx;
				}

				.three {
					margin-top: 78rpx;
				}
			}

			.pai-list {
				box-sizing: border-box;
				padding: 0 42rpx;

				.item {
					width: 666rpx;
					// height: 70rpx;
					background: linear-gradient(146deg, rgba(68, 68, 68, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%);
					box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84, 84, 84, 0.2118);
					border-radius: 25rpx 25rpx 25rpx 25rpx;
					box-sizing: border-box;
					padding: 8rpx 38rpx;
					margin-bottom: 35rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.left {
						display: flex;
						flex-direction: row;
						align-items: center;

						.index {
							color: #86909C;
							font-size: 30rpx;
							margin-right: 17rpx;
						}

						.logo {
							width: 52rpx;
							height: 52rpx;
							margin-right: 17rpx;

							image {
								width: 100%;
							}
						}

						.name {
							color: #D8D8D8;
							font-size: 28rpx;
						}
					}

					.num {
						color: #D8D8D8;
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>