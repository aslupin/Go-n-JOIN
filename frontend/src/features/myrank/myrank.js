import React, { Component } from 'react'
import styled from 'styled-components'
import Search from '../../common/search'
import Card from '../../common/card_detail'
import Navbar from '../../common/navbar'
import ItemRankingUsers from '../../common/item_ranking_users'
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

class MyRank extends Component {
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
      width: 172px;
      height: auto;
      font-size: 24px;
      /* font-weight: bolder; */
      letter-spacing: 0.8px;
      border-width: 0px;
      border-radius: 14px;
      background-color: #fff;
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
    const Wrapper = styled.div`
      width: 100%;
      height: 20px;
      text-align: center;
      margin-bottom: 70px;
      margin-top: 26px;
    `
    const Text = styled.div`
      font-size: 20px;
      padding-right: 14px;
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

    const EndText = styled.div`
      color: #ffd700;
      font-size: 18px;
      height: cover;
      padding-left: 23px;
      padding-top: 10px;
    `
    return (
      <div>
        <Body>
          <Navbar SearchCompChecker={false} HeaderText={'My Ranking'} />
          {/* <ImageGroup /> */}
          {/* <Name>aroii</Name> */}
          <br />
          <Wrapper>
            <Text>Name</Text>
            <Name>user01</Name>
          </Wrapper>

          {/* <Wrapper>
            <InnerWrap>
              <UsersWrap>
                <PromotionImage src={iconUsers} />
                <Text>9/10</Text>
              </UsersWrap>
              <RankWrap>
                <PromotionImage src={iconRank} />
                <Text>1st Rank</Text>
              </RankWrap>
            </InnerWrap>
          </Wrapper> */}
          {/* <Button>Join</Button>

          <LeaderText>MEMBER RANKING</LeaderText> */}
          <ItemRankingUsers
            header_topic={true}
            icon_user={iconUsers}
            icon_rank={iconRank}
          />

          <ItemRankingUsers
            name="aroii"
            number_ranking="5th"
            header_group={true}
            header_topic={false}
          />
          <ItemRankingUsers
            name="team KU"
            number_ranking="2nd"
            header_group={true}
            header_topic={false}
          />
          <ItemRankingUsers
            number_ranking="8th"
            name="love pizza"
            header_group={true}
            header_topic={false}
          />
          <ItemRankingUsers
            name="cheese"
            number_ranking="OUT OF RANK"
            header_group={false}
            header_topic={false}
          />

          <ItemRankingUsers
            name="Banana"
            number_ranking="OUT OF RANK"
            header_group={false}
            header_topic={false}
          />
          <EndText>*OUT OF RANK : Your point is</EndText>
          <EndText>under 15% of the 1st place.</EndText>
        </Body>
      </div>
    )
  }
}

export default MyRank
