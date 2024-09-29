<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 20 20 " type="center" :mask-click="false">
			<view class="" style="padding-bottom: 20rpx;">
				<view class="popup-content">
					<view class="box">
						<view class="label">
							<text>waiting for other players to place bets</text>
						</view>
						<view class="num">
							<text>{{time}}</text>
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
				bool:false,
				options: {},
				interTime:null,
				time:''
			};
		},
		methods: {
			open(data) {
				this.interTime = null
				 clearInterval(this.interTime);
				this.options = data;
				if(this.options.num){
					if(this.bool == true){
						this.interTime = null
						 clearInterval(this.interTime);
						return
					}else{
						this.bool = true
						// this.timeFnc()
						let thisData = new Date().getTime()/1000;
						let oldData = new Date(this.options.num).getTime()/1000;
						
						if(oldData>thisData){
							this.time = (oldData-thisData).toFixed();
							this.timeFnc()
							
						}
						this.$nextTick(() => {
							this.$refs.popup.open(oldData-thisData)
						})
					}
				}else{
					this.bool =false;
					this.interTime = null;
					this.$nextTick(() => {
						this.$refs.popup.close()
					})
				}
			},
			async timeFnc() {
				this.interTime =setInterval(()=>{
					this.time--
					if(this.time<=1){
						this.interTime = null
						 clearInterval(this.interTime);
						 this.$refs.popup.close()
					}
				},1000) 
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