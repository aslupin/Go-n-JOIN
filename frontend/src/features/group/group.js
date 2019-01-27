import React, { Component } from 'react'
import styled from 'styled-components'
import Search from '../../common/search'
import Card from '../../common/card_detail'
import Navbar from '../../common/navbar'
import ItemRankingGroup from '../../common/item_ranking_group'
import iconSearch from '../../assets/search_page/musica-searcher.png'
import iconFlag from '../../assets/group/flag.png'
import iconUsers from '../../assets/group/multiple-users-silhouette.png'
import iconRank from '../../assets/group/rank-5.png'

// MOCK-DATA (NON-DB)
import M1 from '../../assets/food_pic/4.jpg'
import G1 from '../../assets/group/pablo-merchan-montes-237641-unsplash-1.png'
import iconStarI from '../../assets/detail/gold_star.png'
import iconStarII from '../../assets/detail/silver_star.png'
import iconStarIII from '../../assets/detail/bronze_star.png'

class Group extends Component {
  render() {
    const Body = styled.div`
      text-align: center;
      width: 100%;
      /* display: block; */
    `

    const ImageGroup = styled.div`
      overflow: hidden;
      padding: 2 2 10px;
      /* margin-bottom: 15px; */
      margin: 25px auto 12px;
      width: 43%;
      height: 125px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 0px 12px rgba(0, 0, 0, 0.18);
      border-radius: 13px;

      /* background-image: url(${this.props.image_group}); */
      background-image: url(${G1});
      background-color: #828282;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    `

    const Name = styled.button`
      text-align: center;
      margin-bottom: 10px;
      width: 212px;
      height: 44px;
      font-size: 27px;
      font-weight: bolder;
      border-width: 0px;
      border-radius: 14px;
      background-color: #ffe34e;
      outline: none;
    `

    const Button = styled.button`
      font-size: 30px;
      margin-top: 5px;
      cursor: pointer;
      width: 132px;
      height: 40px;
      border-width: 0px;
      border-radius: 14px;
      background-color: #6ab369;
      letter-spacing: 2px;
      outline: none;
    `
    const LeaderText = styled.h1`
      text-align: center;
      font-size: 26.5px;
      font-weight: bold;
    `
    const PromotionWrap = styled.div`
      width: 100%;
      height: 20px;
      text-align: center;
      margin-bottom: 10px;
    `
    const PromotionText = styled.div`
      font-size: 16px;
      display: inline-block;
    `
    const PromotionImage = styled.img`
      height: 20px;
      display: inline-block;
      padding-right: 10px;
      width: auto;
    `
    const InnerWrap = styled.div`
      text-align: center;
      width: 50%;
      margin: auto;
    `
    const UsersWrap = styled.div`
      display: flex;
      float: left;
    `
    const RankWrap = styled.div`
      display: flex;
      float: right;
    `
    return (
      <div>
        <Body>
          <Navbar SearchCompChecker={false} HeaderText={'GROUP'} />
          <ImageGroup />
          <Name>aroii</Name>
          <br />
          <PromotionWrap>
            <PromotionImage src={iconFlag} />
            <PromotionText>Burger Burger Voucher</PromotionText>
          </PromotionWrap>
          <PromotionWrap>
            <InnerWrap>
              <UsersWrap>
                <PromotionImage src={iconUsers} />
                <PromotionText>9/10</PromotionText>
              </UsersWrap>
              <RankWrap>
                <PromotionImage src={iconRank} />
                <PromotionText>1st Rank</PromotionText>
              </RankWrap>
            </InnerWrap>
          </PromotionWrap>
          <Button>Join</Button>

          <LeaderText>MEMBER RANKING</LeaderText>

          <ItemRankingGroup
            color_rank="#ffd700"
            star={iconStarI}
            name="poonsht"
            score={16}
            header_group={true}
          />
          <ItemRankingGroup
            color_rank="#ffea83"
            star={iconStarII}
            name="thitiiz"
            score={15}
            header_group={true}
          />
          <ItemRankingGroup
            color_rank="#fef6ce"
            star={iconStarIII}
            name="user02"
            score={14}
            header_group={true}
          />
          <ItemRankingGroup
            color_rank="#fff"
            number_ranking="4"
            name="asmbd"
            score={12}
            header_group={false}
          />

          <ItemRankingGroup
            color_rank="#fff"
            number_ranking="5"
            name="user01"
            score={11}
            header_group={false}
          />
          <ItemRankingGroup
            color_rank="#fff"
            number_ranking="6"
            name="chanya"
            score={10}
            header_group={false}
          />
          <ItemRankingGroup
            color_rank="#c4c4c4"
            number_ranking="-"
            name="chitsanupong"
            score={1}
            header_group={false}
          />
          <ItemRankingGroup
            color_rank="#c4c4c4"
            number_ranking="-"
            name="fronggs"
            score={1}
            header_group={false}
          />
          {/* <ItemRankingGroup color_rank="#ffd700" star={iconStarI} name="aroii" score={89} /> */}
        </Body>
      </div>
    )
  }
}

export default Group
