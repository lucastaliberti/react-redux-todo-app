import React from 'react'
//import logo from '../logo.svg'
import { Layout, Content } from 'reactjs-admin-lte'
import { HashRouter as Router } from 'react-router-dom'
import './index.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import Routes from './routes'

const App = props => (
  <Layout skin="blue" type="fixed">
    <Header />
    <Content>
      <Content.Body>
        <Routes />
      </Content.Body>
    </Content>
    <Sidebar />
    <Footer />
  </Layout>
)

const AppRouted = props => (
  <Router>
    <App {...props} />
  </Router>
)

export default AppRouted
