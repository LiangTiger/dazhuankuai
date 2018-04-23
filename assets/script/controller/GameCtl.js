
const GameModel = require('GameModel');
cc.Class({
    extends: cc.Component,
    properties: {
        gameView: require('GameView'),
        ballLayout: require('BallLayout'),
        paddle: require('Paddle'),
        brickLayout: require('BrickLayout'),
        overPanel: require('OverPanel'),
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
        this.startGame();

    },
    init() {
        this.physicsManager.enabled = true;
        this.gameModel.init();
        this.gameView.init(this);
        this.paddle.init();
        this.brickLayout.init(this.gameModel.bricksNumber);
        this.overPanel.init(this);
        this.sightLine.init();
    },
    ballRestart(){
        this.ballLayout.init(this.gameModel.initBalls);
    },
    startGame() {
        this.init();
    },
    gameOver(){
        this.overPanel.init(this)
        this.onDestroy()
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
    moveBricks(){
        this.brickLayout.moveBricks();
    },
    addBricks(n){
        this.brickLayout.addBricks(n);
    },
    onBallContactBrick(ballNode, brickNode) {
        brickNode.parent = null;
        this.audioCtl.brickPlay();
        this.gameModel.addScore(1);
        this.gameView.updateScore(this.gameModel.score);
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
    onDestroy() {
        this.physicsManager.enabled = false;
    },
    login(){
        wx.login({
            success:function(){
                wx.getUserInfo({
                    fail:function(res){
                        if (res.errMsg.indexOf('auth deny') > -1 ||     res.errMsg.indexOf('auth denied') > -1 ) {
                            // 处理用户拒绝授权的情况
                          }
                    }
                })
            }
        }),
        wx.getSetting({
            success: function (res) {
              var authSetting = res.authSetting
              if (authSetting['scope.userInfo'] === true) {
                // 用户已授权，可以直接调用相关 API
              } else if (authSetting['scope.userInfo'] === false){
                // 用户已拒绝授权，再调用相关 API 或者 wx.authorize 会失败，需要引导用户到设置页面打开授权开关
              } else {
                // 未询问过用户授权，调用相关 API 或者 wx.authorize 会弹窗询问用户
              }
            }
          })
    }
});