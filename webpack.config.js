var path=require("path");
module.exports = {
    entry: "./public/js/main.js",
    output: {
        path: path.join(__dirname,"public/dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=10000&name=img/[hash:8].[name].[ext]', // 图片小于8k就转化为 base64, 或者单独作为文件
                    'image-webpack' // 图片压缩
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
              loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]']// 生成 md5 hash 格式的文件名'image-webpack' // 图片压缩
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};