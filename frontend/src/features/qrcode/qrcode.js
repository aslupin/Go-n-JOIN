import React, { Component } from 'react';
import QRcode from 'qrcode.react';
import axios from 'axios';
import firebase from 'firebase';
let database
class Qrcode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "asdfgh",
      success: false
    }
    var config = {
      apiKey: "AIzaSyC1oEPAHEbiDclvc9YboefuuDSKhkFAg_A",
      authDomain: "aroiihack.firebaseapp.com",
      databaseURL: "https://aroiihack.firebaseio.com",
      projectId: "aroiihack",
      storageBucket: "aroiihack.appspot.com",
      messagingSenderId: "24219879467"
    };
    firebase.initializeApp(config);
    console.log(firebase.database);
    database = firebase.database;
  }

  qrCodeScan(){
    //scan
    
  }

  render() {
    return (
      <div className="qrcode">
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
