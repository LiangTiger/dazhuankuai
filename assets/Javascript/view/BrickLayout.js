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
        padding:0,
        spacing:0,
        cols:0,
        brickPrefab:{
            default: null,
            type: cc.Prefab,
        },
        bricksNumber:0,
    },
    init(bricksNumber){
        this.node.removeAllChildren();
        this.bricksNumber=bricksNumber;
        for(let i=0;i<this.bricksNumber;i++){
            let brickNode=cc.instantiate(this.brickPrefab);
            brickNode.parent=this.node;
            brickNode.x=this.padding+(i%this.cols)*(brickNode.width+this.spacing)+brickNode.width/2;
            brickNode.y=-this.padding-Math.floor(i/this.cols)*(brickNode.height+this.spacing)-brickNode.height/2
        }
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
