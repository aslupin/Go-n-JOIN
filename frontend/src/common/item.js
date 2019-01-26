import React, { Component } from 'react'
import style from 'styled-components'
// import AddTimeImage from '../assets/img/addtime.png'
// import Modal from '../components/modal'
class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const ItemWrapper = style.div`
        overflow: hidden;
        padding: 2 2 12px;
        margin: 35px auto 0;
        width: 98%;
        height: 155px;
        box-shadow: 0 0 3px rgba(0, 0, 0, .05), 0 0px 12px rgba(0, 0, 0, .08);
        border-radius: 13px;
        background-color: #FFFF;
        `
    const ItemName = style.div`
        text-align: left;
        padding-left: 20px;
        padding-top: 10px;
        font-size: 16px;
        font-weight: bold;
        `
    const ItemDetail = style.div`
        text-align: left;
        padding-left: 20px;
        padding-top: 10px;
        font-size: 12px;
        font-weight: normal;
        `

    return (
      <div>
        <ItemWrapper>
          <ItemName>โปรโมชั่น</ItemName>

          <ItemDetail>รายละเอียด</ItemDetail>
        </ItemWrapper>
      </div>
    )
  }
}

export default Item
