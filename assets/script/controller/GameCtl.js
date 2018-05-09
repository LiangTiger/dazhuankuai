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
    //游戏初始化
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
        // let userInfo=wx.getStorageSync('_userInfo')||null
        //     if(userInfo){
        //         if(Global.score>userInfo.userScore){
        //             let userInfo={
        //                 userName:Global.userInfo.nickName,
        //                 userScore:Global.score
        //             }
        //             wx.setStorageSync('_userInfo',userInfo)
        //         }
        //     }else{
        //         let userInfo={
        //             userName:Global.userInfo.nickName,
        //             userScore:Global.score
        //         }
        //         wx.setStorageSync('_userInfo',userInfo)
        //     }
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
        let brickNodeSum=brickNode.getChildByName('brickSum').getComponent(cc.Label)
        brickNodeSum.string-=1
        if(brickNodeSum.string==0){
            brickNode.parent = null;
            Global.score+=1;
            this.gameView.updateScore(Global.score);
        }
        this.audioCtl.brickPlay();
    },
    onBallContactGround(ballNode, groundNode) {
        ballNode.parent=null;
        this.gameModel.groundBall(1,ballNode.position.x)
    },
    onBallContactSumBrick(ballNode,sumBrick){
        this.audioCtl.brickPlay();
        sumBrick.parent=null;
        this.gameModel.addBall(1);
    },
    onBallContactWall(ballNode,wall){

    },
    onBallContactTriangle(ballNode,triangle){
        this.audioCtl.brickPlay();
        setTimeout(() => {
            triangle.parent=null
        }, 3000);
    },
    onBallContactBlackHole(ballNode,blackHole){
        ballNode.parent=null;
        this.gameModel.initBalls-=1;
        this.gameModel.groundBall(0,ballNode.position.x)
        if(this.gameModel.initBalls==0){
            this.gameOver();
        }
        setTimeout(() => {
            blackHole.parent=null
        }, 10000);
    }
});