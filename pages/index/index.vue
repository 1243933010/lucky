<template>
	<view class="page-container" id="pageId">
		<view class="page-header">
			<view class="logo1" @click="goUrl('/pages/me/recharge')">
				<image src="../../static/me_icon.png" mode="widthFix"></image>
				<text>{{teamInfoData.balance*1}}</text>
				<view class="image">
					<text>+</text>
				</view>
				<!-- <image class="img" src="../../static/logo.png" mode="widthFix"></image> -->
			</view>
			<view class="setting" @click="openDialog">
				<view class=""></view>
				<view class=""></view>
			</view>
		</view>
		<!-- <view class="" style="color: white;" @click="goUrl">
			跳转个人中心临时地址
		</view> -->
		<view class="invite">
			<view class="container">
				<view class="people">
					<view class="left">
						<image src="../../static/people.png" mode="widthFix"></image>
						<text>{{teamInfoData.team_count}}</text>
					</view>
					<view class="right">
						<view class="btn" @click="$refs.invitePopup.open()">
							<image src="../../static/invite.png" mode="widthFix"></image>
							<text>invitation</text>
						</view>
					</view>
				</view>
				<view class="team">
					<view class="posi">
						<view class="box">
							<view class="item" v-if="teamInfoData.today_invite_list&&teamInfoData.today_invite_list[0]">
								<view class="add">
									<image v-if="teamInfoData.today_invite_list[0]"
										:src="teamInfoData.today_invite_list[0].avatar" mode="widthFix"></image>
									<image v-if="!teamInfoData.today_invite_list[0]" src="../../static/add.png"
										mode="widthFix"></image>
								
								</view>
								<view class="name" >
									<text v-if="teamInfoData.today_invite_list[0]">{{teamInfoData.today_invite_list[0].nickname}}</text>
								    <!-- <text>11111112121212</text> -->
								</view>
							</view>
							<view class="item" v-if="teamInfoData.today_invite_list&&teamInfoData.today_invite_list[1]">
							<view class="add">
								<image v-if="teamInfoData.today_invite_list[1]"
									:src="teamInfoData.today_invite_list[1].avatar" mode="widthFix"></image>
								<image v-if="!teamInfoData.today_invite_list[1]" src="../../static/add.png"
									mode="widthFix"></image>
							</view>
							<view class="name" >
								<text v-if="teamInfoData.today_invite_list[1]">{{teamInfoData.today_invite_list[0].nickname}}</text>
							    <!-- <text>11111112121212</text> -->
							</view>
							</view>
							<view class="item" v-if="teamInfoData.today_invite_list&&teamInfoData.today_invite_list[2]">
							<view class="add">
								<image v-if="teamInfoData.today_invite_list[2]"
									:src="teamInfoData.today_invite_list[2].avatar" mode="widthFix"></image>
								<image v-if="!teamInfoData.today_invite_list[2]" src="../../static/add.png"
									mode="widthFix"></image>
							</view>
							<view class="name" >
								<text v-if="teamInfoData.today_invite_list[2]">{{teamInfoData.today_invite_list[0].nickname}}</text>
							    <!-- <text>11111112121212</text> -->
							</view>
							</view>
							<view class="item" v-if="teamInfoData.today_invite_list&&teamInfoData.today_invite_list[3]">
							<view class="add">
								<image v-if="teamInfoData.today_invite_list[3]"
									:src="teamInfoData.today_invite_list[3].avatar" mode="widthFix"></image>
								<image v-if="!teamInfoData.today_invite_list[3]" src="../../static/add.png"
									mode="widthFix"></image>
							</view>
							<view class="name" >
								<text v-if="teamInfoData.today_invite_list[3]">{{teamInfoData.today_invite_list[0].nickname}}</text>
							    <!-- <text>11111112121212</text> -->
							</view>
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
							<view class="right" @click="goUrl('/pages/team/team')">
								<text>{{teamInfoData.today_invite_count}}</text>
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
					<text>{{indexInfo.system_index_text_1}}</text>
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
				</view>
				<view class="content">
					<view class="" @click="amountClick(item,index)" :class="amountIndex==index?'con-item':'con-item1'"
						v-for="(item,index) in amountList" :key="index">
						<image v-if="amountIndex==index" src="../../static/u1.png" mode="widthFix"></image>
						<image v-if="amountIndex!==index" src="../../static/u2.png" mode="widthFix"></image>
						<text>{{item}}</text>
					</view>
					<!-- <view class="con-item">
						<image src="../../static/u1.png" mode="widthFix"></image>
						<text>10.00</text>
					</view>
					<view class="con-item1">
						<image src="../../static/u2.png" mode="widthFix"></image>
						<text>10.00</text>
					</view> -->
				</view>
			</view>
		</view>
		<view class="uni-margin-wrap" style="margin-bottom: 173rpx;">
			<!-- 轮播图 -->
			<swiper class="banner-container" :indicator-dots="false" :autoplay="false" :circular="false"
				previous-margin="120rpx" next-margin="120rpx" @change="swipterChange" :current="swipterActive">
				<block v-for="(item,index) in swiperData" :key="index">
					<swiper-item class="banner-item">
						<view class="banner-box" @click="openRoom(item,index)"
							:class="swipterActive==index-1?'previous':swipterActive==index+1?'next':''">
							<image mode="widthFix" class="banner-img" :src="filesUrl1+item.logo"></image>
							<view class="posi-box">
								<view class="posi-content">
									<view class="content-left">
										<view class="usdt">
											<text class="num">{{item.bet_amount*1}}</text>
											<text class="label">USDT</text>
										</view>
										<view class="wen">
											<text>Online Users</text>
										</view>
									</view>
									<view class="content-right">
										<view class="image">
											<image src="../../static/right_arrow.png" mode="widthFix"></image>
										</view>
										<view class="peo">
											<text>({{item.virtual_initial_online_count}})</text>
										</view>
									</view>
								</view>
							</view>
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
				<view class="right" @click="defaultClick">
					<view class="text">
						<view class="title">
							<text>Random Lucky Airdrop，Single drop can yield up to</text>
						</view>
						<view class="label">
							<text>100 times USDT.</text>
						</view>
					</view>
					<view class="bottom">
						<text>It has fallen today <span style="color: #2cd7b5;">03</span>times</text>
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="hr3">
			<image src="../../static/u4.png" mode="widthFix"></image>
		</view>
		<view class="Primary">
			<view class="title">
				<text>friend'S</text>
			</view>
			<view class="label">
				<text>{{indexInfo.system_index_text_2}}</text>
			</view>
		</view>
		<view class="create">
			<view class="left" @click="createRoom">
				<image src="../../static/u5.png" mode="widthFix"></image>
			</view>
			<view class="right">
				<view class="join">
					<image src="../../static/u6.png" mode="widthFix"></image>
				</view>
				<view class="btn" @click="friendJoin">
					<view class="">
						<text>+</text>
					</view>
				</view>
			</view>
		</view>
		<view class="h4"></view>
		<view class="faq">
			<view class="title">
				<text>FAQS</text>
				<image src="../../static/right_arrow.png" mode="widthFix"></image>
			</view>
			<view class="faq-box">
				<view class="list">
					<view class="item" :class="item.show?'show':'hide'" v-for="(item,index) in faqList" :key="index"
						@click="goFaq(item)">
						<text style="color: white;">{{item.question}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="foot">
			<view class="logo">
				<text>LOGO</text>
			</view>
			<view class="bottom">
				<view class="link">
					<text>Twitter</text><text>/</text>
					<text>Tele.</text><text>/</text>
					<text>Disco.</text><text>/</text>
					<text>Git.</text>
				</view>
				<view class="img">
					<image src="../../static/u7.png" mode="widthFix"></image>
				</view>
			</view>
		</view> -->
		  <!-- v-if="pageScroll<pageScrollBottom" -->
	<view style="position: fixed;width: 100%;bottom: 0;"  v-if="pageScrollBool">
		<view style="padding: 9rpx 0 35rpx 0;">
			<DefaultFooter :fiexed="false"  @share="$refs.invitePopup.open()"  />
		</view>
	</view>
	<view style="padding: 9rpx 0 35rpx 0;">
		<DefaultFooter :fiexed="false" @share="$refs.invitePopup.open()" />
	</view>
		<FastJoin ref="fastJoin" />
		<TabPopup ref="tabPopup" />
		<InvitePopup ref="invitePopup"/>
		<!-- <FriendJoin ref="friendJoin" /> -->
	</view>
</template>

<script>
	import {
		$request,
		$totast,
		filesUrl
	} from "@/utils/request";
	import FastJoin from './components/fastJoin.vue';
	import FriendJoin from './components/friendJoin.vue';
	import TabPopup from '../../components/tabPopup.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	import InvitePopup from '@/pages/team/components/InvitePopup.vue';
	export default {
		components: {
			FastJoin,
			FriendJoin,
			TabPopup,
			DefaultFooter,
			InvitePopup
		},
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
				swipterActive: 0,
				faqList: [],
				faqListCopy: [],
				colorList: ["#3e92cc", "#f2a91f", "#a612ee", "#07c34d", "#56d894", "#ffa4bb", "#e8cd22", "#4f32cc",
					"#ffcc11", "#0e9c5a"
				],
				indexInfo: {},
				teamInfoData: {},
				userInfo: {},
				amountList: [],
				amountIndex: 0,
				pageScroll: 0,
				pageScrollBool:true

				// roomList:[]
			}
		},
		computed: {
			filesUrl1() {
				return filesUrl
			}
		},
		onLoad() {
			// this.faqList.forEach((val, ind) => {
			// 	val.color = this.colorList[Math.min(10, this.getRandomInt(1, 10))]
			// })
			// console.log(Math.min(10, this.getRandomInt(1, 10)))
			this.startToggle();
			this.getFaqs();
			this.indexConfig();
			this.teamInfo();
			this.getAmountList('1');

		},
		onReachBottom(){
			this.pageScrollBool = false;
		},
		onPageScroll(e) {
			// console.log(e)
			if(this.pageScroll> e.scrollTop){
				this.pageScrollBool = true;
			}else{
				this.pageScrollBool = false;
			}
			this.pageScroll = e.scrollTop;
		},
		methods: {
			async defaultClick(){
				let res = await $request('joinSystem', {
					room_id: this.indexInfo.room_id_10u
				});
				// console.log(res)
				if (res.data.code == 200) {
					
					uni.removeStorageSync('loopNum');
					uni.removeStorageSync('loopArr');
					uni.removeStorageSync('newLoopBool');
					uni.navigateTo({
						url: `/pages/index/hall/hall?id=${this.indexInfo.room_id_10u}&type=${1}&bet_amount=${10}`
					})
					return
				}
				$totast(res.data.message)
			},
			goUrl(url){
				uni.navigateTo({
					url
				})
			},
			async getRoomList(info) {
				let res = await $request('roomList', {
					...info
				});
				// console.log(res)
				if (res.data.code == 200) {
					this.swiperData = res.data.data;
					this.swipterActive = 0;
				}
			},
			async amountClick(item, index) {
				this.amountIndex = index;
				let type = '';
				if (this.index == 0) {
					type = '1'
				} else {
					type = '5'
				}
				this.getRoomList({
					amount: this.amountList[this.amountIndex],
					type
				})
			},
			async getAmountList(type) {
				let res = await $request('amountList', {
					type
				});
				// console.log(res)
				if (res.data.code == 200) {
					this.amountList = res.data.data.amount;
					this.amountIndex = 0;
					this.getRoomList({
						amount: this.amountList[0],
						type
					})
				}
			},
			async getUser() {
				let res = await $request('userInfo', {});
				// console.log(res)
				if (res.data.code == 200) {
					this.userInfo = res.data.data;
				}
			},
			async teamInfo() {
				let res = await $request('teamInfo', {});
				console.log(res)
				if (res.data.code == 200) {
					this.teamInfoData = res.data.data;
				}
			},
			async indexConfig() {
				let res = await $request('indexConfig', {});
				// console.log(res)
				if (res.data.code == 200) {
					this.indexInfo = res.data.data;
				}
			},
			openDialog() {
				this.$refs.tabPopup.open()
			},
			async openRoom(item, index) {
				// this.$refs.fastJoin.open()
				// console.log(item)
				// return
				// this.index = ind;
				let type = '';
				if (this.index == 0) {
					type = '1'
				} else {
					type = '5'
				}
				let res = await $request('joinSystem', {
					room_id: item.id
				});
				// console.log(res)
				if (res.data.code == 200) {
					// this.indexInfo = res.data.data;
					//后面在跳转这个页面得按钮内调用
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
			friendJoin() {
				// this.$refs.friendJoin.open()
				this.$refs.fastJoin.open()
			},
			createRoom() {
				uni.navigateTo({
					url: '/pages/index/room/room'
				})
			},
			changeTab(ind) {
				this.index = ind;
				let type = '';
				if (ind == 0) {
					type = '1'
				} else {
					type = '5'
				}

				this.getAmountList(type)
			},
			swipterChange(e) {
				this.swipterActive = e.detail.current;
			},
		startToggle() {
		    if (this.toggleInterval) {
		        clearInterval(this.toggleInterval);
		    }
		
		    // 每隔 2 秒执行一次
		    this.toggleInterval = setInterval(() => {
		        // 计算要切换状态的元素个数（至少1，最多3个）
		        const count = this.getRandomInt(1, Math.min(3, this.faqListCopy.length));
		        // 随机获取要切换的元素
		        const itemsToToggle = this.getRandomElements(this.faqListCopy, count);
		// console.log(itemsToToggle)
		        // 将选中的元素的 show 属性设置为 true
		        itemsToToggle.forEach(item => {
		            item.show = true;
		        });
				this.faqList = itemsToToggle
		        // 你可以在这里添加额外的逻辑，例如在下次切换前重置某些元素的 show 属性
		    }, 2000);
		},
		
		stopToggle() {
		    if (this.toggleInterval) {
		        clearInterval(this.toggleInterval);
		        this.toggleInterval = null;
		    }
		},
		
		getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		
		getRandomElements(arr, count) {
		    // 确保 count 不超过数组的长度
		    if (count > arr.length) {
		        count = arr.length;
		    }
		
		    // 使用 Fisher-Yates 算法打乱数组
		    const shuffled = arr.slice(); // 复制数组以免修改原数组
		    for (let i = shuffled.length - 1; i > 0; i--) {
		        const j = Math.floor(Math.random() * (i + 1));
		        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 交换元素
		    }
		
		    // 取前 count 个元素
		    return shuffled.slice(0, count);
		},
		async getFaqs() {
				let res = await $request('faq', {});
				// console.log(res)
				if (res.data.code == 200) {
					// res.data.data.list.push({question:'ces1'})
					// res.data.data.list.push({question:'ces2'})
					res.data.data.list.forEach((val) => {
						val.show = false;
					})
					this.faqList = res.data.data.list;
					this.faqListCopy = res.data.data.list;
					
				}
			},
			goFaq() {
				uni.navigateTo({
					url: '/pages/me/fqas'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");

	page {
		height: 100%;
		// background-color: #23222d;
		// background: linear-gradient(to bottom, #23212c,#040405);
		// background: linear-gradient( 141deg, #292734 0%, #000000 100%);
		// background: linear-gradient(to bottom, #ff7e5f, #feb47b, #86a8e7);

		// background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
	}

	.page-container {
		background: linear-gradient(141deg, #292734 0%, #000000 100%);
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
		position: relative;

		.posi-box {
			position: absolute;
			width: 100%;
			bottom: 0;
			left: 5%;

			.posi-content {
				width: 455rpx;
				margin: 0 auto;
				height: 159rpx;
				background: rgba(255, 255, 255, 0.3);
				border-radius: 28rpx 28rpx 28rpx 28rpx;
				.flex-space-between;
				box-sizing: border-box;
				padding: 0rpx 22rpx;

				.content-left {
					width: 90%;
					height: 100%;
					padding-bottom: 22rpx;
					// .flex-column;
					display: flex;
					flex-direction: column;

					// font-size: 87rpx;
					.usdt {
						height: 100%;
						font-size: 67rpx;
						font-weight: 600;
						background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
						-webkit-background-clip: text;
						background-clip: text;
						color: transparent;

						.num {
							line-height: 0;
						}

						.label {
							font-size: 31rpx;
						}
					}

					.wen {
						color: #CCCCCC;
						font-size: 21rpx;
					}
				}

				.content-right {
					height: 100%;
					display: flex;
					// flex-grow: 1;
					flex-direction: column;
					justify-content: space-between;
					box-sizing: border-box;
					align-self: flex-end;
					// justify-content: flex-end;
					padding: 22rpx 0;

					.image {
						width: 100%;
						display: flex;
						flex-direction: row-reverse;

						image {
							width: 15rpx;

						}
					}

					.peo {
						width: 100%;
						display: flex;
						flex-direction: row-reverse;

						text {
							width: 100%;
							color: #EEEEEE;
							font-size: 28rpx;

						}
					}

				}
			}
		}
	}

	.previous {
		transform: rotate(10deg) !important;
		transition: transform 0.7s ease;
		position: absolute;
		right: -72rpx;
		// padding-top: 20rpx;
		// padding-right: 120rpx;
	}

	.next {
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
			.image{
				width: 32rpx;
				height: 32rpx;
				background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
				box-sizing: border-box;
				// border: 1rpx solid #DDDDDD;
				// .flex-center;
				border-radius: 28rpx;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				padding-left: 13rpx;
				padding-bottom: 7rpx;
				text{
					// width: 100%;
					color: #222222;
					font-size: 36rpx;
					font-weight: 600;
				}
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
						.name{
							width: 69rpx;
							color: white;
							font-size: 24rpx;
							text-overflow:ellipsis; 
							white-space: nowrap;
							overflow: hidden;
							// .vertical(1)
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

	.Falling {
		margin-bottom: 69rpx;

		.container {
			width: 680rpx;
			// height: 208rpx;
			margin: 0 auto;
			background: linear-gradient(146deg, #555555 0%, #000000 100%);
			box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84, 84, 84, 0.2118);
			border-radius: 28rpx;
			border: 2rpx solid #666666;
			box-sizing: border-box;
			padding: 22rpx 26rpx;
			.flex-space-between;

			.logo {
				width: 142rpx;
				margin-right: 20rpx;

				image {
					width: 100%;
				}
			}

			.right {
				width: calc(100% - 71rpx);
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex-grow: 1;

				.text {
					display: flex;
					flex-direction: column;
					margin-bottom: 20rpx;

					.title {
						color: #FFFFFF;
						font-size: 35rpx;
						margin-bottom: 10rpx;
					}

					.label {
						background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
						-webkit-background-clip: text;
						background-clip: text;
						color: transparent;
						font-size: 35rpx;
					}
				}

				.bottom {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;

					text {
						color: #AAAAAA;
						font-size: 27rpx;
						.flex-center;
						line-height: 1;
					}

					image {
						width: 11rpx;
					}
				}
			}
		}
	}

	.hr3 {
		width: 100%;
		// border-top: 1px dashed #38D1DC;
		// border-bottom: 1px dashed #38D1DC;
		margin-bottom: 95rpx;

		image {
			width: 100%;
		}
	}

	.Primary {
		width: 100%;
		box-sizing: border-box;
		padding: 0 38rpx;
		margin-bottom: 100rpx;

		.title {
			color: white;
			font-size: 69rpx;
			letter-spacing: 0rpx;
			font-weight: 600;
			margin-bottom: 30rpx;
			// font-weight: ;
		}

		.label {
			color: #C2C2C2;
			font-size: 24rpx;
			line-height: 2;
		}
	}

	.create {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-bottom: 53rpx;

		.left {
			width: 502rpx;

			image {
				width: 100%;
			}
		}

		.right {
			.flex-column;

			.join {
				width: 130rpx;

				image {
					width: 100%;
				}
			}

			.btn {
				width: 140rpx;
				height: 294rpx;
				border-radius: 87rpx;

				// border: 9rpx solid ;
				background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
				.flex-center;

				view {
					width: 131rpx;
					height: 285rpx;
					background-color: #030304;
					border-radius: 87rpx;
					.flex-center;

					text {
						font-size: 80rpx;
						color: white;
						font-weight: 600;
					}

					// border-radius: 87rpx;
				}
			}
		}
	}

	.h4 {
		width: 100%;
		height: 1.7px;
		background-color: #333333;
		margin-bottom: 65rpx;
	}

	.faq {
		box-sizing: border-box;
		// padding: 0 38rpx;
		padding: 0 38rpx 120rpx 38rpx;
		// margin-bottom: 118rpx;

		.title {
			font-size: 69rpx;
			color: white;
			font-weight: 600;
			line-height: 1;
			margin-bottom: 98rpx;
			.flex-space-between;

			image {
				width: 12rpx;
			}
		}

		.list {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			min-height: 150rpx;
			.item {
				background: #1D1B26;
				// background: red;
				border-radius: 69rpx;
				margin-bottom: 38rpx;
				margin-right: 7rpx;
				.flex-center;
				height: 71rpx;
				padding: 0rpx 75rpx;
				position: relative;
				transition: opacity 0.7s ease, visibility 0.7s ease;
			}

			.show {
				opacity: 1;
				visibility: visible;
				position: relative;
			}

			.hide {
				opacity: 0;
				visibility: hidden;
				position: absolute;
			}
		}
	}

	.foot {
		box-sizing: border-box;
		padding: 0 36rpx 60rpx 52rpx;

		.logo {
			color: white;
			font-size: 48rpx;
		}

		.bottom {
			font-size: 27rpx;
			color: white;
			.flex-space-between;

			.link {
				.flex-direction;

				text {}
			}

			.img {
				width: 123rpx;

				image {
					width: 100%;
				}
			}
		}
	}
</style>