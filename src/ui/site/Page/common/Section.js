/* @fwrlines/generator-react-component 1.1.2 */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import C from 'ui/cssClasses'

//Relative imports
import styles from './section.scss'
import Context from './Context'
import CaretDown from './CaretDown'

const baseClassName = 'section'

const Section = ({
  id,
  className,
  style,
  children,

  transparent,
  inverted,

  header,

  caretDown,
  caretDownDuration,
  caretDownSmooth
}) => {
  const { id:contextId }= useContext(Context)
  return (
    <section
      id={ id && (id + (contextId ? '_' + contextId : ''))}
      className={
        [
          styles[baseClassName],
          header ? C.headSection : C.section,
          inverted && C.inverted,
          transparent && C.transparent,
          className
        ].filter(e => e).join(' ')
      }
      style={ style }
    >
      {children}
      {caretDown &&
        <CaretDown
          destination={ caretDown }
          duration={ caretDownDuration }
          smooth={ caretDownSmooth }
        />
      }

    </section>
  )}

Section.propTypes = {
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
   *  The children JSX
   */
  children: PropTypes.node,

  /**
   * Which html tag to use
   */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),

  /**
   * Whether we invert the color scheme (dark mode) for the element TODO
   */
  inverted:PropTypes.string,

  /**
   * Whether the section has a transparent background TODO
   */
  transparent:PropTypes.string,

  /**
   * Whether this is the first section (supersets 'as')
   */
  header:PropTypes.bool,

  /**
   * Which id tag on the page is the target (without page suffix)
   */
  caretDown: PropTypes.string.isRequired,

  /**
   * Whether the click is animated (react-scroll)
   */
  caretDownSmooth:PropTypes.bool,

  /**
   * The duration of the animation (react-scroll)
   */
  caretDownDuration: PropTypes.number,

}

Section.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  as:'section',
  header:false,
  transparent:false,
  inverted:false,
  caretDownSmooth:false,
}

export default Section
