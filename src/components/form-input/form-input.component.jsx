import React from 'react' ;
import {  Group , FormInputLabel , FormInput } from './form-input.style'

const SingInput = ({lable , ...config}) => {
  return (
    <Group>
        <FormInput {...config} />
        <FormInputLabel shrink={config.value.length}>{lable}</FormInputLabel>
    </Group>
  )
}

export default SingInput ;