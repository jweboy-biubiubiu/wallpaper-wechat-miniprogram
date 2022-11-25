<template>
  <scroll-view :scroll-y="true">
    <view class="grid-content" :style="data.gridStyle">
      <view v-for="item in data.images" :key="item._id" class="grid-item">
        <image @click="handlePictureClick(item.image_url)" :lazy-load="true" :src="item.image_url" class="image" />
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { reactive, onMounted, CSSProperties } from 'vue'

const systemInfo = uni.getSystemInfoSync();
const { screenWidth, screenHeight } = systemInfo;
const wrapperWidth = (screenWidth - 4*8) / 3
const wrapperHeight = (screenHeight - 4 * 8) / 4
let data = reactive<{
  images: Image[],
  gridStyle: CSSProperties
}>({ images: [], gridStyle: {} });

const handlePictureClick = (url: string) => {
  uni.navigateTo({ url: '/pages/detail/index?url=' + url })
}

onMounted(() => {
  uni.showLoading({ title: '加载中...' });
  uniCloud.callFunction({ name:'get_wallpaper_list' }).then(({ result }) => {
    let { items, total } = result;
    const columns = 3;
    const rows = Math.ceil(total / columns);
    // console.log(result)
    data.images = items;
    data.gridStyle = {
      'grid-template-columns': `repeat(${columns}, ${wrapperWidth}px)`,
      'grid-template-rows': `repeat(${rows}, ${wrapperHeight}px)`
    }
    uni.hideLoading();
  }).catch(() => {
    uni.hideLoading();
  })
})

</script>

<style lang="scss" scoped>
.grid-content {
  display: grid;
  grid-gap: 8px 8px;
  margin: 8px;
  height: 100%;
  .grid-item {
    overflow: hidden;
    border-radius: 8rpx;
    .image {
      width: 100%;
      height: 100%;
      background-color: #efefef;
    }
  }
}
</style>
