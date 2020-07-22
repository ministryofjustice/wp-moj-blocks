const mix_ = require('laravel-mix');

var _asset = './assets/';

mix_.webpackConfig({
    module: {
        rules: [
            {
                test: /.scss/,
                enforce: 'pre',
                loader: 'import-glob-loader'
            }
        ]
    }
})
.setPublicPath('/')
    .sass('style.scss', 'style.min.css')
    .sass('style-gutenburg.scss', 'style-gutenburg.css');

