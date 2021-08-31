/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {Button} from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const {imageCards} = attributes;
	return (
			<p {...useBlockProps()}>
				<section>
					{imageCards.map((imageCard) => (<img src={imageCard.url}/>))}
				</section>
				<input type="file" style={{display: 'none'}} id="inputFile" accept="image/*" onChange={(event) => {
					event.preventDefault();
					const image = event.target.files[0];
					setAttributes({imageCards: [...imageCards, {id: imageCards.length + 1, url: URL.createObjectURL(image)}]});
				}}/>
				<Button className="primary" onClick={() => document.querySelector('#inputFile').click()}>
					Upload Image
				</Button>
			</p>
	);
}
