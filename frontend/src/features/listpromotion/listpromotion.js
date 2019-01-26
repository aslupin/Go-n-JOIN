import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../../common/navbar'

class App extends Component {
  render() {
    const Body = styled.div`
      text-align: center;
    `
    return (
      <div>
        <Body>
          <Navbar />
        </Body>
      </div>
    )
  }
}

export default App
