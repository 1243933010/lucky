<template>
	<view class="page-container">
		<view class="hell">
			<view class="user">
				<view class="user-left">
					<view class="logo">
						<image @click="changeImg"
							:src="logoUrl?logoUrl:'../../../static/default_user.png'" mode="widthFix">
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
					<image @click="singOut" class="sing-out" src="../../../static/sign_out.png" mode="widthFix"></image>
				</view>
			</view>

			<view class="bk1">
				<view class="box">
					<view class="title">
						<view class="icon">
							<image src="../../../static/friend_icon_left.png" mode="widthFix"></image>
						</view>
						<view class="text">
							<text>{{roomDetail.title}}</text>
						</view>
						<view class="icon">
							<image src="../../../static/friend_icon_right.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="content">
						<view class="box1">
							<view class="item">
								<view class="left">
									<text>amount of money</text>
								</view>
								<view class="right">
									<text>{{roomDetail.bet_amount*1}}usdt</text>
								</view>
							</view>
							<view class="item">
								<view class="left">
									<text>Maximum capacity</text>
								</view>
								<view class="right">
									<text>({{roomInfo.online}}/{{roomDetail.max_people}})</text>
								</view>
							</view>
							<view class="item">
								<view class="left">
									<text>Automatic dissolution</text>
								</view>
								<view class="right">
									<text>{{roomDetail.valid_time}}hours</text>
								</view>
							</view>
						</view>
						<view class="notice">
							<view class="box">
								<text>{{roomDetail.game_help}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="count-down">
				<view class="box">
					<view class="label">
						<text>count down</text>
					</view>
					<view class="time">
						<view class="con">
							<view class="item" :class="countdownText[index]==':'?'active':''"
								v-for="(item,index) in countdownText.length">
								<text>{{countdownText[index]}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="big-icon">
				<view class="box">
					<image v-if="btnText==3" src="../../../static/friend_icon5.png" mode="widthFix"></image>
					<image v-if="btnText==2" src="../../../static/friend_icon4.png" mode="widthFix"></image>
					<image v-if="btnText==1" src="../../../static/friend_icon3.png" mode="widthFix"></image>
					<image style="opacity: 0;" v-if="!['1','2','3'].includes(btnText)" src="../../../static/friend_icon3.png" mode="widthFix"></image>
				</view>
			</view>

			<!-- <view class="portrait">
				<view class="box" v-if="testList.length">
					<view :style="{'top':item.top+'px','z-index':index+2,'left':item.left+'px'}" class="item" v-for="(item,index) in testList" :key="index">
						<image :src="item.url" mode="widthFix"></image>
					</view>
				</view>
			</view> -->


		</view>
		<view class="usdt">
			<view class="border">
				<view class="box">
					<view class="item"  @click="borderActive===index?borderActive=null:borderActive=index" v-for="(item,index) in uList" :key="index">
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
						<image  @click="$refs.textCom.open()" src="../../../static/hell_icon4.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="hr">
				<view class="box"  @click="autoClick" v-if="!autoBool">
					<image src="../../../static/friend_icon2.png" mode="widthFix"></image>
					<text>Auto Bet</text>
				</view>
			</view>
		</view>



		<view class="posi">
			<view class="box">
				<view class="item" v-for="(item,index) in roomInfo.messages">
					<text>{{item}}</text>
				</view>
			</view>
		</view>
		
		
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
		components: {
			Popup,
			ShareCom,
			TextCom
		},
		data() {
			return {
				roomId: '',
				roomDetail: {},
				userInfo: {},
				uList: ['2', '5', '10'],
				uActive: 0,
				borderList: [],
				borderActive: null,
				roomInfo: {},
				countdownText: '', // 用于显示格式化后的倒计时
				intervalId: null, // 存储定时器ID
				roomStatus:{},
				btnText: 'Participate in Game',
				testNum: 0,
				autoBool:false,
				type:'',
				room_code:'',
				intervalIdTwo:null
			};
		},
		computed: {
			logoUrl(){
				console.log(getApp().globalData)
				return getApp().globalData.indexConfig.system_logo
			},
			filesUrl1() {
				return filesUrl
			},
			testList() {
				let list = [{
						url: '../../../static/logo.png'
					},
					{
						url: '../../../static/logo.png'
					},
					{
						url: '../../../static/logo.png'
					},
					{
						url: '../../../static/logo.png'
					},
					{
						url: '../../../static/logo.png'
					},
					{
						url: '../../../static/logo.png'
					},
					{
						url: '../../../static/logo.png'
					}
				]
				list.forEach(avatar => {
					// 随机生成位置偏移量
					const offsetX =Math.floor(Math.random() * 275);
					const offsetY = Math.floor(Math.random() * 35);
					// 应用偏移量
					
					avatar.left = `${offsetX}`;
					avatar.top = `${offsetY}`;
				});
				return list
			}
		},
		onLoad(e) {
			this.getUser();
			if (e.id) {
				this.roomId = e.id;
				this.getRoomDetail(this.roomId)
			}
			if(e.type){
				this.type = e.type;
			}
			if(e.room_code){
				this.room_code = e.room_code;
				this.joinFriendRoom(e.room_code)
			}
			// else {
			// 	this.roomId = '1'
			// }
			// this.getRoomDetail(this.roomId)
		},
		mounted() {
			this.startPolling();
			this.startPolling1();
			// this.startCountdown(3400001);
			// this.getGameStatus()
		},
		beforeDestroy() {
			this.stopPolling();
			this.stopPolling1();
			this.clearCountdown();
		},
		methods: {
			async joinFriendRoom(room_code){
				let res = await $request('roomJoin', {
					code:room_code
				});
				console.log(res.data.data.room_id)
				if (res.data.code == 200) {
					this.roomId = res.data.data.room_id;
					this.getRoomDetail(res.data.data.room_id)
					return
				}
				$totast(res.data.message)
			},
			autoClick(){
				this.autoBool = !this.autoBool;
				let str = 'Successful  Auto Bet'
				if(!this.autoBool){
					str = ' Auto Bet has been canceled'
				}
				if(this.autoBool){
					this.btnText = 'Cancel Auto Bet'
					this.gameJoin();
				}
				uni.showToast({
					icon:'none',
					title:str
				})
			},
			
			goUrl(){
				this.stopPolling();
				this.stopPolling1();
				uni.navigateTo({
					url:'/pages/me/recharge'
				})
			},
			async radioChoose(item, index) {
				console.log(this.amountIndex,index,'11')
				this.amountIndex = index;
				// let res = await $request('switchSystemRoom', {
				// 	amount: this.amountList[this.amountIndex]
				// });
				// // console.log(res)
				// if (res.data.code == 200) {
				// 	// this.amountList = res.data.data.amount;
				// 	// this.amountIndex = 0;
				// }
			},
			listenNum(info) {
				console.log(info)
				let loopNum = uni.getStorageSync('loopNum')
				let loopArr = uni.getStorageSync('loopArr')
				if (loopNum === 3) {
					console.log('要被踢走了')
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
			async submitClick(){
				if(this.roomStatus.status == 10 ){
					return false
				}
				if(this.autoBool){
					this.autoBool = !this.autoBool;
					this.btnText = 'Participate in Game'
					return
				}
				if (this.roomStatus.status == 0 || (this.roomStatus.is_join == 0 && this.roomStatus.status == 5)) {
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
					obj.multiple = this.uList[this.borderActive];
				}
				let res = await $request('gameJoin',obj);
				$totast(res.data.message)
				if(res.data.code==200){
					this.getRoomDetail(this.roomId)
				}else{
					this.autoBool = false;
				}
			},
			async singOut(){
				let res = await $request('roomLeave',{room_id: this.roomId});
				// console.log(res)
				$totast(res.data.message)
				if(res.data.code==200){
					if(this.room_code){
						uni.reLaunch({
							url:'/pages/index/index'
						})
						return
					}
					let canNavBack = getCurrentPages()
					if( canNavBack && canNavBack.length>1) {  
					    uni.navigateBack() 
					} else {  
					    history.back();  
					} 
				}
			},
			formatCountdown(ms) {
				let totalSeconds = Math.floor(ms / 1000);

				const hours = Math.floor(totalSeconds / 3600);
				totalSeconds %= 3600;
				const minutes = Math.floor(totalSeconds / 60);
				const seconds = totalSeconds % 60;

				const formattedHours = hours < 10 ? `0${hours}` : hours;
				const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
				const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

				return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
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
				// this.btnText = time;
				if(time<=3){
					this.btnText = time;
				}else{
					this.btnText = '';
				}
				// // 每秒更新一次倒计时
				// this.intervalId = setInterval(() => {
				// 	time -= 1000;

				// 	// 更新倒计时显示
				// 	this.countdownText = this.formatCountdown(time);

				// 	// 当倒计时为零或小于零时，清除定时器
				// 	if (time <= 0) {
				// 		this.clearCountdown();
				// 		this.countdownText = "Time's up!";
				// 	}
				// }, 1000);

				// // 初始化时马上更新一次倒计时显示
				// this.countdownText = this.formatCountdown(time);
			},
			startCountdown1(time){
				// 每秒更新一次倒计时
				this.intervalIdTwo = setInterval(() => {
					time -= 1000;
					// 更新倒计时显示
					this.countdownText = this.formatCountdown(time);
				
					// 当倒计时为零或小于零时，清除定时器
					if (time <= 0) {
						this.clearCountdown();
						this.countdownText = "";
					}
				}, 1000);
				
				// 初始化时马上更新一次倒计时显示
				this.countdownText = this.formatCountdown(time);
			},
			clearCountdown() {
				if (this.intervalId) {
					clearInterval(this.intervalId);
					this.intervalId = null;
				}
			},
			async getRoomDetail(id) {
				let res = await $request('roomDetail', {
					id
				});
				// console.log(res)
				if (res.data.code == 200) {
					this.roomDetail = res.data.data;
					let info = {
						detail: this.roomDetail,
						info: this.roomInfo,
						room_id:id
					}
					let end = new Date(this.roomDetail.dismiss_time).getTime();
					let start = new Date().getTime();
					let time = end -start;
					console.log(end,start,time)
					this.startCountdown1(time)
					if(this.type){
						this.$refs.shareCom.open(info)
					}
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
					if (this.roomStatus.status == 0) {
						uni.hideLoading()
					}
					if (this.roomStatus.status == 15) {
						uni.showLoading()
					}
					if (this.roomStatus.status == 20) {
						uni.hideLoading()
						this.getGameResult();
						setTimeout(()=>{
							uni.hideLoading()
							this.$refs.popup.close()
						},5000)
				
					}
					// if (this.roomStatus.status == 25) {
					// 	uni.hideLoading()
					// 	this.$refs.popup.close()
					// }
					if (this.roomStatus.status == 15) {
						uni.showLoading()
					}
					if (this.roomStatus.status == 5) {
						// this.startCountdown()
						if (typeof this.btnText == 'number') {
							return
						}
						uni.hideLoading()
						let end = new Date(this.roomStatus.lock_start_time).getTime();
						let start = new Date(this.roomStatus.countdown_start_time).getTime();
						let time = end / 1000 - start / 1000;
						// console.log(end,start,time)
						this.startCountdown(time)
					} else {
						this.clearCountdown()
						if(this.autoBool){
							this.btnText = 'Cancel Auto Bet'
						}else{
							this.btnText = 'Participate in Game'
						}
					}
				
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
			},
			share() {
				let info = {
					detail: this.roomDetail,
					info: this.roomInfo,
					room_id:this.roomId
				}
				this.$refs.shareCom.open(info)
			
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../static/default.less");

	page {
		// height: 100vh;
		background: url('../../../static/friend_bk.png') no-repeat 100% 100%/cover;
	}

	.posi {
		position: fixed;
		bottom: 42rpx;
		left: 17rpx;
		z-index: 0;
		height: 600rpx;
		overflow: hidden;
		.box {
			.flex-column;

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
		// height: 100vh;
	}

	.hell {
		.user {
			.flex-space-between;
			box-sizing: border-box;
			padding: 59rpx 54rpx 0 54rpx;
			margin-bottom: 20rpx;

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

						.add{
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
							padding-left: 28rpx;
							padding-bottom: 7rpx;
							text{
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

		.bk1 {
			width: 100%;
			height: 317rpx;
			background: url('../../../static/friend_bk1.png') no-repeat 100% 10%/cover;

			.box {
				width: 570rpx;
				margin: 0 auto;
				.flex-column;
				padding-top: 75rpx;

				.title {
					.flex-center;

					// display: flex;
					// align-items: center;
					// margin-bottom: 5rpx;
					.icon {
						padding-top: 15rpx;

						image {
							width: 128rpx;
							height: 33rpx;
						}
					}

					.text {
						color: #FFFFFF;
						font-size: 40rpx;
						margin: 0 11rpx;
						line-height: 1;
					}
				}

				.content {
					width: 100%;

					.box1 {
						width: 100%;

						.item {
							.flex-space-between;
							margin-bottom: 4rpx;

							.left {
								color: #99C0F7;
								font-size: 24rpx;
							}

							.right {
								color: #FFFFFF;
								font-size: 24rpx;
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
						// margin-bottom: 32rpx;

						.box {
							width: 100%;
							height: 100%;
							.flex-center;
							color: #FFFFFF;
							font-size: 24rpx;
							padding-top: 0;
						}
					}
				}
			}
		}

		.count-down {
			width: 656rpx;
			height: 144rpx;
			margin: 0 auto;
			background: url('../../../static/friend_bk2.png') no-repeat 100% 10%/cover;

			.box {
				width: 100%;
				height: 100%;
				.flex-space-between;
				box-sizing: border-box;
				padding: 0 40rpx;
				margin-bottom: 29rpx;

				.label {
					color: #FFFFFF;
					font-size: 47rpx;
				}

				.time {
					.con {
						.flex-center;

						.item {
							width: 25rpx;
							height: 35rpx;
							background: #0b3d70;
							border-radius: 5rpx;
							border: 1px solid #FFFFFF;
							// opacity: 0.4;
							color: #FFFFFF;
							font-size: 24rpx;
							border-radius: 8rpx;
							margin-right: 6rpx;
							.flex-center;
						}

						.active {
							width: 10rpx;
							height: 35rpx;
							background: none;
							border: none;
						}
					}
				}
			}
		}

		.big-icon {
			width: 100%;

			.box {
				width: 461rpx;
				margin: 0 auto;

				image {
					width: 100%;
				}
			}
		}

		.portrait {
			width: 100%;
			overflow: hidden;
			position: relative;
			.box {
				width: 100%;
				height: 181rpx;
				.item{
					width: 81rpx;
					height: 81rpx;
					 position: absolute;
					 transition: transform 0.2s;
					image{
						width: 100%;
						border-radius: 50%;
					}
				}
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
		z-index:10;
		.radio {
			.flex-center;
			// margin-bottom: 99rpx;

			.box {
				width: 100%;
				.flex-center;

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
							width: 93%;
							height: 93%;
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
					width: 437rpx;
					height: 128rpx;
					background: url('../../../static/friend_icon1.png') no-repeat 100% 100%/cover;
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
				.flex-center;

				image {
					width: 22rpx;
					margin-right: 10rpx;
				}

				text {
					// text-decoration: underline;
					line-height: 1;
				}
			}
		}
	}
</style>