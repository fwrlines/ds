/* @fwrlines/generator-react-component 2.1.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './figure.scss' */
import './figure.scss'

const baseClassName = 'figure'


/**
 * Use `Figure` to
 * Has color `x`
 */
const Figure = ({
  id,
  className,
  style,
  children,


  src,
  alt,
  imgStyle,
  objectFit,
}) => {


  return (
    <figure
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <img
        src={src}
        alt={alt}
        style={{
          ...imgStyle,
          objectFit
        }}
      />
      { children &&
        <figcaption>
          { children }
        </figcaption>
      }
    </figure>
  )}

Figure.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX. Will be displayed as thh caption
   */
  children:PropTypes.node,

  /**
   * The image source
   */
  src:PropTypes.string.isRequired,

  /**
   * The image alt
   */
  alt:PropTypes.string.isRequired,

  /**
   * The JSX-Written, css styles to apply to the child image.
   */
  imgStyle:PropTypes.object,

  /**
   * 
   */
  objectFit:PropTypes.oneOf([
    'fill',
    'contain',
    'cover',
    'none',
    'scale-down'
  ])
}

Figure.defaultProps = {
  objectFit: 'cover',
}

export default Figure
