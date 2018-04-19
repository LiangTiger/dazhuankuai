cc.Class({
    extends: cc.Component,

    properties: {
        btnPutong:{
            default:null,
            type:cc.Node
        },
        btnKunnan:{
            default:null,
            type:cc.Node
        },
        btnDiyu:{
            default:null,
            type:cc.Node
        },
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
    },
    initBtn(){
        this.btnPutong.color=new cc.Color(255,255,255,255)
        this.btnKunnan.color=new cc.Color(255,255,255,255)
        this.btnDiyu.color=new cc.Color(255,255,255,255)
    },
    onBtnPutong(event){
        this.initBtn()
        event.currentTarget.color=new cc.Color(248, 68, 68, 255)
        this.gameCtl.brickLayout.changeDif(90)
    },
    onBtnKunnan(event){
        this.initBtn()
        event.currentTarget.color=new cc.Color(248, 68, 68, 255)
        this.gameCtl.brickLayout.changeDif(97)
    },
    onBtnDiyu(event){
        this.initBtn()
        event.currentTarget.color=new cc.Color(248, 68, 68, 255)
        this.gameCtl.brickLayout.changeDif(99)        
    }

});