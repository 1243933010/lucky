<template>
	<view  class="" :class="bkUlr">
		<swiper style="height: 100vh;" @change="switchSystemRoom" :indicator-dots="false" :autoplay="false" >
			<swiper-item v-for="(item,index) in amountList" :key="index">
				<view class="page-container">
					<view class="hell">
						<view class="user">
							<view class="user-left">
								<view class="logo">
									<image @click="changeImg"
										:src="userInfo.avatar?filesUrl1+userInfo.avatar:'../../../static/logo.png'" mode="widthFix">
									</image>
								</view>
								<view class="msg">
									<view class="name">
										<text>{{userInfo.nickname}}</text>
									</view>
									<view class="price">
										<image src="../../../static/me_icon.png" mode="widthFix"></image>
										<text>{{userInfo.balance}}</text>
										<view class="add">
											<text>+</text>
										</view>
									</view>
								</view>
							</view>
							<view class="user-right">
								<image @click="share" class="share" src="../../../static/share.png" mode="widthFix"></image>
								<image @click="singOut" class="sing-out" src="../../../static/sign_out.png" mode="widthFix"></image>
							</view>
						</view>
						<view class="notice">
							<view class="box">
								<text>{{roomDetail.game_help}}</text>
							</view>
				
						</view>
						<view class="people">
							<view class="box">
								<view class="left">
									<image src="../../../static/hell_icon1.png" mode="widthFix"></image>
									<text>{{roomInfo.online}}</text>
								</view>
								<view class="right">
									<view class=""></view>
									<text>{{roomInfo.online}}people are ready</text>
								</view>
							</view>
						</view>
					</view>
					<view class="usdt">
						<view class="radio">
							<view class="box" :style="{'left':(377-amountIndex*128)+'rpx'}">
								<!-- :class="index==uActive?'uActive':''" -->
								<view class="item"  v-for="(item,index) in amountList" :key="index">
									<view class="no-active" v-if="index!==amountIndex">
										<view class="">
											<text>{{item.bet_amount*1}}</text>
										</view>
									</view>
									<view class="active" v-if="index==amountIndex">
										<text>{{item.bet_amount*1}}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="border">
							<view class="box">
								<view class="item" @click="borderActive=index" v-for="(item,index) in uList" :key="index">
									<view class="no-active" v-if="index!==borderActive">
										<view class="">
											<text>{{item}}X</text>
										</view>
									</view>
									<view class="active" v-if="index==borderActive">
										<view class="">
											<text>{{item}}X</text>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="submit">
							<view class="box">
								<view class="left"></view>
								<view class="center" @click="submitClick">
									<text>{{btnText}}</text>
								</view>
								<view class="right">
									<image @click="$refs.textCom.open()" src="../../../static/hell_icon4.png" mode="widthFix"></image>
								</view>
							</view>
						</view>
						<view class="hr">
							<view class="box">
								<text>Automatic betting</text>
							</view>
						</view>
					</view>
				
					<view class="posi">
						<view class="box2">
							<view class="item" v-for="(item,index) in roomInfo.messages">
								<text>{{item}}</text>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		 <Popup ref="popup" />
		 <ShareCom ref="shareCom" />
		 <TextCom ref="textCom" />
	</view>
</template>

<script>
	import Popup from './components/dialog.vue';
	import ShareCom from './components/share.vue';
	import TextCom from './components/text.vue';
	import {
		$request,
		$totast,
		filesUrl
	} from "@/utils/request";
	export default {
		components:{Popup,ShareCom,TextCom},
		data() {
			return {
				roomType:'',
				amountIndex:0,
				amountList:[],
				roomId: '',
				roomDetail: {},
				userInfo: {},
				uList: ['2', '5', '10'],
				uActive: 0,
				borderList: [],
				borderActive: null,
				roomInfo: {},
				roomStatus:{},
				btnText:'Preparation for betting',
				testNum:0
			};
		},
		computed: {
			filesUrl1() {
				return filesUrl
			},
			bkUlr(){
				if(this.amountList.length==0){
					return 'bk0'
				}
				if(['10','20'].includes(this.amountList[this.amountIndex].bet_amount)){
					return 'bk1'
				}else if(['50','100'].includes(this.amountList[this.amountIndex].bet_amount)){
					return 'bk2'
				}else{
					return 'bk0'
				}
			}
		},
		onLoad(e) {
			this.getUser();
			if (e.id) {
				this.roomId = e.id
			}
			if(e.type){
				this.roomType = e.type
			}
			// else {
			// 	this.roomId = '1'
			// }
			this.getRoomDetail(this.roomId)
		},
		mounted() {
			// try{
			// 	this.$refs.shareCom.open(null)
			// }catch(e){
			// 	//TODO handle the exception
			// }
			//后面在跳转这个页面得按钮内调用
			// uni.removeStorageSync('loopNum');
			// uni.removeStorageSync('loopArr');
			// uni.removeStorageSync('newLoopBool');
			this.startPolling();
			this.startPolling1();
			// this.getAmountList()
			this.getAmountListInRoom()
			
		},
		beforeDestroy() {
			this.stopPolling();
			this.stopPolling1();
			
		},
		methods: {
			listenNum(info){
				console.log(info)
				let loopNum = uni.getStorageSync('loopNum')
				let loopArr= uni.getStorageSync('loopArr')
				if(loopNum===3){
					console.log('要被踢走了')
					// return
				}
				if(!loopArr){
					loopArr = [];
				}
				if(!loopNum&&loopNum!==0){
					loopNum = 0;
				}
				if(info.status!==25){
					// uni.setStorageSync('newLoopBool',true);
					if(!loopArr.includes(info.status)){
						loopArr.push(info.status)
						uni.setStorageSync('loopArr',loopArr);
					}else{
						
					}
					
				}else{
					if(loopArr.length>0){
						loopNum++;
						uni.setStorageSync('loopNum',loopNum);
						uni.setStorageSync('loopArr',[]);
					}
					
				}
				// console.log(loopNum)
			},
			share(){
				let info = {
					detail:this.roomDetail,
					info:this.roomInfo
				}
				this.$refs.shareCom.open(info)
				
			},
			startCountdown(time) {
				// 每秒更新一次倒计时
				this.intervalId = setInterval(() => {
					time -= 1;
			
					// 更新倒计时显示
					this.btnText = time;
					// 当倒计时为零或小于零时，清除定时器
					if (time <= 0) {
						this.clearCountdown();
						this.btnText = "";
					}
				}, 1000);
			
				// 初始化时马上更新一次倒计时显示
				this.btnText = time;
			},
			clearCountdown() {
				if (this.intervalId) {
					clearInterval(this.intervalId);
					this.intervalId = null;
				}
			},
			async startPolling() {
				// 启动轮询，每隔 1 秒调用一次
				this.polling = true;
				while (this.polling) {
					await this.getRoomInfo(); // 等待请求返回
					await this.sleep(2000); // 等待 1 秒后再继续轮询
				}
			},
			async submitClick(){
				if(this.roomStatus.status==0||(this.roomStatus.is_join==0&&this.roomStatus.status==5)){
					this.gameJoin()
				}
				
			},
			async gameJoin(){
				let obj = {is_multiple: ''};
				
				if(this.borderActive==null){
					obj.is_multiple = 0;
					// obj.multiple = ''
				}else{
					obj.is_multiple = 1;
					obj.multiple = this.borderActive;
				}
				let res = await $request('gameJoin',obj);
				$totast(res.data.message)
				if(res.data.code==200){
					this.getRoomDetail(this.roomId)
				}
			},
			async singOut(){
				let res = await $request('roomLeave',{room_id: this.roomId});
				// console.log(res)
				$totast(res.data.message)
				if(res.data.code==200){
					setTimeout(()=>{
						let canNavBack = getCurrentPages()
						if( canNavBack && canNavBack.length>1) {  
						    uni.navigateBack() 
						} else {  
						    history.back();  
						}
					},1500) 
				}
			},
			
			async getAmountListInRoom(type){
				let res = await $request('amountListInRoom',{type:this.roomType});
				console.log(res)
				if(res.data.code==200){
							this.amountList = res.data.data;
							this.amountIndex = 0;
				}
			},
			
			async switchSystemRoom(e){
				console.log(e.detail.current)
				this.amountIndex = e.detail.current;
				let res = await $request('switchSystemRoom',{amount: this.amountList[this.amountIndex]});
				// console.log(res)
				if(res.data.code==200){
					// this.amountList = res.data.data.amount;
					// this.amountIndex = 0;
				}
			},
			async getRoomDetail(id) {
				let res = await $request('roomDetail', {
					id
				});
				// console.log(res)
				if (res.data.code == 200) {
					this.roomDetail = res.data.data;
					return
				}
				$totast(res.data.message)
			},
			async getUser() {
				let res = await $request('userInfo', {});
				if (res.data.code == 200) {
					this.userInfo = res.data.data;
					return
				}
				$totast(res.data.message)
			},
			async startPolling() {
				// 启动轮询，每隔 1 秒调用一次
				this.polling = true;
				while (this.polling) {
					await this.getRoomInfo(); // 等待请求返回
					await this.sleep(2000); // 等待 1 秒后再继续轮询
				}
			},
			async startPolling1() {
				// 启动轮询，每隔 1 秒调用一次
				this.polling1 = true;
				while (this.polling1) {
					await this.getGameStatus(); // 等待请求返回
					await this.sleep(2000); // 等待 1 秒后再继续轮询
				}
			},
			stopPolling() {
				// 停止轮询
				this.polling = false;
			},
			stopPolling1() {
				// 停止轮询
				this.polling1 = false;
			},
			sleep(ms) {
				return new Promise(resolve => setTimeout(resolve, ms));
			},
			async getRoomInfo() {
				let res = await $request('roomInfo', {
					room_id: this.roomId
				});
				// console.log(res)
				if (res.data.code == 200) {
					this.roomInfo = res.data.data;
					return
				}
				$totast(res.data.message)
			},
			async getGameStatus() {
				let res = await $request('gameStatus', {
					room_id: this.roomId
				});
				// console.log(res)
				if (res.data.code == 200) {
					// if(this.testNum===25){
					// 	this.testNum = -5;
					// }
					// res.data.data.status = this.testNum+=5
					this.roomStatus = res.data.data;
					this.listenNum(res.data.data)
					if(this.roomStatus.status==0){
						uni.hideLoading()
					}
					if(this.roomStatus.status==15){
						uni.showLoading()
					}
					if(this.roomStatus.status==20){
						uni.hideLoading()
						this.getGameResult();
						
					}
					if(this.roomStatus.status==25){
						uni.hideLoading()
						this.$refs.popup.close()
					}
					if(this.roomStatus.status==15){
						uni.showLoading()
					}
					if(this.roomStatus.status==5){
						// this.startCountdown()
						if(typeof this.btnText=='number'){
							return
						}
						uni.hideLoading()
						let end = new Date(this.roomStatus.lock_start_time).getTime();
						let start = new Date(this.roomStatus.countdown_start_time).getTime();
						let time =end/1000- start/1000;
						// console.log(end,start,time)
						this.startCountdown(time)
					}else{
						this.clearCountdown()
						this.btnText = 'Preparation for betting'
					}
					
					return
				}
				$totast(res.data.message)
			},
			async getGameResult(){
				let res = await $request('gameResult', {
					room_id: this.roomId
				});
				if(res.data.code==200){
					this.$refs.popup.open(res.data.data)
				}
				console.log(res)
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../static/default.less");

	page {
		height: 100vh;
		
	}
	.bk0{
		background: url('../../../static/hell_bk.png') no-repeat 100% 30% / cover;
	}
	.bk1{
		background: url('../../../static/hall_bk_1.png') no-repeat 100% 30% / cover;
	}
	.bk2{
		background: url('../../../static/hall_bk_2.png') no-repeat 100% 30% / cover;
	}
	.posi {
		position: fixed;
		bottom: 42rpx;
		left: 17rpx;
		max-height: 600rpx;
		overflow-y: auto;
		// overflow: hidden;
		z-index: -10;
		.box2 {
			// width: 150rpx;
			// .flex-column;
			display: flex;
			flex-direction: column;
			// align-items: center;
			.item {
				background: #0B0B0B;
				border-radius: 10rpx;
				color: #FFFFFF;
				font-size: 20rpx;
				box-sizing: border-box;
				padding: 13rpx 3rpx;
				margin-bottom: 15rpx;
			}
		}
	}

	.page-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
	}

	.hell {
		.user {
			.flex-space-between;
			box-sizing: border-box;
			padding: 64rpx 54rpx 0 54rpx;
			margin-bottom: 35rpx;

			.user-left {
				.flex-direction;

				.logo {
					width: 64rpx;
					height: 61rpx;
					margin-right: 10rpx;

					image {
						width: 100%;
						border-radius: 50%;
					}
				}

				.msg {
					display: flex;
					flex-direction: column;

					.name {
						color: #FFFFFF;
						font-size: 28rpx;
						margin-bottom: 4rpx;
					}

					.price {
						// .flex-direction;
						display: flex;
						flex-direction: row;
						align-items: center;

						// justify-content: flex-end;
						// align-self: flex-end;
						// align-items: flex-end;
						image {
							width: 39rpx;
							margin-right: 9rpx;
						}

						text {
							color: #FFFFFF;
							font-size: 24rpx;
							margin-right: 30rpx;
						}

						.add {
							width: 23rpx;
							height: 23rpx;
							border-radius: 50%;
							border: 1ps solid #00319A;
							.flex-center;
							color: #91FB14;
							font-size: 24rpx;
						}
					}
				}
			}

			.user-right {
				image {
					width: 55rpx;
					height: 55rpx;
					border-radius: 50%;
				}

				.share {
					margin-right: 29rpx;
				}
			}
		}

		.notice {
			box-sizing: border-box;
			// padding: 0rpx 51rpx 0 51rpx;
			width: calc(100% - 51rpx);
			height: 43rpx;
			margin: 0 auto;
			background: url('../../../static/hell_icon5.png') no-repeat 10% 100%/cover;
			margin-bottom: 32rpx;

			.box {
				width: 100%;
				height: 100%;
				.flex-center;
				color: #FFFFFF;
				font-size: 24rpx;
			}
		}

		.people {
			box-sizing: border-box;
			width: calc(100% - 63rpx);
			margin: 0 auto;

			.box {
				width: 100%;
				.flex-space-between;

				.left {
					.flex-direction;

					image {
						width: 35rpx;
						height: 32rpx;
						margin-right: 11rpx;
					}

					text {
						color: #FFFFFF;
						font-size: 26rpx;
					}
				}

				.right {
					.flex-direction;

					view {
						width: 8rpx;
						height: 8rpx;
						border-radius: 50%;
						background-color: #01FA4D;
						margin-right: 9rpx;
					}

					text {
						color: #FFFFFF;
						font-size: 26rpx;
					}
				}
			}
		}
	}

	.usdt {
		width: 100%;

		.radio {
			.flex-center;
			// margin-bottom: 99rpx;
			position: relative;
			height: 149rpx;
			.box {
				width: 100%;
				.flex-center;
				position: absolute;
				left: 0;
				top: 0;
				.item {
					margin: 0 32rpx;

					.active {
						width: 128rpx;
						height: 149rpx;
						border-radius: 50%;
						background: url('../../../static/hell_icon2.png') no-repeat 100% 100%/cover;
						.flex-center;
						color: #201D2E;
						font-size: 32rpx;
						box-sizing: border-box;
						padding: 0 10rpx 5rpx 0;
					}

					.no-active {
						width: 71rpx;
						height: 71rpx;
						box-sizing: border-box;
						border: 2px solid #999999;
						border-radius: 50%;
						.flex-center;
						padding-top: 2rpx;
						padding-left: 2rpx;

						view {
							width: 90%;
							height: 90%;
							border-radius: 50%;
							background: #999999;
							box-sizing: border-box;

							.flex-center;
						}
					}
				}

			}
		}

		.border {
			.flex-center;
			margin-bottom: 41rpx;

			.box {
				width: 100%;
				.flex-center;

				.item {
					margin: 0 32rpx;

					.no-active {
						color: #FFFFFF;
						font-size: 26rpx;
					}

					.active {
						width: 131rpx;
						height: 51rpx;
						box-sizing: border-box;
						border: 2px solid #999999;
						border-radius: 10rpx;
						.flex-center;

						// padding-top: 2rpx;
						// padding-left: 2rpx;
						view {
							width: 95%;
							height: 95%;
							border-radius: 10rpx;
							background: rgba(84, 103, 132, 0.8);
							box-sizing: border-box;
							.flex-center;
							color: #FFFFFF;
							font-size: 26rpx;
						}
					}
				}
			}
		}

		.submit {
			margin-bottom: 32rpx;

			.box {
				.flex-space-between;
				padding-right: 38rpx;

				.left {
					width: 15%;
				}

				.center {
					width: 447rpx;
					height: 89rpx;
					background: url('../../../static/hell_icon3.png') no-repeat 100% 100%/cover;
					.flex-center;
					color: #9BF9FF;
					font-size: 34rpx;
				}

				.right {
					width: 65rpx;
					height: 65rpx;
					border-radius: 50%;
					border: 1px solid darkgrey;
					.flex-center;

					image {
						width: 37rpx;
					}
				}
			}
		}

		.hr {
			width: 100%;
			margin-bottom: 58rpx;
			.flex-center;

			.box {
				color: #FFFFFF;
				font-size: 26rpx;

				text {
					text-decoration: underline;
				}
			}
		}
	}
</style>