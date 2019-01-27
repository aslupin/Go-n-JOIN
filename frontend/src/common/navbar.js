import React from 'react'
import styled from 'styled-components'
import Search from './search'
import iconSearch from '../assets/search_page/musica-searcher.png'
import iconQR from '../assets/search_page/qr-code.png'
import iconRanking from '../assets/search_page/rank-3.png'
import iconArrow from '../assets/group/left-arrow.png'

const NavbarBox = styled.div`
  position: fixed;
  height: 50px;
  background-color: #ffd700;
  width: 100%;
  top: 0px;
  left: 0px;
  text-align: right;
  display: inline-block;
`
const NavbarBoxHeader = styled.div`
  position: fixed;
  height: 66px;
  background-color: #ffd700;
  width: 100%;
  top: 0px;
  left: 0px;
  text-align: right;
  display: inline-block;
`
const BgBody = styled.div`
  background-color: #ffd700;
  position: fixed;
  border-radius: 50%;
  width: 100%;
  height: 260px;
  margin-bottom: 120px;
  /* border-radius: 65px; */
  /* width: 100%;
  height: 200px; */
  top: -70px;
  z-index: -1;
  right: 0px;
  left: 0px;
`

const IconTop = styled.img`
  /* position: ; */
  text-align: right;
  padding-top: 10px;
  padding-left: 8.5px;
  padding-right: 8.5px;
`
const Navsearch = styled.div`
  position: absolute;
  height: 50px;
  width: 100%;
  top: 10px;
  left: 10px;
  text-align: left;
  display: inline-block;
`

const Header = styled.p`
  position: absolute;
  margin: 10px;
  padding-top: 13.5px;
  padding-left: 4.5px;
  text-align: left;
  font-size: 35px;
  font-weight: bold;
  /* display: inline-block; */
`
// const wrapIcon = styled.div`
//   display: inline-block;
//   text-align: right;
// `
const Navbar = props => (
  <div>
    <BgBody />

    {props.SearchCompChecker ? (
      <NavbarBox>
        <Navsearch>
          <Search />
        </Navsearch>
        <IconTop src={iconSearch} style={{borderImage: "10px"}}/>
        <IconTop src={iconQR} />
        <IconTop src={iconRanking} />
      </NavbarBox>
    ) : (
      <NavbarBoxHeader>
        <Header>
          <img src={iconArrow} width="25px" style={{ paddingRight: '14px' }} />
          {props.HeaderText}
        </Header>
        <IconTop src={iconSearch} />
        <IconTop src={iconQR} />
        <IconTop src={iconRanking} />
      </NavbarBoxHeader>
    )}

    <div style={{ paddingTop: '49px', color: 'red' }} />
  </div>
)

export default Navbar
