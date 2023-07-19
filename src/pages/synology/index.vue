<template>
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
    />
    <van-field
      v-model="code"
      type="code"
      name="动态码"
      label="动态码"
      placeholder="动态码"
    />
    <div style="margin: 16px">
      <van-button round block type="info" @click="handleSubmit"
        >提交</van-button
      >
    </div>
  </van-cell-group>
</template>

<script lang="ts">
import { get } from "@/utils/request";

export default {
  data() {
    return {
      username: "",
      password: "",
      code: "",
    };
  },
  methods: {
    asyncSubmitForm() {
      get<UserInfo>("/auth.cgi", {
        data: {
          api: "SYNO.API.Auth",
          version: 6,
          method: "login",
          account: "biubiubiu",
          passwd: "Jl940630!.",
        },
      }).then((data) => {
        uni.setStorageSync('did', data.did);
        uni.showToast({ title: '登录成功' });
        uni.navigateTo({url: '/pages/shareAlbums/index' })
      });
    },
    handleSubmit() {
      this.asyncSubmitForm();
    },
  },
};
</script>
