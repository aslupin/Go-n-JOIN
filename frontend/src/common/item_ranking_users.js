import React, { Component } from 'react'
import styled from 'styled-components'
import iconArrowR from '../assets/detail/right-arrow.png'
// MOCK DATA
// import iconStarI from '../assets/detail/gold_star.png'
// import iconStarII from '../assets/detail/silver_star.png'
// import iconStarIII from '../assets/detail/bronze_star.png'

class ItemRankingUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const ItemRanking = styled.div`
      /* overflow: hidden; */
      padding: 2 2 12px;
      margin: 35px auto 0;
      margin-top: 10px;
      margin-bottom: 29px;
      width: 86%;
      height: 50px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.25), 0 0px 12px rgba(0, 0, 0, 0.38);
      border-radius: 7px;
      /* MOCK PROPS */
      background-color: ${this.props.header_group ? '#ffea83' : '#c4c4c4'};
      display: flex;
      justify-content: space-between;
    `
    const HeaderRank = styled.div`
      /* overflow: hidden; */
      font-size: 20px;
      padding: 2 2 12px;
      margin: 35px auto 0;
      margin-top: 10px;
      margin-bottom: -10px;
      width: 86%;
      height: 50px;
      /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.25), 0 0px 12px rgba(0, 0, 0, 0.38); */
      /* border-radius: 7px; */
      /* MOCK PROPS */
      /* background-color: ${
        this.props.header_group ? '#ffea83' : '#c4c4c4'
      }; */
      display: flex;
      justify-content: space-between;
    `
    const LeftWrap = styled.div`
      margin: 1px;
      text-align: left;
      display: flex;
    `
    const RightWrap = styled.div`
      margin: 1px;
      display: flex;
      text-align: right;
    `
    // const IconLeftRank = styled.img`
    //   width: 37.5px;
    //   height: auto;
    //   margin: 4px;
    //   padding-left: 13px;

    //   /* text-align: left; */
    //   /* display: flex; */
    // `
    // const TextLeftRank = styled.div`
    //   /* width: 25px; */
    //   height: auto;
    //   margin: 4px;
    //   font-size: 28px;
    //   font-weight: bolder;
    //   padding-left: 26px;
    // `
    const NameRank = styled.div`
      /* width: 25px; */
      font-size: 18px;
      font-weight: bolder;
      height: cover;
      /* text-align: left; */
      padding-left: 23px;
      padding-top: 10px;
      /* display: flex; */
    `

    const IconRightRank = styled.img`
      /* margin: 4px; */
      width: auto;
      padding: 10px;
      height: 20px;
      padding-top: 10px;
      margin-top: 2.1px;
      /* text-align: right; */
      /* display: inline-block; */
    `

    const Rank = styled.div`
      width: auto;
      height: cover;
      font-size: 14px;
      font-weight: bolder;
      text-align: center;
      /* display: inline-block; */
      padding-top: 10px;
      padding-right: 55px;
    `
    return (
      <div>
        {!this.props.header_topic ? (
          <ItemRanking>
            <LeftWrap>
              <NameRank>{this.props.name}</NameRank>
            </LeftWrap>
            <RightWrap>
              <Rank>{this.props.number_ranking}</Rank>
              <IconRightRank src={iconArrowR} />
            </RightWrap>
          </ItemRanking>
        ) : (
          <HeaderRank>
            <LeftWrap>
              <img src={this.props.icon_user} height="20px" />
              <NameRank>Group</NameRank>
            </LeftWrap>
            <RightWrap>
              <img src={this.props.icon_rank} height="30px" />
              <Rank>Rank</Rank>
              {/* <IconRightRank src={iconArrowR} /> */}
            </RightWrap>
          </HeaderRank>
        )}
      </div>
    )
  }
}

export default ItemRankingUsers
