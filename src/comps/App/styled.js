import styled from 'styled-components'
import { Layout as Content, Layout } from 'antd'

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