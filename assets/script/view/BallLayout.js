
cc.Class({
    extends: cc.Component,
    properties: {
        redBall:cc.Prefab,
        earthBall:cc.Prefab,
        gameBall:null,
    },
    onLoad(){
        if(Global.gameBall=="redBall"){
            this.gameBall=this.redBall
        }else if(Global.gameBall=="earthBall"){
            this.gameBall=this.earthBall
        }else{
            this.gameBall=this.redBall
        }
        this.ballPool = new cc.NodePool();
        let initCount = Global.difficult;
        for (let i = 0; i < initCount; ++i) {
            let ball = cc.instantiate(this.gameBall); // 创建节点
            this.ballPool.put(ball); // 通过 putInPool 接口放入对象池
        }
    },
    init(initBalls) {
        this.initBalls=initBalls;
        this.node.removeAllChildren();
        let ballX=window.GameCtl.sightLine.node.x;
        for(let i=0;i<initBalls;i++){
            let _this=this;
                setTimeout(() => {
                    let ballNode=null;
                    if(this.ballPool.size()>0){
                        ballNode=this.ballPool.get();
                    }else{
                        ballNode=cc.instantiate(_this.gameBall);
                    }
                    ballNode.parent=_this.node;
                    ballNode.position = cc.v2(ballX,210);
                    ballNode.getComponent(cc.RigidBody).linearVelocity = cc.v2(Math.round(1000/(Math.tan((90-window.GameCtl.sightLine.node.rotation)/57.2956))),1000); 
                }, i*100);
            
        }

    },
    
});