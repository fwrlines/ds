/* @fwrlines/generator-storybook-story 1.0.1 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { PageProgressTracker } from 'ui'
//import { Router } from 'stories/utils'

import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils'

export default {
  title     :'elements/PageProgressTracker',
  component :PageProgressTracker,
  parameters:{
    decorators:[
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <>
    <PageProgressTracker style={{ position: 'fixed', top: '0', left: '0' }}/>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT }}
      style={{ marginTop: '200px' }}
    />
  </>
)

export const ContentId = () => (
  <>
    <PageProgressTracker
      style={{ position: 'fixed', top: '0', left: '0' }}
      spyOn='txt'
    />
    <h2 className='c-black'>We spy on the blue text</h2>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT }}
      style={{ marginTop: '200px' }}
    />
    <div
      id='txt'
      className='x-blue c-x'
    >
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
    </div>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT }}
      style={{ marginTop: '200px' }}
    />
  </>
)

export const InitialId = () => (
  <>
    <PageProgressTracker
      style={{ position: 'fixed', top: '0', left: '0' }}
      initializeAt='txt'
    />
    <h2 className='c-black'>We Initialize at the blue text</h2>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT_XS }}
      style={{ marginTop: '200px' }}
    />
    <div
      id='txt'
      className='x-blue c-x'
    >
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
    </div>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT_XS }}
      style={{ marginTop: '200px' }}
      className='b-off-white'
    />
  </>
)




export const Color = () => (
  <>
    <PageProgressTracker
      style={{ position: 'fixed', top: '0', left: '0' }}
      initializeAt='txt'
      rectClassName='x-green'
    />
    <h2 className='c-black'>We Initialize at the blue text</h2>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT_XS }}
      style={{ marginTop: '200px' }}
    />
    <div
      id='txt'
      className='x-blue c-x'
    >
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
    </div>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT_XS }}
      style={{ marginTop: '200px' }}
    />
  </>

)

export const Gradient = () => (
  <>
    <PageProgressTracker
      style={{ position: 'fixed', top: '0', left: '0' }}
      initializeAt='txt'
      gradientMap={
        [
          { offset: '0%', 'stopColor': 'var(--blue)' },
          { offset: '50%', 'stopColor': 'var(--violet)' },
          { offset: '70%', 'stopColor': 'var(--pink)' },
          { offset: '93%', 'stopColor': 'var(--orange)' },
          { offset: '100%', 'stopColor': 'var(--orange)' },
        ]
      }
    />
    <h2 className='c-black'>We Initialize at the blue text</h2>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT_XS }}
      style={{ marginTop: '200px' }}
      className='b-off-white'
    />
    <div id='txt'>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
    </div>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT_XS }}
      style={{ marginTop: '200px' }}
      //className='b-off-white' //TODO
    />
  </>
)

export const StrokeWidth = () => (
  <>
    <PageProgressTracker
      style={{ position: 'fixed', top: '0', left: '0' }}
      initializeAt='txt'
      strokeWidth={30}
      gradientMap={
        [
          { offset: '0%', 'stopColor': 'var(--blue)' },
          { offset: '50%', 'stopColor': 'var(--violet)' },
          { offset: '70%', 'stopColor': 'var(--pink)' },
          { offset: '93%', 'stopColor': 'var(--orange)' },
          { offset: '100%', 'stopColor': 'var(--orange)' },
        ]
      }
    />
    <h2 className='c-black'>We Initialize at the blue text</h2>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT_XS }}
      style={{ marginTop: '200px' }}
      className='b-off-white'
    />
    <div
      id='txt'
      className='x-blue cx'
    >
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
      <span dangerouslySetInnerHTML={{__html: TEXT_XS}}></span>
    </div>
    <div
      dangerouslySetInnerHTML={{ __html: TEXT_XS }}
      style={{ marginTop: '200px' }}
      //className='b-off-white' //TODO
    />
  </>
)

