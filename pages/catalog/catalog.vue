<template>
	<view>
		<view class="status_bar" style="height: var(--status-bar-height); width: 100%;"></view>
		<section class="aui-flexView">
			<header class="aui-navBar aui-navBar-fixed b-line">
				<a href="javascript:;" class="aui-navBar-item">
					<i class="icon icon-return"></i>
				</a>
				<div class="aui-center">
					<span class="aui-center-title">品类</span>
				</div>
				<a href="javascript:;" class="aui-navBar-item">
					<i class="icon icon-sys"></i>
				</a>
			</header>
			<section class="aui-scrollView">
				<div class="aui-palace">
					<a href="javascript:;" class="aui-palace-grid aui-flex" v-on:click="showBookItem()">
						<div class="aui-flex-box">
							<h2>礼物</h2>
							<p>专治送礼困难户</p>
						</div>
						<div class="aui-flex-img">
							<image mode='widthFix' src="../../static/catalog/images/icon-pl-001.png" alt=""></image>
						</div>
					</a>
					<a href="javascript:;" class="aui-palace-grid aui-flex" v-on:click="showBookItem()">
						<div class="aui-flex-box">
							<h2>家居</h2>
							<p>有爱和你们才算有家</p>
						</div>
						<div class="aui-flex-img">
							<image mode='widthFix' src="../../static/catalog/images/icon-pl-002.png" alt=""></image>
						</div>
					</a>
				</div>
			</section>
			<footer class="aui-footer aui-footer-fixed">
				<a href="javascript:;" class="aui-tabBar-item " v-on:click="showBookStore()">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-loan"></i>
						</span>
					<span class="aui-tabBar-item-text">书城</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item  aui-tabBar-item-active">
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
			},
			showBookItem(){
				uni.navigateTo({
					url: '/pages/catalog/item'
				})
			}
			
		}
	}
</script>

<style>
	@import '../../static/catalog/css/style.css'

</style>
