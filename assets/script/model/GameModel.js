cc.Class({
    extends: cc.Component,
    properties: {
        score:0,
        bricksNumber:0,
        ballNumber:0,
    },
    init(){
        this.score = 0;
        this.bricksNumber=65;
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
            window.GameCtl.addBricks();
            this.bricksNumber=this.bricksNumber+65;
        }
    },
    groundBall(n){
        this.groundBalls+=n;
        if(this.initBalls==this.groundBalls){
            window.GameCtl.ballLayout.init(this.initBalls)
            this.groundBalls=0;
        }
    },
    addBall(sumBall){
        this.initBalls+=sumBall;
        this.groundBalls+=sumBall;
    }
});
