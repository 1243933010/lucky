<template>
	<view class="page-container" @click.stop="changePicker">
		<view class="head">
			<view class="bk">
				<DefaultHeader />
				<view class="txt">
					<view class="title">
						<text>FRIEND'S</text>
					</view>
					<view class="label">
						<text>Create a friend table, invite your friends to play together or join your friend table Create a friend table, invite your friends to play together or join your friend table Create a friend table, invite your friends to play together or join your friend table</text>
					</view>
				</view>
			</view>
		</view>
		<view class="tab">
			<view class="container">
				<view class="box">
					<view class="item" :class="index==0?'item-active':''" @click="changeTab(0)">
						<view class="title">
							<text>Create a table</text>
						</view>
						<view class="active" v-if="index==0"></view>
					</view>
					<view class="item" :class="index==1?'item-active':''" @click="changeTab(1)">
						<view class="title">
							<text>Join Friend Table</text>
						</view>
						<view class="active" v-if="index==1"></view>
					</view>
				</view>
				<view class="content">
					<view class="create" v-if="index==0">
						<view class="form">
							<view class="form-input">
								<view class="title">
									<text>Table Name</text>
								</view>
								<view class="input">
									<input type="text" v-model="formData.name" placeholder="Enter your table name" />
								</view>
							</view>
							<view class="form-input">
								<view class="title">
									<text>amount of money</text>
								</view>
								<view class="input">
									<input type="number" v-model="formData.amount" placeholder="Enter an integer between 2 $and 100 $" />
								</view>
							</view>
							<view class="form-select" @click.stop="pickerBool=true">
								<view class="title">
									<text>Maximum capacity</text>
								</view>
								<view class="select">
									<input :disabled="true" type="text" v-model="formData.capacity" placeholder="10 to 100 people" />
								    <image src="../../../static/bottom_arrow.png" mode="widthFix"></image>
								</view>
								<view class="posi" v-if="pickerBool">
									<view class="box1">
										<view class="item" @click.stop="choosePicker(item)" v-for="(item,index) in array" :key="index">
											<text>{{item.label}}</text>
										</view>
										
									</view>
								</view>
							</view>
							<view class="form-tab">
								<view class="title">
									<text>Automatic dissolution</text>
								</view>
								<view class="box2">
									<view class="item"  v-for="(item,index) in timeList" :key="index" @click="formTabActive=index" :class="formTabActive==index?'form-active':''">
										<text>{{item}} hours</text>
									</view>
									<!-- <view class="item" @click="formTabActive=0" :class="formTabActive==0?'form-active':''">
										<text>24 hours</text>
									</view>
									<view class="item"  @click="formTabActive=1" :class="formTabActive==1?'form-active':''">
										<text>48 hours</text>
									</view> -->
								</view>
							</view>
							<view class="form-submit">
								<view class="btn" @click="createRoom">
									<text>Create</text>
								</view>
							</view>
						</view>
					</view>
					<view class="join" v-if="index==1">
						<view class="form">
							<view class="form-number">
								<view class="title"  @click.stop="pickerBool1=true">
									<text>Table number</text>
									<image src="../../../static/bottom_arrow.png" mode="widthFix"></image>
								</view>
								<view class="password">
									<view class="radio">
										<view class="item" @click="$refs.popup.open()" v-for="(item,index) in tableList" :key="index">
											<text>{{item||''}}</text>
										</view>
									</view>
								</view>
								<view class="posi" v-if="pickerBool1">
									<view class="box1">
										<view class="item" @click.stop="choosePicker1(item)" v-for="(item,index) in roomHistory" :key="index">
											<text>{{item.no}}</text>
										</view>
										
									</view>
								</view>
							</view>
							<view class="form-text">
								<text>or</text>
							</view>
							<view class="form-input">
								<view class="title">
									<text>Invitation link</text>
								</view>
								<view class="input">
									<input type="text" v-model="formData1.url" placeholder="Paste invitation link" />
								</view>
							</view>
							<view class="form-text2">
								<text>Choose any method to join a friend's table, and the table number/link is unique.</text>
							</view>
							<view class="form-submit">
								<view class="btn" @click="join">
									<text>Join in</text>
								</view>
							</view>
							</view>
					</view>
				</view>
			</view>
		</view>
		<DefaultPopup ref="popup" @listenData="listenData"></DefaultPopup>
	</view>
</template>

<script>
	import {
		$request,$totast
	} from "@/utils/request";
	import DefaultHeader from '@/components/defaultHeader.vue';
	import DefaultPopup from './components/defaultPopup.vue';
	export default {
		components: {
			DefaultHeader,DefaultPopup
		},
		data() {
			return {
				index:0,
				formData:{
					name:'',
					amount:'',
					capacity:'',
					auto_dissolution:''
				},
				formTabActive:0,
				array:[{label:'0-20',value:'20'},
				{label:'50',value:'50'},
				{label:'100',value:'100'},
				{label:'200',value:'200'}],
				pickerBool:false,
				timeList:['24','48'],
				tableList:['','','','','',''],
				formData1:{
					code:'',
					url:''
				},
				roomHistory:[],
				pickerBool1:false,
			};
		},
		mounted(){
			this.getRoomHistory();
			console.log('12345'.split(''))
		},
		onLoad(e){
			if(e.type){
				this.index = e.type;
			}else{
				this.index = 0;
			}
		},
		methods:{
			choosePicker1(item){
				this.tableList = item.no.split('')
			},
			listenData(data){
				// this.formData.pay_password = data.join('')
				// this.withdrawCreate()
				// console.log(data)
				if(data.length===6){
					data.forEach((val,index)=>{
						this.tableList[index] = data[index]
						this.$forceUpdate();
					})
				}
				
			},
			async join(){
				let obj = {};
				this.formData1.code = this.tableList.join('')
				if(this.formData1.code&&this.formData1.url&&this.formData1.code.length==6){
					obj.code = this.formData1.code;
				}else if(this.formData1.code&&!this.formData1.url&&this.formData1.code.length==6){
					obj.code = this.formData1.code;
				}else if(this.formData1.code&&this.formData1.url&&this.formData1.code.length!==6){
					obj.url = this.formData1.url;
				}else if(!this.formData1.code&&this.formData1.url){
					obj.url = this.formData1.url;
				}else {
					return
				}
				let res = await $request('roomJoin',obj);
				$totast(res.data.message)
				if(res.data.code==200){
					
				}
			},
			changeTab(ind){
				this.index = ind;
			},
			changePicker(e){
				this.pickerBool = false;
				this.pickerBool1 = false;
			},
			choosePicker(item){
				// let arr  = ['20','50','100','200']
				// console.log('111',item)
				this.formData.capacity = item.value
				this.pickerBool = false;
			},
			async createRoom(){
				let obj = {...this.formData}
				obj.auto_dissolution = this.formTabActive+1;
				let res = await $request('roomCreate',obj);
				$totast(res.data.message)
				if(res.data.code==200){
					setTimeout(()=>{
						uni.navigateTo({
							url:`/pages/index/friend/friend?id=${res.data.data.id}&type=create`
						})
					},1000)
				}
			},
			// roomHistory
			async getRoomHistory(){
				let res = await $request('roomHistory',{});
				console.log(res)
				if(res.data.code==200){
					this.roomHistory = res.data.data;
				}
			},
		}
	}
</script>



<style lang="less" scoped>
	@import url("../../../static/default.less");
	page{
		background-color: #0f0e13;
	}

	.page-container{
		.head{
			width: 100%;
			height: 578rpx;
			background: #292734;
			box-sizing: border-box;
			.bk{
				width: 100%;
				height: 100%;
				background:url('../../../static/room_bk.png') no-repeat 100% 100%/cover;
			}
			.txt{
				color: white;
				box-sizing: border-box;
				padding: 70rpx 46rpx 0 46rpx;
				.title{
					font-size: 70rpx;
					font-weight: 600;
					margin-bottom: 17rpx;
				}
				.label{
					font-size: 24rpx;
				}
			}
		}
		.tab {
			// width: 681rpx;
			height: 165rpx;
			margin: 0 auto;
			// background: #131413;
			// border: 1rpx solid #333333;
			// border-radius: 25rpx;
			// padding-bottom: 27rpx;
			// margin-bottom: 52rpx;
		
			// border: 1px solid #C2C2C2;
			// border-image: linear-gradient(180deg, rgba(68.00000354647636, 68.00000354647636, 68.00000354647636, 1), rgba(0, 0, 0, 0)) 2 2;
			.container {
				display: flex;
				flex-direction: column;
		
				.box {
					width: 100%;
					.flex-direction;
					// padding-left: 68rpx;
		
					.item {
						width: 50%;
						box-sizing: border-box;
						padding: 13rpx 34rpx;
						font-size: 34rpx;
						font-weight: 600;
						color: white;
						position: relative;
						display: flex;
						justify-content: center;
						align-items: center;
						.active {
							position: absolute;
							left: 0;
							bottom: 0;
							width: 100%;
							height: 5rpx;
							background: linear-gradient(146deg, #9DFE00 0%, #14D9E5 100%);
							border-radius: 17rpx;
						}
					}
		
					.item-active {
						box-sizing: border-box;
						border-top-right-radius: 25rpx;
						border-top-left-radius: 15rpx;
						border: 1px solid #333333;
						border-bottom: none;
						background-image: linear-gradient(55.53466052546843deg, #9DFE00 0%, #14D9E5 100%);
						-webkit-background-clip: text;
						background-clip: text;
						color: transparent;
		
					}
				}
		
				.content {
					width: 100%;
					box-sizing: border-box;
					padding: 63rpx 31rpx;
					.flex-direction;
					.create{
						width: 100%;
						box-sizing: border-box;
						padding: 0 68rpx;
						// background-color: red;
						.form{
							.form-input{
								margin-bottom: 35rpx;
							}
							.form-select{
								position: relative;
								margin-bottom: 36rpx;
							}
							.form-input,.form-select,.form-tab{
								
								.title{
									color: #FFFFFF;
									font-size: 28rpx;
									margin-bottom: 17rpx;
								}
								.input{
									background: #444444;
									height: 70rpx;
									width: 100%;
									display: flex;
									align-items: center;
									border-radius: 18rpx;
									input{
										min-width: 80%;
										color: #999999;
										font-size: 21rpx;
										padding-left: 17rpx;
									}
								}
								.select{
									display: flex;
									justify-content: space-between;
									align-items: center;
									background: #444444;
									height: 70rpx;
									width: 100%;
									display: flex;
									align-items: center;
									border-radius: 18rpx;
									box-sizing: border-box;
									padding: 0 17rpx;
									// position: relative;
									image{
										width: 28rpx;
									}
									input{
										min-width: 80%;
										color: #999999;
										font-size: 21rpx;
										// padding-left: 17rpx;
									}
									
								}
								.posi{
									position: absolute;
									z-index: 100;
									// bottom: 248rpx;
									left: 0;
									width: 100%;
									max-height: 1000rpx;
									overflow: hidden;
									.box1{
										width: 100%;
										background-color: #444444;
										border-bottom-left-radius: 18rpx;
										border-bottom-right-radius: 18rpx;
										// display: flex;
										// flex-direction: column;
										// align-items: center;
										.item{
											width: calc(100% - 27rpx);
											margin: 0 auto;
											height: 63rpx;
											// margin-bottom: 63rpx;
											color: #999999;
											font-size: 28rpx;
											display: flex;
											justify-content: center;
											align-items: center;
											border-bottom: 1px solid #666666;
										}
									}
								}
								.box2{
									margin-bottom: 140rpx;
									.flex-direction;
									.item{
										width: 175rpx;
										height: 70rpx;
										background: #000000;
										border-radius: 18rpx 18rpx 18rpx 18rpx;
										color: #999999;
										font-size: 21rpx;
										margin-right: 35rpx;
										.flex-center;
									}
									.form-active{
										border: 1px solid #9DFE00;
										background-image: linear-gradient(55.53466053deg, #9DFE00 0%, #14D9E5 100%);
										    -webkit-background-clip: text;
										    background-clip: text;
										    color: transparent;
									}
								}
								
							}
							.form-submit{
								.flex-center;
								padding-bottom: 80rpx;
								.btn{
									width: 526rpx;
									height: 88rpx;
									background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
									border-radius: 44rpx 44rpx 44rpx 44rpx;
									.flex-center;
									color: #000000;
									font-size: 31rpx;
								}
							}
						}
					}
					.join{
						width: 100%;
						box-sizing: border-box;
						padding: 0 68rpx;
						.form{
							.form-input{
								margin-bottom: 35rpx;
							}
							.form-select{
								position: relative;
								margin-bottom: 36rpx;
							}
							.form-text{
								.flex-center;
								color: #666666;
								font-size: 28rpx;
								margin-bottom: 35rpx;
								padding-top: 45rpx;
							}
							.form-text2{
								font-size: 24rpx;
								color: #AAAAAA;
								margin-bottom: 196rpx;
							}
							
							.password{
								width: 100%;
								
								.radio{
									width: 100%;
									display: flex;
									justify-content: space-between;
									align-items: center;
									box-sizing: border-box;
									// padding-left: 52rpx;
									// padding-right: 52rpx;
									
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
										// margin: 0 17rpx;
									}
								}
							}
							.form-number{
								position: relative;
								.posi{
									position: absolute;
									z-index: 100;
									// bottom: 248rpx;
									left: 0;
									top: 45rpx;
									width: 100%;
									max-height: 1000rpx;
									overflow: hidden;
									.box1{
										width: 100%;
										background-color: #444444;
										border-bottom-left-radius: 18rpx;
										border-bottom-right-radius: 18rpx;
										// display: flex;
										// flex-direction: column;
										// align-items: center;
										.item{
											width: calc(100% - 27rpx);
											margin: 0 auto;
											height: 63rpx;
											// margin-bottom: 63rpx;
											color: #999999;
											font-size: 28rpx;
											display: flex;
											justify-content: center;
											align-items: center;
											border-bottom: 1px solid #666666;
										}
									}
								}
							}
							.form-input,.form-number{
								.title{
									color: #FFFFFF;
									font-size: 28rpx;
									margin-bottom: 17rpx;
									width: 100%;
									.flex-space-between;
									image{
										width: 28rpx;
									}
								}
								.input{
									background: #444444;
									height: 70rpx;
									width: 100%;
									display: flex;
									align-items: center;
									border-radius: 18rpx;
									input{
										min-width: 80%;
										color: #999999;
										font-size: 21rpx;
										padding-left: 17rpx;
									}
								}
							}
							.form-submit{
								.flex-center;
								padding-bottom: 80rpx;
								.btn{
									width: 526rpx;
									height: 88rpx;
									background: linear-gradient( 146deg, #9DFE00 0%, #14D9E5 100%);
									border-radius: 44rpx 44rpx 44rpx 44rpx;
									.flex-center;
									color: #000000;
									font-size: 31rpx;
								}
							}
						}
					}
				}
			}
		}
		
	}
</style>
