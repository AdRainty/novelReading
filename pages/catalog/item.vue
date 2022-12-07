<template>
	<view>
		<view class="status_bar" style="height: var(--status-bar-height); width: 100%;"></view>
		<section class="aui-flexView">
			<header>
				<div class="tab-panel-item tab-active">
					<uni-section title="书籍分类" type="line">
						<view class="uni-px-5 uni-pb-5">
							<uni-data-checkbox mode="tag" v-model="radio1" :localdata="catalog"></uni-data-checkbox>
						</view>
					</uni-section>
					<uni-section title="书籍排序" type="line">
						<view class="uni-px-5 uni-pb-5">
							<uni-data-checkbox mode="tag" v-model="radio2" :localdata="level"></uni-data-checkbox>
						</view>
					</uni-section>
				</div>
			</header>
			
			<section class="aui-scrollView">
				<div class="aui-tab" data-ydui-tab>
					
					<div class="aui-book-list">
						<a href="javascript:;" class="aui-flex"  v-on:click="showBookDetail">
							<div class="aui-book-img">
								<image mode='widthFix' src="../../static/bookStore/images/book1.png" alt=""></image>
							</div>
							<div class="aui-flex-box">
								<h2>文化苦旅 <em>9.9分</em></h2>
								<p>《文化苦旅》是于秋生的第一个散文集所有的作品主要包括了俩部分一部分是历史文学</p>
								<h3><i>于秋生著</i> <em>加入书架</em></h3>
							</div>
						</a>
					</div>
					<div class="aui-book-list">
						<a href="javascript:;" class="aui-flex"  v-on:click="showBookDetail">
							<div class="aui-book-img">
								<image mode='widthFix' src="../../static/bookStore/images/book1.png" alt=""></image>
							</div>
							<div class="aui-flex-box">
								<h2>文化苦旅 <em>9.9分</em></h2>
								<p>《文化苦旅》是于秋生的第一个散文集所有的作品主要包括了俩部分一部分是历史文学</p>
								<h3><i>于秋生著</i> <em>加入书架</em></h3>
							</div>
						</a>
					</div>
				</div>
			</section>
		</section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio1: 0,
				radio2: 0,
				catalog: [
					{
						text: '全部',
						value: 0
					},
					{
						text: '传统武侠',
						value: 1
					},
					{
						text: '武侠幻想',
						value: 2
					},
					{
						text: '武侠同人',
						value: 3
					}
				],
				level: [
					{
						text: '热门',
						value: 0
					},
					{
						text: '评分',
						value: 1
					},
					{
						text: '字数',
						value: 2
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import '../../static/bookStore/css/style.css';
	
</style>

<style lang="scss">
	.text {
		font-size: 100px;
		color: #666;
		margin-top: 5px;
	}
	.uni-px-5 {
	    padding-left: 10px;
	    padding-right: 10px;
	}
	.uni-pb-5 {
	    padding-bottom: 10px;
	}

</style>

