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
        rank:{
            default:null,
            type:cc.Node
        },
        skin:{
            default:null,
            type:cc.Node
        },
        message:{
            default:null,
            type:cc.Node
        }
    },
    init(){
        this.initBtn()
    },
    onLoad(){

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
    onBtnStart(){
        cc.director.loadScene("game")
    },
    initBtn(){
        this.btnPutong.color=new cc.Color(255,255,255,255)
        this.btnKunnan.color=new cc.Color(255,255,255,255)
        this.btnDiyu.color=new cc.Color(255,255,255,255)
    },
    onBtnPutong(event){
        this.initBtn()
        event.currentTarget.color=new cc.Color(248, 68, 68, 255)
        Global.difficult=90 
    },
    onBtnKunnan(event){
        this.initBtn()
        event.currentTarget.color=new cc.Color(248, 68, 68, 255)
        Global.difficult=97
    },
    onBtnDiyu(event){
        this.initBtn()
        event.currentTarget.color=new cc.Color(248, 68, 68, 255)
        Global.difficult=99    
    },
    onBtnRank(event){
       
    },
    onBtnSkin(event){

    },
    onBtnMessage(event){
        
    }
});