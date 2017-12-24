import React, { Component } from 'react'
import { Content } from 'reactjs-admin-lte'
import { Grid, Row, Col } from 'react-bootstrap'

import InfoBox from '../components/InfoBox'

class Dashboard extends Component {
  render() {
    return (
      <Content>
        <Content.Header>
          <h1>
            Dashboard <small>Versão 1.0</small>
          </h1>
        </Content.Header>
        <Content.Body>
          <Row>
            <Col xs={12} md={4}>
              <InfoBox
                color="green"
                icon="bank"
                text="Total de créditos"
                number="R$ 10"
              />
            </Col>
            <Col xs={12} md={4}>
              <InfoBox
                color="red"
                icon="credit-card"
                text="Total de débitos"
                number="R$ 10"
              />
            </Col>
            <Col xs={12} md={4}>
              <InfoBox
                color="blue"
                icon="money"
                text="Total consolidado"
                number="R$ 0"
              />
            </Col>
          </Row>
        </Content.Body>
      </Content>
    )
  }
}
export default Dashboard
