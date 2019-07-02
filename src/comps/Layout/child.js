import React from 'react'
import { CopyRight, LinkDev, StyledFooter } from './styled'
import { gconf, project } from '../../config'

import IconExcel from '../../assets/icons/icon-excel.png'
import IconFacebook from '../../assets/icons/icon-fb.png'
import IconGithub from '../../assets/icons/icon-github.png'


export const Footer = () => (
  <StyledFooter>
    <CopyRight>JTxBody ©2019 Developed by Jaynarol</CopyRight>
    <LinkDev href={`https://docs.google.com/spreadsheets/d/${gconf.sheetID}`} target="_blank" rel="noopener noreferrer">
      <img src={IconExcel} alt="spreadsheets" />
    </LinkDev>
    <LinkDev href={project.facebookLink} target="_blank" rel="noopener noreferrer">
      <img src={IconFacebook} alt="facebook" />
    </LinkDev>
    <LinkDev href={project.githubRepo} target="_blank" rel="noopener noreferrer">
      <img src={IconGithub} alt="github" />
    </LinkDev>
  </StyledFooter>
)

