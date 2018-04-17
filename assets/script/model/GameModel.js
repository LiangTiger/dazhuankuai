cc.Class({
    extends: cc.Component,
    properties: {
        score:0,
        bricksNumber:0,
        ballNumber:0,
    },
    init(){
        this.score = 0;
        this.bricksNumber=52;
        this.initBalls=1,
        this.groundBalls=0,
        this._cacheBall=0
    },
    addScore(score){
        this.score += score;
    },
    updataBall(){
        this.initBalls+=this._cacheBall;
    },
    minusBrick(n){
        this.bricksNumber -= n;
    },
    groundBall(n){
        this.groundBalls+=n;
        if(this.initBalls==this.groundBalls){
            window.GameCtl.paddle.onLoad();
            window.GameCtl.moveBricks();
            window.GameCtl.addBricks(13);
            this.groundBalls=0;
            this.updataBall();
        }
    },
    addBall(sumBall){
        this._cacheBall+=sumBall;
    }
});
