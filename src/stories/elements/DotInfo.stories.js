/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { DotInfo } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'elements/DotInfo',
  component:DotInfo,
  parameters: {
    decorators: [
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const map = [
  {
    name:'In Progress',
    circle:'b-orange'
  },
  {
    name:'Error',
    circle:'b-red'
  },
  {
    name:'Ready',
    circle:'b-green'
  },
]


export const Default = () => (
  map.map((e,i) =>
    <div
      className='p1'
      key={i}
    >
      <DotInfo
        title={e.name}
        circleClassName={e.circle}
      />
    </div>

  )
)

