cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = true;
    },

    show(score,isWin){
        this.node.active = true;
        if(isWin){
            this.resultLabel.string = 'YOU WIN!';
        }else{
            this.resultLabel.string = 'YOU LOSE!';
        }
        this.scoreLabel.string = score+'';
    },

    onBtnRestart(){
        this.gameCtl.startGame();
        this.node.active=false;
    }
});