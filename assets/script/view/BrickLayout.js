cc.Class({
    extends: cc.Component,
    properties: {
        space: 0,
        cols: 0,
        brickPrefab: cc.Prefab,
        sumBrickPrefab: cc.Prefab,
        trianglePrefab: cc.Prefab,
        blackHolePrefab: cc.Prefab,
    },
    init(bricksNumber) {
        this.node.removeAllChildren();
        this.addBricks(bricksNumber)
    },
    randomRotation(low,hight){
        var _number=hight-low+1;
        return Math.floor(Math.random()*_number+low)
    },
    addBricks(bricksNumber) {
        this.bricksNumber = bricksNumber;
        for (let i = 0; i < this.bricksNumber; i++) {
            let brickNode = cc.instantiate(this.brickPrefab);
            let sumBrickNode = cc.instantiate(this.sumBrickPrefab);
            let triangleNode = cc.instantiate(this.trianglePrefab);
            let blackHolePrefab = cc.instantiate(this.blackHolePrefab);
            let brickHieght=brickNode.height + this.space;
            let brickWidth=brickNode.width + this.space
            let BrickSum = brickNode.getChildByName('brickSum').getComponent(cc.Label)
            let random = Math.round(Math.random() * 100);
            if (random < 100 - Global.difficult) {
                continue
            } else if (random < Global.difficult) {
                BrickSum.string = Math.round(window.Global.score / 10) + 1
                brickNode.parent = this.node;
                brickNode.x = (i % this.cols) * brickWidth;
                brickNode.y = -Math.floor(i / this.cols) *brickHieght;
            } else {
                if (Math.random() < 0.05) {
                    blackHolePrefab.parent=this.node;
                    blackHolePrefab.x = (i % this.cols) * brickWidth;
                    blackHolePrefab.y = -Math.floor(i / this.cols) * brickHieght;
                } else if (Math.random()<0.2) {
                    sumBrickNode.parent = this.node;
                    sumBrickNode.x = (i % this.cols) * brickWidth;
                    sumBrickNode.y = -Math.floor(i / this.cols) * brickHieght;
                } else if(Math.random()<0.5){
                    triangleNode.parent = this.node;
                    triangleNode.x = (i % this.cols) * brickWidth;
                    triangleNode.y = -Math.floor(i / this.cols) * brickHieght;
                    triangleNode.rotation=this.randomRotation(-180,180)
                }
            }
        }
    },
    moveBricks() {
        var oldBricks = this.node.children;
        var oldBricksNumber = this.node.childrenCount;
        for (let i = 0; i < oldBricksNumber; i++) {
            if (Math.round(oldBricks[i].y) > -900) {
                oldBricks[i].runAction(cc.moveBy(0.2, 0, -54));
            } else {
                window.GameCtl.gameOver();
                return;
            }
        }
    }
});