
cc.Class({
    extends: cc.Component,

    properties: {
        gameBack:{
            default:null,
            type:cc.Node
        }
    },
    backToHome(){
        cc.director.loadScene("home")
    },
    gamingBack(){
        let userInfo=wx.getStorageSync('_userInfo')||null
        if(userInfo){
            if(Global.score>userInfo.userScore){
                let userInfo={
                    userName:Global.userInfo.nickName,
                    userScore:Global.score
                }
                wx.setStorageSync('_userInfo',userInfo)
            }
        }else{
            let userInfo={
                userName:Global.userInfo.nickName,
                userScore:Global.score
            }
            wx.setStorageSync('_userInfo',userInfo)
        }
        cc.director.loadScene("home")
    }
});
