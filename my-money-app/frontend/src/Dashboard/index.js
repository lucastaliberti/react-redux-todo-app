import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Content } from 'reactjs-admin-lte'
import { Row, Col } from 'react-bootstrap'

import { dataFetch } from './actions'
import InfoBox from '../components/InfoBox'

const defaultRowSize = { xs: 12, md: 4 }
const infoBoxData = (color, icon, text, number) => ({
  row: defaultRowSize,
  info: {
    color: color,
    icon: icon,
    text: text,
    number: `R$ ${number}`
  }
})

const infoBoxCredit = credit =>
  infoBoxData('green', 'bank', 'Total de créditos', credit)

const infoBoxDebt = debt =>
  infoBoxData('red', 'credit-card', 'Total de débitos', debt)

const infoBoxTotal = total =>
  infoBoxData('blue', 'money', 'Total consolidado', total)

class Dashboard extends Component {
  componentDidMount() {
    const { dataFetch } = this.props
    dataFetch()
  }

  render() {
    const { summary } = this.props
    const { credit, debt } = summary

    const infoBoxesToRender = [
      infoBoxCredit(credit),
      infoBoxDebt(debt),
      infoBoxTotal(credit - debt)
    ]

    return (
      <Content>
        <Content.Header>
          <h1>
            Dashboard <small>Versão 1.0</small>
          </h1>
        </Content.Header>
        <Content.Body>
          <Row>
            {infoBoxesToRender.map((v, i) => (
              <Col {...v.row} key={i}>
                <InfoBox {...v.info} />
              </Col>
            ))}
          </Row>
        </Content.Body>
      </Content>
    )
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ dataFetch }, dispatch)

export { Dashboard }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
