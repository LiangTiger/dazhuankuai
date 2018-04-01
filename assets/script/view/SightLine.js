
cc.Class({
    extends: cc.Component,
    init(){
        this.node.x = 360;
        this.node.rotation=0;
    },
    onLoad: function () {
        this.node.parent.on("touchmove", (event) => {
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
            console.log(Math.round(1000/(Math.tan((90-window.GameCtl.sightLine.node.rotation)/57.2956))))
            console.log('sss'+Math.round(1000/(Math.tan((angle)/57.2956))))
        });
    },
});