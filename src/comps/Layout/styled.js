import styled from 'styled-components'
import { Divider, Layout } from 'antd'

const { Content, Sider, Footer } = Layout

export const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 50px;
  font-size: 1.5em;
  color: lightgray;
  text-align: center;
  border-radius: 10px;
`

export const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`

export const SiderStyled = styled(Sider).attrs(() => ({
  width: 320,
  breakpoint: 'lg',
  collapsedWidth: '0'
}))`
  min-height: 100vh;
`

export const ContentStyled = styled(Content)`
  margin: 16px;
`

export const Panel = styled.div`
  width: 288px;
  margin: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #EEE;
`

export const DividerStyled = styled(Divider).attrs(() => ({
  orientation: 'center'
}))`
  margin: 20px 0 10px!important;
`

export const StyledFooter = styled(Footer)`
  text-align: center;
`

export const CopyRight = styled.div`
  margin-bottom: 5px;
`

export const LinkDev = styled.a`
  padding: 5px;
`