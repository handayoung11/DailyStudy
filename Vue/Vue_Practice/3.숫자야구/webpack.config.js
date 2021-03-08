const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
//node의 모듈을 만든다. webpacking할 때 사용된다.
module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        //가장 대표되는 js 파일
        app: './main.js',
    },
    module: {
        rules:[{
         test:/\.vue$/,
            loader: 'vue-loader',
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        //출력될 파일 이름
        //[name].js도 가능 [name]은 entry의 app을 가져와서 지정한다.
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        /*
        최종적으로 dist/app.js에 모든 script파일들이 합쳐진다.
         */
    },
};