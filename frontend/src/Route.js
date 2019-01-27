import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import QRcode from './features/qrcode/qrcode'
// import MyDashBoard from './features/mydashboard/mydashboard'
import ListPromotion from './features/listpromotion/listpromotion'
import DetailPage from './features/detail/detail'
import GroupPage from './features/group/group'

export default () => (
  <Switch>
    <Route path="/" exact component={ListPromotion} />
    <Route path="/detail" exact component={DetailPage} />
    <Route path="/group" exact component={GroupPage} />
    {/* <Route path="/mydashboard" exact component={MyDashBoard} /> */}
    {/* <Route path="/qrcode" exact component={QRcode} /> */}
  </Switch>
)
