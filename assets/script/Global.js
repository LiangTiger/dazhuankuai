window.Global = {
    difficult: null,
    score: null,
    gameBall: null,
    userInfo: null,
}
// wx.login({
//     success: function () {
//         wx.getUserInfo({
//             lang: 'zh_CN',
//             success: function (res) {
//                 Global.userInfo = res.userInfo;
//             },
//             fail: function (res) {
//                 // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
//                 if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
//                     // 处理用户拒绝授权的情况
//                 }
//             }
//         })
//     }
// })
// wx.authorize({
//     scope: 'scope.record',
//     fail: function (res) {
//         // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
//         if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
//             // 处理用户拒绝授权的情况
//         }
//     }
// })
// wx.onShareAppMessage(function () {
//     // 用户点击了“转发”按钮
//     return {
//       title: '经典打砖块，快来挑战我吧'
//     }
//   })