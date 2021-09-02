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
import {Button, TextareaControl} from '@wordpress/components';

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

	const createImageCard = (setAttributes) => (imageCard) => {
		const {
			id,
			url,
			imageHeading = 'This is a Headline on an Image Card',
			teaser = 'Here\'s a short teaser of something that would make the user want to click the button',
			buttonText = 'CTA Button',
			buttonLink
		} = imageCard;

		const updateImageCard = (imageCard, imageCardAttr, value) => {
			setAttributes({
				imageCards: imageCards.map((imageCard) => {
					if (imageCard.id === id) {
						return {...imageCard, [imageCardAttr]: value};
					} else {
						return imageCard;
					}
				})
			});
		}

		return (
				<div>
					<div className="image-content">
						<img src={url}/>
						<div className="overlay">
							<textarea value={imageHeading}
												onChange={(event) => updateImageCard(imageCard, 'imageHeading', event.target.value)}/>
						</div>
					</div>
					<div>
						<textarea value={teaser} style={{width: '100%'}}
											onChange={(event) => updateImageCard(imageCard, 'teaser', event.target.value)}/>
					</div>
					<div>
						<a href={buttonLink} className="custom-button action-button">
							{buttonText}
							<div className="svg-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path id="svg-path"
												d="M256 64l-34.82 35.1L353.2 231.39H63.96v49.98H352.2L221.18 412.9 256 448l192-192L256 64z"/>
								</svg>
							</div>
						</a>
						<div>
							<label>Button Text: </label>
							<input type="text" onChange={(event) => updateImageCard(imageCard, 'buttonText', event.target.value)}/>
						</div>
						<div>
							<label>Button Link: </label>
							<input type="text"/>
						</div>
					</div>
				</div>
		)
	};

	return (
			<p {...useBlockProps()} className="block-container">
				<div className="image-cards">
					{imageCards.map(createImageCard(setAttributes))}
				</div>
				<div>
					<input type="file" style={{display: 'none'}} id="inputFile" accept="image/*" onChange={(event) => {
						event.preventDefault();
						const image = event.target.files[0];
						setAttributes({imageCards: [...imageCards, {id: imageCards.length + 1, url: URL.createObjectURL(image)}]});
					}}/>
					<button className="custom-button" onClick={() => document.querySelector('#inputFile').click()}>
						Upload Image
					</button>
				</div>
			</p>
	);
}
