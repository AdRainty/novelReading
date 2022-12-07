<template>
	<view>
		<section class="aui-flexView">
			<section class="aui-scrollView">
				<div class="aui-callUser-head b-line">
					<div class="aui-callUser-user">
						<image mode='widthFix' src="../../static/usercenter/images/user-logo-001.png" alt=""></image>
					</div>
					<div class="aui-callUser-title">
						<h2>点击登录</h2>
					</div>
				</div>
				<div class="divHeight b-line"></div>
				<div class="aui-course-list">
					<a href="javascript:;" class="aui-flex b-line">
						<div class="aui-cou-img">
							<image mode='widthFix' src="../../static/usercenter/images/icon-call-001.png" alt=""></image>
						</div>
						<div class="aui-flex-box">
							<h2>我的钱包</h2>
						</div>
						<div class="aui-arrow">
							<p>0书豆 1张书券</p>
						</div>
					</a>
					<a href="javascript:;" class="aui-flex b-line">
						<div class="aui-cou-img">
							<image mode='widthFix' src="../../static/usercenter/images/icon-call-002.png" alt=""></image>
						</div>
						<div class="aui-flex-box">
							<h2>书豆充值</h2>
						</div>
						<div class="aui-arrow">
							<button>充值</button>
						</div>
					</a>
					<a href="javascript:;" class="aui-flex ">
						<div class="aui-cou-img">
							<image mode='widthFix' src="../../static/usercenter/images/icon-call-003.png" alt=""></image>
						</div>
						<div class="aui-flex-box">
							<h2>开通会员</h2>
						</div>
						<div class="aui-arrow">
							<button>开通</button>
						</div>
					</a>
					<div class="divHeight"></div>
					<a href="javascript:;" class="aui-flex b-line">
						<div class="aui-cou-img">
							<image mode='widthFix' src="../../static/usercenter/images/icon-call-004.png" alt=""></image>
						</div>
						<div class="aui-flex-box">
							<h2>我的签到</h2>
						</div>
						<div class="aui-arrow">
							<p>已签到</p>
						</div>
					</a>

					<a href="javascript:;" class="aui-flex b-line">
						<div class="aui-cou-img">
							<image mode='widthFix' src="../../static/usercenter/images/icon-call-005.png" alt=""></image>
						</div>
						<div class="aui-flex-box">
							<h2>打赏记录</h2>
						</div>
						<div class="aui-arrow">

						</div>
					</a>
					<a href="javascript:;" class="aui-flex b-line">
						<div class="aui-cou-img">
							<image mode='widthFix' src="../../static/usercenter/images/icon-call-006.png" alt=""></image>
						</div>
						<div class="aui-flex-box">
							<h2>我的评论</h2>
						</div>
						<div class="aui-arrow">

						</div>
					</a>
					<a href="javascript:;" class="aui-flex b-line">
						<div class="aui-cou-img">
							<image mode='widthFix' src="../../static/usercenter/images/icon-call-007.png" alt=""></image>
						</div>
						<div class="aui-flex-box">
							<h2>我的收藏</h2>
						</div>
						<div class="aui-arrow">

						</div>
					</a>
				</div>
			</section>
			<footer class="aui-footer aui-footer-fixed">
				<a href="javascript:;" class="aui-tabBar-item "  v-on:click="showBookStore()">
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
				<a href="javascript:;" class="aui-tabBar-item aui-tabBar-item-active">
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
	@import '../../static/usercenter/css/style.css';
</style>
