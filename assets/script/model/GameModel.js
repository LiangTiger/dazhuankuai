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
        this._cacheBall=0
    },
    groundBall(n,ballPositionX){
        this.groundBalls+=n;
        if(this.groundBalls===this.initBalls){
            window.GameCtl.sightLine.move(ballPositionX)
            window.GameCtl.paddle.move(ballPositionX)
            window.GameCtl.moveBricks();
            window.GameCtl.addBricks(13);
            this.updataBall();
            this.groundBalls=0;
            window.GameCtl.paddle.onLoad();
        }
    },
    addBall(sumBall){
        this._cacheBall+=sumBall;
    }
});
