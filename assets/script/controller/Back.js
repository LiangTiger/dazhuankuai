
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
    }
});
