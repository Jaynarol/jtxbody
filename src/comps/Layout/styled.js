import styled from 'styled-components'
import { Divider, Layout } from 'antd'

const { Content } = Layout

export const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`

export const MainLayout = styled(Layout)`
  min-height: 100vh;
`

export const MainContent = styled(Content)`
  margin: 16px;
`

export const Panel = styled.div`
  width: 288px;
  margin: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #EEE;
`

export const DividerTop = styled(Divider)`
  margin: 3px 0 10px;
`
