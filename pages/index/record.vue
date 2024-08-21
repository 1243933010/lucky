<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="record">
			<view class="collapse" :style="{'padding-bottom':item.open?'0rpx':''}"  v-for="(item,index) in list" :key="index" @click="collapseClick(item,index)">
				<view class="collapse-top">
					<view class="time">
						<text>{{item.time}}</text>
					</view>
					<view class="right">
						<view class="num">
							<text>{{item.num}}(+1.35%)</text>
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
					<view class="title">
						<text>{{item.title}}</text>
					</view>
					<view class="list">
						<view :style="{'border-bottom':ind==item.list.length-1?'none':''}" class="item" v-for="(val,ind) in item.list" :key="ind">
							<view class="num">
								<text>{{val.num}}</text>
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
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter
		},
		data() {
			return {
				list: [{
					time: '08/19',
					num: '2222222',
					title:'Premium Table',
					open:true,
					list:[
						{time:'12.01',num:10},
						{time:'12.01',num:-10},
					]
				},{
					time: '08/19',
					num: '2222222',
					title:'Premium Table',
					open:false,
					list:[
						{time:'12.01',num:10},
						{time:'12.01',num:-10},
					]
				}]
			};
		},
		methods:{
			collapseClick(item,index){
				 this.list.forEach((val)=>{
					 val.open = false
				 })
				 item.open = true;
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
						.arrow{
							width: 21rpx;
							margin-left: 21rpx;
							image{
								width: 100%;
							}
						}
					}
				}
				.collapse-content{
					width: 100%;
					display: flex;
					flex-direction: column;
					border-bottom: 1px solid #333333;
					box-sizing: border-box;
					padding-left: 35rpx;
					padding-right: 31rpx;
					.title{
						color: #D8D8D8;
						font-size: 24rpx;
						line-height: 1.5;
						margin-bottom: 11rpx;
					}
					.list{
						width: 100%;
						.item{
							display: flex;
							justify-content: space-between;
							align-items: center;
							border-bottom: 1px solid #333333;
							box-sizing: border-box;
							padding-top: 17rpx;
							padding-bottom: 17rpx;
							.num{
								color: #56A160;
								font-size: 24rpx;
								line-height: 1.5;
							}
							.time{
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