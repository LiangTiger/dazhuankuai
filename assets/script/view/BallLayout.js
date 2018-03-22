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
        ballNumber:0,
    },

    init(gameCtl) {
        this.gameCtl = gameCtl;
        for(let i=0;i<this.ballNumber;i++){
            let ballNode=cc.instantiate(this.ballPrefab);
            ballNode.parent=this.node;
            ballNode.position = cc.v2(360,270);
            ballNode.getComponent(cc.RigidBody).linearVelocity = cc.v2(800,800);
            
        }
    },
    
});