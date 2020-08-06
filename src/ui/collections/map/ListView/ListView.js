/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Button, Heading } from 'ui/elements'



import {
  MapTableView as TableView,
  MapCardView as CardView,
  useObjectMap
} from '../common'


import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/client'
import {
  generatePath,
  useHistory,
  useParams,
  useRouteMatch,
  Link
} from 'react-router-dom'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './list_view.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./list_view.scss')
}

const baseClassName = 'list_view'


/**
 * Use `ListView` to
 * Has color `x`
 */
const ListView = ({
  id,
  className,
  style
}) => {

  const {
    currentType={},
    generateLocalPath
  } = useObjectMap()

  const { view, ...routeParams } = useParams()

  const availableViews = useMemo(() => {
    var views = []
    currentType.name && views.push(
      {
        view     :'',
        name     :'Table',
        shortcut :'t',
        className:'x-blue',
        Component:TableView
      })

    currentType.defaultViews.card && views.push(
      {
        view     :'cards',
        name     :'Cards',
        shortcut :'c',
        className:'x-violet',
        Component:CardView
      })
    return views
  }
  , [currentType.name])


  const [currentView, setCurrentView] = useState(
    availableViews.find(e => e.view === view) || availableViews[0]
  )

  useEffect(() => {
    setCurrentView(availableViews.find(e => e.view === view) || availableViews[0] )
  }, [view])


  const getViewUrl = (newView) => {
    return newView.length ? generateLocalPath(
      'listAlt',
      {
        ...routeParams,
        view:newView
      }
    ) : generateLocalPath(
      'list',
      {
        ...routeParams
      }
    )
  }

  const {
    Component:ViewComponent=null
  } = currentView

  return (
    <div
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
      <Heading
        heading={ currentType.name }
        headingAs='h1'
        headingStyle={{
          flexGrow:99
        }}
        className='yf'
        style={{
          alignItems:'center'
        }}
      >
        <Button.Group
          independent
          className='yb'
        >
          { (availableViews.length > 1) && availableViews.map((e, i) =>{
            const isActive = e === currentView
            return (
              <Link to={ getViewUrl(e.view) }>
                <Button
                  className={ isActive ? e.className : 'x-grey' }
                  key={i}
                >
                  <strong>
                    { e.name }
                  </strong>
                  <span>
                    (
                    { e.shortcut }
                    )
                  </span>
                </Button>
              </Link>

            )
          }
          ) }
        </Button.Group>
      </Heading>

      { currentType.name ?
        <ViewComponent/>
        :
        'Type not found'
      }
    </div>
  )
}

ListView.propTypes = {
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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
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

/*
ListView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default ListView
