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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },
    init(gameCtl){
        this.gameCtl=gameCtl;
        this.node.position=cc.v2(360,270);
        this.getComponent(cc.RigidBody).linearVelocity=cc.v2(800,800);
    },
    // LIFE-CYCLE CALLBACKS:
    onBeginContact(contact,self,other){
        switch(other.tag){
            case 1:
                this.gameCtl.onBallContactBrick(self.node,other.node);
                break;
            case 2:
                this.gameCtl.onBallContactGround(self.node,other.node);
                break;
            case 3:
                this.gameCtl.onBallContactPaddle(self.node,other.node);
                break;
            case 4:
                this.gameCtl.onBallContactWall(self.node,other.node);
                break;

        }
    },
    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
