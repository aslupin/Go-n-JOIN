import React, { Component } from 'react';
import QRcode from 'qrcode.react';
import axios from 'axios';
import styled from 'styled-components'
import Navbar from '../../common/navbar';
let database
class Qrcode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "asdfgh",
      success: false,
      size: 500
    }
  }

  qrCodeScan(){
    //scans
    
  }

  

  render() {
    const Qrstyle = styled(QRcode)`
      padding-top: 20px;
    `
    return (
      <div className="qrcode">
        <Navbar />
        {this.state.success?
        <div className="success">
          success
        </div>
        :<Qrstyle value = "กะเพราะหมูกรอบ 4" size = {this.state.size} style={{width: "100%", height: "100%", paddingTop:"20px"}}/>
        }
        {this.qrCodeScan()}
      </div>
    );
  }
}

export default Qrcode;
