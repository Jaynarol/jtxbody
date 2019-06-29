import React from 'react'
import { Spin } from 'antd'
import Layout from '../Layout'
import './style.css'
import { fetchData, fetchTokenInfo } from '../../gapi'
import { notiError } from '../../libs'

class App extends React.Component {
  state = {
    spinning: true,
    isLogin: false,
    data: []
  }

  refetchAuth = async () => {
    const { data: { expires_in = 0 } = {} }  = await fetchTokenInfo()
    this.setState({ isLogin: expires_in > 0 })
  }

  refetchData = async () => {
    const { data = [], isError, errMsg } = await fetchData(this.state.isLogin)
    if(isError){
      notiError('Fetch Data Error', errMsg)
    }
    this.setState({ data, spinning: false })
  }

  componentDidMount = async () => {
    await this.refetchAuth()
    await this.refetchData()
  }

  render() {
    return <Spin tip="Fetching Data..." spinning={this.state.spinning}>
      <Layout refetchAuth={this.refetchAuth} refetchData={this.refetchData} {...this.state} />
    </Spin>
  }
}

export default App