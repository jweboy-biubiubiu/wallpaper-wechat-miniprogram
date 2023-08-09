<template>
  <view class="grid grid-cols-2 gap-2 px-2 py-2">
    <image
      v-for="item in data.images"
      :key="item.asset_id"
      :lazy-load="true"
      :src="item.url"
      class="w-full rounded-md"
      mode="aspectFill"
      @click="handlePictureClick(item.url)"
    />
  </view>
</template>

<script lang="ts">
export default {
  name: "PicturePage",
};
</script>

<script setup lang="ts">
import { get } from "@/utils/request";
import { onPullDownRefresh } from "@dcloudio/uni-app";
import { reactive, onMounted, CSSProperties } from "vue";

let data = reactive<{
  images: Image[];
  gridStyle: CSSProperties;
}>({ images: [], gridStyle: {} });

const asyncGetList = async () => {
  return get<{ resources: Image[] }>("/cloudinary/resources", {
    data: {
      max_results: 100,
    },
  }).then((res) => {
    data.images = res.resources;
  });
};

const handlePictureClick = (url: string) => {
  uni.previewImage({ urls: [url] });
  // uni.navigateTo({ url: "/pages/detail/index?url=" + url });
};

onMounted(() => {
  asyncGetList();
});

onPullDownRefresh(() => {
  asyncGetList().then(() => {
    uni.showToast({ title: "刷新成功" });
    uni.stopPullDownRefresh();
  });
});
</script>
