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
        moveDuration:0,
        maxMoveSpeed:0,
        accel:0,
        moveWidth:10,
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
    setInputControl:function(){
        var self=this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(event){
            switch(event.keyCode){
                case cc.KEY.a:
                self.accLeft=true;
                break;
                case cc.KEY.d:
                self.accRight=true;
                break;
            }
        });
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,function(event){
            switch(event.keyCode){
                case cc.KEY.a:
                self.accLeft=false;
                self.xSpeed=0;
                break;
                case cc.KEY.d:
                self.accRight=false;
                self.xSpeed=0;
                break
            }
        })
    },
    onLoad:function () {
        this.accLeft=false;
        this.accRight=false;
        this.xSpeed=0;
        this.setInputControl();
    },
    update:function(dt){
        if(this.accLeft){
            this.xSpeed-=this.accel*dt;
        }else if(this.accRight){
            this.xSpeed+=this.accel*dt;
        }
        if(Math.abs(this.xSpeed)>this.maxMoveSpeed){
            this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed)
        }
        this.node.x +=this.xSpeed*dt
    },
    start () {
    },

    // update (dt) {},
});
