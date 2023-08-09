<template>
  <view>
    <!-- <image mode="aspectFill" :src="data.imgUrl" :style="data.imageStyle" />
  <view class="footer">
    <navigator :delta="1" open-type="navigateBack">
      <uni-icons
        type="arrow-left"
        :color="icon.color"
        :size="icon.size"
      ></uni-icons>
    </navigator>
    <uni-icons
      type="download-filled"
      :size="icon.size"
      :color="icon.color"
      @click="handleDownloadWrapper"
    ></uni-icons>
  </view> -->
  </view>
</template>

<!-- <script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { reactive, computed } from "vue";
import UniIcons from "@/components/uni-ui/uni-icons/index.vue";

const systemInfo = uni.getSystemInfoSync();
const { screenWidth, screenHeight } = systemInfo;

let data = reactive({ imgUrl: "", imageStyle: {} });
// const refererPlicyUrl = 'https://images.weserv.nl?url='
const icon = { color: "#fff", size: 30 };

onLoad((option) => {
  data.imgUrl = option.url as string;
  data.imageStyle = {
    // backgroundImage: `url(${data.imgUrl})`,
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    width: `${screenWidth}px`,
    height: `${screenHeight}px`,
  };
});

const handleDownloadWrapper = async () => {
  try {
    uni.showLoading({ title: "下载中..." });
    try {
      const res = await uni.getImageInfo({ src: data.imgUrl });
      if (res.errMsg === "getImageInfo:ok") {
        await uni.saveImageToPhotosAlbum({ filePath: res.path });
        uni.hideLoading();
      }
    } catch (err) {
      uni.hideLoading();
    }
  } catch (error) {
    uni.hideLoading();
  }
};
</script> -->

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 32rpx;
  width: 100%;
  box-sizing: border-box;
}
</style>
