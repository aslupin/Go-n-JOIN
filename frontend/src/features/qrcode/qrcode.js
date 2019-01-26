import React, { Component } from 'react';
import QRcode from 'qrcode.react';
import styled from 'styled-components'
import Navbar from '../../common/navbar';
import success from '../../assets/search_page/checked.png';

let database
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
    const Pc = styled.div`
      text-align: center;
      margin: auto;
    `
    const SuccessStyle = styled.div`
      margin: auto;
      text-align: center;
      display: flex;
    `
    const Checked = styled.img`
      width: 10%;
      height: 10%;
      margin-right: auto;
      padding-left: 10px;
      padding-top: 20px;
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
          <SuccessStyle>
              <h1 style={{marginLeft:"auto"}}>SUCCESS</h1>
              <Checked src={success}/>
          </SuccessStyle>
          :<Qrstyle><QRcode value = "กะเพราะหมูกรอบ 4" size = {this.state.size} style={{width: "100%", height: "100%", paddingTop: "20px"}}/>
                    <Dotline />
          </Qrstyle>
          }
        <Pc>Line up the QR code in the camera frame</Pc>
        <button onClick = {() => this.setState({success:true})}>yes</button>
        <button onClick = {() => this.setState({success:false})}>no</button>
      </div>
    );
  }
}

export default Qrcode;
