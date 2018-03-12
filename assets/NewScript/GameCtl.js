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
        gameView:require('GameView'),
        ball:require('ball'),
        paddle:require('Paddle'),
        brickLayout:require('BrickLayout'),
        overPanel:require('OverPanel'),
    },
    onload:function(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,(event)=>{
            if(event.keyCode===cc.KEY.back){
                cc.director.end();
            }
        })
        this.physic
    },


    start () {

    },

});
