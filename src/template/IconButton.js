import React from 'react'
import {Button} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import If from './If'

const IconButton = (props) => (
  <If test={!props.hide}>
    <Button bsStyle={props.style}>
      <FontAwesome name={props.icon} />
    </Button>
  </If>
)

export default IconButton
