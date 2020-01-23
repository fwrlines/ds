/* @fwrlines/generator-react-component 1.1.0 */
import React from 'react'
import PropTypes from 'prop-types'

import C from 'ui/cssClasses'

//Relative imports
import styles from './local_index.scss'
import { Item } from './common'

const baseClassName = 'local_index'

const LocalIndex = ({
  id,
  className,
  style,
  children,

  title
}) => {


  return (
    <ul
      className={
        [
          styles[baseClassName],
          'lsn c-off-black',
          C.list,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <p className={
        C.title
    + ' s-sm tls tu c-grey'
      }
      >
        { title }
      </p>
      { children }
    </ul>
  )}

LocalIndex.propTypes = {
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
   * The title of the Index
   */
  title: PropTypes.string,

}

/*
LocalIndex.defaultProps = {
  status: 'neutral',
}
*/
LocalIndex.Item = Item

export default LocalIndex
