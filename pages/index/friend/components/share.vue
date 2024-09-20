<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="" style="background: #000000;padding-bottom: 20rpx;">
				<view class="popup-content">
					<view class="close" @click="$refs.popup.close()">
						<image src="@/static/close.png" mode="widthFix"></image>
					</view>
					<view class="form">
						<view class="form-item" v-for="(item,index) in dataList" :key="index">
							<view class="left">
								<text>{{item.title}}</text>
							</view>
							<view class="right">
								<text>{{item.value}}</text>
							</view>
						</view>
						<view class="form-input">
							<view class="box">
								<view class="title">
									<text>Table number</text>
								</view>
								<view class="input">
									<text>{{options.detail.no}}</text>
								</view>
							</view>
							<view class="box1">
								<view class="title">
									<text>invitation link</text>
								</view>
								<view class="input">
									<text>http://www.baidu.com</text>
								</view>
							</view>
							<view class="btn">
								<view class="con" @click="copyLink">
									<text>Copy Link</text>
								</view>
							</view>
						</view>
					</view>
				</view>
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
				dataList:[
					{title:'Table name',value:'NameNameName'},
					{title:'Amount of money',value:'5USD'},
					{title:'Maximum capacity',value:'150people'},
					{title:'Automatic dissolution',value:'24h'},
				],
				options:{}
			};
		},
		methods: {
			copyLink(){
				uni.showToast({
					icon:'none',
					title:'success'
				})
			},
			open(data) {
				this.options = data;
				console.log(data)
				if(!data){
					this.dataList=[
						{title:'Table name',value:'NameNameName'},
						{title:'Amount of money',value:'5USD'},
						{title:'Maximum capacity',value:'150people'},
						{title:'Automatic dissolution',value:'24h'},
					]
				}
				this.dataList = [
					{title:'Table name',value:data.detail.title},
					{title:'Amount of money',value:data.detail.bet_amount*1+'USDT'},
					{title:'Maximum capacity',value:data.detail.max_people+'people'},
					{title:'Automatic dissolution',value:'11111'},
				]
				this.$nextTick(()=>{
					this.$refs.popup.open()
				})
			},
			
			async submitBtn(){
				// let res = await $request("userUpdate", this.formData)
				// // console.log(res)
				// $totast(res.data.message)
				// if(res.data.code==200){
				// 	this.$refs.popup.close()
				// 	this.$emit('updateData')
				// }
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("@/static/default.less");
	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;
		
		// background: url('../../../../static/share_bk.png') no-repeat 100% 100%/cover;
		// padding-bottom: 20rpx;
	}

	.popup-content {
		width: 709rpx;
		// height: 1118rpx;
		// max-height: 600rpx;
		// overflow-y: auto;
		height: 819rpx;
		background: url('../../../../static/share_bk.png') no-repeat 100% 100%/cover;
		// box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		// border-radius: 61rpx 61rpx 0rpx 0rpx;
		// border: 4rpx solid;
		// margin-bottom: 20rpx;
	}
	.popup-content {
		position: relative;
	
		padding-top: 52rpx;

		.close {
			position: absolute;
			left:50%;
			bottom: -130rpx;

			image {
				width: 43rpx;
			}
		}
		.form{
			width: 100%;
			box-sizing: border-box;
			padding-left: 52rpx;
			padding-right: 52rpx;
			padding-bottom: 52rpx;
			padding-top: 150rpx;
			.form-item{
				width: 596rpx;
				// height: 70rpx;
				// background: #111111;
				// border-radius: 18rpx 18rpx 18rpx 18rpx;
				// border: 1rpx solid #999999;
				
				margin-bottom: 19rpx;
				box-sizing: border-box;
				padding-left: 17rpx;
				// padding-top: 21rpx;
				// padding-bottom: 19rpx;
				.flex-space-between;
				color: white;
				font-size: 28rpx;
				.left{
					color: #BBBBBB;
				}
				.right{
					
				}
			}
			.form-input{
				color: white;
				.box{
					padding-top: 31rpx;
					margin-bottom: 15rpx;
				}
				.box1{
					margin-bottom: 55rpx;
				}
				.box,.box1{
					.title{
						margin-bottom: 10rpx;
					}
					.input{
						color: black;
						width: 100%;
						background: #7a7c83;
						opacity: 0.5;
						border-radius: 10rpx;
						box-sizing: border-box;
						padding: 10rpx 0 10rpx 10rpx;
					}
				}
				.btn{
					width: 100%;
					.flex-center;
					.con{
						width: 380rpx;
						height: 80rpx;
						border-radius: 50rpx;
						border: 1px solid white;
						.flex-center;
						.color-text;
					}
				}
			}
			
		}

		
	}
</style>