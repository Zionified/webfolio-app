const path = require("path")

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    devServer: {
        proxy: {
            "/api/v1": {
                target: "https://zixuanzheng.com",
                changeOrigin: true,
            },
        },
    },
    babel: {
        plugins: ["@emotion"],
    },
}
