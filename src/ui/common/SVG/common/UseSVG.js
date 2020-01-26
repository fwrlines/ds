/* @fwrlines/generator-react-component 1.0.1 */
import React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

const default_sprite = '/s2.svg'

const UseSVG = ({
  id,
  className,
  style,

  sprite,
  target,

  strokeWidth
}) => {
  return (
    <use
      className={
        [
          className,
        ].filter(e => e).join(' ')
      }
      href={(sprite || default_sprite ) + (target ? '#' + target : '')}
      style={ strokeWidth ?
        {
          ...style,
          '--sw':Number(strokeWidth)
        } : { style }}
      id={ id }
    />
  )}

UseSVG.propTypes = {
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
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * The url to the svg sprite
   */
  sprite:PropTypes.string,

  /**
   * The target image id in the sprite
   */
  target:PropTypes.string,

  /**
   * The SVG property stroke-width
   */
  strokeWidth:PropTypes.number,
}

/*
UseSVG.defaultProps = {
  status: 'neutral',
}
*/

export default UseSVG
