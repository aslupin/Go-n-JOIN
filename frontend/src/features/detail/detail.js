import React, { Component } from 'react'
import styled from 'styled-components'
import Search from '../../common/search'
import Card from '../../common/card_detail'
import Navbar from '../../common/navbar'
import ItemRankingGroup from '../../common/item_ranking_group'
import iconSearch from '../../assets/search_page/musica-searcher.png'

// MOCK-DATA (NON-DB)
import M1 from '../../assets/food_pic/4.jpg'

import iconStarI from '../../assets/detail/gold_star.png'
import iconStarII from '../../assets/detail/silver_star.png'
import iconStarIII from '../../assets/detail/bronze_star.png'

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
      <div>
        <Body>
          <Navbar SearchCompChecker={false} HeaderText={'Detail'} />
          <Card imgSrc={M1} />
          <Button>NEW GROUP</Button>
          <LeaderText>LEADERBOARD</LeaderText>
          <SearchBox>
            <ImageSearch src={iconSearch} />
            <Search />
          </SearchBox>

          <ItemRankingGroup
            color_rank="#ffd700"
            star={iconStarI}
            name="aroii"
            score={89}
            header_group={true}
          />
          <ItemRankingGroup
            color_rank="#ffea83"
            star={iconStarII}
            name="react"
            score={88}
            header_group={true}
          />
          <ItemRankingGroup
            color_rank="#fef6ce"
            star={iconStarIII}
            name="spiderman"
            score={79}
            header_group={true}
          />
          <ItemRankingGroup
            color_rank="#fff"
            number_ranking="4"
            name="Ant"
            score={73}
            header_group={false}
          />

          <ItemRankingGroup
            color_rank="#fff"
            number_ranking="5"
            name="Zombie"
            score={60}
            header_group={false}
          />
          <ItemRankingGroup
            color_rank="#fff"
            number_ranking="6"
            name="Kaimook"
            score={49}
            header_group={false}
          />
          <ItemRankingGroup
            color_rank="#fff"
            number_ranking="7"
            name="Ore"
            score={10}
            header_group={false}
          />
          <ItemRankingGroup
            color_rank="#ff"
            number_ranking="8"
            name="Snack"
            score={1}
            header_group={false}
          />
          {/* <ItemRankingGroup color_rank="#ffd700" star={iconStarI} name="aroii" score={89} /> */}
        </Body>
      </div>
    )
  }
}

export default Detail
