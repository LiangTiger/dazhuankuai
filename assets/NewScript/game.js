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
        blockPrefab: {
            default: null,
            type: cc.Prefab
        },
        maxBlockDuration: 0,
        minBlockDuration: 0,
        player: {
            default: null,
            type: cc.Node
        },
        scoreDisplay:{
            default:null,
            type:cc.Label
        }
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

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.spawnNewStar();
    },
    spawnNewStar: function () {
        var newBlock = cc.instantiate(this.blockPrefab)
        this.node.addChild(newBlock);
        newBlock.setPosition(this.getNewBlockPosition());
        newBlock.getComponent('block').game=this;
    },
    getNewBlockPosition: function () {
        var randX = 0;
        var randY = 100 + cc.random0To1() * 100;
        var maxX = this.node.width / 2;
        randX = cc.randomMinus1To1() * maxX;
        return cc.p(randX, randY)
    },
    start() {

    },

    // update (dt) {},
    gainScore:function(){
        this.score+=1;
        this.scoreDisplay.string='score:'+this.score.toString();
    }
});