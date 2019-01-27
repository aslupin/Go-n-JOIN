import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import QRcode from './features/qrcode/qrcode'
// import MyDashBoard from './features/mydashboard/mydashboard'
import ListPromotion from './features/listpromotion/listpromotion'
// <<<<<<< HEAD
import QRcode from './features/qrcode/qrcode'
import Modal from './common/modal'
// =======
import DetailPage from './features/detail/detail'
import GroupPage from './features/group/group'
import MyRank from './features/myrank/myrank'

// >>>>>>> b3c9fc39156baa60f1e9e65431a48ca01a18bf98
export default () => (
  <Switch>
    <Route path="/" exact component={ListPromotion} />
    <Route path="/detail" exact component={DetailPage} />
    <Route path="/modal" exact component={Modal} />
    <Route path="/group" exact component={GroupPage} />
    <Route path="/myrank" exact component={MyRank} />
    <Route path="/qrcode" exact component={QRcode} />
  </Switch>
)
