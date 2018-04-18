
cc.Class({
    extends: cc.Component,
    init(){
        this.node.x = 360
    },
    move(ballPositionX){
        this.node.x=ballPositionX;
    },
    onLoad(){
        this.node.once("touchstart",function(event){
            window.GameCtl.ballRestart();
        })
    },
});
