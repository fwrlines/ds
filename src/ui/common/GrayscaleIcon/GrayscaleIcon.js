/* @fwrlines/generator-react-component 1.1.1 */
import React from 'react'
import PropTypes from 'prop-types'

//* Config
import C from 'ui/cssClasses'

//Relative imports
import styles from './grayscale_icon.scss'

const baseClassName='grayscale_icon'

const GrayscaleIcon = ({
  id,
  className,
  style,

  height,
  width,

  src,
  alt,
  link
}) => {


  return (
    <a
      href={ link }
      rel='nofollow'
      target='_blank'
      className={
        [
          styles[baseClassName],
          className,
          C.transition
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={{ ...style, height, width }}
    >
      <img
        src={ src }
        alt={ alt }
        className={
          C.content
		//+ (? '':'')
		+ (className ? ' ' + className : '')
		+ ' fit'
        }
        id={ id }
      />
    </a>
  )}

GrayscaleIcon.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id: PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className: PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style: PropTypes.object,

  /**
   *  The image source
   */
  src: PropTypes.string.isRequired,

  /**
   *  The link that wraps the image
   */
  link: PropTypes.string.isRequired,

  /**
   *  The alt text
   */
  alt: PropTypes.string.isRequired,

  /**
   *  The height of the image
   */
  height : PropTypes.string,

  /**
   *  The width of the image
   */
  width: PropTypes.string,
}

GrayscaleIcon.defaultProps = {
  height: '2.2em',
}

export default GrayscaleIcon
