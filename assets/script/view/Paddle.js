
cc.Class({
    extends: cc.Component,
    init(){
        this.node.x = 360;
    },
    move(ballPositionX){
        this.node.x=Math.round(ballPositionX);
    },
    onLoad(){
        this.node.once("mousedown",function(event){
            window.GameCtl.ballRestart();
        })
    },
});
