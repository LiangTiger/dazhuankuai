const gameCtl=require("GameCtl")
cc.Class({
    extends: cc.Component,
    onLoad:function(){
        console.log()
    },
    onBeginContact(contact, self, other) {
        switch (other.tag) {
            case 1://球碰到砖块
                gameCtl.onBallContactBrick(self.node, other.node);
                break;
            case 2://球碰到地面
                gameCtl.onBallContactGround(self.node, other.node);
                break;
            case 3://球碰到托盘
                gameCtl.onBallContactPaddle(self.node, other.node);
                break;
            case 4://球碰到墙
                gameCtl.onBallContactWall(self.node, other.node);
                break;
        }
    },


});
