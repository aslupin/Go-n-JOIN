import React from 'react'
import styled from 'styled-components'
import Search from './search'
import iconSearch from '../assets/search_page/musica-searcher.png'
import iconQR from '../assets/search_page/qr-code.png'
import iconRanking from '../assets/search_page/rank-3.png'

const NavbarIcon = styled.div`
  position: absolute;
  height: 50px;
  background-color: #ffd700;
  width: 100%;
  top: 0px;
  left: 0px;
  text-align: right;
  display: inline-block;
`
const IconTop = styled.img`
  padding-top: 10px;
  padding-left: 8.5px;
  padding-right: 8.5px;
`
const NavbarSearch = styled.div`
  position: absolute;
  height: 50px;
  background-color: #ffd700;
  width: 100%;
  top: 0px;
  left: 0px;
  text-align: right;
  display: inline-block;
`
// const wrapIcon = styled.div`
//   display: inline-block;
//   text-align: right;
// `
const Navbar = props => (
  <div>
    <NavbarSearch>
      <Search />
    </NavbarSearch>
    <NavbarIcon>
      <IconTop src={iconSearch} />
      <IconTop src={iconQR} />
      <IconTop src={iconRanking} />
    </NavbarIcon>
    <div style={{ paddingTop: '49px', color: 'red' }} />
  </div>
)

export default Navbar
