const GameModel = require('GameModel');
cc.Class({
    extends: cc.Component,
    properties: {
        gameView: require('GameView'),
        ballLayout: require('BallLayout'),
        paddle: require('Paddle'),
        brickLayout: require('BrickLayout'),
        sightLine:require('SightLine'),
        audioCtl:require('AudioCtl')
    },
    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => {
            if (event.keyCode === cc.KEY.back) {
                cc.director.end();
            }
        });
        this.physicsManager = cc.director.getPhysicsManager();
        this.gameModel = new GameModel();
        window.GameCtl=this;
        this.init();
    },
    init() {
        this.physicsManager.enabled = true;
        this.gameModel.init();
        this.gameView.init(this);
        this.paddle.init();
        this.brickLayout.init(this.gameModel.bricksNumber);
        this.sightLine.init();
    },
    ballRestart(){
        this.ballLayout.init(this.gameModel.initBalls);
    },
    gameOver(){
        this.physicsManager.enabled = false;
        cc.director.loadScene("end")
    },
    pauseGame() {
        this.physicsManager.enabled = false;
    },
    stopGame() {
        this.physicsManager.enabled = false;
        // this.overPanel.show(this.gameModel.score, this.gameModel.bricksNumber === 0);
    },
    moveBricks(){
        this.brickLayout.moveBricks();
    },
    addBricks(n){
        this.brickLayout.addBricks(n);
    },
    onBallContactBrick(ballNode, brickNode) {
        brickNode.parent = null;
        this.audioCtl.brickPlay();
        Global.score+=1
        this.gameView.updateScore(Global.score);
    },
    onBallContactGround(ballNode, groundNode) {
        ballNode.parent=null;
        this.gameModel.groundBall(1,ballNode.position.x)
    },
    onBallContactWall(ballNode, brickNode) {
        this.audioCtl.wallPlay();
    },
    onBallContactSumBrick(ballNode,sumBrick){
        sumBrick.parent=null;
        this.gameModel.addBall(1);
    },
});