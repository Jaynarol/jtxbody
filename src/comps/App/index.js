import React from 'react'
import moment from 'moment'
import { Spin } from 'antd'
import { fetchData, fetchTokenInfo } from '../../gapi'
import { cleanAccessToken, getTokenExpiresAt } from '../../libs'
import Layout from '../Layout'
import { encouragements } from '../../config'
import '../../assets/style.css'
import { sample } from 'lodash'

class App extends React.Component {
  state = {
    spinning: true,
    isLogin: false,
    selectedDate: moment(),
    data: []
  }

  refetchAuth = async () => {
    const isTokenAlive = getTokenExpiresAt() > +moment()
    if(isTokenAlive){
      const { data: { expires_in = 0 } = {} }  = await fetchTokenInfo()
      this.setState({ isLogin: expires_in > 0 })
    }else{
      cleanAccessToken()
    }
  }

  refetchData = async () => {
    const { data = [] } = await fetchData(this.state.isLogin)
    this.setState({ data })
  }

  selectDate = date => {
    this.setState({ selectedDate: date })
  }

  componentDidMount = async () => {
    await this.refetchAuth()
    await this.refetchData()
    this.setState({
      spinning: false,
      encouragement: sample(encouragements)
    })
  }

  render() {
    return <Spin tip="Fetching Data..." spinning={this.state.spinning}>
      <Layout
        refetchAuth={this.refetchAuth}
        refetchData={this.refetchData}
        selectDate={this.selectDate}
        {...this.state} />
    </Spin>
  }
}

export default App