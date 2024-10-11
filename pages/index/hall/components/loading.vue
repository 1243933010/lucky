<template>
	<view>
		<!-- <uni-popup ref="popup" borderRadius="20 20 20 20 " type="center" > -->
			<view class="fixed" v-show="showBool">
				<view class="" style="padding-bottom: 20rpx;">
					<view class="popup-content">
						<view class="box">
							<view class="label">
								<text>Waiting for others to place bets.</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		<!-- </uni-popup> -->
		<Popup ref="popupRef" />
	</view>
</template>

<script>
	import Popup from './dialog.vue';
	import {
		$request,
		$totast
	} from "@/utils/request";
	export default {
		name: "defaultPopup",
		components:{Popup},
		data() {
			return {
				showBool:false,
				bool:false,
				options: {},
				interTime:null,
				time:'',
				game_id:''
			};
		},
		methods: {
			// async getGameResult() {
			// 	let res = await $request('gameResult', {
			// 		game_id: this.game_id
			// 	});
			// 	if (res.data.code == 200) {
			// 		this.$refs.popupRef.open(res.data.data)
			// 	}
			// 	// console.log(res)
			// },
			open(game_id) {
				this.game_id = game_id;
				 this.$nextTick(()=>{
					 // this.$refs.popup.open()
					 this.showBool = true;
				 })
				
			},
			close(){
				// this.$refs.popup.close()
				 this.showBool = false;
			},
			
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
.fixed{
		position: fixed;
		width: 100%;
		// background: red;
		min-height: 400rpx;
		top: 25%;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}


	.popup-content {
		background: rgba(0, 0, 0, 0.4);
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: 100%;
		border-radius: 20rpx;
		.box{
			.flex-column;
			box-sizing: border-box;
			padding: 60rpx 50rpx;
			.label{
				font-size: 26rpx;
				margin-bottom: 60rpx;
			}
			.num{
				font-size: 70rpx;
				font-weight: 600;
				text-align: center;
			}
		}
	}
</style>