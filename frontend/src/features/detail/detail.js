import React, { Component } from 'react'
import styled from 'styled-components'
import Search from '../../common/search'
import Card from '../../common/card_detail'
import Navbar from '../../common/navbar'
import M1 from '../../assets/food_pic/4.jpg'
import iconSearch from '../../assets/search_page/musica-searcher.png'
class Detail extends Component {
  render() {
    const Body = styled.div`
      text-align: center;
    `
    const Button = styled.button`
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      width: 160px;
      height: 40px;
      border-width: 0px;
      border-radius: 14px;
      background-color: #ffea83;
      outline: none;
    `
    const LeaderText = styled.h1`
      text-align: center;
      font-size: 28px;
      font-weight: bold;
    `
    const SearchBox = styled.span`
      display: inline-block;
      /* float: center; */
      /* text-align: center; */
    `
    const ImageSearch = styled.img`
      width: 30px;
      float: left;
      display: inline-block;
      height: auto;
    `
    const SearchInput = styled(Search)`
      display: inline-block;
    `
    return (
      <div style={{maxWidth: "375px", maxHeight: "667px"}}>
        <Body>
          <Navbar SearchCompChecker={false} HeaderText={'Detail'} />
          <Card imgSrc={M1} />
          <Button>NEW GROUP</Button>
          <LeaderText>LEADERBOARD</LeaderText>
          <SearchBox>
            <ImageSearch src={iconSearch} />
            <Search />
          </SearchBox>
        </Body>
      </div>
    )
  }
}

export default Detail
