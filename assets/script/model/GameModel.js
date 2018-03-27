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
        this.initBalls=1
        this.ballNumber=this.initBalls;
    },
    addScore(score){
        this.score += score;
    },
    minusBrick(n){
        this.bricksNumber -= n;
        if (this.bricksNumber <= 5) {
            window.GameCtl.moveBricks();
            window.GameCtl.addBricks();
        }
    },
    minusBall(n){
        this.ballNumber-=n;
        if(this.ballNumber<1){
            window.GameCtl.ballLayout.init(this.initBalls)
        }
    },
    addBall(sumBall){
        this.initBalls+=sumBall;
    }
});
