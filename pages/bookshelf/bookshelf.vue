<template>
	<view>
		<section class="aui-flexView">
			<header class="aui-navBar aui-navBar-fixed">
				<a href="javascript:;" class="aui-navBar-item">
					我的书架
				</a>
				<div class="aui-center">
					<span class="aui-center-title"></span>
				</div>
				<a href="javascript:;" class="aui-navBar-item">
					<i class="icon icon-search"></i>
					<i class="icon icon-more"></i>
				</a>
			</header>
			<section class="aui-scrollView">
				<div class="aui-call-box">
					<h1>最近阅读的书都会放在这里</h1>
				</div>
				<div class="aui-list-theme">
					<a href="javascript:;" class="aui-list-theme-item">
						<div class="aui-list-img">
							<image mode='widthFix' src="../../static/bookshelf/images/call-book-01.png" alt=""></image>
						</div>
						<div class="aui-list-title">
							<h3>桃花村的医生</h3>
							<div class="aui-flex">
								<div class="aui-flex-box">
									<span>连载</span>
								</div>
								<div class="aui-right-text">
									<span>未读</span>
								</div>
							</div>
						</div>
					</a>
				</div>
			</section>
			<footer class="aui-footer aui-footer-fixed">
				<a href="javascript:;" class="aui-tabBar-item " v-on:click="showBookStore">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-loan"></i>
						</span>
					<span class="aui-tabBar-item-text">书城</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item ">
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-credit"></i>
						</span>
					<span class="aui-tabBar-item-text">分类</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item  aui-tabBar-item-active" >
						<span class="aui-tabBar-item-icon">
							<i class="icon icon-ions"></i>
						</span>
					<span class="aui-tabBar-item-text">书架</span>
				</a>
				<a href="javascript:;" class="aui-tabBar-item ">
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
				uni.navigateTo({
					url: '/pages/index/index'
				})
			},
			// showBookCatalog(){
			// 	uni.navigateTo({
			// 		url: '/pages/catalog/catalog'
			// 	})
			// },
			showBookShelf(){
				uni.navigateTo({
					url: '/pages/bookshelf/bookshelf'
				})
			},
			// showUserCenter(){
			// 	uni.navigateTo({
			// 		url: '/pages/user/center'
			// 	})
			// },
			
		}
	}
</script>

<style>
	@import '../../static/bookshelf/css/style.css'

</style>
