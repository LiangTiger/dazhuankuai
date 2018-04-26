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
    init(){
        for(let i=0;i<this.node.childrenCount;i++){
            this.node.children[i].stopAllActions();
        }
    },
    checkSkin(event){
        this.init()
        Global.gameBall=event.currentTarget.name;
        let positionCache=event.currentTarget.position;
        event.currentTarget.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.1,0,30),cc.moveBy(0.1,0,-30))))
    }
});
