module.exports = {
    dev: {
        // proxyTable: proxyConfig.proxyList, // 无效，不使用，20190422
        proxyTable: {
            '/api': {
                target: 'http://localhost:8830',//后端接口地址
                changeOrigin: true,//是否允许跨越
                pathRewrite: {
                    '^/api': '/api',//重写,
                }
            }
        },
    }
}