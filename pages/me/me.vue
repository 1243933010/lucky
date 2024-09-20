<template>
	<view class="page-container">
		<view class="" style="position: fixed;top: 0;width: 100%;">
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
					<text>0.0295 (+1.34%)</text>
				</view>
			</view>
			<view class="button">
				<view class="item" @click="goUrl('/pages/me/recharge')">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>Recharge</text>
				</view>
				<view class="item" @click="goUrl('/pages/me/withdrawal')">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>Withdraw</text>
				</view>
				<view class="item" @click="goUrl('/pages/me/bill')">
					<image src="../../static/logo.png" mode="widthFix"></image>
					<text>bill</text>
				</view>
			</view>
			<view class="hr">
				<text>ACCOUNT SETTING</text>
			</view>
			<view class="menu">
				<view class="item" @click="goUrl('/pages/me/personalData')">
					<view class="left">
						<image src="../../static/me_icon2.png" mode="widthFix"></image>
						<text>Personal data</text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="item"  @click="goUrl('/pages/index/record')">
					<view class="left">
						<image src="../../static/me_icon3.png" mode="widthFix"></image>
						<text>Record</text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/team/team')">
					<view class="left">
						<image src="../../static/me_icon4.png" mode="widthFix"></image>
						<text>Team</text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/me/fqas')">
					<view class="left">
						<image src="../../static/me_icon5.png" mode="widthFix"></image>
						<text>FQA</text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="item" @click="goUrl('')">
					<view class="left">
						<image src="../../static/me_icon6.png" mode="widthFix"></image>
						<text>Log out</text>
					</view>
					<view class="right">
						<image src="../../static/right_arrow.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="hr1">
				<image src="../../static/me_icon1.png" mode="widthFix"></image>
				<text>Notice：NoticeNoticeNoticeNoticeNoticeNoticeNoticsdsdsdsdsdssdsdsdd</text>
			</view>
		</view>
		<!-- <view style="position: fixed;width: 100%;bottom: 0;"  v-if="pageScrollBool">
			<view style="padding: 9rpx 0 35rpx 0;">
				<DefaultFooter :fiexed="false" />
			</view>
		</view> -->
		<view style="padding: 9rpx 0 35rpx 0;">
			<DefaultFooter :fiexed="false"  @share="$refs.invitePopup.open()"   /> 
		</view>
		<InvitePopup ref="invitePopup"/>
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
				userInfo:{},
				pageScroll: 0,
				pageScrollBool:true
			};
		},
		onLoad(){
			this.getUser();
		},
		onReachBottom(){
			this.pageScrollBool = false;
		},
		onPageScroll(e) {
			console.log(e)
			if(this.pageScroll> e.scrollTop){
				this.pageScrollBool = true;
			}else{
				this.pageScrollBool = false;
			}
			this.pageScroll = e.scrollTop;
		},
		methods:{
			goUrl(url){
				if(!url){
					// uni.clearStorage();
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
	
	page {
		height: 100%;
		// background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
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
						width: 11rpx;
					}
				}
			}
		}
		.hr1{
			width: calc(100% - 42rpx);
			margin: 0 auto;
			background: rgba(0, 0, 0, .35);
			padding: 10rpx 0 10rpx 10rpx;
			border-radius: 5rpx;
			.flex-direction;
			
			image{
				width: 22rpx;
				margin-right: 15rpx;
			}
			text{
				width: 600rpx;
				color: #D8D8D8;
				font-size: 21rpx;
				line-height: 2;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}
</style>
