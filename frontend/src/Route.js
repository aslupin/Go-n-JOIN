import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import QRcode from './features/qrcode/qrcode'
// import MyDashBoard from './features/mydashboard/mydashboard'
import ListPromotion from './features/listpromotion/listpromotion'

export default () => (
  <Switch>
    <Route path="/" exact component={ListPromotion} />
    {/* <Route path="/mydashboard" exact component={MyDashBoard} /> */}
    {/* <Route path="/qrcode" exact component={QRcode} /> */}
  </Switch>
)
