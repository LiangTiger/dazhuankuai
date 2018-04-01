// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
cc.Class({
    extends: cc.Component,

    properties: {
        ballPrefab:cc.Prefab,
    },
    init(initBalls) {
        this.initBalls=initBalls;
        this.node.removeAllChildren();
        let ballX=window.GameCtl.paddle.node.x;
        for(let i=0;i<initBalls;i++){
            let _this=this
            setTimeout(function(){
                let ballNode=cc.instantiate(_this.ballPrefab);
                ballNode.parent=_this.node;
                ballNode.position = cc.v2(ballX-(i*2),180-(i*2));
                ballNode.getComponent(cc.RigidBody).linearVelocity = cc.v2(1000/(Math.round(Math.tan((90-window.GameCtl.sightLine.node.rotation)/57.2956))),1000);
                console.log('123')
            }(),5000)
        }
    },
    
});