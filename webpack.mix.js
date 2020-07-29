const mix_ = require('laravel-mix');

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

.setPublicPath('build/')
.sass('style.scss', 'style.min.css')
.sass('style-gutenburg.scss', 'style-gutenburg.css');

mix_.js('src/**/frontend.js', 'build/mojblocks.min.js');
