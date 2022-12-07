<template>
	<view class="status_bar" style="height: var(--status-bar-height); width: 100%;"></view>
	<view>
		<section class="aui-flexView">
			<header class="aui-navBar aui-navBar-fixed">
				<div class="aui-center aui-center-clear">
					<div class="aui-head-nav">
						<a href="javascript:;" v-on:click="showBookTrend()"> 推荐</a>
						<a href="javascript:;" class="aui-active-hover">关注</a>
					</div>
				</div>
				<a href="javascript:;" class="aui-navBar-item">
					<i class="icon icon-add"></i>
					<i class="icon icon-search"></i>
				</a>
			</header>
			<section class="aui-scrollView">
				<div class="aui-link-list">
					<a href="javascript:;" class="aui-link-item">
						<div class="aui-flex">
							<div class="aui-ges-user">
								<image mode='widthFix' src="../../static/trends/images/user-logo-000.png" alt=""></image>
							</div>
							<div class="aui-flex-box">
								<h3>有书故事</h3>
								<p>52分钟</p>
							</div>
							<div class="aui-more-icon">
								<i class="icon icon-more"></i>
							</div>
						</div>
						<div class="aui-flex" style="padding-top:2px;">
							<div class="aui-flex-box">
								<h4>有故事书:大学老师玩转短视频大学老师玩转短视频</h4>
								<p>在有故事书的，遇见书友们自己的故事，上一期，跟我们见面的书友是不愿意让孩子瞧不起自己而是一年怒听100多本书</p>
							</div>
							<div class="aui-book-img">
								<image mode='widthFix' src="../../static/trends/images/ad-text1.png" alt=""></image>
							</div>
						</div>
						<div class="aui-flex" style="padding-top:0">
							<div class="aui-flex-box">
								<span> <i class="icon icon-dz"></i>192</span>
								<span> <i class="icon icon-pl"></i>290</span>
							</div>
						</div>
						<div class="divHeight"></div>
					</a>
				</div>
				<div style="height:53px;"></div>
			</section>
			<footer class="aui-footer aui-footer-fixed">
				<a href="javascript:;" class="aui-tabBar-item " v-on:click="showBookStore()">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-loan"></i>
						</span>
					<span class="aui-tabBar-item-text">书城</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item ">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-credit"></i>
						</span>
					<span class="aui-tabBar-item-text" v-on:click="showBookCatalog()">分类</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item aui-tabBar-item-active">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-credit"></i>
						</span>
					<span class="aui-tabBar-item-text">动态</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item " v-on:click="showBookShelf()">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-ions"></i>
						</span>
					<span class="aui-tabBar-item-text">书架</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item " v-on:click="showUserCenter()">
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
	@import '../../static/trends/css/style.css';
</style>
