import React, { Component } from 'react'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import Item from '../../common/item_promotion'
import Navbar from '../../common/navbar'
import M1 from '../../assets/food_pic/1.jpg'
import M2 from '../../assets/food_pic/2.jpg'
import M3 from '../../assets/food_pic/3.jpg'
import M4 from '../../assets/food_pic/4.jpg'
import M5 from '../../assets/food_pic/5.jpg'
import M6 from '../../assets/food_pic/6.jpg'

class List extends Component {
  render() {
    const Body = styled.div`
      text-align: center;
    `

    return (
      <div style={{maxWidth: "375px", maxHeight: "667px"}}>
        <Body>
          <Navbar SearchCompChecker={true} />
          <Item
            imgSrc={M1}
            // onClick={() => {
            //   this.props.history.push('/detail')
            // }}
          />
          <Item imgSrc={M2} />
          <Item imgSrc={M3} />
          <Item imgSrc={M4} />
          <Item imgSrc={M5} />
        </Body>
      </div>
    )
  }
}

export default List
