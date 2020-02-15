import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { ButtonField } from 'ui/form'

import {
  MOTO_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const MotoField = (props) => {
  const {
    moto:inputDict,
    handleFormButtonFieldClick:onClick
  } = useContext(SC)
  return(
    <ButtonField
      prefix={ props.prefix || P }
      className={ props.className }
      name='moto'
      label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }

      inputValue={ inputDict.value }
      buttonClassName={ props.vertical ? 'd-xs-16':'d-xs-8'}
      vertical={ props.vertical }
      options={ T.OPTIONS }
      onClick={ onClick }
      valid={ inputDict.valid }
      displayError={ props.displayError }
      /*   error={ inputDict.error } */
    />
  )
}

export default MotoField
