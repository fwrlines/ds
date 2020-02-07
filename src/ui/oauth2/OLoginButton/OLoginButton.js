/* @fwrlines/generator-react-component 1.0.1 */
import React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */
import { Button } from 'ui'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import QUERY_GOOGLE from './graphql/oAuth2Google.gql'

/* Relative imports
   import styles from './o_login_button.scss' */
import './o_login_button.scss'

const baseClassName = 'o_login_button'

const OLoginButton = ({
  id,
  className,
  style,

  label,
  query,
  dataKey,
  simple,
  buttonClassName,
}) => {

  const {
    loading,
    error,
    data={}
  } = useQuery(gql(query))
  //console.log(loading, error, data)

  return(
    <>
      <a
        className={
          [
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
        href={ data && data[dataKey] }
      >
        <Button
          simple={ simple }
          className={
            [
              buttonClassName,
            ].filter(e => e).join(' ')
          }
        >
          { label }
        </Button>
      </a>
    </>
  )
}

OLoginButton.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to the wrapper
   */
  className:PropTypes.string,

  /**
   * The html class names to be provided to the inner button
   */
  buttonClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Whether the style is simple
   */
  simple:PropTypes.bool,

  /**
   * The query (.gql file import with babel import inline)
   */
  query:PropTypes.string.isRequired,

  /**
   * The key to the query data object
   */
  dataKey:PropTypes.string.isRequired,

  /**
   * The button label
   */
  label:PropTypes.string.isRequired,
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['primary', 'stroke', 'flat'])
  */
}

OLoginButton.defaultProps = {
  query    :QUERY_GOOGLE,
  dataKey  :'oAuth2Google',
  label    :'login',
  className:'x-orange',
  simple   :true,
  //buttonClassName:'x-green',
}

export default OLoginButton
