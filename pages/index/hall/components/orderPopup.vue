<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../../../../static/close.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text>Historical records</text>
				</view>
				<scroll-view scroll-y="true" style="height: 600rpx;" @scrolltolower="scrolltolower">
					<!-- <view class="list">
						<view class="item" v-for="(item,index) in list" :key="index">
							<view class="left">
								<view class="title">
									<text>profit:{{item.profit_percent.current_profit}}</text>
								</view>
								<view class="time">
									<text>{{item.date}}</text>
								</view>
							</view>
							<view class="right">
								<text>{{item.profit_percent.percent}}</text>
							</view>
						</view>
					</view> -->
					<view class="collapse" :style="{'padding-bottom':item.open?'0rpx':''}"
						v-for="(item,index) in list" :key="index" @click="collapseClick(item,index)">
						<view class="collapse-top">
							<view class="time"  style="margin-bottom: 30rpx;">
								<text>{{item.date}}</text>
							</view>
							<view class="right">
								<view class="num">
									<text  style="color: red;"  v-if="+item.profit_percent.current_profit<=0">({{item.profit_percent.current_profit}})</text>
								<text  v-if="+item.profit_percent.current_profit>0">(+{{item.profit_percent.current_profit}})</text>
								</view>
								<view class="arrow" v-if="item.open">
									<image src="../../../../static/top_arrow.png" mode="widthFix"></image>
								</view>
								<view class="arrow" v-if="!item.open">
									<image src="../../../../static/bottom_arrow.png" mode="widthFix"></image>
								</view>
							</view>
						</view>
						<view class="collapse-content" v-if="item.open">
							<!-- <view class="title">
								<text>{{item.title}}</text>
							</view> -->
							<view class="list" v-if="item.records.premium_table.length>0">
								<view class="title">
									<text>Premium Table</text>
								</view>
								<view :style="{'border-bottom':ind==item.records.premium_table.length-1?'none':''}" class="item"
									v-for="(val,ind) in item.records.premium_table" :key="ind">
									<view class="num">
										<text  style="color: red;"  v-if="+val.profit<0">{{val.profit}}</text>
										<text  v-if="+val.profit>=0">+{{val.profit}}</text>
										<!-- <text>{{val.profit}}</text> -->
									</view>
									<view class="time">
										{{val.time}}
									</view>
								</view>
							</view>
							<view class="list" v-if="item.records.junior_table.length>0">
								<view class="title">
									<text>Junior table</text>
								</view>
								<view :style="{'border-bottom':ind==item.records.junior_table.length-1?'none':''}" class="item"
									v-for="(val,ind) in item.records.junior_table" :key="ind">
									<view class="num">
										<!-- <text>+{{val.profit}}</text> -->
										<text  style="color: red;"  v-if="+val.profit<0">{{val.profit}}</text>
										<text  v-if="+val.profit>=0">+{{val.profit}}</text>
									</view>
									<view class="time">
										{{val.time}}
									</view>
								</view>
							</view>
							<view class="list" v-if="item.records.friend_table.length>0" >
								<view class="title">
									<text>Friend's Table</text>
								</view>
								<view :style="{'border-bottom':ind==item.records.friend_table.length-1?'none':''}" class="item"
									v-for="(val,ind) in item.records.friend_table" :key="ind">
									<view class="num">
										<text  style="color: red;"  v-if="+val.profit<0">{{val.profit}}</text>
										<text  v-if="+val.profit>=0">+{{val.profit}}</text>
									</view>
									<view class="time">
										{{val.time}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
	</uni-popup>
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		data() {
			return {
				// roomId: '',
				// game_id:'',
				list:[
					// {time:'2022-15-66',amount:'-100',status_text:'Withdraw'},
				],
				requestObj:{
					page:1,
					limit:10,
					game_id:'',
					room_id:''
				}
				
			};
		},
		methods: {
			collapseClick(item, index) {
				
				// this.list.forEach((val) => {
				// 	val.open = false
				// })
				console.log(item)
				
				this.$nextTick(()=>{
					item.open = !item.open;
				})
			},
			open(options) {
				// this.roomId = options.roomId;
				// this.game_id = options.game_id;
				this.requestObj.room_id = options.roomId;
				this.requestObj.game_id = options.game_id;
				this.list = [];
				this.requestObj.page = 1;
				this.getGameRecords()
				this.$refs.popup.open()
			},
			scrolltolower(e){
				console.log(e)
				this.requestObj.page++;
				this.getGameRecords()
			},
			async getGameRecords(){
				uni.showLoading()
				let res = await $request('gameRecords',this.requestObj);
				uni.hideLoading()
				// console.log(res)
				if(res.data.code==200){
					res.data.data.data.forEach((val)=>{
						val.open = false;
					})
					this.list.push(...res.data.data.data);
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;
	}

	.popup-content {
		width: 666rpx;
		// height: 1118rpx;
		max-height: 800rpx;
		// overflow-y: auto;
		background: #000000;
		box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		border-radius: 61rpx 61rpx 61rpx 61rpx;
		border: 4rpx solid;
	}
	
	.collapse {
		background: rgba(17, 17, 17, 0.7);
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		border-top: 1px solid #333333;
		margin-bottom: 20rpx;
	
		.collapse-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding-left: 35rpx;
			padding-right: 31rpx;
	
			.time {
				font-size: 35rpx;
				color: #EEEEEE;
			}
	
			.right {
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 24rpx;
				background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
				-webkit-background-clip: text;
				background-clip: text;
				color: transparent;
	
				.arrow {
					width: 21rpx;
					margin-left: 21rpx;
	
					image {
						width: 100%;
					}
				}
			}
		}
	
		.collapse-content {
			width: 100%;
			display: flex;
			flex-direction: column;
			border-bottom: 1px solid #333333;
			box-sizing: border-box;
			padding-left: 35rpx;
			padding-right: 31rpx;
	
			.title {
				color: #D8D8D8;
				font-size: 24rpx;
				line-height: 1.5;
				margin-bottom: 11rpx;
			}
	
			.list {
				width: 100%;
				.title{
					margin-bottom: 0;
				}
				.item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #333333;
					box-sizing: border-box;
					padding-top: 17rpx;
					padding-bottom: 17rpx;
	
					.num {
						color: #56A160;
						font-size: 24rpx;
						line-height: 1.5;
					}
	
					.time {
						color: #999999;
						font-size: 24rpx;
					}
				}
			}
		}
	}

	.popup-content {
		position: relative;
	
		padding-top: 52rpx;

		.close {
			position: absolute;
			right: 43rpx;
			top: 43rpx;

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
		.list{
			width: 100%;
			max-height: 650rpx;
			// overflow-y: auto;
			// .item{
			// 	width: 613rpx;
			// 	height: 105rpx;
			// 	margin: 0 auto;
			// 	background: linear-gradient( 146deg, rgba(68,68,68,0.5) 0%, rgba(0,0,0,0.5) 100%);
			// 	box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84,84,84,0.2118);
			// 	border-radius: 18rpx;
			// 	position: relative;
			// 	box-sizing: border-box;
			// 	padding:17rpx;
			// 	margin-bottom: 19rpx;
			// 	display: flex;
			// 	justify-content: space-between;
			// 	align-items: center;
			// 	.left{
			// 		display: flex;
			// 		flex-direction: column;
			// 		justify-content: flex-start;
			// 		.title{
			// 			color: #FFFFFF;
			// 			font-size: 28rpx;
			// 			margin-bottom: 17rpx;
			// 			padding-left: 0;
			// 			text{
			// 				text-align: left;
			// 			}
			// 		}
			// 		.time{
			// 			color: #999999;
			// 			font-size: 21rpx;
			// 		}
			// 	}
			// 	.right{
			// 		color: #FFFFFF;
			// 		font-size: 35rpx;
			// 		padding-top: 10rpx;
			// 	}
			// 	.status{
			// 		// width: 105rpx;
			// 		box-sizing: border-box;
			// 		padding: 0 10rpx;
			// 		height: 32rpx;
			// 		background: linear-gradient( 136deg, rgba(21,191,253,0.7) 0%, rgba(156,55,253,0.7) 100%);
			// 		border-radius: 2rpx 18rpx 2rpx 18rpx;
			// 		position: absolute;
			// 		top: 0;
			// 		right: 0;
			// 		display: flex;
			// 		justify-content: center;
			// 		align-items: center;
			// 		font-size: 17rpx;
			// 	}
			// }
		}

		
	}
</style>