<script setup lang="ts">
// 引入轮播图
import XtxSwiper from '@/components/XtxSwiper.vue';
// 引入获取广告区域接口
import { getHomeBannerAPI } from '@/services/home'
// 引入小程序生命周期
import { onLoad } from '@dcloudio/uni-app';
//
import { ref } from 'vue'
//
import type { BannerItem } from '@/types/home'
//
import CustomNavbar from './components/CustomNavbar.vue'
//
import CategoryPanel from './components/CategoryPanel.vue'


const bannerList = ref<BannerItem[]>([])
// 定义获取广告区域接口方法
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
  console.log(res);
}
onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 轮播图 -->
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <!--  -->
  <CategoryPanel />
</template>

<style lang="scss">
page {
  background: #f7f7f7;
}
</style>
