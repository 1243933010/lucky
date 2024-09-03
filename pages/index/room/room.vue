<template>
	<view class="page-container">
		<view class="head">
			<view class="bk">
				<DefaultHeader />
				<view class="txt">
					<view class="title">
						<text>FRIEND'S</text>
					</view>
					<view class="label">
						<text>Create a friend table, invite your friends to play together or join your friend table Create a friend table, invite your friends to play together or join your friend table Create a friend table, invite your friends to play together or join your friend table</text>
					</view>
				</view>
			</view>
		</view>
		<view class="tab">
			<view class="container">
				<view class="box">
					<view class="item" :class="index==0?'item-active':''" @click="changeTab(0)">
						<view class="title">
							<text>Create a table</text>
						</view>
						<view class="active" v-if="index==0"></view>
					</view>
					<view class="item" :class="index==1?'item-active':''" @click="changeTab(1)">
						<view class="title">
							<text>Join Friend Table</text>
						</view>
						<view class="active" v-if="index==1"></view>
					</view>
				</view>
				<view class="content">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	import DefaultHeader from '@/components/defaultHeader.vue';
	export default {
		components: {
			DefaultHeader,
		},
		data() {
			return {
				index:0
			};
		},
		methods:{
			changeTab(ind){
				this.index = ind;
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../static/default.less");
	page{
		background-color: #292734;
	}
	.page-container{
		
		.head{
			width: 100%;
			height: 578rpx;
			background: #292734;
			box-sizing: border-box;
			.bk{
				width: 100%;
				height: 100%;
				background:url('../../../static/room_bk.png') no-repeat 100% 100%/cover;
			}
			.txt{
				color: white;
				box-sizing: border-box;
				padding: 70rpx 46rpx 0 46rpx;
				.title{
					font-size: 70rpx;
					font-weight: 600;
					margin-bottom: 17rpx;
				}
				.label{
					font-size: 24rpx;
				}
			}
		}
		.tab {
			// width: 681rpx;
			height: 165rpx;
			margin: 0 auto;
			// background: #131413;
			// border: 1rpx solid #333333;
			// border-radius: 25rpx;
			padding-bottom: 27rpx;
			margin-bottom: 52rpx;
		
			// border: 1px solid #C2C2C2;
			// border-image: linear-gradient(180deg, rgba(68.00000354647636, 68.00000354647636, 68.00000354647636, 1), rgba(0, 0, 0, 0)) 2 2;
			.container {
				display: flex;
				flex-direction: column;
		
				.box {
					width: 100%;
					.flex-direction;
		
					.item {
						box-sizing: border-box;
						padding: 13rpx 34rpx;
						font-size: 34rpx;
						font-weight: 600;
						color: white;
						position: relative;
		
						.active {
							position: absolute;
							left: 10%;
							bottom: 0;
							width: 80%;
							height: 5rpx;
							background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
							border-radius: 17rpx;
						}
					}
		
					.item-active {
						box-sizing: border-box;
						border-top-right-radius: 25rpx;
						border-top-left-radius: 15rpx;
						border: 1px solid #333333;
						border-bottom: none;
						background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
						-webkit-background-clip: text;
						background-clip: text;
						color: transparent;
		
					}
				}
		
				.content {
					width: 100%;
					box-sizing: border-box;
					padding: 27rpx 31rpx;
					.flex-direction;
		
					.con-item,
					.con-item1 {
						box-sizing: border-box;
						padding: 10rpx 17rpx;
						background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
						border-radius: 174rpx;
						margin-right: 17rpx;
						font-weight: 600;
		
						image {
							width: 26rpx;
							margin-right: 17rpx;
						}
					}
		
					.con-item1 {
						border: 2rpx solid #38D1DC;
						background: none;
						color: #38D1DC;
					}
				}
			}
		}
		
	}
</style>
