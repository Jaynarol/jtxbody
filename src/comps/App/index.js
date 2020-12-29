/* eslint-disable max-len */
import React from 'react'
import moment from 'moment'
import { Spin } from 'antd'
import { fetchAnotherSheet, fetchData, fetchTokenInfo } from '../../gapi'
import { cleanAccessToken, getTokenExpiresAt } from '../../libs'
import Layout from '../Layout'
import '../../assets/style.css'
import { sample } from 'lodash'

class App extends React.Component {
  state = {
    spinning: true,
    isLogin: false,
    selectedDate: moment(),
    photo: null,
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
    const encouragements = await fetchAnotherSheet(this.state.isLogin, 'encouragements')
    const photos = await fetchAnotherSheet(this.state.isLogin, 'photos')

    this.setState({
      data ,
      encouragement: `" ${sample(encouragements)} "`,
      photo: sample(photos)
    })
  }

  selectDate = date => {
    this.setState({ selectedDate: date })
  }

  componentDidMount = async () => {
    await this.refetchAuth()
    await this.refetchData()
    this.setState({
      spinning: false
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