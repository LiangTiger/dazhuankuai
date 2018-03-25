cc.Class({
    extends: cc.Component,
    properties: {
        score:0,
        bricksNumber:0,
        ballNumber:0,
        addBrick:0,
    },
    init(){
        this.score = 0;
        this.bricksNumber=65;
        this.ballNumber=1;
        this.allBrick=65
    },
    addScore(score){
        this.score += score;
    },
    minusBrick(n){
        this.bricksNumber -= n;
    },
    addBall(sumBall){
        this.ballNumber+=sumBall;
    },
    allBrick(number){
        this.allBrick-=number;
    }
});
