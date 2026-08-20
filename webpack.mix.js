const mix_ = require('laravel-mix');
// Load the full lodash build.
const _ = require('lodash');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

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
    },
    plugins: [
        // Copy every block.json into build/, preserving the block folder name,
        // so src/custom-blocks/cta/block.json lands at
        // build/custom-blocks/cta/block.json.
        //
        // register_block_type() in mojblocks.php is pointed at the build/ copy
        // rather than at src/ because .distignore excludes /src, so src/ is
        // absent from the packaged plugin.
        //
        // This is a glob rather than a file list so that migrating a block to
        // block.json needs no build config change — drop the file in and it
        // ships.
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, 'src/custom-blocks'),
                    from: '*/block.json',
                    to: path.resolve(__dirname, 'build/custom-blocks'),
                    noErrorOnMissing: true
                }
            ]
        })
    ]
})

.setPublicPath('build/')
.sass('style.scss', 'style.min.css')
.sass('style-gutenburg.scss', 'style-gutenburg.css')
.sass('assets/scss/ie.scss', 'ie.min.css');

if (mix_.inProduction()) {
    mix_.version();
} else {
    mix_.sourceMaps();
}
