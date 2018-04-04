
cc.Class({
    extends: cc.Component,

    properties: {
        ballPrefab:cc.Prefab,
    },
    init(initBalls) {
        this.initBalls=initBalls;
        this.node.removeAllChildren();
        let ballX=window.GameCtl.paddle.node.x;
        for(let i=0;i<initBalls;i++){
            let ballNode=cc.instantiate(this.ballPrefab);
            ballNode.parent=this.node;
                setTimeout(() => {
                    ballNode.position = cc.v2(ballX-i,180);
                    ballNode.getComponent(cc.RigidBody).linearVelocity = cc.v2(Math.round(1000/(Math.tan((90-window.GameCtl.sightLine.node.rotation)/57.2956))),1000); 
                    console.log(i)
                }, i*500);
            
        }
    },
    
});