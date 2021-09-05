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
	const {headline, imageCards} = attributes;
	return (
			<div {...useBlockProps.save()} className="block-container">
				<div>
					{imageCards && imageCards.length ?
							<h4 className="headline">{headline}</h4> : false}
				</div>
				<div className="image-cards">
					{imageCards.map((imageCard) => {
						const {
							url,
							imageHeadline = 'This is a Headline on an Image Card',
							teaser = 'Here\'s a short teaser of something that would make the user want to click the button',
							buttonText = 'CTA Button',
							buttonLink
						} = imageCard;

						return (
								<div className="image-card">
									<div className="image-content">
										<img src={url}/>
										<div className="overlay">
											<div className="image-headline"><span>{imageHeadline}</span></div>
										</div>
									</div>
									<p className="teaser">{teaser}</p>
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
									</div>
								</div>
						)
					})}
				</div>
			</div>
	);
}
