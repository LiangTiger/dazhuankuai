cc.Class({
    extends: cc.Component,
    onLoad() {
        this.gameCtl = window.GameCtl;
    },
    onBeginContact(contact, self, other) {
        switch (other.tag) {
            case 1: //球碰到砖块
                this.gameCtl.onBallContactBrick(self.node, other.node);
                break;
            case 2: //球碰到地面
                this.gameCtl.onBallContactGround(self.node, other.node);
                break;
            case 4: //球碰到墙
                this.gameCtl.onBallContactWall(self.node, other.node);
                break;
            case 5://球碰到多功能砖块
                this.gameCtl.onBallContactSumBrick(self.node, other.node);
                break;
            case 6://球碰到三角砖块
                this.gameCtl.onBallContactTriangle(self.node, other.node);
                break
            case 7://球碰到黑洞砖块
                this.gameCtl.onBallContactBlackHole(self.node, other.node);
                break
        }
    },

});