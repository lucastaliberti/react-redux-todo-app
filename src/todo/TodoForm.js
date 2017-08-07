import React from 'react'
import {Col, FormControl} from 'react-bootstrap'
import {css} from 'aphrodite'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {compose, lifecycle} from 'recompose'

import IconButton from '../template/IconButton'
import style from '../template/style'
import {changeDescription, search, add, clear} from './todoActions'

const TodoForm = props => {
  const {
    description,
    changeDescription,
    add,
    search,
    clear
  } = props

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? search(description) : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  return (
    <div role='form' className={css(style.formPadding)}>
      <Col xs={12} sm={9} md={10}>
        <FormControl
          id='description'
          type='text'
          placeholder='Adicionar tarefa'
          onKeyUp={keyHandler}
          onChange={changeDescription}
          value={description}
          />
      </Col>
      <Col xs={12} sm={3} md={2} >
        <IconButton type='primary' icon='plus' onClick={() => add(description)} />
        <IconButton type='info' icon='search' onClick={search} />
        <IconButton type='default' icon='close' onClick={clear} />
      </Col>
    </div>
  )
}

export const mapStateToProps = state => ({description: state.todo.description})
export const mapDispatchToProps = dispatch =>
  bindActionCreators({changeDescription, search, add, clear}, dispatch)

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount () {
      this.props.search()
    }
  })
)
export {TodoForm}
export default enhance(TodoForm)
