/* @fwrlines/generator-react-component 1.4.0 */
import React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './h_t_m_l_textarea.scss' */
//import './h_t_m_l_textarea.scss'

//const baseClassName = 'h_t_m_l_textarea'


/**
 * Use `HTMLTextarea` to
 * Has color `x`
 */
const HTMLTextarea = ({
  id,
  className,
  style,

  placeholder,
  rows,
  name,
  disabled
}) => {


  return (
    <textarea
      className={
        [
        //styles[baseClassName],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      placeholder={ placeholder }
      rows={ rows }
      name={ name }
      disabled={ disabled }

    />
  )}

HTMLTextarea.propTypes = {
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
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
   * The input placeholder
   */
  placeholder:PropTypes.string,

  /**
   * Whether the input is disabled
   */
  disabled:PropTypes.bool,

  /**
   * The number of text rows for the textarea
   */
  rows:PropTypes.number,


  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

HTMLTextarea.defaultProps = {
  rows:8
}
export default HTMLTextarea
