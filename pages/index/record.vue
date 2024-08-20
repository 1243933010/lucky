<template>
	<view class="page-container">
		<DefaultHeader />
		<view class="record">
			<view class="collapse">
				<view class="collapse-top">
					<view class="time">
						<text>08/19</text>
					</view>
					<view class="right">
						<view class="num">
							<text>121(+1.35%)</text>
						</view>
						<view class="arrow">
							
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <DefaultFooter /> -->
	</view>
</template>

<script>
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter
		},
		data() {
			return {
				list:[
					{time:'08/19',num:'2222222'}
				]
			};
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");

	page {
		height: 100%;
		// background-color: #040405;
		// background: linear-gradient( 0deg, #040405 0%, #23212c 100%);
		background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
	}

	.page-container {}
</style>