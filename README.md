# MOJ Gutenberg Blocks

This repository houses the MOJ Gutenberg blocks.
 
## Development Instructions
To develop your own modifications, you will need to download the full repo - ideally you should be in your `wp-content/plugins` folder.

Once you have this locally, you will need to change directory to `wp-content/plugins/wp-mojblocks`. Start by running `npm run install` to download and setup all the required node modules.
 - Any changes to styles can be made in the `assets/scss` folder. To regenerate the css, you will need to run `npm run build-scss`.
 - Any changes to the blocks themselves can be made in the `src` folder. Once changes are complete, you will need to regenerate the js by running `npm run build`. This will generate new files in the `build` folder.
 - If you then wish to export your changes to any other sites, you will need to run `npm run zip` to regenerate a zip file.
 
Any improvements, bug fixes or amendments should also be submitted back as pull requests to our GitHub repo so that the whole community can benefit from the work.



