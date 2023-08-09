module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    uni: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  // 解析vue文件
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    // "no-console": import.meta.env.MODE === "production" ? "off" : "off",
    // "no-debugger": import.meta.env.MODE === "production" ? "error" : "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.vue", "*.d.ts"],
      rules: {
        "no-undef": "off",
        "no-unused-vars": "off",
      },
    },
  ],
};
