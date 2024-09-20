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
								<rich-text :nodes="richText"></rich-text>
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
				richText:`<p>Friend tables operate on an invitation mechanism,entry without an invitation is not allowed.<br />At the start of each game on a friend table with basic bet amount set at 10U and involving participation from 1000 people,the prize pool will be worth 10000 U.The system will then randomly generate 1000 rewards from this prize pool to distribute among all participants.Of course,the bonuses are also random,lucky winners may receive returns exceeding ten fold,yet some may still only get back their initial bet of 10 U or possibly even less.It is guaranteed that the systems does not participate in betting or claiming rewards.All bonuses from the pool are distributed to players,resulting in a significant increase in everyone's chances of winning.The platform ensures fairness.The systems deducts a total commission of 0 .03 % from all bets made without any lucky airdrops included.</p>
<p><span style="font-family: impact, sans-serif;">Creation</span><br />Create your own friend table by customizing settings such as table name, base bet amount,maximum capacity,dissolution time etc.,and invite friends through shared links to join your team and play together.The maximum number of friend tables one person can create is three.&nbsp;</p>
<p><span style="font-family: impact, sans-serif;">Joining</span><br />Enter friend tables using invitation links shared by friends or unique table numbers,and compete against real-time opponents for wealth accumulation games.</p>`
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
		background: url('../../../../static/text_bk.png') no-repeat 100% 5%/cover;
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
			max-height: 800rpx;
			overflow-y: auto;
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
					padding-bottom: 50rpx;
				}
			}
		}


	}
</style>