<template>
	<view class="page-container">
		<view class="" style="position: fixed;top: 0;width: 100%;z-index: 1;">
			<DefaultHeader />
		</view>
		<view class="" style="opacity: 0;">
			<DefaultHeader />
		</view>
		<view class="me">
			<view class="content">
				<view class="label">
					<text>CURRENT WALLET VALUE</text>
				</view>
				<view class="usdt">
					<image src="../../static/me_icon.png" mode="widthFix"></image>
					<view class="text"><text>{{userInfo.balance*1}}</text> <text>USDT</text></view>
				</view>
				<view class="small">
					<text>{{userInfo.profit_percent.today_change*1}} ({{userInfo.profit_percent.percent}})</text>
				</view>
			</view>
			<view class="button">
				<view class="item" @click="goUrl('/pages/me/recharge')">
					<image src="../../static/me_icon33.png" mode="widthFix"></image>
					<text>Recharge</text>
				</view>
				<view class="item" @click="goUrl('/pages/me/withdrawal')">
					<image src="../../static/me_icon44.png" mode="widthFix"></image>
					<text>Withdraw</text>
				</view>
				<view class="item" @click="goUrl('/pages/me/bill')">
					<image src="../../static/me_icon55.png" mode="widthFix"></image>
					<text>Billing</text>
				</view>
			</view>
			<view class="hr">
				<text>Account Settings</text>
			</view>
			<view class="menu">
				<view class="item" @click="goUrl('/pages/me/personalData')">
					<view class="left">
						<image src="../../static/me_icon2.png" mode="widthFix"></image>
						<text>Profile Information</text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow_icon2.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="item"  @click="goUrl('/pages/index/record')">
					<view class="left">
						<image src="../../static/me_icon3.png" mode="widthFix"></image>
						<text>Game Record </text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow_icon2.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/team/team')">
					<view class="left">
						<image src="../../static/me_icon4.png" mode="widthFix"></image>
						<text> My Team</text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow_icon2.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/me/fqas')">
					<view class="left">
						<image src="../../static/me_icon5.png" mode="widthFix"></image>
						<text>FQA</text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow_icon2.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="item" @click="goUrl('')">
					<view class="left">
						<image src="../../static/me_icon6.png" mode="widthFix"></image>
						<text>Logout</text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow_icon2.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<!-- <view class="hr1">
				<image src="../../static/me_icon1.png" mode="widthFix"></image>
				<text>Notice：NoticeNoticeNoticeNoticeNoticeNoticeNoticsdsdsdsdsdssdsdsdd</text>
			</view> -->
		</view>
		<!-- <view style="position: fixed;width: 100%;bottom: 0;"  v-if="pageScrollBool">
			<view style="padding: 9rpx 0 35rpx 0;">
				<DefaultFooter :fiexed="false" />
			</view>
		</view> -->
		<view style="padding: 9rpx 0 35rpx 0;">
			<view class="hr1">
				<image src="../../static/me_icon1.png" mode="widthFix"></image>
				<!-- <uni-notice-bar :speed="50" scrollable singlet color="#D8D8D8" background-color="" class="uni-notice-bar"
					:text="messageList"></uni-notice-bar> -->
					<view class="news-list">
						<!-- {{ $t("index.news") }} -->
						<view class="left-tit">
							<!-- <image src="../../static/me_icon1.png" mode="widthFix"></image> -->
						</view>
						<view class="news-swiper">
							<swiper class="swiper" vertical circular autoplay :duration="1000">
								<swiper-item v-for="(item, index) in messageList" :key="index" @click="newLink(item)">
									<view class="swiper-item">{{ item.title_en }}</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
			</view>
			<DefaultFooter :fiexed="false"  @share="$refs.invitePopup.open()"   /> 
		</view>
		<InvitePopup ref="invitePopup"/>
		<view class="aa">
			
		</view>
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	import InvitePopup from '@/pages/team/components/InvitePopup.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter,
			InvitePopup
		},
		data() {
			return {
				userInfo:{
					profit_percent:{}
				},
				pageScroll: 0,
				pageScrollBool:true,
				messageList:[]
			};
		},
		
		onLoad(){
			this.getUser();
			this.messageInterval()
		},
		onReachBottom(){
			this.pageScrollBool = false;
		},
		onPageScroll(e) {
			// console.log(e)
			if(this.pageScroll> e.scrollTop){
				this.pageScrollBool = true;
			}else{
				this.pageScrollBool = false;
			}
			this.pageScroll = e.scrollTop;
		},
		methods:{
			async messageInterval(){
				this.messageList  = [];
				let res = await $request('messageIndex', {position:'1'});
				// console.log(res,'666666666666')
				if(res.data.code==200){
					// let str = ''
					// res.data.data.forEach((val,index)=>{
					// 	this.testInterval = setInterval(()=>{
					// 		if(index<=5){
					// 			this.messageList  =this.messageList + `${val.title}`;
					// 		}
					// 	},500)
					// 	// this.messageList  =this.messageList + val.title;
					// })
					this.messageList = res.data.data;
				}
				this.messageBool = setInterval(async()=>{
					this.messageList  = []
					// this.testInterval = null;
					clearInterval(this.messageBool)
					let res = await $request('messageIndex', {position:'1'});
					if(res.data.code==200){
						this.messageList = res.data.data;
					}
				},5000)
			},
			goUrl(url){
				if(!url){
					uni.clearStorageSync();
					uni.showToast({
						icon:'none',
						title:'success'
					})
					setTimeout(()=>{
						uni.reLaunch({
							url:'/pages/login/login'
						})
					},1000)
					return
				}
				uni.navigateTo({
					url
				})
			},
			async getUser(){
				let res = await $request('userInfo',{});
				console.log(res)
				if(res.data.code==200){
					this.userInfo = res.data.data;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");
	
	.hr1 {
		width: 666rpx;
		margin: 0rpx auto;
		background: rgba(0, 0, 0, .35);
		padding: 5rpx;
		border-radius: 5rpx;
		.flex-direction;
	
		image {
			width: 22rpx;
			margin-right: 15rpx;
		}
	
		.uni-notice-bar {
			margin: 0;
			padding: 0;
		}
	
		text {
			width: 600rpx;
			color: #D8D8D8;
			font-size: 21rpx;
			line-height: 2;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.news-list {
			width: 100%;
			margin: 0rpx auto;
			// margin-left: -30rpx;
			// margin-right: -30rpx;
			padding: 10rpx 0rpx;
			// background-color: white;
			border-radius: 20rpx;
			.flex-direction;
			flex-direction: row;
			// color: #D8D8D8;
			color: white;
			.left-tit {
				// margin-right: 38rpx;
				// border-radius: 0 50px 50px 0;
				// padding: 10rpx 30rpx;
				// background: linear-gradient(0deg, #fd631f 0%, #fd7e1f 100%);
				// background: linear-gradient(90deg, #1098B7 0%, #64BAB4 100%);
				// background: #F96932;
				// color: #F96932;
				font-size: 24rpx;
				image{
					width:29rpx;
					margin-right: 10rpx;
				}
			}
		
			.news-swiper {
		
				min-width: 10%;
				flex-grow: 1;
		
				.swiper {
					height: 36rpx;
		
					.swiper-item {
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
		
						color: white;
						font-size: 26rpx;
						line-height: 36rpx;
					}
				}
			}
		}
	}
	page {
		height: 100%;
		// background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		// background: #201f29 url('../../static/ku.png') no-repeat 100% 100%;
		// background:#000000 url('../../static/ku.png') no-repeat 100% 100%/cover;
		// background-size: 100% auto;
	}
	.aa{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -10;
		background:#000000 url('../../static/ku.png') no-repeat 100% 100%/cover;
		background-size: 100% auto;
	}
	.me{
		width: 100%;
		.flex-column;
		.content{
			padding-top: 91rpx;
			.flex-column;
			.label{
				color: #666666;
				font-size: 21rpx;
				line-height: 1.5;
				margin-bottom: 2rpx;
			}
			.usdt{
				.flex-direction;
				margin-bottom: 14rpx;
				image{
					width: 53rpx;
					margin-right: 15rpx;
				}
				.text{
					color: #FFFFFF;
					font-size: 56rpx;
					font-weight: 600;
					
					text{
						margin-right: 10rpx;
						line-height: 1.5;
					}
				}
			}
			.small{
				font-size: 24rpx;
				background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
				-webkit-background-clip: text;
				background-clip: text;
				color: transparent;
				margin-bottom: 57rpx;
			}
		}
		.button{
			width: 100%;
			margin-bottom: 78rpx;
			.flex-center;
			.item{
				margin: 0 21rpx;
				.flex-column;
				image{
					width: 94rpx;
					border-radius: 50%;
					margin-bottom: 5rpx;
				}
				text{
					color: #DDDDDD;
					font-size: 21rpx;
					line-height: 2;
				}
			}
		}
		.hr{
			width: 100%;
			box-sizing: border-box;
			padding: 11rpx 0 11rpx 47rpx;
			background-color: #0b0a0d;
			color: #666666;
			font-size: 21rpx;
			font-weight: 600;
			margin-bottom: 52rpx;
		}
		.menu{
			width:100%;
			box-sizing: border-box;
			padding-left: 89rpx;
			padding-right: 136rpx;
			margin-bottom: 145rpx;
			.item{
				width: 100%;
				margin-bottom: 52rpx;
				.flex-space-between;
				.left{
					// width: 90%;
					.flex-direction;
					image{
						width: 56rpx;
						margin-right: 28rpx;
						border-radius: 50%;
					}
					text{
						color: #FFFFFF;
						font-size: 24rpx;
						line-height: 1.5;
						display: flex;
						flex-grow: 1;
					}
				}
				.right{
					image{
						width: 16rpx;
					}
				}
			}
		}
		// .hr1{
		// 	width: calc(100% - 42rpx);
		// 	margin: 0 auto;
		// 	background: rgba(0, 0, 0, .35);
		// 	padding: 10rpx 0 10rpx 10rpx;
		// 	border-radius: 5rpx;
		// 	.flex-direction;
			
		// 	image{
		// 		width: 22rpx;
		// 		margin-right: 15rpx;
		// 	}
		// 	text{
		// 		width: 600rpx;
		// 		color: #D8D8D8;
		// 		font-size: 21rpx;
		// 		line-height: 2;
		// 		white-space: nowrap;
		// 		text-overflow: ellipsis;
		// 		overflow: hidden;
		// 	}
		// }
	}
</style>
