<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="center">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../../../static/close.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text>user picture</text>
				</view>
				<view class="list">
					<view class="item upload" @click="upload" v-if="list.length<1">
						<image src="../../../static/add.png" mode="widthFix"></image>
					</view>
					<view class="item" :class="index==activeIndex?'active':''" v-for="(item,index) in list"
						:key="index">
						<image :src="filesUrl1+item.url" mode="aspectFill"></image>
					</view>
				</view>
				<view class="submit" @click="submitBtn">
					<text>complete</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		$request,$totast,url,urlPath,filesUrl
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		data() {
			return {
				type: 'center',
				list: [],
				activeIndex: null
			};
		},
		computed:{
			filesUrl1(){
				return filesUrl
			}
		},
		methods: {
			async submitBtn(){
				let res = await $request("userUpdate", {avatar:this.list[0].url})
				// console.log(res)
				$totast(res.data.message)
				if(res.data.code==200){
					this.$refs.popup.close()
					this.$emit('updateData')
				}
			},
			open(options = {
				type: 'center'
			}) {
				this.type = options.type;
				this.$refs.popup.open()
			},
			async upload() {
				uni.chooseImage({
					count: 1,
					success: async res => {
						console.log(res.tempFiles[0]);
						let token = uni.getStorageSync('token');
						uni.uploadFile({
							url: `${url}/api/upload`,
							filePath: res.tempFilePaths[0],
							header:{
								// "Content-Type":"application/json",
								"Authorization":token?`${token}`:'',
							},
							name: "image",
							formData: {},
							success: async res1 => {
								// console.log(res1);
								let avatar = JSON.parse(res1.data);
								if (avatar.code === 200) {
									let imgUrl= `${avatar.data.path}`
									// console.log(imgUrl,avatar)
									this.list.push({url:imgUrl})
									// this.transfer_voucher = avatar.data.src;
								}
							},
						});
					},
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../static/default.less");

	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;
	}

	.popup-content {
		width: 666rpx;
		// height: 1118rpx;
		max-height: 800rpx;
		// overflow-y: auto;
		background: #000000;
		box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		border-radius: 61rpx 61rpx 61rpx 61rpx;
		border: 4rpx solid;
	}

	.popup-content {
		position: relative;

		padding-top: 52rpx;
		padding-bottom: 52rpx;

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

		.list {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin-bottom: 52rpx;
			box-sizing: border-box;
			padding: 0 26rpx;

			.item {
				width: 140rpx;
				height: 140rpx;
				background: #111111;
				border-radius: 18rpx 18rpx 18rpx 18rpx;
				// border: 1rpx solid #999999;
				margin-right: 17rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}

			.upload {
				.flex-center;
				border: 1rpx solid #999999;

				image {
					width: 30rpx;
				}
			}

			.active {
				border: 1px solid #9DFE00;
			}
		}

		.submit {
			width: 526rpx;
			height: 88rpx;
			background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
			border-radius: 44rpx 44rpx 44rpx 44rpx;
			margin: 0 auto;
			color: #000000;
			font-size: 31rpx;
			.flex-center;
		}

	}
</style>