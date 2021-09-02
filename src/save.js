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
import {TextareaControl} from '@wordpress/components';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const {imageCards} = attributes;
	return (
			<div {...useBlockProps.save()} className="block-container">
				<div className="image-cards">
					{imageCards.map((imageCard) => {
						const {
							id,
							url,
							imageHeading = 'This is a Headline on an Image Card',
							teaser = 'Here\'s a short teaser of something that would make the user want to click the button',
							buttonText = 'CTA Button',
							buttonLink
						} = imageCard;

						return (
								<div>
									<div className="image-content">
										<img src={url}/>
										<div className="overlay">
											<div className="image-heading"><span>{imageHeading}</span></div>
										</div>
									</div>
									<p>{teaser}</p>
								</div>
						)
					})}
				</div>
			</div>
	);
}
