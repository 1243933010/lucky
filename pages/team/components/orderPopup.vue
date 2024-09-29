<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../../../static/close.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text>Reward details</text>
				</view>
				<scroll-view scroll-y="true" style="height: 800rpx;">
					<view class="list">
						<view class="item" v-for="(item,index) in list" :key="index">
							<view class="left">
								<view class="title">
									<text>{{item.change_desc}}</text>
								</view>
								<view class="time">
									<text>{{item.add_time}}</text>
								</view>
							</view>
							<view class="right">
								<text>{{item.change_amount}}</text>
							</view>
							<view class="status">
								<text>success</text>
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
				type: 'center',
				list:[
					{time:'2022-15-66',amount:'-100',status_text:'Withdraw'},
				]
				
			};
		},
		methods: {
			open(options = {type: 'center'}) {
				this.type = options.type;
				this.getRechargesAndWithdraws()
				this.$refs.popup.open()
			},
			async getRechargesAndWithdraws(){
				let res = await $request('teamAccountLogs',{});
				console.log(res)
				if(res.data.code==200){
					this.list = res.data.data.data;
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
		max-height: 700rpx;
		// overflow-y: auto;
		background: #000000;
		box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		border-radius: 61rpx 61rpx 61rpx 61rpx;
		border: 4rpx solid;
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
			.item{
				width: 613rpx;
				height: 105rpx;
				margin: 0 auto;
				background: linear-gradient( 146deg, rgba(68,68,68,0.5) 0%, rgba(0,0,0,0.5) 100%);
				box-shadow: inset 7rpx 7rpx 28rpx 0rpx rgba(84,84,84,0.2118);
				border-radius: 18rpx;
				position: relative;
				box-sizing: border-box;
				padding:17rpx;
				margin-bottom: 19rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					.title{
						color: #FFFFFF;
						font-size: 28rpx;
						margin-bottom: 17rpx;
						padding-left: 0;
						text{
							text-align: left;
						}
					}
					.time{
						color: #999999;
						font-size: 21rpx;
					}
				}
				.right{
					color: #FFFFFF;
					font-size: 35rpx;
				}
				.status{
					width: 105rpx;
					height: 32rpx;
					background: linear-gradient( 136deg, rgba(21,191,253,0.7) 0%, rgba(156,55,253,0.7) 100%);
					border-radius: 2rpx 18rpx 2rpx 18rpx;
					position: absolute;
					top: 0;
					right: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 17rpx;
				}
			}
		}

		
	}
</style>