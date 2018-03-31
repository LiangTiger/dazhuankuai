cc.Class({
    extends: cc.Component,

    properties: {
        space: 0,
        cols: 0,
        brickPrefab: cc.Prefab,
        sumBrickPrefab: cc.Prefab,
    },

    init(bricksNumber) {
        this.node.removeAllChildren();
        this.addBricks(bricksNumber)
    },
    addBricks(bricksNumber){
        this.bricksNumber = bricksNumber;
        for (let i = 0; i < this.bricksNumber; i++) {
            let brickNode = cc.instantiate(this.brickPrefab);
            let sumBrickNode = cc.instantiate(this.sumBrickPrefab);
            let random = Math.round(Math.random() * 100);
            if (random < 95) {
                brickNode.parent = this.node;
                brickNode.x = (i % this.cols) * (brickNode.width + this.space);
                brickNode.y = -Math.floor(i / this.cols) * (brickNode.height + this.space);
            } else {
                sumBrickNode.parent = this.node;
                sumBrickNode.x = (i % this.cols) * (sumBrickNode.width + this.space);
                sumBrickNode.y = -Math.floor(i / this.cols) * (sumBrickNode.height + this.space);
            }
        }
    },
    moveBricks() {
        var oldBricks=this.node.children;
        var oldBricksNumber=this.node.childrenCount;
        for (let i = 0; i <oldBricksNumber; i++) {
            oldBricks[i].runAction(cc.moveBy(0.2,0,-220));
        }
    }
});