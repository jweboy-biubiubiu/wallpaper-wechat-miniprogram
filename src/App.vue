<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { onMounted } from "vue";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
  uni.showShareMenu({
    menus: ["shareAppMessage", "shareTimeline"]
  });
  uniCloud.init({
    provider: 'aliyun',
    spaceId: '5f77682f-ccf4-4de7-aeb3-d36a85f3373c',
    clientSecret: '5LHi8F/ZbCTxHBkZ6HeekA=='
  })
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
  page {
    height: 100vh;
    background-color:#1c1f23;
  }
  scroll-view {
    height: 100%;
  }
</style>
