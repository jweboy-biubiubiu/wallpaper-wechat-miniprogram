<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(() => {
  // #ifdef MP-WEIXIN
  uni.showShareMenu({
    menus: ["shareAppMessage", "shareTimeline"]
  });
  // #endif
});

// onShow(() => {
//   console.log("App Show");
  
// });
// onHide(() => {
//   console.log("App Hide");
// });
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
