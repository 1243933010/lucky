<template>
	<view class="page-container">
		<DefaultHeader />

		<view class="fqas">
			<view class="page-name">FQAS</view>
			<view class="desc">Rolade is the fastest blockchain in the world and the fastest growing ecosystem in
				crypto,with over 800 projects spanning DeFi, NFTs, Web3 and more.</view>

			<uni-collapse accordion>
				<uni-collapse-item :title="item.title" :thumb="item.thumb" v-for="item in list" :key="item.id">
					<view class="collapse-con">
						<text>{{item.content}}</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	export default {
		components: {
			DefaultHeader,
		},
		data() {
			return {
				list: [{
						id: 0,
						thumb: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
						title: "FQAFQAFQAFQ1",
						content: "Rolade is the fastest blockchain in the world and the fastest growing ecosystem in crypto,with over 800 projects spanning DeFi, NFTs, Web3 and more."
					},
					{
						id: 1,
						thumb: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
						title: "FQAFQAFQAFQ2",
						content: "Rolade is the fastest blockchain in the world and the fastest growing ecosystem in crypto,with over 800 projects spanning DeFi, NFTs, Web3 and more."
					},
					{
						id: 2,
						thumb: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
						title: "FQAFQAFQAFQ3",
						content: "Rolade is the fastest blockchain in the world and the fastest growing ecosystem in crypto,with over 800 projects spanning DeFi, NFTs, Web3 and more."
					},
					{
						id: 3,
						thumb: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
						title: "FQAFQAFQAFQ4",
						content: "Rolade is the fastest blockchain in the world and the fastest growing ecosystem in crypto,with over 800 projects spanning DeFi, NFTs, Web3 and more."
					}
				]
			};
		},
		mounted(){
			this.getFaqs();
		},
		methods:{
			async getFaqs(){
				let res = await $request('faq',{});
				console.log(res)
				if(res.data.code==200){
					// this.userInfo = res.data.data;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");

	page {
		height: 100%;
		background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
	}

	.fqas {
		padding: 0 60rpx;

		.page-name {
			margin-top: 150rpx;
			font-weight: 800;
			font-size: 105rpx;
			color: #FFFFFF;
			line-height: 0.9;
		}

		.desc {
			margin-top: 30rpx;
			font-size: 28rpx;
			color: #C2C2C2;
			line-height: 1.78;
		}

		/deep/.uni-collapse {
			margin-top: 34px;
			background-color: transparent;

			.uni-collapse-item {
				margin-top: 18rpx;
				background-color: #1D1B26;

				.uni-collapse-item__title {
					border: none;

					.uni-collapse-item__title-wrap {
						.uni-collapse-item__title-box {
							background-color: transparent;
							color: #fff;
						}
					}
				}

				.uni-collapse-item__wrap {
					background-color: transparent;

					.uni-collapse-item__wrap-content {
						border: none;
						color: #fff;

						.collapse-con {
							padding: 20rpx;
						}
					}
				}
			}
		}
	}
</style>