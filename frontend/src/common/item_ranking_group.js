import React, { Component } from 'react'
import styled from 'styled-components'
import iconArrowR from '../assets/detail/right-arrow.png'
// MOCK DATA
// import iconStarI from '../assets/detail/gold_star.png'
// import iconStarII from '../assets/detail/silver_star.png'
// import iconStarIII from '../assets/detail/bronze_star.png'

class ItemRankingGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const ItemRanking = styled.div`
      /* overflow: hidden; */
      padding: 2 2 12px;
      margin: 35px auto 0;
      margin-top: 20px;
      width: 86%;
      height: 45px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15), 0 0px 12px rgba(0, 0, 0, 0.18);
      border-radius: 7px;
      /* MOCK PROPS */
      background-color: ${this.props.color_rank};
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
    const IconLeftRank = styled.img`
      width: 37.5px;
      height: auto;
      margin: 4px;
      padding-left: 13px;

      /* text-align: left; */
      /* display: flex; */
    `
    const TextLeftRank = styled.div`
      width: 25px;
      height: auto;
      text-align: left;
      display: inline-block;
    `
    const NameRank = styled.div`
      width: 25px;
      font-size: 20px;
      font-weight: bolder;
      height: cover;
      /* text-align: left; */
      padding-left: 20px;
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

    const ScoreRank = styled.div`
      width: 25px;
      height: cover;
      font-size: 20px;
      font-weight: bolder;
      text-align: right;
      /* display: inline-block; */
      padding-top: 10px;
      padding-right: 25px;
    `
    return (
      <div>
        <ItemRanking>
          <LeftWrap>
            <IconLeftRank src={this.props.star} />
            {/* <TextLeftRank>1 st</TextLeftRank> */}
            <NameRank>{this.props.name}</NameRank>
          </LeftWrap>
          <RightWrap>
            <ScoreRank>{this.props.score}</ScoreRank>
            <IconRightRank src={iconArrowR} />
          </RightWrap>
        </ItemRanking>
      </div>
    )
  }
}

export default ItemRankingGroup
