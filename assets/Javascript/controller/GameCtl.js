// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        gameView:require('GameView'),
        ball:require('Ball'),
        paddle:require('Paddle'),
        brickLayout:require('BrickLayout'),
        overPanel:require('OverPanel'),
    },
    onload:function(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,(event)=>{
            if(event.keyCode===cc.KEY.back){
                cc.director.end();
            }
        })
        this.physicsManager=cc.director.getPhysicsManager();
        this.gameModel=new GameModel();
        this.startGame();
    },
    init(){
        this.physicsManager.enabled=true;
        this.gameModel.init();
        this.gameView.init(this);
        this.ball.init(this);
        this.paddle.init();
        this.brickLayout(this.gameModel,bricksNumber);
        this.overPanel.init(this);
    },
    startGame(){
        this.init();
    },
    pauseGame(){
        this.physicsManager.enabled=false;
    },
    resumeGame(){
        this.physicsManager.enabled=true;
    },
    stopGame(){
        this.physicsManager.enabled=false;

    },
    onBallContactBrick(ballNode,brickNode){
        brickNode.parent=null;
        this.gameModel.addScore(1);
        this.gameModel.minusBrick(1);
        this.gameView.updateScore(this.gameModel.score);
        if(this.gameModel.bricksNumber<=0){
            this.stopGame();
        }
    },
    onBallContactGround(ballNode,groundNode){
        this.stopGame();
    },
    onBallContactPaddle(ballNode,paddleNode){

    },
    onBallContactWall(ballNode,brickNode){

    },
    onDestroy(){
        this.physicsManager.enabled=false;
    },
    start () {

    },

});
