import { REQUEST_URL } from "@/constants/common";

type RequestOptions = Omit<UniNamespace.RequestOptions, "url">;

type Response<T> = {
  success: boolean;
  error: {
    code: number;
  };
  data: T;
};

export const get = <T>(url: string, config?: RequestOptions) => {
  return request<T>(url, { ...config, method: "GET" });
};

export const post = <T>(url: string, config?: RequestOptions) => {
  return request<T>(url, { ...config, method: "POST" });
};

export const request = async <T>(
  url: string,
  config?: RequestOptions
): Promise<T> => {
  const sid = uni.getStorageSync("sid");
  if (sid) {
    (config!.data as Record<string, any>)._sid = sid;
  }

  // @ts-ignore
  await wx.cloud.init();
  uni.hideLoading();
  uni.showLoading({ title: "加载中..." });
  // @ts-ignore
  return wx.cloud
    .callContainer({
      config: {
        env: "prod-6gz7jgjed4c3a8ab", // 微信云托管的环境ID
      },
      path: url, // 填入业务自定义路径和参数，根目录，就是 /
      method: config?.method, // 按照自己的业务开发，选择对应的方法
      header: {
        "X-WX-SERVICE": "common", // xxx中填入服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称），在上述实践中是 demo
      },
      data: config?.data,
      // 其余参数同 wx.request
    })
    .then(({ data }: { data: { data: T } }) => {
      uni.hideLoading();
      return data.data;
    })
    .catch(() => {
      uni.hideLoading();
    });
  // return new Promise((resolve, reject) => {
  // @ts-ignore
  // uni.request({
  //   url: REQUEST_URL + url,
  //   ...config,
  //   success({ data }) {
  //     console.log(22, data);
  //     const resp = data as Response<T>;
  //     uni.hideLoading();
  //     return resolve(data);
  //     // if (resp.success) {
  //     //   return resolve(resp.data);
  //     // }
  //     // if (resp instanceof ArrayBuffer) {
  //     //   return resolve(resp);
  //     // }
  //     // if (resp.error) {
  //     //   const { code } = resp.error;
  //     //   uni.showToast({ title: `请求错误：${code}`, icon: "error" });
  //     //   // if (code === 119) {
  //     //   //   uni.reLaunch({ url: "/pages/synology/index" });
  //     //   //   return;
  //     //   // }
  //     //   return reject(data);
  //     // }
  //   },
  //   fail(err) {
  //     console.log(err);
  //     uni.hideLoading();
  //     // const { msg } = err.data;
  //     // uni.showToast({ content: msg, type: 'fail' });
  //     // return reject(new Error(msg));
  //   },
  // });
  // });
};
