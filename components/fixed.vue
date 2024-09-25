<template>
	<view class="fixed-bk" :style="{'background':bkColor?bkColor:''}">
		<view class="con">
			<image src="@/static/ku2.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			bkColor:{
				default:'#000'
			}
		},
		data(){
			return{
				
			}
		},
		
	}
</script>

<style>
	.fixed-bk{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		
		display: flex;
		flex-direction: column-reverse;
		align-items: flex-end;
		.con{
			image{
				right: 0;
				width: 400rpx;
			}
		}
	}
</style>