import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '../../common/card_detail'
import Navbar from '../../common/navbar'
import M1 from '../../assets/food_pic/4.jpg'

class Detail extends Component {
  render() {
    const Body = styled.div`
      text-align: center;
    `
    return (
      <div>
        <Body>
          <Navbar SearchCompChecker={false} HeaderText={'Detail'} />
          <Card imgSrc={M1} />
        </Body>
      </div>
    )
  }
}

export default Detail
