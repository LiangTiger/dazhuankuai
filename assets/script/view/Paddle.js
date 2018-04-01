
cc.Class({
    extends: cc.Component,
    init(){
        this.node.x = 360;
    },
    onLoad(){
        this.node.once("mousedown",function(event){
            window.GameCtl.ballRestart();
        })
    },
});
