
cc.Class({
    extends: cc.Component,
    properties:{
        sightLine:require('SightLine')
    },
    init(){
        this.node.x = 360;
        this.sightLine.init();
    },
    move(ballPositionX){
        this.node.x=ballPositionX;
        this.sightLine.move(ballPositionX);
    },
    onLoad(){
        this.node.once("touchstart",function(event){
            window.GameCtl.ballRestart();
        })
    },
});
