import React from 'react'
import {Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import {css} from 'aphrodite'

import If from './If'
import style from './style'

const IconButton = ({type, icon, onClick}) => (
  <Button bsStyle={type} onClick={onClick} className={css(style.button)}>
    <FontAwesome name={icon} />
  </Button>
)

export default If(({hide}) => hide)(IconButton)
