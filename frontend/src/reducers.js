import { combineReducers } from 'redux'
import homeReducers from './features/listpromotion/redux'
// import formReducers from './features/mydashboard/redux'
// import qrcodeReducers from './features/qrcode/redux'
const rootReducers = combineReducers({
  list: homeReducers,
  // dash: formReducers,
  // qrcode: qrcodeReducers,
})
export default rootReducers
