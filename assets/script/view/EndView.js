
cc.Class({
    extends: cc.Component,
    properties: {
        endScore:cc.Label,
    },
    onLoad(){
        this.endScore.string=Global.score;
    },
    backHome(){
        cc.director.loadScene("home")
    }
});