import React from 'react'
//import logo from '../logo.svg'
import { Layout, Content } from 'reactjs-admin-lte'
import './index.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const App = props => (
  <Layout skin="blue" type="fixed">
    <Header />
    <Content>
      <Content.Body>
        <h1>Conteúdo</h1>
      </Content.Body>
    </Content>
    <Sidebar />
    <Footer />
  </Layout>
)

export default App
