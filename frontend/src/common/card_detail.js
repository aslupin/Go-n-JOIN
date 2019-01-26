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
      margin-top: -260px;
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
      margin-top: 90px;
      width: 87%;
      height: 209px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.05), 0 0px 12px rgba(0, 0, 0, 0.08);
      border-radius: 13px;
      background-color: #fff;
    `

    const ItemPromotion = styled.div`
      margin-top: 103px;
      text-align: center;
      padding-top: 10px;
      font-size: 20px;
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
    const Inline = styled.div`
      /* padding-top: 5px; */
      /* text-align: center; */
      display: block;
    `
    const Topic = styled.div`
      /* font-size: 17px; */
      /* font-weight: bold; */
      float: left;
      display: inline-flex;
      /* padding-left: 2px; */
    `
    const Value = styled.div`
      float: right;
      display: inline-flex;
      /* padding-right: 5px; */
    `

    const imgPromotion = this.props.imgSrc
    return (
      <div>
        <ItemWrapperDetail>
          <ItemPromotion>ไก่ไก่ไก่</ItemPromotion>
          <div>
            <Topic>Reward</Topic>
            <Value>Get Up to $19 voucher</Value>
          </div>
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
      </div>
    )
  }
}

export default Item
