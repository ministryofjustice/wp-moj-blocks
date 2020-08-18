const mix_ = require('laravel-mix');
// Load the full lodash build.
const _ = require('lodash');

mix_.webpackConfig({
    module: {
        rules: [
            {
                test: /.scss/,
                enforce: 'pre',
                loader: 'import-glob-loader'
            }
        ]
    },
    externals: {
        lodash: 'lodash'
    }
})

.setPublicPath('build/')
.sass('style.scss', 'style.min.css')
.sass('style-gutenburg.scss', 'style-gutenburg.css')
.sass('assets/scss/ie.scss', 'ie.min.css');

mix_.js('src/**/mojblocks.js', 'build/mojblocks.min.js');

if (mix_.inProduction()) {
    mix_.version();
} else {
    mix_.sourceMaps();
}
