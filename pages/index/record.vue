<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="record">
			<view class="collapse" :style="{'padding-bottom':item.open?'0rpx':''}"
				v-for="(item,index) in gameRecordsList" :key="index" @click="collapseClick(item,index)">
				<view class="collapse-top">
					<view class="time"  style="margin-bottom: 30rpx;">
						<text>{{item.date}}</text>
					</view>
					<view class="right">
						<view class="num">
							<text v-if="+item.profit_percent.current_profit<=0">({{item.profit_percent.current_profit}})</text>
						<text style="color: red;" v-if="+item.profit_percent.current_profit>0">(+{{item.profit_percent.current_profit}})</text>
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
								<text>{{val.profit}}</text>
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
								<text>{{val.profit}}</text>
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
								<text>{{val.profit}}</text>
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
	</view>
</template>

<script>
	import {
		$request,
		$totast
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter
		},
		data() {
			return {
				gameRecordsList: [{
						"date": "08/29",
						open:false,
						"records": {
							"premium_table": [],
							"junior_table": [{
								"id": 1,
								"bet_amount": "2.00",
								"profit": "0.10",
								"is_win": 1,
								"time": "14:00"
							}],
							"friend_table": []
						},
						"profit_percent": {
							"current_profit": "0.10",
							"last_profit": "-17.50",
							"diff": 17.6,
							"percent": "100.57%"
						}
					},
					{
						"date": "08/28",
						open:false,
						"records": {
							"premium_table": [{
								"id": 2,
								"bet_amount": "20.00",
								"profit": "-10.00",
								"is_win": 0,
								"time": "14:02"
							}],
							"junior_table": [{
								"id": 3,
								"bet_amount": "10.00",
								"profit": "-7.50",
								"is_win": 0,
								"time": "14:03"
							}],
							"friend_table": []
						},
						"profit_percent": {
							"current_profit": "-17.50",
							"last_profit": "6.00",
							"diff": -23.5,
							"percent": "-391.67%"
						}
					},
					{
						"date": "08/27",
						open:false,
						"records": {
							"premium_table": [],
							"junior_table": [],
							"friend_table": [{
								"id": 4,
								"bet_amount": "5.00",
								"profit": "6.00",
								"is_win": 1,
								"time": "14:06"
							}]
						},
						"profit_percent": {
							"current_profit": "6.00",
							"last_profit": 0,
							"diff": 6,
							"percent": "0.00%"
						}
					}
				],
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
		background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
	}

	.page-container {
		.record {
			padding-top: 96rpx;

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