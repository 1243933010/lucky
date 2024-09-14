<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="bottom">
			<view class="" style="background: #000000;padding-bottom: 20rpx;">
				<view class="popup-content">
					<view class="close" @click="$refs.popup.close()">
						<image src="@/static/close.png" mode="widthFix"></image>
					</view>
					<view class="form">
						<view class="rich">
							<view class="box">
								<text>112111</text>
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
				options: {}
			};
		},
		methods: {
			open(data) {
				this.options = data;
				console.log(data)
				if (!data) {
					this.dataList = [{
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
					]
				}
				this.$nextTick(() => {
					this.$refs.popup.open()
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
		// height: 819rpx;
		background: url('../../../../static/text_bk.png') no-repeat 100% 20%/cover;
		// box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		// border-radius: 61rpx 61rpx 0rpx 0rpx;
		// border: 4rpx solid;
		// margin-bottom: 20rpx;
	}

	.popup-content {
		position: relative;
		width: 100%;
		padding-top: 250rpx;

		.close {
			position: absolute;
			left: 50%;
			top: -90rpx;

			image {
				width: 43rpx;
			}
		}

		.form {
			width: calc(100% - 20rpx);
			min-height: 800rpx;
			margin: 0 auto;
			box-sizing: border-box;
			padding-left: 40rpx;
			padding-right: 40rpx;
			// padding-bottom: rpx;
			padding-top: 40rpx;
			
			border: 1px solid #01A802;
			border-radius: 20rpx;
			.rich {
				width: 100%;

				.box {
					color: white;
					color: #999999;
					font-size: 24rpx;
				}
			}
		}


	}
</style>