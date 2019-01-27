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
      margin-top: -290px;
      width: 68%;
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
      margin-top: 110px;
      width: 87%;
      height: 220px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15), 0 0px 12px rgba(0, 0, 0, 0.18);
      border-radius: 13px;
      background-color: #fff;
    `

    const ItemPromotion = styled.div`
      margin-top: 100px;
      text-align: center;
      padding-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    `
    const Inline = styled.div`
      /* padding-top: 5px; */
      /* text-align: center; */
      justify-content: space-between;
      display: flex;
    `
    const Topic = styled.div`
      font-size: 15px;
      font-weight: bold;
      /* float: left; */
      text-align: left;
      display: inline-block;
      padding-left: 10px;
    `
    const Value = styled.div`
      /* float: right; */
      font-size: 14px;
      text-align: right;
      display: inline-block;
      padding-right: 10px;
    `

    const imgPromotion = this.props.imgSrc
    return (
      <div>
        <ItemWrapperDetail>
          <ItemPromotion>Chicken Fest</ItemPromotion>
          <Inline>
            <Topic>Reward</Topic>
            <Value>Get Up to $19 voucher</Value>
          </Inline>
          <Inline>
            <Topic>Maximun members</Topic>
            <Value>10</Value>
          </Inline>
          <Inline>
            <Topic>Expired date</Topic>
            <Value>2019 - 02 - 01</Value>
          </Inline>
        </ItemWrapperDetail>
        <ItemWrapper />
        <div style={{ paddingTop: '160px' }} />
      </div>
    )
  }
}

export default Item
