<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center"  >
			<view class="aaa" style="background: #000000;padding-bottom: 20rpx;">
				<view class="popup-content" :style="{'margin-top':marginTop}">
					<view class="close" @click="$refs.popup.close()">
						<image src="@/static/close.png" mode="widthFix"></image>
					</view>
					<view class="title" v-if="options.game_player">
						<text  v-if="boolType=='3'">{{options.game_player.win_amount}}</text>
					</view>
					<view class="form" v-if="boolType=='3'">
						<view class="form-item" v-for="(item,index) in options.game_players" :key="index">
							<view class="left">
								<text>{{item.nickname}}</text>
							</view>
							<view class="right">
								<text>{{item.win_amount?item.win_amount:''}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="submit">
					<text>play game</text>
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
				if(this.sysInfo.screenHeight<=700){
					return '360rpx'
				}
				if(this.sysInfo.screenHeight<=750&&this.sysInfo.screenHeight>700){
					return '370rpx'
				}
				if(this.sysInfo.screenHeight<=850&&this.sysInfo.screenHeight>800){
					return '70rpx'
				}
				if(this.sysInfo.screenHeight<=1000&&this.sysInfo.screenHeight>850){
					return '0rpx'
				}
				if(this.sysInfo.screenHeight<=1000&&this.sysInfo.screenHeight>900){
					return '-50rpx'
				}
				return '60rpx'
			}
		},
		mounted() {
			console.log('111')
			let sysInfo = uni.getSystemInfo({
				success:(res)=>{
					console.log(res.screenHeight,'---')
					this.sysInfo = res;
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
		width: 500rpx;
		margin-top: 360rpx;
		// background-color: red;
		// height: 100%;
		// .flex-center;
		max-height: 500rpx;
		overflow-y: auto;
		position: relative;
		// z-index: 1000;
		// box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		// border-radius: 61rpx 61rpx 0rpx 0rpx;
		// border: 4rpx solid;
		margin-bottom: 20rpx;
	}
	.submit{
		width: 80%;
		margin: 0rpx auto;
		color: white;
		.flex-center;
		box-sizing: border-box;
		padding: 40rpx 0;
		border: 1px solid white;
		border-radius: 10rpx;
		opacity: 0;
	}

	.popup-content {
		position: relative;
	
		// padding-top: 52rpx;

		.close {
			position: fixed;
			right: 110rpx;
			top: 470rpx;
			z-index: 1000;
			opacity: 0;
			image {
				width: 43rpx;
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
			width: 100%;
			box-sizing: border-box;
			padding-left: 52rpx;
			padding-right: 52rpx;
			padding-bottom: 52rpx;
			
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
			.send{
				width: 105%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 106rpx;
				input{
					width: 350rpx;
					height: 70rpx;
					background: #111111;
					border-radius: 18rpx 18rpx 18rpx 18rpx;
					border: 1rpx solid #999999;
					// margin-bottom: 35rpx;
					box-sizing: border-box;
					padding-left: 17rpx;
					padding-top: 21rpx;
					padding-bottom: 21rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					color: #999999;
					font-size: 24rpx;
				}
				.btn{
					width: 175rpx;
					display: flex;
					// flex-grow: 1;
					height: 70rpx;
					background: #222222;
					border-radius: 44rpx 44rpx 44rpx 44rpx;
					
					view{
						width: 100%;
						height: 100%;
						font-weight: 500;
						font-size: 32rpx;
						background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
						-webkit-background-clip: text;
						background-clip: text;
						color: transparent;
						.flex-center;
					}
				}
			}
			.submit{
				width: 526rpx;
				height: 88rpx;
				background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
				border-radius: 44rpx 44rpx 44rpx 44rpx;
				margin: 0 auto;
				color: #000000;
				font-size: 31rpx;
				margin-top: 262rpx;
				// opacity: 0;
				.flex-center;
			}
		}

		
	}
</style>