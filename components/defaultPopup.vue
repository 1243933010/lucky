<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " :type="type" style="background-color: red;">
			<view class="popup-container">
				
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name:"defaultPopup",
		data() {
			return {
				type:'center'
			};
		},
		methods:{
			open(options={type:'center'}){
				this.type = options.type;
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/ .uni-popup__wrapper{
		border-radius: 25rpx;
	}
	.popup-container{
		width: 750rpx;
		height: 1118rpx;
		background: #000000;
		box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235,235,245,0.302);
		border-radius: 61rpx 61rpx 0rpx 0rpx;
		border: 4rpx solid;
		border-image: linear-gradient(180deg, rgba(68.00000354647636, 68.00000354647636, 68.00000354647636, 1), rgba(68.00000354647636, 68.00000354647636, 68.00000354647636, 0)) 4 4;
	}
</style>