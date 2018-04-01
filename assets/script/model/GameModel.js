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
        this.groundBalls=0
    },
    addScore(score){
        this.score += score;
    },
    minusBrick(n){
        this.bricksNumber -= n;
        if (this.bricksNumber <= 5) {
            window.GameCtl.moveBricks();
            setTimeout(window.GameCtl.addBricks(26),500)
            this.bricksNumber+=26;
        }
    },
    groundBall(n){
        this.groundBalls+=n;
        if(this.initBalls==this.groundBalls){
            window.GameCtl.paddle.onLoad();
            this.groundBalls=0;
        }
    },
    addBall(sumBall){
        this.initBalls+=sumBall;
        this.groundBalls+=sumBall;
    }
});
