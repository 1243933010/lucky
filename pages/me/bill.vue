<template>
	<view class="page-container">
		<DefaultHeader />
		
		<view class="bill">
			<view class="header">
				<view class="title">
					<text>bill</text>
				</view>
				<view class="logo">
					<image src="../../static/logo.png" mode="widthFix"></image>
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
								<text>{{item.title}}</text>
							</view>
							<view class="time">
								<text>{{item.time}}</text>
							</view>
						</view>
					</view>
					<view class="bill-right">
						<text>-10</text>
					</view>
				</view>
			</view>
		</view>
		<DefaultFooter />
	</view>
</template>

<script>
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	export default {
		components:{DefaultHeader,DefaultFooter},
		data() {
			return {
				list:[
					{img:'',title:'rECHARGE',time:'1212121',num:10},
					{img:'',title:'rECHARGE',time:'',num:10},
					{img:'',title:'rECHARGE',time:'',num:10},
					{img:'',title:'rECHARGE',time:'',num:10},
					{img:'',title:'rECHARGE',time:'',num:10},
					{img:'',title:'rECHARGE',time:'',num:10},
					{img:'',title:'rECHARGE',time:'',num:10},
					{img:'',title:'rECHARGE',time:'',num:10},
					{img:'',title:'rECHARGE',time:'',num:10},
					{img:'',title:'rECHARGE',time:'',num:10},
				]
			};
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

	.bill{
		width: 100%;
		.header{
			box-sizing: border-box;
			padding: 86rpx 36rpx 0 54rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 50rpx;
			.title{
				color: #DDDDDD;
				font-size: 60rpx;
				line-height: 1;
			}
			.logo{
				width: 70rpx;
				height: 70rpx;
				image{
					width: 100%;
					border-radius: 50%;
				}
			}
		}
		.list{
			width: 100%;
			box-sizing: border-box;
			background-color: #19181b;
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
