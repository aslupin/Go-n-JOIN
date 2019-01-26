// import axios from 'axios'

// // Reducers
// const initialState = {
//   fullName: '',
//   email: '',
//   acceptTerms: false,
//   countdownText: '',
//   loading: false,
//   successMsg: '',
//   errMsg: '',
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_VALUE':
//       if (
//         ['fullName', 'email', 'acceptTerms', 'countdownText'].indexOf(
//           action.key
//         ) < 0
//       ) {
//         return state
//       }
//       return {
//         ...state,
//         [action.key]: action.value,
//       }
//     case 'SUBMIT_PENDING':
//       return {
//         ...state,
//         loading: true,
//         successMsg: '',
//         errMsg: '',
//       }
//     case 'SUBMIT_FULFILLED':
//       return {
//         ...state,
//         loading: false,
//         successMsg: action.payload.data['msg'],
//         errMsg: '',
//       }
//     case 'SUBMIT_REJECTED':
//       return {
//         ...state,
//         loading: false,
//         successMsg: '',
//         errMsg: action.payload.response.statusText,
//       }
//     // case 'SET_FULL_NAME':
//     //   return {
//     //     ...state,
//     //     fullName: action.value,
//     //   }
//     // case 'SET_EMAIL':
//     //   return {
//     //     ...state,
//     //     email: action.value,
//     //   }
//     // case 'SET_ACCEPT_TERMS':
//     //   return {
//     //     ...state,
//     //     acceptTerms: action.value,
//     //   }
//     // case 'SET_COUNTDOWN_TEXT':
//     //   return {
//     //     ...state,
//     //     countdownText: action.value,
//     //   }
//     default:
//       return state
//   }
// }

// // Action Creator
// export const setValue = (key, value) => ({
//   type: 'SET_VALUE',
//   key,
//   value,
// })
// export const submit = (fullName, email) => ({
//   type: 'SUBMIT',
//   payload: axios.post(`http://www.mocky.io/v2/5bfbb86f310000700039b9b2`, {
//     fullName,
//     email,
//   }),
// })
// // export const setFullName = value => ({
// //   type: 'SET_FULL_NAME',
// //   value,
// // })
// // export const setEmail = value => ({
// //   type: 'SET_EMAIL',
// //   value,
// // })
// // export const setAcceptTerms = value => ({
// //   type: 'SET_ACCEPT_TERMS',
// //   value,
// // })
// // export const setCountdownText = value => ({
// //   type: 'SET_COUNTDOWN_TEXT',
// //   value,
// // })
