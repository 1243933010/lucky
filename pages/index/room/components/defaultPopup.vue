<template>
	<view>
		<uni-popup ref="popup" borderRadius="20 20 0 0 " type="bottom">
			<view class="popup-content">
				<view class="close" @click="$refs.popup.close()">
					<image src="../../../../static/close.png" mode="widthFix"></image>
				</view>
				<view class="title">
					<text>Table number</text>
				</view>
				
				<view class="password">
					<view class="radio">
						<view class="item" v-for="(item,index) in 6" :key="index">
							<text>{{passwordList[index]||''}}</text>
						</view>
					</view>
					<view class="number">
						<view class="item"v-for="(item,index) in numList" :key="index">
							<view @click="changeNum(item)" v-if="item" :class="['3','6','9'].includes(item)?'no-right':['0'].includes(item)?'no-bottom':['Del'].includes(item)?'no-border':''">
								{{item}}
							</view>
						</view>
					</view>
				</view>
			</view>
	<!-- </view> -->
	</uni-popup>
	</view>
</template>

<script>
	export default {
		name: "defaultPopup",
		props:{
		},
		data() {
			return {
				type: 'center',
				passwordList:[],
				numList:[
					'1','2','3','4','5','6','7','8','9','','0','Del'
				],
			};
		},
		methods: {
			open(options = {type: 'center'}) {
				this.type = options.type;
				this.passwordList = []
				this.$refs.popup.open()
			},
			changeNum(item){
				if(item=='Del'){
					this.passwordList.splice(this.passwordList.length-1,1)
					this.$emit('listenData',this.passwordList)
					return
				}
				if(item&&item!=='Del'&&this.passwordList.length<=5){
					this.passwordList.push(item)
					this.$emit('listenData',this.passwordList)
				}
				if(this.passwordList.length==6){
					this.$emit('listenData',this.passwordList)
					this.$refs.popup.close()
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/ .uni-popup__wrapper {
		border-radius: 25rpx;
	}

	.popup-content {
		width: 750rpx;
		// height: 1118rpx;
		background: #000000;
		box-shadow: 0rpx -2rpx 9rpx 0rpx rgba(235, 235, 245, 0.302);
		border-radius: 61rpx 61rpx 61rpx 61rpx;
		border: 4rpx solid;
	}

	.popup-content {
		position: relative;
	
		padding-top: 52rpx;

		.close {
			position: absolute;
			right: 43rpx;
			top: 43rpx;

			image {
				width: 43rpx;
			}
		}

		.title {
			color: #FFFFFF;
			font-weight: 45rpx;
			font-weight: 600;
			margin-bottom: 61rpx;
			box-sizing: border-box;
			padding-left: 52rpx;
			padding-right: 52rpx;
		}

		.form {
			margin-bottom: 30rpx;
			box-sizing: border-box;
			padding-left: 52rpx;
			padding-right: 52rpx;
			.form-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 35rpx;
				.label {
					color: #AAAAAA;
					font-size: 24rpx;
				}

				.con {
					display: flex;
					flex-direction: row;
					align-items: center;
					image {
						width: 50rpx;
						margin-right: 15rpx;
					}

					text {
						color: #FFFFFF;
						font-size: 28rpxs;
					}
				}
			}
		}
		.password{
			width: 100%;
		
			
			.radio{
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding-left: 52rpx;
				padding-right: 52rpx;
				margin-bottom: 63rpx;
				.item{
					width: 70rpx;
					height: 70rpx;
					background: #222222;
					border-radius: 18rpx;
					color: white;
					font-size: 28rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.number{
			width: 100%;
			background-color: #000000;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			.item{
				
				width: 33%;
				
				color: white;
				font-weight: 28rpx;
				box-sizing: border-box;
				view{
					width: 100%;
					background-color: #181818;
					box-sizing: border-box;
					padding: 25rpx 0;
					display: flex;
					justify-content: center;
					align-items: center;
					border-right: 1px solid #fefefe;
					border-bottom: 1px solid #fefefe;
				}
				.no-right{
					border-right: none;
				}
				.no-bottom{
					border-bottom: none;
				}
				.no-border{
					border: none;
				}
			}
		}
	}
</style>