import React, { Component } from 'react';
import QRcode from 'qrcode.react';
import styled from 'styled-components'
import Navbar from '../../common/navbar';
import checkimg from '../../assets/QRcode/checked.png';
import successimg from '../../assets/QRcode/SUCCESS.png';
import grouprank from '../../assets/QRcode/GROUP RANK.png';
import no1 from '../../assets/QRcode/1.png';
import myrank from '../../assets/QRcode/MY RANKING.png';
import ellipse from '../../assets/QRcode/Ellipses.png';

class Qrcode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "asdfgh",
      success: true,
      size: 500
    }
  }

  render() {
    const Text = styled.div`
      text-align: center;
      font-size: 2em;
      padding-top: 10px;
      animation: blink 2.5s linear infinite alternate;
      @keyframes blink {
        to{opacity: 0.4;}
      }
    `
    const Pc = styled.div`
      text-align: center;
      margin: auto;
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
      margin: 40px auto;
    `
    const No1 = styled.div`
      text-align: center;
    `
    const Qrstyle = styled.div`
      
      text-align: center;
      width: 75%;
      height: 100%;
      margin: auto;
      top: 100px;
      padding: 20px;
      padding-bottom: 80px;
      border-radius: 10px;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);s
      
    `
    const Dotline = styled.div`
      border:none;
      border-bottom:5px dashed #e7e7e7;
      height: 10%;
      padding-bottom: 50px;
    `
    return (
      <div className="qrcode">
        <Navbar />
        <div style={{paddingTop:"50px"}}></div>
        
          {this.state.success?
          <div>
            <SuccessStyle>
                <Checked src={successimg} style={{width:"55%", paddingLeft:"35px"}}/>
                <Checked src={checkimg} />
            </SuccessStyle>
            <GroupRank src={grouprank} />
            <No1>
            <img src={ellipse} style={{width:"100%"}}></img>
            </No1>
            <Myranking ><Text>MY RANKING</Text></Myranking>
          </div>
          :<div>
            <Qrstyle><QRcode value = "กะเพราะหมูกรอบ 4" size = {this.state.size} style={{width: "100%", height: "100%", paddingTop: "20px"}}/>
                    <Dotline />
            </Qrstyle>
            <Pc>Line up the QR code in the camera frame</Pc>
          </div>
          } 
        
        <button onClick = {() => this.setState({success:true})}>yes</button>
        <button onClick = {() => this.setState({success:false})}>no</button>
      </div>
    );
  }
}

export default Qrcode;
