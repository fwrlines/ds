/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import {
  DashboardNavigation,
  DashboardContextProvider,
  DashboardMain,
} from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils' */
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'dashboard/DashboardNavigation',
  component    :DashboardNavigation,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    Slide           :DashboardNavigation.Slide,
    Item            :DashboardNavigation.Item,
    HorizontalBar:DashboardNavigation.HorizontalBar
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>, */
      storyfn => <DashboardContextProvider>{ storyfn() }</DashboardContextProvider>,
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => {

  const tree = {
    title   :'WebOffice',
    pathname:'/',
    //redirectFromPathname:'/',
    subItems:[
      {
        section :'General',
        title   :'My website',
        pathname:'/website/',
        //redirectFromPathname:'/website/',
      },
      {
        section :'General',
        title   :'My images',
        pathname:'/media/',
        //redirectFromPathname:'/media/',
      },
      {
        section :'Account',
        title   :'My account',
        pathname:'/account/',
        //redirectFromPathname:['/account/', '/account/profile/'],
        subItems:[
          {
            //section:''
            title   :'My profile',
            pathname:'/account/profile/',
          },
          {
            //section:''
            title   :'Google Integration',
            pathname:'/account/integration/',
          }
        ]
      },
      {
        section :'Account',
        title   :'Plan and payment',
        pathname:'/plan/',
        //redirectFromPathnames:['/plan/', '/plan/profile'],
        subItems:[
          {
            //section:''
            title   :'My plan',
            pathname:'/plan/profile/',
          },
          {
            //section:''
            title   :'Billing',
            pathname:'/plan/billing/',
          }
        ]
      }
    ]

  }

  return (
    <>
      <DashboardNavigation
        tree={ tree }
      />
      <DashboardMain >
      <DashboardNavigation.HorizontalBar
        className='md-h lg-h u50'
        label={'blah'}
      />
        <div
          style={{height: '120vh'}}
        >
          Content Goes here
        </div>
      </DashboardMain>
    </>
  )

}

/*
export const Variant = () => (
  <DashboardNavigation
    tree={tree}
  ></DashboardNavigation>
)
*/

