const mix_ = require('laravel-mix');
// Load the full lodash build.
const _ = require('lodash');
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
        // so src/custom-blocks/route-planner/block.json lands at
        // build/custom-blocks/route-planner/block.json.
        //
        // register_block_type() in mojblocks.php is pointed at the build/ copy
        // rather than at src/ because .distignore excludes /src, so src/ is
        // absent from the packaged plugin.
        //
        // copy-webpack-plugin is used rather than mix.copy() because mix
        // flattens — it appends only the basename to the destination, so every
        // block.json would collide on one path. Setting `context` here is what
        // preserves the block folder name.
        //
        // Paths are relative: `context` resolves against the project root and
        // `to` against webpack's output path (build/).
        new CopyPlugin({
            patterns: [
                {
                    context: 'src/custom-blocks',
                    from: '*/block.json',
                    to: 'custom-blocks',
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
