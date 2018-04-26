
cc.Class({
    extends: cc.Component,
    properties: {
        redBall:cc.Prefab,
        earthBall:cc.Prefab,
        gameBall:null,
    },
    onLoad(){
        console.log(Global.gameBall)
        if(Global.gameBall=="redBall"){
            this.gameBall=this.redBall
        }else if(Global.gameBall=="earthBall"){
            this.gameBall=this.earthBall
        }else{
            this.gameBall=this.redBall
        }
    },
    init(initBalls) {
        this.initBalls=initBalls;
        this.node.removeAllChildren();
        let ballX=window.GameCtl.sightLine.node.x;
        for(let i=0;i<initBalls;i++){
            let _this=this;
                setTimeout(() => {
                    let ballNode=cc.instantiate(_this.gameBall);
                    ballNode.parent=_this.node;
                    ballNode.position = cc.v2(ballX,210);
                    ballNode.getComponent(cc.RigidBody).linearVelocity = cc.v2(Math.round(1000/(Math.tan((90-window.GameCtl.sightLine.node.rotation)/57.2956))),1000); 
                }, i*200);
            
        }
    },
    
});