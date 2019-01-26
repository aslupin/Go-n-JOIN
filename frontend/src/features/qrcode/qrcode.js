import React, { Component } from 'react';
import QRcode from 'qrcode.react';
import axios from 'axios';
import firebase from 'firebase';
import Navbar from '../../common/navbar';
let database
class Qrcode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "asdfgh",
      success: false
    }
  }

  qrCodeScan(){
    //scan
    
  }

  render() {
    return (
      <div className="qrcode">
        <Navbar />
        {this.state.success?
        <div className="success">
          success
        </div>
        :<QRcode value = "EARN" />
        }
        {this.state.data}
        {this.qrCodeScan()}
      </div>
    );
  }
}

export default Qrcode;
