<template>
	<view class="page-container">
		<DefaultHeader />
		
		<view class="bill">
			<view class="header">
				<view class="title">
					<text>bill</text>
				</view>
				<view class="logo" @click="shai">
					<image src="../../static/shai.png" mode="widthFix"></image>
				</view>
				<view class="fixed" v-show="showBool">
					<view class="con">
						<view class="item" @click="goItem('')">
							<text>Recharge</text>
						</view>
						<view class="item" @click="goItem('')">
							<text>Withdrawal</text>
						</view>
						<view class="item" @click="goItem('')">
							<text>Bonus transfer</text>
						</view>
						<view class="item" @click="goItem('')">
							<text>System room record</text>
						</view>
						<view class="item" @click="goItem('')">
							<text>Friend room record</text>
						</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="item" v-for="(item,index) in list" :key="index">
					<view class="bill-left">
						<view class="logo">
							<image src="../../static/logo.png" mode="widthFix"></image>
						</view>
						<view class="label">
							<view class="name">
								<text>{{item.change_object}}</text>
							</view>
							<view class="time">
								<text>{{item.add_time}}</text>
							</view>
						</view>
					</view>
					<view class="bill-right" v-if="item.change_amount.includes('-')">
						<text>{{item.change_amount}}</text>
					</view>
					<view class="bill-right" style="color: green;" v-if="!item.change_amount.includes('-')">
						<text>+{{item.change_amount}}</text>
					</view>
				</view>
			</view>
		</view>
		<DefaultFooter />
		<FixedCom  />
		
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	import FixedCom from '@/components/fixed.vue';
	export default {
		components:{DefaultHeader,DefaultFooter,FixedCom},
		data() {
			return {
				showBool:false,
				list:[],
				requestForm:{
					page:1,
					limit:20,
					type:''
				}
			};
		},
		mounted(){
			this.gameRecords();
		},
		onReachBottom(){
			this.requestForm.page ++;
			this.gameRecords();
		},
		methods:{
			shai(){
				this.showBool = !this.showBool;
			},
			goItem(){
				this.requestForm.page=1;
				this.gameRecords();
			},
			async gameRecords(){
				uni.showLoading();
				let res = await $request('accountLogs',this.requestForm);
				uni.hideLoading();
				// console.log(res)
				if(res.data.code==200){
					this.list = res.data.data.data;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");
	page {
		// height: 100%;
		// background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		// background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
		// background:#201f29 url('../../static/ku2.png') no-repeat bottom right / auto 40%;
		// background:#201f29 url('../../static/ku2.png') no-repeat bottom right / auto 40%;
		 // background:#201f29 ;
		 // position: relative;
		 // z-index: 1000;
		 background-color: #000;
	}
	// .page-container{
	// 	background:#201f29 url('../../static/ku2.png') no-repeat bottom right / auto 40%;
	// 	z-index: 10;
	// 	position: relative;
	// }

	.bill{
		width: 100%;
		padding-bottom: 150rpx;
		.header{
			box-sizing: border-box;
			padding: 86rpx 36rpx 0 54rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 50rpx;
			position: relative;
			.title{
				color: #DDDDDD;
				font-size: 60rpx;
				line-height: 1;
			}
			.logo{
				width: 61rpx;
				height: 61rpx;
				background: #222222;
				box-shadow: 2rpx -2rpx 5rpx 0rpx rgba(255,255,255,0.3);
				border-radius: 50%;
				width: 70rpx;
				height: 70rpx;
				.flex-center;
				image{
					width: 32rpx;
					// border-radius: 50%;
				}
			}
			.fixed{
				position: absolute;
				background: white;
				right: 30rpx;
				top: 150rpx;
				border-radius: 10rpx;
				.con{
					width: 280rpx;
					box-sizing: border-box;
					border-radius: 10rpx;
					padding: 30rpx 20rpx;
					.item{
						margin-bottom: 20rpx;
						font-size: 24rpx;
					}
				}
			}
		}
		.list{
			width: 100%;
			box-sizing: border-box;
			// background-color: #19181b;
			.item{
				width: 100%;
				box-sizing: border-box;
				padding: 24rpx 40rpx 24rpx 50rpx;
				.flex-space-between;
				border-bottom: 1px solid #292929;
				.bill-left{
					display: flex;
					flex-direction: row;
					align-items: center;
					.logo{
						width: 72rpx;
						height: 72rpx;
						margin-right: 20rpx;
						image{
							width: 100%;
							border-radius: 50%;
						}
					}
					.label{
						display: flex;
						flex-direction: column;
						.name{
							color: #EEEEEE;
							font-size: 28rpx;
							line-height: 1.4;
						}
						.time{
							color: #666666;
							font-size: 24rpx;
							line-height: 1.5;
						}
					}
				}
				.bill-right{
					color: #CD4040;
					font-size: 28rpx;
					line-height: 1.5;
				}
				.color-active{
					
				}
			}
			// padding: 0rpx 36rpx 0 54rpx;
		}
	}

</style>
