type RequestOptions = Omit<UniNamespace.RequestOptions, "url">;

type Response<T> = {
  success: boolean;
  error: {
    code: number;
  };
  data: T;
};

export const get = <T>(...args: [string, RequestOptions]) => {
  const [url, config] = args;
  return request<T>(url, { ...config, method: "GET" });
};

export const post = <T>(...args: [string, RequestOptions]) => {
  const [url, config] = args;
  return request<T>(url, { ...config, method: "POST" });
};

export const request = async <T>(
  url: string,
  config?: RequestOptions
): Promise<T> => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: "https://cloud.jweboy.asia:5443/webapi" + url,
      ...config,
      success({ data }) {
        const resp = data as Response<T>;
        if (resp.success) {
          return resolve(resp.data);
        }

        if (resp.error) {
          const { code } = resp.error;
          uni.showToast({ title: `请求错误：${code}`, icon: "error" });
          return reject(data);
        }
      },
      fail(err) {
        console.log(err);
        // const { msg } = err.data;
        // uni.showToast({ content: msg, type: 'fail' });
        // return reject(new Error(msg));
      },
    });
  });
};
