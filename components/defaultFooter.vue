<template>
	<view>
		<view :class="fiexed?'fixed':'fixed1'" >
			<view class="submit-btn">
				<view class=""></view>
				<view class="text">
					<view class="box">
						<image src="../static/tab_icon1.png" mode="widthFix"></image>
						<text  @click="goUrl('/pages/index/room/room')">Create a room</text>
					</view>
					<view class="box" @click="gogo">
						<image src="../static/tab_icon2.png" mode="widthFix"></image>
						<text >Quick start</text>
					</view>
					<view class="box" @click="$emit('share')">
						<image src="../static/tab_icon3.png" mode="widthFix"></image>
						<text  >Share link</text>
					</view>
					<!-- <text @click="goUrl('/pages/me/me')">Quick start</text> -->
					<!-- <text @click="goUrl('/pages/me/me')">临时个人中心</text> -->
					<!-- <text >Share link</text> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		$request,
		$totast,
		filesUrl
	} from "@/utils/request";
	export default {
		name: "defaultFooter",
		props:{
			fiexed:{
				default:true
			}
		},
		data() {
			return {
				amountIndex:0,
				amountList:[],
				swiperData:[]
			};
		},
		mounted(){
			this.getAmountList('1');
		},
		methods:{
			goUrl(url){
				uni.navigateTo({
					url
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
			async getRoomList(info) {
				let res = await $request('roomList', {
					...info
				});
				// console.log(res)
				if (res.data.code == 200) {
					this.swiperData = res.data.data;
					// this.swipterActive = 0;
					
				}
			},
			gogo(){
				uni.removeStorageSync('loopNum');
				uni.removeStorageSync('loopArr');
				uni.removeStorageSync('newLoopBool');
				uni.navigateTo({
					url: `/pages/index/hall/hall?id=${this.swiperData[0].id}&type=${1}&bet_amount=${this.swiperData[0].bet_amount}`
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.fixed{
		position: fixed;
		width: 100%;
		bottom: 36rpx;
		z-index: 10;
	}
	.fixed1{
		// position: fixed;
		width: 100%;
		// bottom: 36rpx;
		z-index: 10;
	}
	.submit-btn {
		width: 666rpx;
		height: 105rpx;
		margin: 0rpx auto;
		border-radius: 61rpx 61rpx 61rpx 61rpx;
		background: rgba(255, 255, 255, 0.1);
		opacity: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.text {
			width: calc(100% - 92rpx);
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #9E9E9E;
			font-size: 21rpx;
			.box{
				// .flex-column;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				image{
					width: 54rpx;
					margin-bottom: 5rpx;
				}
			}
		}
	}
</style>