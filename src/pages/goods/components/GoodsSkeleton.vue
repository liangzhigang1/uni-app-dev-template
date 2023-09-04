<template name="skeleton">
  <view class="sk-container">
    <scroll-view :scroll-y="true" class="viewport" :enable-back-to-top="true">
      <view class="goods">
        <view class="preview">
          <swiper :circular="true" :current="0" :autoplay="false">
            <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
              <image mode="aspectFill" class="sk-image"></image>
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta">
          <view class="price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-565 sk-text">29.90</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-647 sk-text">云珍·轻软旅行长绒棉方巾 </view>
          <view class="desc sk-transparent sk-text-0-0000-81 sk-text"> 轻巧无捻小方巾，旅行便携 </view>
        </view>
        <view class="action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-114 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-915 sk-text"> 请选择商品规格 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-789 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-677 sk-text"> 请选择收获地址 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle"></view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar" style="padding-bottom:0px">
      <view class="icons">
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>收藏</button>
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle" open-type="contact">
          <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>客服 </button>
        <navigator class="icons-button sk-transparent" open-type="switchTab">
          <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>购物车 </navigator>
      </view>
      <view class="buttons">
        <view class="addcart sk-transparent sk-text-32-0513-876 sk-text" style="background-position-x: 50%;"> 加入购物车 </view>
        <view class="buynow sk-transparent sk-text-32-0513-101 sk-text" style="background-position-x: 50%;"> 立即购买 </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
    color: transparent !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-565 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 76.0870rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-647 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-0-0000-81 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 23.5507rpx;
    position: relative !important;
  }
.sk-text-14-2857-114 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-915 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-789 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-677 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-32-0513-876 {
    background-image: linear-gradient(transparent 32.0513%, #EEEEEE 0%, #EEEEEE 67.9487%, transparent 0%) !important;
    background-size: 100% 70.6522rpx;
    position: relative !important;
  }
.sk-text-32-0513-101 {
    background-image: linear-gradient(transparent 32.0513%, #EEEEEE 0%, #EEEEEE 67.9487%, transparent 0%) !important;
    background-size: 100% 70.6522rpx;
    position: relative !important;
  }
.sk-button {
    color: #EFEFEF !important;
    background: #EFEFEF !important;
    border: none !important;
    box-shadow: none !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>
