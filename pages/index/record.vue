<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="record">
			<!-- <view class="header">
				<view class="title">
					<text>bill</text>
				</view>
				<view class="icon">
					<image src="../../static/bill_icon.png" mode="widthFix"></image>
				</view>
			</view> -->
			<view class="collapse" :style="{'padding-bottom':item.open?'0rpx':''}"
				v-for="(item,index) in gameRecordsList" :key="index" @click="collapseClick(item,index)">
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
							<image src="../../static/top_arrow.png" mode="widthFix"></image>
						</view>
						<view class="arrow" v-if="!item.open">
							<image src="../../static/bottom_arrow.png" mode="widthFix"></image>
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
		</view>
		<!-- <DefaultFooter /> -->
		<FixedCom />
	</view>
</template>

<script>
	import {
		$request,
		$totast
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	import FixedCom from '@/components/fixed.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter,
			FixedCom
		},
		data() {
			return {
				gameRecordsList: [],
				list: []
			};
		},
		mounted() {
			// this.gameRecordsList.forEach((val)=>{
			// 	val.open = true;
			// })
			this.gameRecords();
		},
		methods: {
			collapseClick(item, index) {
				this.gameRecordsList.forEach((val) => {
					val.open = false
				})
				item.open = true;
			},
			async gameRecords() {
				let res = await $request('gameRecords', {});
				console.log(res)
				if (res.data.code == 200) {
					console.log(this.gameRecordsList)
					res.data.data.data.forEach((val)=>{
						val.open = false;
					})
					
					this.gameRecordsList = res.data.data.data;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");

	page {
		height: 100%;
		// background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		// background: #201f29 url('../../static/ku2.png') no-repeat 100% 100%;
		// background:#201f29 url('../../static/ku2.png') no-repeat bottom right / auto 40%;
		// background:#201f29 ;
		background-color: #000;
		position: relative;
		z-index: 1000;
	}

	.page-container {
		
		.record {
			padding-top: 96rpx;
			.header{
				width: 100%;
				box-sizing: border-box;
				padding: 0 31rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20rpx;
				.title{
					color: #DDDDDD;
					font-size: 52rpx;
				}
				.icon{
					width: 61rpx;
					height: 61rpx;
					background: #222222;
					box-shadow: 2rpx -2rpx 5rpx 0rpx rgba(255,255,255,0.3);
					.flex-center;
					border-radius: 50%;
					image{
						width: 31rpx;
					}
				}
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
		}
	}
</style>