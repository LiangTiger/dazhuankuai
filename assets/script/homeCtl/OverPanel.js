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
        this.initBtn();
        Global.difficult=90;
    },
    onBtnStart(){
        cc.director.loadScene("game")
    },
    initBtn(){
        this.btnPutong.color=new cc.Color(255,255,255,255)
        this.btnKunnan.color=new cc.Color(255,255,255,255)
        this.btnDiyu.color=new cc.Color(255,255,255,255)
    },


    //  难度选择按钮
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


    //功能选项按钮    
    onBtnRank(event){
        cc.director.loadScene("rank")
    },
    onBtnSkin(event){
        cc.director.loadScene("skin")
    },
    onBtnMessage(event){
        cc.director.loadScene("message")
    }
});