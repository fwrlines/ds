/* @fwrlines/generator-storybook-story 1.3.0 */
import * as React from 'react'
import { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import { Input } from 'ui'
import {
  InputIcon,
  InputSide,
  InputLabel,
  InputDescription
} from 'ui/form/Input/common'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/Input/styles/default',
  component    :Input,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    InputLabel,
    InputDescription,
    InputSide,
    InputIcon
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'contact_email' }
      value={ value }
      onChange={ onChange }
      label='Your email'
      inputId='hey'
      description='This field is important, please take the time to fill it correctly.'
    />

  )
}


export const Uncontrolled = () => (
  <Input
    name={ 'contact_email' }
  />
)

export const Placeholder = () => (
  <Input
    type='password'
    placeholder='a safe password, not 12345'
    name={ 'password' }
    label='Your password'
    inputId='pwd'
    description='Please make sure your password is strong enough'
  />
)

export const Type = () => (
  <Input
    type='textarea'
    name={ 'openquestion' }
    label='Your story'
    inputId='story'
  />
)

export const Disabled = () => (
  <Input
    type='email'
    name='formeremail'
    disabled
    label='Something else'
    inputId='else'
  />
)

export const Optional = () => (
  <Input
    type='email'
    name='formeremail'
    label='Your last stay with us'
    inputId='optional-else'
    optional
  />
)

export const Compact = () => (
  <Input
    type='email'
    name='formeremail'
    label='Your last stay with us'
    inputId='optional-else'
    compact
  />
)

export const Valid = () => (
  <Input
    name={ 'token' }
    label='Access token'
    type='text'
    inputId='thisworks'
    leftSide='token id'
    valid='Everything looks good'
    rightIcon='b'
    description='Enter here the token you have been provided'
  />
)

export const Error = () => (
  <Input
    name={ 'token' }
    label='Access token'
    type='text'
    inputId='token_error'
    leftSide='token id'
    error='Please input a valid token'
    rightIcon='h'
    description='Enter here the token you have been provided'
  />
)

export const LeftSide = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'salary' }
      value={ value }
      onChange={ onChange }
      label='Expected salary'
      type='number'
      placeholder='40000'
      inputId='salary'
      leftSide='$'
    />

  )
}

export const RightSide = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'employees' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='Number of employees'
      inputId='employees'
      rightSide='employees'
      placeholder={ '120' }
    />

  )
}

export const LeftIcon = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'employees' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='Number of employees'
      inputId='employees'
      leftIcon='i'
      placeholder={ '120' }
    />

  )
}

export const RightIcon = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'employees' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='Number of employees'
      inputId='employees'
      rightIcon='d'
      placeholder={ '120' }
    />

  )
}

export const IconAndSide = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'gasoline' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='How much gasoline ?'
      inputId='gasoline'
      rightIcon='d'
      rightSide='onces'
      placeholder={ '120' }
    />

  )
}


export const Choices = () => (
  <Input
    type='radios' //checkboxes
    name='composer'
    options={[
      {
        value   :'valhalla',
        label   :'Wagner',
        id      :'wag',
        disabled:true
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    other='Altro'
    otherId='yoho'
    label='Whats your favourite composer'
    inputId='compo'
  />
)

export const SVGChoices = () => (
  <Input
    type='svg-radios' //checkboxes
    name='composer'
    inputClassName='y-indigo'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag',
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
        disabled:true,
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    other='Altro'
    otherId='yoho'
    label='Whats your favourite composer'
    inputId='compo2'
  />
)

export const CardChoices = () => (
  <Input
    type='card-checkboxes' //radios
    name='composer'
    inputClassName='y-indigo'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag',
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
        disabled:true,
      },
      {
        value:'pelleas',
        label:<span>
          <em>Claude</em>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    label='Whats your favourite composer'
    inputId='compo3'
  />
)
