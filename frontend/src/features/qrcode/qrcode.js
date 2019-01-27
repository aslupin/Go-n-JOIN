import React, { Component } from 'react'
import QRcode from 'qrcode.react'
import styled from 'styled-components'
import Navbar from '../../common/navbar'
import checkimg from '../../assets/QRcode/checked.png'
import successimg from '../../assets/QRcode/SUCCESS.png'
import grouprank from '../../assets/QRcode/GROUP RANK.png'
import ellipse from '../../assets/QRcode/Ellipses.png'
import rightArrow from '../../assets/detail/right-arrow.png'

class Qrcode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'asdfgh',
      success: false,
      size: 500,
    }
  }

  render() {
    const Qrpage = styled.div`
      transition: 2s;
    `
    const Text = styled.div`
      text-align: center;
      font-size: 2em;
      font-weight: bold;
      padding-top: 10px;
    `
    const Pc = styled.div`
      font-size: 1.5em;
      text-align: center;
      margin: auto 30px;
    `
    const SuccessStyle = styled.div`
      margin: auto;
      text-align: center;
      padding-left: 55px;
      display: flex;
    `
    const Checked = styled.img`
      width: 10%;
      height: 10%;
      padding-left: 10px;
      padding-top: 20px;
    `
    const GroupRank = styled.img`
      display: block;
      max-width: 60%;
      max-height: 60%;
      margin: auto;
      margin-top: 70px;
    `
    const Myranking = styled.div`
      background-color: #ffd700;
      width: 280px;
      height: 55px;
      border-radius: 20px;
      margin: 20px auto;
      padding-left: 14px;
      display: flex;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2),
        0 2px 4px 0 rgba(0, 0, 0, 0.19);
    `
    const Right = styled.img`
      margin: 14px auto;
      width: 30px;
      height: 30px;
    `
    const No1 = styled.div`
      text-align: center;
    `
    const Qrstyle = styled.div`
      background-color: white;
      text-align: center;
      width: 75%;
      height: 100%;
      margin: 20px auto;
      padding: 20px;
      padding-bottom: 80px;
      border-radius: 10px;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `
    const Dotline = styled.div`
      border: none;
      border-bottom: 5px dashed #e7e7e7;
      height: 10%;
      padding-bottom: 50px;
    `
    return (
      <div className="qrcode">
        <Navbar HeaderText={'QR CODE'} />
        <div style={{ paddingTop: '30px' }} />

        {this.state.success ? (
          <div>
            <SuccessStyle>
              <Checked
                src={successimg}
                style={{ width: '55%', paddingLeft: '35px' }}
              />
              <Checked src={checkimg} />
            </SuccessStyle>
            <GroupRank src={grouprank} />
            <No1>
              <img src={ellipse} style={{ width: '90%' }} />
            </No1>
            <Myranking>
              <Text>MY RANKING</Text>
              <Right src={rightArrow} />
            </Myranking>
          </div>
        ) : (
          <Qrpage>
            <Qrstyle>
              <QRcode
                value="กะเพราะหมูกรอบไข่ดาว 4"
                size={this.state.size}
                style={{ width: '100%', height: '100%', paddingTop: '40px' }}
              />
              <Dotline />
            </Qrstyle>
            <Pc>Line up the QR code in the camera frame</Pc>
          </Qrpage>
        )}

        <button onClick={() => this.setState({ success: true })}>yes</button>
        <button onClick={() => this.setState({ success: false })}>no</button>
      </div>
    )
  }
}

export default Qrcode
