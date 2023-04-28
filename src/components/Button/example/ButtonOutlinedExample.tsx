import React from 'react'
import Button from '../index'

const ButtonOutlinedExample = () => {
  return (
    <Button
      intent="outlined"
      onClick={() => {
        console.log('hello world')
      }}
    >
      Outlined
    </Button>
  )
}

export default ButtonOutlinedExample
