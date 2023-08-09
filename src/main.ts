import { createSSRApp } from "vue";
import App from "./App.vue";

// let cloud = uniCloud.init({
//   provider: "aliyun",
//   spaceId: "5f77682f-ccf4-4de7-aeb3-d36a85f3373c",
//   clientSecret: "5LHi8F/ZbCTxHBkZ6HeekA==",
// });

export function createApp() {
  const app = createSSRApp(App);

  // app.config.globalProperties.cloud = cloud;

  return {
    app,
  };
}
