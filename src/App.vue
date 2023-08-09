<script lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

export default {
  name: "RootPage",
  // onLaunch(() => {
  //   // #ifdef MP-WEIXIN
  //   uni.showShareMenu({
  //     menus: ["shareAppMessage", "shareTimeline"],
  //   });
  //   // #endif
  // });
};

// // onShow(() => {
// //   console.log("App Show");

// // });
// // onHide(() => {
// //   console.log("App Hide");
// // });
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

page {
  height: 100vh;
  background-color: #efefef;
}
scroll-view {
  height: 100%;
}
</style>
