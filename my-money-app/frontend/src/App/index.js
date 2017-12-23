import React from 'react'
//import logo from '../logo.svg'
import { Layout } from 'reactjs-admin-lte'
import './index.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const App = props => (
  <Layout skin="blue" type="fixed">
    <Header />
    <Sidebar />
  </Layout>
)

export default App
