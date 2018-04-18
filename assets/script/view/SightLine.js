
cc.Class({
    extends: cc.Component,
    init(){
        this.node.x = 360;
        this.node.rotation=0;
    },
    move(ballPositionX){
        this.node.x=ballPositionX
    },
    onLoad() {
        this.node.on("touchmove", (event) => {
            //将世界坐标转化为本地坐标
            let touchPoint = this.node.parent.convertToNodeSpace(event.getLocation());
            let nodePoint = this.node.position;
            let angle = Math.round(Math.atan2(touchPoint.y - nodePoint.y, touchPoint.x - nodePoint.x) * 57.2956);
            if (angle <= 30) {
                this.node.rotation = 60;
            } else if (angle >= 150) {
                this.node.rotation = -60;
            } else {
                this.node.rotation =90-angle;
            }
        });
    },
});