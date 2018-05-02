
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
