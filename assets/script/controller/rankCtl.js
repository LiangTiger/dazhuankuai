cc.Class({
    extends: cc.Component,

    properties: {
        userName:cc.Label,
        userScore:cc.Label,
    },
    onLoad(){
        var _userInfo=wx.getStorageSync('_userInfo')
        this.userName.string=_userInfo.userName
        this.userScore.string=_userInfo.userScore
    }
})
