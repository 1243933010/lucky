<template>
	<view class="" :class="bkUlr">
		<!-- 		<swiper style="height: 100vh;" @change="switchSystemRoom" :indicator-dots="false" :autoplay="false" >
			<swiper-item v-for="(item,index) in amountList" :key="index"> -->
		<view class="page-container">
			<view class="hell">
				<view class="user">
					<view class="user-left">
						<view class="logo">
							<image @click="changeImg" :src="logoUrl?logoUrl:'../../../static/default_user.png'"
								mode="widthFix">
							</image>
						</view>
						<view class="msg">
							<view class="name">
								<text>{{userInfo.nickname}}</text>
							</view>
							<view class="price" @click="goUrl">
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
						<image @click="singOut" class="sing-out" src="../../../static/sign_out.png" mode="widthFix">
						</image>
					</view>
				</view>
				<view class="notice">
					<view class="box" style="padding-top: 10rpx;">
						<!-- <text>{{roomDetail.game_help}}</text> -->
						<uni-notice-bar  :speed="50" scrollable singlet color="#D8D8D8" background-color="" class="uni-notice-bar"
							:text="messageList"></uni-notice-bar>
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
							<text>{{roomInfo.joined}}people are ready</text>
						</view>
					</view>
				</view>
			</view>
			<view class="" style="position: fixed;bottom: 0rpx;left: 0;width: 100%;">
				<view class="usdt">
					<view class="radio">
						<swiper style="height: 150rpx;width: 100%;z-index: 100;" :current="amountIndex1"
							@change="switchSystemRoom1" :indicator-dots="false" :autoplay="false">
							<swiper-item v-for="(item,index) in amountList" :key="index">
								<view class="box" v-if="amountIndex1===index"
									:style="{'left':posiLen+'rpx'}">
									<!-- :class="index==uActive?'uActive':''" -->
									<view class="item" @click="radioChoose(item,index)"
										v-for="(item,index) in amountList" :key="index">
										<view class="no-active" v-if="index!==amountIndex1">
											<view class="">
												<text>{{item.bet_amount*1}}</text>
											</view>
										</view>
										<view class="active" v-if="index==amountIndex1">
											<text>{{item.bet_amount*1}}</text>
										</view>
									</view>
								</view>
							</swiper-item>
						</swiper>

					</view>
					<!-- <view class=""  style="position: fixed;bottom: 220rpx;left: 0;width: 100%;"> -->
					<view class="border">
						<view class="box">
							<view class="item" @click="borderActive===index?borderActive=undefined:borderActive=index"
								v-for="(item,index) in uList" :key="index">
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
					<!-- </view> -->
					<!-- <view class=""  style="position: fixed;bottom: 0rpx;left: 0;width: 100%;"> -->
					<view class="submit">
						<view class="box">
							<view class="left"></view>
							<!-- :style="{'color':roomStatus.status!==0?'#aaaaaa':''}" -->
							<view class="center1" v-if="hideButton">
								<text>{{btnText}}</text>
							</view>
							<view class="center" v-if="showButton"  @click="submitClick" >
								<text>{{btnText}}</text>
							</view>
							<view class="right">
								<image @click="$refs.textCom.open()" src="../../../static/hell_icon4.png"
									mode="widthFix">
								</image>
							</view>
						</view>
					</view>
					<view class="hr">
						<view class="box" @click="autoClick" v-if="!autoBool">
							<text> Auto Bet</text>
						</view>
					</view>
					<!-- </view> -->
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
		<!-- 	</swiper-item>
		</swiper> -->
		<Popup ref="popup" />
		<ShareCom ref="shareCom" />
		<TextCom ref="textCom" />
		<NumCom ref="numCom" />
		<LoadingCom ref="loadingCom" />

		<view class="fixed-1">
			<view class="content">
				<swiper style="height: 500rpx;" @change="switchSystemRoom" :indicator-dots="false" :autoplay="false">
					<swiper-item v-for="(item,index) in amountList" :key="index">
						<view class="">

						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import Popup from './components/dialog.vue';
	import ShareCom from './components/share.vue';
	import TextCom from './components/text.vue';
	import NumCom from './components/ten.vue';
	import LoadingCom from './components/loading.vue';
	import {
		$request,
		$totast,
		filesUrl
	} from "@/utils/request";
	export default {
		components: {
			Popup,
			ShareCom,
			TextCom,
			NumCom,
			LoadingCom
		},
		data() {
			return {
				bet_amount: '',
				roomType: '',
				amountIndex: 0,
				amountIndex1: 0,
				amountList: [],
				roomId: '',
				roomDetail: {},
				userInfo: {},
				uList: ['2', '5', '10'],
				uActive: 0,
				borderList: [],
				borderActive: null,
				roomInfo: {},
				roomStatus: {},
				// btnText: 'Participate in Game',
				testNum: 0,
				autoBool: false,
				countdownBool:null,//是否开启了倒计时
				messageList:'',
				messageLoopNum:3,
				uObject:{'2':'5','5':'10','10':'15','20':'20','50':'25','100':'30'},
			};
		},
		computed: {
			posiLen(){
				if(this.amountIndex1==0){
					return 340
				}else if(this.amountIndex1==1){
					return 260
				}else  if(this.amountIndex1==2){
					return 110
				}else  if(this.amountIndex1==3){
					return -20
				}else if (this.amountIndex1==4){
					return -160
				}else  if(this.amountIndex1==5){
					return -300
				}
				return 0
			},
			btnText:{
				get(){
					if(this.autoBool){
						return 'Cancel Auto Bet'
					}
					if(this.roomStatus.is_can_start==0&&this.roomStatus.is_user_join==0){
						//游戏未开始，用户未下注
						return 'Participate in Game'
					}
					if(this.roomStatus.is_can_start===1&&this.roomStatus.is_can_order===1&&this.roomStatus.is_user_join===0){
						//游戏未开始，用户未下注
						return 'Participate in Game'
					}
					if(this.roomStatus.is_can_start==0&&this.roomStatus.is_user_join==1){
						//游戏未开始，用户已下注
						return 'Bet already placed'
					}
					if(this.roomStatus.is_can_order==0){
						//已买定离手
						return 'No betting allowed'
					}
					
					return 'Participate in Game';
				},
				set(val){
					return val
				}
			},
			showButton(){  //符合不置灰条件
				let bool =this.roomStatus.is_can_start===0&&this.roomStatus.is_user_join===0;
				let bool1 = this.roomStatus.is_can_start===1&&this.roomStatus.is_can_order===1&&this.roomStatus.is_user_join===0;
				let bool2 = this.autoBool;
				return bool||bool1||bool2;
			},
			hideButton(){
				let bool = this.roomStatus.is_can_order===0&&!this.autoBool;  //已经买定离手
				let bool1 = this.roomStatus.is_user_join===1&&!this.autoBool;  //已经参与了游戏
				return bool||bool1;
			},
			logoUrl() {
				console.log(getApp().globalData)
				return getApp().globalData.indexConfig.system_logo
			},
			filesUrl1() {
				return filesUrl
			},
			bkUlr() {
				if (this.amountList.length == 0) {
					return 'bk0'
				}
				if (['10', '20'].includes(this.amountList[this.amountIndex].bet_amount)) {
					return 'bk1'
				} else if (['50', '100'].includes(this.amountList[this.amountIndex].bet_amount)) {
					return 'bk2'
				} else {
					return 'bk0'
				}
			}
		},
		onLoad(e) {
			this.getUser();
			if (e.id) {
				this.roomId = e.id
			}
			if (e.type) {
				this.roomType = e.type
			}
			if (e.bet_amount) {
				this.bet_amount = e.bet_amount
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
			// this.startPolling();
			this.startPolling1();
			// this.getAmountList()
			this.getAmountListInRoom()

		},
		beforeDestroy() {
			// this.stopPolling();
			this.stopPolling1();

		},
		methods: {
			async messageInterval(position){
				this.messageList  = ''
				let res = await $request('messageIndex', 
				{position:this.uObject[this.amountList[this.amountIndex].bet_amount.toString()]});
				// console.log(res,'666666666666')
				if(res.data.code==200){
					let str = ''
					res.data.data.forEach((val,index)=>{
						this.testInterval = setInterval(()=>{
							if(index<=10){
								this.messageList  =this.messageList + ` ${val.title}`;
							}
						},1000)
						// this.messageList  =this.messageList + val.title;
					})
					// this.messageList = str;
				}
			},
			autoClick() {
				this.autoBool = !this.autoBool;
				let str = 'Successful  Auto Bet'
				if (!this.autoBool) {
					str = ' Auto Bet has been canceled'
				}
				
				if (this.autoBool) {
					this.btnText = 'Cancel Auto Bet'
					if(this.roomStatus.is_can_start==1||this.roomStatus.is_user_join==1){
						//游戏未开始，用户已下注
						return 'Bet already placed'
					}else{
						this.gameJoin();
					}
					
				}
				uni.showToast({
					icon: 'none',
					title: str
				})
			},
			goUrl() {
				// this.stopPolling();
				this.stopPolling1();
				uni.navigateTo({
					url: '/pages/me/recharge'
				})
			},
			async radioChoose(item, index) {
				console.log(this.amountIndex, index, '11')
				this.amountIndex = index;
				this.amountIndex1 = index;
				this.messageLoopNum = 4;
				this.amountList.forEach((val)=>{
					if(val.bet_amount==this.amountList[this.amountIndex].bet_amount){
						this.roomId = val.id;
						this.getRoomDetail(this.roomId)
					}
				})
				this.allClose();
			},
			allClose(){
				this.$nextTick(()=>{
					this.$refs.popup.close();
					this.$refs.numCom.close();
					this.$refs.loadingCom.close();
				})
			},
			listenNum(info) {
				console.log(info)
				let loopNum = uni.getStorageSync('loopNum')
				let loopArr = uni.getStorageSync('loopArr')
				if (loopNum === 3) {
					console.log('要被踢走了')
					// this.singOut();
					// return
				}
				if (!loopArr) {
					loopArr = [];
				}
				if (!loopNum && loopNum !== 0) {
					loopNum = 0;
				}
				if (info.status !== 25) {
					// uni.setStorageSync('newLoopBool',true);
					if (!loopArr.includes(info.status)) {
						loopArr.push(info.status)
						uni.setStorageSync('loopArr', loopArr);
					} else {

					}

				} else {
					if (loopArr.length > 0) {
						loopNum++;
						uni.setStorageSync('loopNum', loopNum);
						uni.setStorageSync('loopArr', []);
					}

				}
				// console.log(loopNum)
			},
			share() {
				let info = {
					detail: this.roomDetail,
					info: this.roomInfo
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
						let thisSee = uni.getStorageSync('thisSee')
						if(!thisSee){
							thisSee = []
							thisSee.push(`${this.roomStatus.user_id.toString()}${this.roomStatus.sn}`)
						}
						uni.setStorageSync('thisSee',thisSee)//设置已经看过了
						this.getGameResult();//调接口直接打开弹窗
					}
				}, 1000);

				// 初始化时马上更新一次倒计时显示
				if (time <= 3) {
					this.btnText = time;
				} else {
					this.btnText = '';
				}

			},
			clearCountdown() {
				if (this.intervalId) {
					clearInterval(this.intervalId);
					this.intervalId = null;
				}
			},
			// async startPolling() {
			// 	// 启动轮询，每隔 1 秒调用一次
			// 	this.polling = true;
			// 	while (this.polling) {
			// 		await this.getRoomInfo(); // 等待请求返回
			// 		await this.sleep(2000); // 等待 1 秒后再继续轮询
			// 	}
			// },
			async submitClick() {
				if (this.autoBool) {  //如果已经点了自动投注，再点击只会取消
					this.autoBool = !this.autoBool;
					// this.btnText = 'Participate in Game'
					return
				}
				if(this.roomStatus.is_can_order !== 0&&this.roomStatus.is_user_join==0 ){
					//可以下单并且用户并未投注，此时可以下注
					this.gameJoin()
					return false
				}

			},
			async gameJoin() {
				let obj = {
					is_multiple: ''
				};
				console.log(this.borderActive)
				let arr = [2, 5, 10]
				if (this.borderActive == null) {
					obj.is_multiple = 0;
					// obj.multiple = ''
				} else {
					obj.is_multiple = 1;
					// obj.multiple = this.borderActive;
					obj.multiple = arr[this.borderActive];
				}
				let res = await $request('gameJoin', {...obj,room_id:this.roomId});
				$totast(res.data.message)
				if (res.data.code == 200) {
					this.getRoomDetail(this.roomId)
				} else {
					this.autoBool = false;
				}
			},

			async singOut() {
				let res = await $request('roomLeave', {
					room_id: this.roomId
				});
				// console.log(res)
				$totast(res.data.message)
				if (res.data.code == 200) {
					setTimeout(() => {
						let canNavBack = getCurrentPages()
						if (canNavBack && canNavBack.length > 1) {
							uni.navigateBack()
						} else {
							history.back();
						}
					}, 1500)
				}
			},

			async getAmountListInRoom(type) {
				let res = await $request('amountListInRoom', {
					type: this.roomType
				});
				console.log(res)
				if (res.data.code == 200) {
					this.amountList = res.data.data;
					res.data.data.forEach((val, index) => {
						if (+val.bet_amount == (+this.bet_amount)) {
							// console.log(val.bet_amount,'============')
							// this.messageBool = null;
							// clearInterval(this.messageBool)
							// this.messageInterval(this.uObject[val.bet_amount.toString()])
							this.amountIndex = index;
							this.amountIndex1 = index;
						}
					})

				}
			},

			async switchSystemRoom(e) {
				console.log(e.detail.current, '222')
				this.messageLoopNum = 4;
				// this.messageBool = null;
				// clearInterval(this.messageBool)
				// this.messageInterval(this.uObject[this.amountList[e.detail.current].bet_amount.toString()])
				this.amountIndex = e.detail.current;
				// this.amountIndex1 = e.detail.current;
				let res = await $request('switchSystemRoom', {
					amount: this.amountList[this.amountIndex].bet_amount
				});
				// console.log(res)
				if (res.data.code == 200) {
					// this.amountList = res.data.data.amount;
					// this.amountIndex = 0;
					this.amountList.forEach((val)=>{
						if(val.bet_amount==this.amountList[this.amountIndex].bet_amount){
							this.roomId = val.id;
							this.getRoomDetail(this.roomId)
						}
					})
					this.allClose();
					uni.showToast({
						icon: 'none',
						title: 'The basic betting amount has been switched'
					})
				}
			},
			async switchSystemRoom1(e) {
				this.amountIndex1 = e.detail.current;
				// console.log(this.amountList)
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
			// async startPolling() {
			// 	// 启动轮询，每隔 1 秒调用一次
			// 	this.polling = true;
			// 	while (this.polling) {
			// 		await this.getRoomInfo(); // 等待请求返回
			// 		await this.sleep(2000); // 等待 1 秒后再继续轮询
			// 	}
			// },
			async startPolling1() {
				// 启动轮询，每隔 1 秒调用一次
				this.polling1 = true;
				while (this.polling1) {
					await this.getGameStatus(); // 等待请求返回
					await this.sleep(2000); // 等待 1 秒后再继续轮询
				}
			},
			// stopPolling() {
			// 	// 停止轮询
			// 	this.polling = false;
			// },
			stopPolling1() {
				// 停止轮询
				this.polling1 = false;
			},
			sleep(ms) {
				return new Promise(resolve => setTimeout(resolve, ms));
			},
			// async getRoomInfo() {
			// 	let res = await $request('roomInfo', {
			// 		room_id: this.roomId
			// 	});
			// 	// console.log(res)
			// 	if (res.data.code == 200) {
			// 		this.roomInfo = res.data.data;
			// 		this.messageLoopNum++;
			// 		if(this.messageLoopNum>=5){
			// 			this.messageLoopNum = 0;
			// 			this.messageInterval();
						
			// 		}
			// 		return
			// 	}
			// 	$totast(res.data.message)
			// },
			async getGameStatus() {
				// let res = await $request('gameStatus', {
				// 	room_id: this.roomId
				// });
				let res = await $request('newGameStatus', {
					room_id: this.roomId
				});
				if (res.data.code == 200) {
					
					this.roomInfo = res.data.data.room_info;
					this.messageLoopNum++;
					if(this.messageLoopNum>=10){
						this.messageLoopNum = 0;
						clearInterval(this.testInterval)
						this.messageInterval();
						
					}
					
					let data = res.data.data;
					// data = {
					// 	end_time: 0,
					// 	is_can_order: 1,
					// 	is_can_start: 1,
					// 	is_have_result: 0,
					// 	is_user_join: 1,
					// 	sn: "YX202409271445074111",
					// 	user_id: 49
					// }
					this.roomStatus = data;
					// this.$refs.numCom.open({num:data.countdown_end_time,room_id: this.roomId})
					 // this.$refs.numCom.open({num:'2024-09-29 01:011:11'}) 
					// this.$refs.numCom.open({num:9})
					// this.listenNum(data)
					if(data.is_can_start===0){  //如果还没有开启游戏，处理一下默认逻辑
						
					}
					if(data.is_can_order==1&&data.is_can_start==0&&data.is_user_join==0&&this.autoBool){
						//符合游戏未开始，已自动下注
						this.gameJoin();
					}
					if(data.is_can_order==1&&data.is_can_start==0&&data.is_user_join==1){
		
						this.$nextTick(()=>{
							this.$refs.loadingCom.open();
						})
					}else{
						this.$nextTick(()=>{
							this.$refs.loadingCom.close();
						})
					}
					if(data.is_can_start==1){  //如果可以开启游戏，三秒倒计时启动
			          let thisSee = uni.getStorageSync('thisSee')
					  if(thisSee&&thisSee.includes(`${data.user_id.toString()}${data.sn}`)){  //如果缓存跟当前订单符合，说明不是第一次了，不倒计时了
						console.log('触发--已看过当前投注')
						// this.btnText = '111'
						this.getGameResult();//调接口直接打开弹窗
					}else{  //第一次观看有倒计时
					this.$refs.numCom.open({num:data.countdown_end_time,room_id: this.roomId})
					    // if(this.countdownBool){ //如果正处于倒计时
						   // return
					    // }
						
					    // this.countdownBool = true;//设置已经倒计时已开启状态
						// this.startCountdown(3)
					}
				}
				if(data.is_can_order===0){  //当买定离手时
					
				}
				
				// else{
				// 	this.clearCountdown()
				// 	// if()
				// 	if (this.autoBool) {
				// 		this.btnText = 'Cancel Auto Bet'
				// 	} else {
				// 		this.btnText = 'Participate in Game'
				// 	}
				// }
				
				
					
					// if (this.roomStatus.status == 0) {
					// 	if (this.autoBool) {
					// 		this.gameJoin()
					// 	}
					// 	uni.hideLoading()
					// }
					// if (this.roomStatus.status == 15) {
					// 	uni.showLoading()
					// }
					// if (this.roomStatus.status == 20) {
					// 	uni.hideLoading()
					// 	this.getGameResult();
					// 	setTimeout(() => {
					// 		uni.hideLoading()
					// 		this.$refs.popup.close()
					// 	}, 5000)

					// }
					// if (this.roomStatus.status == 25) {
					// 	// uni.hideLoading()
					// 	// this.$refs.popup.close()
					// }
					// if (this.roomStatus.status == 15) {
					// 	uni.showLoading()
					// }
					// if (this.roomStatus.status == 5) {
					// 	// this.startCountdown()
					// 	if (typeof this.btnText == 'number') {
					// 		return
					// 	}
					// 	uni.hideLoading()
					// 	let end = new Date(this.roomStatus.lock_start_time).getTime();
					// 	let start = new Date(this.roomStatus.countdown_start_time).getTime();
					// 	let time = end / 1000 - start / 1000;
					// 	// console.log(end,start,time)
					// 	this.startCountdown(time)
					// } else {
					// 	this.clearCountdown()
					// 	// if()
					// 	if (this.autoBool) {
					// 		this.btnText = 'Cancel Auto Bet'
					// 	} else {
					// 		this.btnText = 'Participate in Game'
					// 	}

					// }

					return
				}
				$totast(res.data.message)
			},
			async getGameResult() {
				let res = await $request('gameResult', {
					room_id: this.roomId
				});
				if (res.data.code == 200) {
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
		// background: #000;
	}

	.fixed-1 {
		position: fixed;
		top: 350rpx;
		left: 0;
		width: 100%;

		.content {
			width: 100%;
			height: 100%;
			// background: red;
		}
	}

	.bk0 {
		background: url('../../../static/hell_bk.png') no-repeat 100% 30% / cover;
	}

	.bk1 {
		background: url('../../../static/hall_bk_1.png') no-repeat 100% 30% / cover;
	}

	.bk2 {
		background: url('../../../static/hall_bk_2.png') no-repeat 100% 30% / cover;
	}

	.posi {
		position: fixed;
		bottom: 42rpx;
		left: 17rpx;
		height: 600rpx;
		// overflow-y: auto;
		overflow: hidden;
		// z-index: -10;

		.box2 {
			// width: 150rpx;
			// .flex-column;
			// display: flex;
			// flex-direction: column;
			overflow: hidden;

			// align-items: center;
			.item {
				width: 150rpx;
				background: #0B0B0B;
				border-radius: 10rpx;
				color: #FFFFFF;
				font-size: 20rpx;
				box-sizing: border-box;
				padding: 13rpx 3rpx;
				margin-bottom: 15rpx;
				word-break: break-all;
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

						// .add {
						// 	width: 23rpx;
						// 	height: 23rpx;
						// 	border-radius: 50%;
						// 	border: 1ps solid #00319A;
						// 	.flex-center;
						// 	color: #91FB14;
						// 	font-size: 24rpx;
						// }
						.add {
							width: 32rpx;
							height: 32rpx;
							background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
							box-sizing: border-box;
							// border: 1rpx solid #DDDDDD;
							// .flex-center;
							border-radius: 28rpx;
							text-align: center;
							display: flex;
							justify-content: center;
							align-items: center;
							padding-left: 28rpx;
							padding-bottom: 7rpx;

							text {
								// width: 100%;
								color: #222222;
								font-size: 36rpx;
								font-weight: 600;
							}
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
		position: relative;
		z-index: 10;

		// padding-bottom: 200rpx;
		.radio {
			position: relative;
			z-index: 10;
			.flex-center;
			// margin-bottom: 99rpx;

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
						padding-left: 0rpx;
						background: rgba(0, 0, 0, 0.2);

						view {
							width: 93%;
							height: 93%;
							border-radius: 50%;
							background: #999999;
							// background: rgba(0, 0, 0, 0.2);
							box-sizing: border-box;
							font-size: 26rpx;
							color: #FFFFFF;
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
					box-sizing: border-box;

					.no-active {
						// width: 131rpx;
						// height: 51rpx;
						color: #FFFFFF;
						font-size: 26rpx;
						text-shadow: 0rpx 9rpx 4rpx rgba(4, 2, 8, 0.57);
						text-stroke: 2px #657383;
					}

					.active {
						box-sizing: border-box;
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
							background: rgba(84, 103, 132, 0.5);
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
				.center1 {
					width: 437rpx;
					height: 128rpx;
					background: url('../../../static/aa.png') no-repeat 100% 100%/cover;
					.flex-center;
					color: #aaaaaa;
					font-size: 34rpx;
				}

				.right {
					width: 65rpx;
					height: 65rpx;
					border-radius: 50%;
					border: 1px solid darkgrey;
					background: rgba(0, 0, 0, 0.4);
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
				// background: rgba(255, 255, 255, 0.4);
				box-sizing: border-box;
				padding: 5rpx 10rpx;
				border-radius: 5rpx;

				text {
					text-decoration: underline;
				}
			}
		}
	}
</style>