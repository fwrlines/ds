/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { OLoginButton } from 'ui'
import { AplProvider } from 'stories/utils'

export default {
  title     :'oAuth2/OLoginButton',
  component :OLoginButton,
  parameters:{
    decorators:[
      storyfn => <AplProvider>{ storyfn() }</AplProvider>,
    ]
  }
}

export const Default = () => (
  <OLoginButton
    //className='
    label='Login with Google'
  />
)

export const NotSimple = () => (
  <OLoginButton
    className='x-secondary cx tb'
    label='Login with Google'
    simple={false}
  />
)

