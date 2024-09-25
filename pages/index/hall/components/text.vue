<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="bottom">
			<view class="" style="padding-bottom: 20rpx;">
				<view class="popup-content">
					<view class="close" @click="$refs.popup.close()">
						<image src="../../../../static/white_close.png" mode="widthFix"></image>
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
				richText:`<p>At the start of the game, assuming 1000 people participate in betting on the 10U table with each person betting 10U, the prize pool will have 10000U. The system will then randomly generate 1000 rewards from this 10000U to all participants in the game. Of course, the bonuses are also random; lucky winners may receive returns of 10 times or more, while others may still receive only 10U or even less.It is certain that the system never participates in game betting or claims rewards. All bonuses from the prize pool are distributed to the players, significantly increasing everyone's chances of winning. The platform ensures fairness.</p>
<p>Additionally, there are timed lucky airdrops in the lobby games (100-200 times per day), with a random number of airdrops each time.Every participant has a chance to receive additional airdrop rewards, with individual lucky airdrops ranging from 2-20 times their bet amount. The maximum return for users in a single round can reach up to 30-50 times their bet amount. The system deducts an administration fee totaling at 0.045% of total bets.&nbsp;</p>
<p><span style="font-family: impact, sans-serif;">Multiple Betting</span><br />Players can choose to place multiple bets for each round by selecting either 2X,5X or10X based on their base bet amount (to increase potential reward amounts). It should be noted that when choosing multiple bets, you will be considered as multiple participants and your rewards will accumulate accordingly. There is also an opportunity to trigger additional win rate rewards.&nbsp;</p>
<p><span style="font-family: impact, sans-serif;">Automatic Betting Function On/Off</span><br />Click on automatic betting,and the system will help you activate the automatic participation betting function. When the game has not started or finished in the current round, you can choose to place multiple automatic bets or modify multiple automatic bets. You can also click to cancel the automatic betting function.</p>
<p><br />U Lucky is a gaming platform that allows players to achieve significant wins with minimal wagers. It serves as a competition for wealth among affluent individuals, featuring fair random drop mechanics and an authentic reflection of real-life scenarios. Participants can challenge actual opponents and defeat them to earn substantial multiplier rewards. Click to participate in the game and start your wealth upgrade journey!</p>`
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
			transform: translate(-50%,0rpx);
			width: 60rpx;
			height: 60rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			// background-color: #FFFFFF;
			background: rgba(255, 255, 255, 0.4);
			border-radius: 50%;
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
			// padding-left: 40rpx;
			// padding-right: 40rpx;
			// padding-bottom: rpx;
			padding-top: 40rpx;
			background-color: #000;
			border: 1px solid #01A802;
			border-radius: 20rpx;
			.rich {
				width: 95%;
				margin: 0 auto;
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