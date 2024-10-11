<template>
	<view class="page-container">
		<DefaultHeader />

		<view class="fqas">
			<view class="page-name">FQAS</view>
			<view class="desc">{{faqInfo.text}}</view>

			<uni-collapse accordion>
				<uni-collapse-item :title="item.question" :thumb="item.thumb" v-for="item in faqInfo.list"
					:key="item.id">
					<view class="collapse-con">
						<text>{{item.answer}}</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</view>
		<DefaultFooter @share="$refs.invitePopup.open()" />
		<InvitePopup ref="invitePopup" />
	</view>
</template>

<script>
	import {
		$request,
		$totast
	} from "@/utils/request";
	import DefaultHeader from '../../components/defaultHeader.vue';
	import DefaultFooter from '../../components/defaultFooter.vue';
	import InvitePopup from '@/pages/team/components/InvitePopup.vue';
	export default {
		components: {
			DefaultHeader,
			DefaultFooter,
			InvitePopup
		},
		data() {
			return {
				faqInfo: {
					list: [],
					text: ''
				}
			};
		},
		mounted() {
			this.getFaqs();
		},
		methods: {
			async getFaqs() {
				let res = await $request('faq', {});
				console.log(res)
				if (res.data.code == 200) {
					this.faqInfo = res.data.data;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../static/default.less");

	page {
		height: 100%;
		// background: #201f29 url('../../static/login_bk.png') no-repeat 100% 100%;
		background: #000 url('../../static/ku.png') no-repeat 100% 100%/cover;
		background-size: 100% auto;
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

			.uni-collapse-item__title-text {
				width: 400rpx;
				span {
					width: 100%;
				}
			}

			.uni-collapse-item {
				margin-top: 18rpx;
				background-color: #1D1B26;

				.uni-collapse-item__title {
					border: none;

					.uni-collapse-item__title-wrap {
						.uni-collapse-item__title-box {
							background-color: transparent;
							color: #fff;
							// padding: 17rpx 20rpx;
							// height: 88rpx !important;
							// line-height: 88rpx !important;
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