const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    mode: 'production',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 不编译node_modules下的文件
                loader: 'babel-loader'
            },
            // 打包vue文件
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,     /*匹配图片文件*/
                loader: 'url-loader',
                options: {
                    esModule: false,
                    publicPath: 'auto/',       /*指定图片在html上的引入公共路径*/
                    limit: 1024 * 8,             /*不设置限定大小，会默认将图片转成base64编码格式*/
                    name: '[name][hash:10].[ext]'/*不设置名称，会默认生成一个hash名，hash:10--留10位hash值*/
                }
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
}
