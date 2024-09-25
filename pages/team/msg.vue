<template>
	<view class="page-container">
		<view class="" style="position: fixed;top: 0;width: 100%;z-index: 10;background-color: black;">
			<DefaultHeader />
		</view>
		<view class="" style="opacity: 0;">
			<DefaultHeader />
		</view>
	
		<view class="img">
			<image src="../../static/photo.jpg" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	import OrderPopup from './components/orderPopup.vue';
	import Transfer from './components/transfer.vue';
	import InvitePopup from './components/InvitePopup.vue';
	import FixedCom from '@/components/fixed.vue';
	// import TransferPopup from './components/transferPopup.vue';
	export default {
		components: {
			DefaultHeader,DefaultFooter,Transfer,InvitePopup,OrderPopup,
			FixedCom
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
@import url("../../static/default.less");

	page {
		width: 100%;
		height: 100%;
		background: #010101;
		// background-color: #23222d;
		// background: linear-gradient(to bottom, #23212c,#040405);
		// background: linear-gradient( 141deg, #292734 0%, #000000 100%);
		// background: linear-gradient(to bottom, #ff7e5f, #feb47b, #86a8e7);

		// background: #201f29 url('../../static/photo.jpg') no-repeat 0% -10%;
		// background:#000000 url('../../static/photo.jpg') no-repeat top left;
		// background-size: 100% auto;
		// overflow-y: auto;
		// padding-top: 100rpx;
	}
	.img{
		width: 100%;
		z-index: -10;
		image{
			width: 100%;
		}
	}
</style>
