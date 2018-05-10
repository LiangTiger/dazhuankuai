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
    onLoad() {
        this.brickPool = new cc.NodePool();
        this.sumBrickPool = new cc.NodePool();
        this.trianglePool = new cc.NodePool();
        this.blackHolePool = new cc.NodePool();
        let brickCount = 200;
        let sumBrickCount = 20;
        let triangleCount = 20;
        let blackHoleCount = 10;
        for (let i = 0; i < brickCount; i++) {
            let brick = cc.instantiate(this.brickPrefab);
            this.brickPool.put(brick)
        }
        for (let i = 0; i < sumBrickCount; i++) {
            let sumBrick = cc.instantiate(this.sumBrickPrefab);
            this.sumBrickPool.put(sumBrick)
        }
        for (let i = 0; i < triangleCount; i++) {
            let triangle = cc.instantiate(this.trianglePrefab);
            this.trianglePool.put(triangle)
        }
        for (let i = 0; i < blackHoleCount; i++) {
            let blackHole = cc.instantiate(this.blackHolePrefab);
            this.blackHolePool.put(blackHole)
        }
        this.init();
    },
    init(){
        this.node.removeAllChildren();
        this.addBricks(window.GameCtl.gameModel.bricksNumber)
    },
    addBricks(bricksNumber) {
        this.bricksNumber = bricksNumber;
        for (let i = 0; i < this.bricksNumber; i++) {
            let brick = null;
            let sumBrick = null;
            let triangle = null;
            let blackHole = null;
            if (this.brickPool.size() > 0) {
                brick = this.brickPool.get();
            } else {
                brick = cc.instantiate(this.brickPrefab);
            }
            if (this.sumBrickPool.size() > 0) {
                sumBrick = this.sumBrickPool.get();
            } else {
                sumBrick = cc.instantiate(this.sumBrickPrefab);
            }
            if (this.trianglePool.size() > 0) {
                triangle = this.trianglePool.get();
            } else {
                triangle = cc.instantiate(this.trianglePrefab);
            }
            if (this.blackHolePool.size() > 0) {
                blackHole = this.blackHolePool.get();
            } else {
                blackHole = cc.instantiate(this.blackHolePrefab);
            }
            let brickHieght = brick.height + this.space;
            let brickWidth = brick.width + this.space
            let BrickSum = brick.getChildByName('brickSum').getComponent(cc.Label)
            let random = Math.round(Math.random() * 100);
            if (random < 100 - Global.difficult) {
                continue
            } else if (random < Global.difficult) {
                BrickSum.string = Math.round(window.Global.score / 10) + 1
                brick.parent = this.node;
                brick.x = (i % this.cols) * brickWidth;
                brick.y = -Math.floor(i / this.cols) * brickHieght;
            } else {
                if (Math.random() < 0.05) {
                    blackHole.parent = this.node;
                    blackHole.x = (i % this.cols) * brickWidth;
                    blackHole.y = -Math.floor(i / this.cols) * brickHieght;
                } else if (Math.random() < 0.2) {
                    sumBrick.parent = this.node;
                    sumBrick.x = (i % this.cols) * brickWidth;
                    sumBrick.y = -Math.floor(i / this.cols) * brickHieght;
                } else if (Math.random() < 0.5) {
                    triangle.parent = this.node;
                    triangle.x = (i % this.cols) * brickWidth;
                    triangle.y = -Math.floor(i / this.cols) * brickHieght;
                    triangle.rotation = this.randomRotation(-180, 180)
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
    },
    randomRotation(low, hight) {
        var _number = hight - low + 1;
        return Math.floor(Math.random() * _number + low)
    },
});