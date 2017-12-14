import {branch, renderNothing} from 'recompose'

const If = test =>
  branch(
    test,
    renderNothing
  )

export default If
