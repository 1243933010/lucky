<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="" style="padding-bottom: 20rpx;">
				<view class="popup-content">
					<view class="close" @click="$refs.popup.close()">
						<image src="@/static/white_close.png" mode="widthFix"></image>
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
									<text>{{userInfo.room_code}}</text>
								</view>
							</view>
							<view class="box1">
								<view class="title">
									<text>invitation link</text>
								</view>
								<view class="input">
									<text>{{`${this.userInfo.host_url}/#/pages/login/login?invite_code=${this.userInfo.invite_code}&room_code=${this.userInfo.room_code}`}}</text>
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
		$request,
		$totast
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		data() {
			return {
				dataList: [{
						title: 'Table name',
						value: 'NameNameName'
					},
					{
						title: 'Amount of money',
						value: '5USD'
					},
					{
						title: 'Maximum capacity',
						value: '150people'
					},
					{
						title: 'Automatic dissolution',
						value: '24h'
					},
				],
				options: {},
				userInfo:{}
			};
		},
		methods: {
			async inviteLink(){
				let res = await $request('inviteLink',{room_id:this.options.detail.id});
				console.log(res)
				if(res.data.code==200){
					this.userInfo = res.data.data;
					// if(!res.data.data){
					// 	this.dataList=[
					// 		{title:'Table name',value:'NameNameName'},
					// 		{title:'Amount of money',value:'5USD'},
					// 		{title:'Maximum capacity',value:'150people'},
					// 		{title:'Automatic dissolution',value:'24h'},
					// 	]
					// }
					let info = res.data.data;
					this.dataList = [
						{title:'Table name',value:info.room_title+'sdddddddddddddddddddddddddddddddddddddddddddddd'},
						{title:'Amount of money',value:info.room_bet_amount*1+'USDT'},
						{title:'Maximum capacity',value:info.room_max_people+'people'},
						{title:'Automatic dissolution',value:info.room_dismiss_time},
					]
					// console.log(this.userInfo)
				}
			},
			copyLink() {
				uni.setClipboardData({
					data:`${this.userInfo.host_url}/#/pages/login/login?invite_code=${this.userInfo.invite_code}&room_code=${this.userInfo.room_code}`,
					// data:`http://localhost:8080/#/pages/login/login?invite_code=${this.userInfo.invite_code}&room_code=${this.userInfo.room_code}`,
					success:(res)=>{
						uni.showToast({
							icon:'none',
							title:'success'
						})
					}
				})
				// uni.showToast({
				// 	icon: 'none',
				// 	title: 'success'
				// })
			},
			open(data) {
				this.options = data;
				console.log(data)
			
				this.$nextTick(() => {
					this.$refs.popup.open()
					this.inviteLink();
				})
			},

			async submitBtn() {
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
		width: 100%;
		// height: 1118rpx;
		// max-height: 600rpx;
		// overflow-y: auto;
		// margin: 0 auto;
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
			left: 50%;
			bottom: -130rpx;
			width: 60rpx;
			height: 60rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			// background-color: #FFFFFF;
			background: rgba(255, 255, 255, 0.4);
			border-radius: 50%;

			image {
				width: 33rpx;
			}
		}

		.form {
			width: 100%;
			box-sizing: border-box;
			padding-left: 52rpx;
			padding-right: 52rpx;
			padding-bottom: 52rpx;
			padding-top: 150rpx;

			.form-item {
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

				.left {
					color: #BBBBBB;
				}

				.right {
					width: 40%;
					text-align: right;
					 overflow: hidden; /* 确保超出容器的文本会被裁剪 */
					  white-space: nowrap; /* 确保文本在一行内显示，避免换行 */
					  text-overflow: ellipsis; /* 使用省略号表示文本超出 */
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
						color: white;
						font-size: 24rpx;
						// text{
						// 	display: inline-block;
						// 	width: 100%;
						// }
						text{
							// word-break: break-word;
							word-break: break-all;
						}
					}
				}
				.btn{
					width: 100%;
					.flex-center;
					
					.con{
						width: 380rpx;
						height: 80rpx;
						border-radius: 50rpx;
						// border: 1px solid white;
						box-shadow: inset 0px 2rpx 2rpx white, 2rpx 2rpx 10rpx white;
						.flex-center;
						.color-text;
					}
				}
			}

		}


	}
</style>