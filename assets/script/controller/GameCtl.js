
const GameModel = require('GameModel');
cc.Class({
    extends: cc.Component,
    properties: {
        gameView: require('GameView'),
        ballLayout: require('BallLayout'),
        paddle: require('Paddle'),
        brickLayout: require('BrickLayout'),
        overPanel: require('OverPanel'),
        
    },
    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => {
            if (event.keyCode === cc.KEY.back) {
                cc.director.end();
            }
        });
        this.physicsManager = cc.director.getPhysicsManager();
        this.gameModel = new GameModel();
        window.GameCtl=this;
        this.startGame();

    },
    init() {
        this.physicsManager.enabled = true;
        this.gameModel.init();
        this.gameView.init(this);
        this.ballLayout.init(this.gameModel.ballNumber);
        this.paddle.init();
        this.brickLayout.init(this.gameModel.bricksNumber);
        this.overPanel.init(this);
    },

    startGame() {
        this.init();
    },

    pauseGame() {
        this.physicsManager.enabled = false;
    },

    resumeGame() {
        this.physicsManager.enabled = true;
    },

    stopGame() {
        this.physicsManager.enabled = false;
        this.overPanel.show(this.gameModel.score, this.gameModel.bricksNumber === 0);
    },
    addBricks(){
        this.brickLayout.addBrick();
    },
    onBallContactBrick(ballNode, brickNode) {
        brickNode.parent = null;
        this.gameModel.addScore(1);
        this.gameModel.minusBrick(1);
        this.gameView.updateScore(this.gameModel.score);
        if (this.gameModel.bricksNumber >= 5) {
            this.addBricks();
            console.log('add已运行')
        }
    },
    
    onBallContactGround(ballNode, groundNode) {
        // this.ballLayout.init(this);
    },

    onBallContactPaddle(ballNode, paddleNode) {

    },

    onBallContactWall(ballNode, brickNode) {

    },
    onBallContactSumBrick(ballNode,sumBrick){
        sumBrick.parent=null;
        this.gameModel.minusBrick(1);
        this.gameModel.addBall(1);
        this.ballLayout.init(this.gameModel.ballNumber);
    },
    onDestroy() {
        this.physicsManager.enabled = false;
    }

});