# MOJ Gutenberg Blocks
MOJ Gutenberg Blocks is a companion WP block plugin to be installed with the WP and the Hale theme. It allows for greater customisation and enhancements unique to our websites.

## Features

This plugin adds the following custom blocks,
* Accordion
* Banner
* Card
* CTA
* Hero
* Highlights-list
* Intro
* Quote
* Reveal
* Staggered-boxes

Extends the following core blocks
* File

Note: This plugin suppresses and [unregisters](https://github.com/ministryofjustice/wp-moj-blocks/blob/main/src/quote/index.js#L208-L210) the default WP quote block.

## Issues
Raise issues via
[GitHub issues](https://github.com/ministryofjustice/wp-moj-blocks/issues)

## Installation
Download this repository, unzip and copy the folder into your WordPress plugin file directory.

## Prerequesites
* Wordpress and the [Hale theme](https://github.com/ministryofjustice/wp-hale).
* NPM (For developers needing to compile assets)

## Coding guidelines
This plugin follows
* Standards set by the Wordpress organisation https://codex.wordpress.org/Writing_a_Plugin.
* PHP Framework Interop Group's standards http://www.php-fig.org/

## Things to change when adding new blocks
- https://github.com/ministryofjustice/wp-moj-blocks/blob/main/src/custom-blocks/index.js
- https://github.com/ministryofjustice/wp-moj-blocks/blob/main/mojblocks.php
- https://github.com/ministryofjustice/wp-hale/blob/main/inc/restrict-blocks.php [Hale repo]

Once all these have been added, run:
- `npm start` (window won't close)
- `npm run build`

## Developer notes
* Run `npm install` in the plugin root directory.
* Run `npm start` to compile and watch any changes made to the blocks.
* Run `npm run build` and `npm run watch` to compile and watch the assets such as JS and CSS.

### Debug
If you run into NPM issues try
* Delete `/node_modules` folder and `package-lock.json` in plugin root and then run `npm install`
* Try `npm rebuild node-sass` or the `npm rebuild <package name causing issues>`

#### Block not registering?
If you are using this plugin in the Hale theme, make sure you've added your new block to the allowlist,
found in Hale ~/inc/restrict-blocks.php.

## Automated linting and PHP code sniffing
We have a Git Action setup that lints, sniffs and then commits the linted PHP code in this plugin when anything is pushed to the repo.
