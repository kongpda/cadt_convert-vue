module.exports = {
    devServer: {
        proxy: {
            // '/v1': {
            //     target: 'http://172.23.129.202',
            //     changeOrigin: true,
            //     pathRewrite: { '^/v1': '/v1' },
            // },
            '/v1': {
                target: 'https://api.tfdevs.com',
                changeOrigin: true,
            },
        },
    },
}
