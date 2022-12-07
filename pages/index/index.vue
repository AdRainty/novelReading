<template>
	<view>
		<view class="status_bar" style="height: var(--status-bar-height); width: 100%;"></view>
		<section class="aui-flexView">
			<header class="aui-navBar aui-navBar-fixed">
				<!-- 搜索框 -->
				<uni-easyinput prefixIcon="search" v-model="value" placeholder="试试搜索书籍" class="aui-search-box" @confirm="input(value)"></uni-easyinput>
			</header>
			<section class="aui-scrollView">
				<!-- 轮播图 -->
				<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" field="content">
					<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
						<swiper-item v-for="(item, index) in 3" :key="index">
							<view class="swiper-item" :class="'swiper-item' + index">
								<text style="color: #fff; font-size: 32px;">{{index+1}}</text>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
				<div class="aui-palace aui-palace-one">
					<a href="javascript:;" class="aui-palace-grid">
						<div class="aui-palace-grid-icon">
							<image mode='widthFix' src="./../../static/bookStore/images/nav-001.png" alt=""></image>
						</div>
						<div class="aui-palace-grid-text">
							<h2>排行</h2>
						</div>
					</a>
					<a href="javascript:;" class="aui-palace-grid">
						<div class="aui-palace-grid-icon">
							<image mode='widthFix' src="./../../static/bookStore/images/nav-002.png" alt=""></image>
						</div>
						<div class="aui-palace-grid-text" v-on:click="showBookCatalog()">
							<h2>分类</h2>
						</div>
					</a>
					<a href="javascript:;" class="aui-palace-grid">
						<div class="aui-palace-grid-icon">
							<image mode='widthFix' src="./../../static/bookStore/images/nav-003.png" alt=""></image>
						</div>
						<div class="aui-palace-grid-text">
							<h2>新书</h2>
						</div>
					</a>
					<a href="javascript:;" class="aui-palace-grid">
						<div class="aui-palace-grid-icon">
							<image mode='widthFix' src="./../../static/bookStore/images/nav-004.png" alt=""></image>
						</div>
						<div class="aui-palace-grid-text">
							<h2>完结</h2>
						</div>
					</a>
					<a href="javascript:;" class="aui-palace-grid">
						<div class="aui-palace-grid-icon">
							<image mode='widthFix' src="./../../static/bookStore/images/nav-005.png" alt=""></image>
						</div>
						<div class="aui-palace-grid-text">
							<h2>书单</h2>
						</div>
					</a>
				</div>
				<div class="aui-flex aui-flex-pt-pb">
					<div class="aui-flex-box">
						<h1>本期主打</h1>
					</div>
				</div>
				<div class="aui-book-list">
					<view class="text" v-for="item in data">
						<a href="javascript:;" class="aui-flex"  v-on:click="showBookDetail()">
							<div class="aui-book-img">
								<image mode='widthFix' :src="item.src" alt=""></image>
							</div>
							<div class="aui-flex-box">
								<h2>{{ item.title }} <em>{{ item.score }}分</em></h2>
								<p>{{ item.detail }}</p>
								<h3><i>{{ item.author }}著</i></h3>
							</div>
						</a>
					</view>
				</div>
			</section>
			<footer class="aui-footer aui-footer-fixed">
				<a href="javascript:;" class="aui-tabBar-item aui-tabBar-item-active">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-loan"></i>
						</span>
					<span class="aui-tabBar-item-text">书城</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item " v-on:click="showBookCatalog()">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-credit"></i>
						</span>
					<span class="aui-tabBar-item-text">分类</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item " v-on:click="showBookTrend()">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-credit"></i>
						</span>
					<span class="aui-tabBar-item-text">动态</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item "  v-on:click="showBookShelf()">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-ions"></i>
						</span>
					<span class="aui-tabBar-item-text">书架</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item "  v-on:click="showUserCenter()">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-info"></i>
						</span>
					<span class="aui-tabBar-item-text">我的</span>
				</a>
			</footer>
		</section>
	</view>
</template>

<script>
	
	export default {
		data() {
			
			return {
				reload: false,
				status: 'more',
				value: '',
				placeholderStyle: "color:#2979FF;font-size:14px",
				styles: {
					color: '#2979FF',
					borderColor: '#2979FF'
				},
				info: [{
						colorClass: 'uni-bg-red',
						url: '../../static/bookStore/images/banner.png',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: '../../static/bookStore/images/banner.png',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: '../../static/bookStore/images/banner.png',
						content: '内容 C'
					}
				],
				modeIndex: -1,
				data: [],
				styleIndex: -1,
				current: 0,
				mode: 'default',
				dotsStyles: {},
				swiperDotIndex: 0,
			}
		},
		onLoad() {
			this.initData();
		},
		methods: {
			initData(){
				this.data = [];
				let data = [];
				for (var i = 0; i < 10; i++) {
					let item = {
						"title":"文化苦旅",
						"score": "9.9", 
						"detail": "《文化苦旅》是于秋生的第一个散文集所有的作品主要包括了俩部分一部分是历史文学", 
						"author": "于秋生", 
						"src" :"../../static/bookStore/images/book1.png"
					};
					this.data.push(item)
				}
				this.data = this.data.concat(data);
				uni.stopPullDownRefresh();
			},
			showBookDetail(){
				uni.navigateTo({
					url: '/pages/book/book'
				})
			},
			showBookStore(){
				uni.redirectTo({
					url: '/pages/index/index'
				})
			},
			showBookTrend(){
				uni.redirectTo({
					url: '/pages/trends/trends'
				})
			},
			showBookCatalog(){
				uni.redirectTo({
					url: '/pages/catalog/catalog'
				})
			},
			showBookShelf(){
				uni.redirectTo({
					url: '/pages/bookshelf/bookshelf'
				})
			},
			showUserCenter(){
				uni.redirectTo({
					url: '/pages/usercenter/usercenter'
				})
			},
			input(e) {
				uni.showToast({
					title: '输入内容：' + e,
					icon: 'none'
				});
				console.log('输入内容：', e);
			},
			change(e) {
				this.current = e.detail.current
			},
			clickItem(e) {
				this.swiperDotIndex = e
			}
			
		}
	}
</script>

<style>
	@import '../../static/bookStore/css/style.css';
</style>
<style lang="scss">
	.uni-mt-5 {
		margin-top: 5px;
	}
</style>
