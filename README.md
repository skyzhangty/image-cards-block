### How to Run and Build

I use [@wordpress/block-editor](https://www.npmjs.com/package/@wordpress/block-editor) to create the block plugin.
If you use [wp-env](https://www.npmjs.com/package/@wordpress/env), you can run `npm start` to start the plugin under any directory.
Otherwise, you need to copy the project under the wordpress plugin directory and run `npm start`.
To build the plugin, run `npm run build` and the built plugin under the `build` directory.

### Implementation Details

The `edit.js` contains the code for editing the image cards. After uploading an image, the user can edit the image headline, the teaser, the button text and links as well as the headline.
I use the `grid` layout to place 3 images in a row on desktop screens and adapt to the change of screen size. Each image card uses `flex` display with the column orientation to align the content.

The `save.js` contains the code for displaying the image cards after editing. Some styles are reused from the edit page.

`supports.multiple` is set to `false` in `index.js` to force one plugin block per post.

### ToDo

Can add delete and replace images. We can use `filter` to delete the image and use `map` to replace the image.

