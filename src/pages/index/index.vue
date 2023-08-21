<script setup lang="ts">
// 引入轮播图
// import XtxSwiper from '@/components/XtxSwiper.vue';
// 引入获取广告区域接口
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
// 引入小程序生命周期
import { onLoad } from '@dcloudio/uni-app';
// vue
import { ref } from 'vue'
// home类型
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
// CustomNavbar
import CustomNavbar from './components/CustomNavbar.vue'
// CategoryPanel
import CategoryPanel from './components/CategoryPanel.vue'
// HotPanel
import HotPanel from './components/HotPanel.vue'
// XtxGuess
// import XtxGuess from '@/components/XtxGuess.vue'
//
import type { XtxGuessInstance } from '@/types/components';
// 首页骨架屏
import PageSkeleton from './components/PageSkeleton.vue'


// 定义bannerList
const bannerList = ref<BannerItem[]>([])
// 定义获取广告区域接口方法
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 定义categoryList
const categoryList = ref<CategoryItem[]>([])
// 定义首页-前台分类接口-小程序
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 定义
const homeHotList = ref<HotItem[]>([])
// 定义首页-热门推荐接口-小程序
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  homeHotList.value = res.result
}

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
// 滚动触底事件
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

// 下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData() // 加载数据
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
  ]) // 关闭动画
  isTriggered.value = false
}

let isLoading = ref<boolean>(false)
// 小程序生命周期钩子函数-页面加载中
onLoad( async() => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <PageSkeleton v-if="isLoading" />
  <!-- 滚动容器 -->
  <template v-else>
    <scroll-view
      scroll-y
      @scrolltolower="onScrolltolower"
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      :refresher-triggered="isTriggered"
      >
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="homeHotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </scroll-view>
  </template>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
