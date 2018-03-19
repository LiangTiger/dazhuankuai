cc.Class({
    extends: cc.Component,

    properties: {
        score:0,
        bricksNumber:0,
        ballNumber:0,
    },

    init(){
        this.score = 0;
        this.bricksNumber = 50;
        this.ballNumber=10;
    },

    addScore(score){
        this.score += score;
    },

    minusBrick(n){
        this.bricksNumber -= n;
    },

});
