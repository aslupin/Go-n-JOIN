import React, { Component } from 'react'
import styled from 'styled-components'
// import AddTimeImage from '../assets/img/addtime.png'
// import Modal from '../components/modal'
class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const ItemWrapper = styled.div`
      overflow: hidden;
      padding: 2 2 10px;
      margin: 25px auto 0;
      width: 85%;
      height: 155px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.05), 0 0px 12px rgba(0, 0, 0, 0.08);
      border-radius: 13px;
      // background-color: #FFFF;
      background-image: url(${this.props.imgSrc});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    `
    const ItemWrapperDetail = styled.div`
      overflow: hidden;
      padding: 2 2 12px;
      margin: 35px auto 0;
      margin-top: -20px;
      width: 70%;
      height: 60px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.05), 0 0px 12px rgba(0, 0, 0, 0.08);
      border-radius: 13px;
      background-color: #ffea83;
    `

    const ItemPromotion = styled.div`
      text-align: center;
      padding-top: 10px;
      font-size: 15px;
      font-weight: bold;
    `
    const ItemResName = styled.div`
      text-align: center;
      padding-top: 10px;
      font-size: 12px;
      font-weight: normal;
    `
    const ItemDuration = styled.div`
      margin-top: -10px;
      margin-right: 10px;
      text-align: right;
      font-size: 11px;
      font-weight: normal;
      float: right;
    `

    // const imgPromotion = this.props.imgSrc
    return (
      <div>
        <ItemWrapper />
        <ItemWrapperDetail>
          <ItemPromotion>Chicken Fest</ItemPromotion>
          <ItemResName>KFC</ItemResName>
          <ItemDuration align="right">2019 - 02 - 01</ItemDuration>
        </ItemWrapperDetail>
      </div>
    )
  }
}

export default Item
