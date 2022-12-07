<template>
	<view>
		<view class="status_bar" style="height: var(--status-bar-height); width: 100%;"></view>
		<section class="aui-flexView">
			<header class="aui-navBar aui-navBar-fixed">
				<div class="aui-center">
					<div class="aui-search-box">
						<i class="icon icon-search"></i>
						<input type="text" placeholder="系统">
					</div>
				</div>
			</header>
			<section class="aui-scrollView">
				<div class="aui-flex aui-flex-head">
					<a href="javascript:;" class="aui-flex-box active">精选</a>
					<a href="javascript:;" class="aui-flex-box">专区</a>
					<a href="javascript:;" class="aui-flex-box">男频</a>
					<a href="javascript:;" class="aui-flex-box">女频</a>
					<a href="javascript:;" class="aui-flex-box">爆款</a>
				</div>
				<div class="m-slider" data-ydui-slider>
					<div class="slider-wrapper">
						<div class="slider-item">
							<a href="javascript:;">
								<image mode='widthFix' src="../../static/bookStore/images/banner.png" alt=""></image>
							</a>
						</div>
						<div class="slider-item">
							<a href="javascript:;">
								<image mode='widthFix' src="../../static/bookStore/images/banner.png" alt=""></image>
							</a>
						</div>
						<div class="slider-item">
							<a href="javascript:;">
								<image mode='widthFix' src="../../static/bookStore/images/banner.png" alt=""></image>
							</a>
						</div>
						<div class="slider-item">
							<a href="javascript:;">
								<image mode='widthFix' src="../../static/bookStore/images/banner.png" alt=""></image>
							</a>
						</div>
						<div class="slider-item">
							<a href="javascript:;">
								<image mode='widthFix' src="../../static/bookStore/images/banner.png" alt=""></image>
							</a>
						</div>
					</div>
					<div class="slider-pagination"></div>
				</div>
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
						<div class="aui-palace-grid-text">
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
				<div class="divHeight"></div>
				<div class="aui-book-list">
					<h5>网友们都在看的小说</h5>
					<a href="javascript:;" class="aui-flex" v-on:click="showBookDetail">
						<div class="aui-book-img">
							<image mode='widthFix' src="../../static/bookStore/images/book5.png" alt=""></image>
						</div>
						<div class="aui-flex-box">
							<h2>作业长期 <em>9.9分</em></h2>
							<p>《文化苦旅》是于秋生的第一个散文集所有的作品主要包括了俩部分一部分是历史文学</p>
							<h3><i>于秋生著</i> <em>加入书架</em></h3>
						</div>
					</a>
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
				
			}
		},
		methods: {
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
			}
			
		}
	}
</script>

<style>
	@import '../../static/bookStore/css/style.css';

</style>
