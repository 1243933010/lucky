<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center"  >
			<view class="aaa" style="background: #000000;padding-bottom: 20rpx;">
				<!-- :style="{'margin-top':marginTop}" -->
				
				<view class="popup-content" :style="{'top':`${marginTop}%`}" >
					<view class="box">
						<view class="close" @click="$refs.popup.close()" >
							<image src="@/static/close.png" mode="widthFix"></image>
						</view>
						<view class="form-me" style="padding-bottom: 0px;" v-if="boolType=='3'&&options.game_player">
							<view class="form-item">
								<view class="left">
									<text v-if="+options.game_player.win_amount">{{+options.game_player.win_amount+(+options.game_player.empty_win_amount)}}</text>
									<text v-if="!(+options.game_player.win_amount)">0</text>
								</view>
								<!-- <view class="right">
									<text>{{options.game_player.win_amount||0}}</text>
								</view> -->
							</view>
						</view>
						<!-- <view style="width: 100%;height: 50rpx;"></view> -->
						<view class="form" v-show="boolType=='3'">
							<view class="form-item" v-for="(item,index) in options.game_players" :key="index">
								<view class="left">
									<text>{{item.nickname}}</text>
								</view>
								<view class="right">
									<text>{{item.win_amount?item.win_amount:''}}</text>
								</view>
							</view>
						</view>
						<view class="submit">
							<text>play game</text>
						</view>
					</view>
				</view>
				
				<view class="gif">
					<image :src="url" mode="widthFix"></image>
				</view>
			</view>
	</uni-popup>
	</view>
</template>

<script>
	import test from '@/static/test.png'
	import {
		$request,$totast
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		data() {
			return {
				options:{},
				boolType:'1',
				url:'',
				sysInfo:{}
			};
		},
		computed:{
			marginTop(){
				// return  '0rpx'
				// return  `${this.sysInfo.screenHeight/2 - 150}px`
				if(this.sysInfo.screenHeight<=700){
					return '62'
				}
				// if(this.sysInfo.screenHeight<=750&&this.sysInfo.screenHeight>700){
				// 	return '-80rpx'
				// }
				if(this.sysInfo.screenHeight<=820&&this.sysInfo.screenHeight>800){
					return '51'
				}
				if(this.sysInfo.screenHeight<=850&&this.sysInfo.screenHeight>820){
					return '61'
				}
				if(this.sysInfo.screenHeight<=900&&this.sysInfo.screenHeight>850){
					return '55'
				}
				if(this.sysInfo.screenHeight<=950&&this.sysInfo.screenHeight>900){
					return '58'
				}
				if(this.sysInfo.screenHeight<=1000&&this.sysInfo.screenHeight>900){
					return '37'
				}
				if(this.sysInfo.screenHeight<=1100&&this.sysInfo.screenHeight>1200){
					return '56'
				}
				return  '56'
			}
		},
		mounted() {
			let sysInfo = uni.getSystemInfo({
				success:(res)=>{
					console.log(res.screenHeight)
					this.sysInfo = res;
					// console.log('111')
					
				}
			})
		},
		methods: {
			open(data) {
				this.options = data;
				this.boolType = '2';
				this.url = `${test}?${Math.random()}`
				this.$refs.popup.open();
				setTimeout(()=>{
					this.boolType = '3';
				},1000)
				setTimeout(()=>{
					this.$refs.popup.close()
				},8000)
			},
			close(){
				this.options = {};
				this.boolType = '1'
				this.$refs.popup.close()
			},
			async submitBtn(){
				// let res = await $request("userUpdate", this.formData)
				// // console.log(res)
				// $totast(res.data.message)
				// if(res.data.code==200){
					this.$refs.popup.close()
				// 	this.$emit('updateData')
				// }
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("@/static/default.less");
	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;
		height: 100%;
		width: 100%;
		position: relative;
		// padding-bottom: 20rpx;
	}
	.gif{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -10;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.aaa{
		width: 100%;
		height: 100%;
		// .flex-center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 100;
		
	}

	.popup-content {
		width: 560rpx;
		height: 720rpx;
		overflow-y: auto;
		margin-bottom: 20rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		.box{
			width: 100%;
			height: 100%;
			// background-color: green;
			position: relative;
			.submit{
				width: 100%;
				height: 80rpx;
				color: white;
				.flex-center;
				opacity: 0;
				background-color: green;
				position: absolute;
				bottom: 7%;
				left: 0rpx;
			}
			.close {
				position: absolute;
				right: 0rpx;
				top: 40rpx;
				transform: translate(-50%,-50%);
				z-index: 10;
				opacity: 0;
				background-color: yellow;
				// z-index: 1000;
				image {
					width: 43rpx;
				}
			}
			.form-me{
				position: absolute;
				left: 130rpx;
				top: -15rpx;
				// margin-bottom: 50rpx;
				.form-item{
					font-size: 50rpx;
					font-weight: 600;
					color: white;
				}
				
			}
			.title {
				color: #FFFFFF;
				font-weight: 45rpx;
				font-weight: 600;
				margin-bottom: 61rpx;
				box-sizing: border-box;
				padding-left: 52rpx;
				padding-right: 52rpx;
				
			}
			.form{
				position: absolute;
				left: 0;
				top: 60rpx;
				width: 100%;
				z-index: 10;
				box-sizing: border-box;
				padding-left: 52rpx;
				padding-right: 52rpx;
				padding-bottom: 52rpx;
				height: 500rpx;
				overflow-y: auto;
				// background-color: red;
				.form-item{
					// width: 596rpx;
					height: 70rpx;
					// background: #111111;
					border-radius: 18rpx 18rpx 18rpx 18rpx;
					// border: 1rpx solid #999999;
					margin-bottom: 35rpx;
					box-sizing: border-box;
					padding-left: 17rpx;
					// padding-top: 21rpx;
					// padding-bottom: 21rpx;
					.flex-space-between;
					color: white;
					
				}
			}
		}
	}
	
	

	
</style>