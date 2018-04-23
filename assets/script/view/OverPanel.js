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
        setting:{
            default:null,
            type:cc.Node
        },
        rankPanel:{
            default:null,
            type:cc.Node
        },
        skinPanel:{
            default:null,
            type:cc.Node
        },
        settingPanel:{
            default:null,
            type:cc.Node
        },
        rankList:{
            default:null,
            type:cc.Node
        }
    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = true;
    },
    onLoad(){
        this.rankPanel.active=false;
        this.skinPanel.active=false;
        this.settingPanel.active=false;
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
        this.rankPanel.active=false;
        this.skinPanel.active=false;
        this.settingPanel.active=false;
        this.btnPutong.color=new cc.Color(255,255,255,255)
        this.btnKunnan.color=new cc.Color(255,255,255,255)
        this.btnDiyu.color=new cc.Color(255,255,255,255)
    },
    rankInit(){
        this.skinPanel.removeAllChildren()
        var node=new cc.Node('Label');
        node.width='100';
        node.height='40'
        node.string="123123";
        node.color=new cc.Color(255,255,255,255)
        var sp=node.addComponent(cc.Sprite)
        sp.spriteFrame=this.rankList
        node.parent=this.skinPanel;
        console.log(node)
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
    },
    onBtnRank(event){
        
        this.rankInit()
        this.rankPanel.active=!this.rankPanel.active
    },
    onBtnSkin(event){
        
        this.skinPanel.active=!this.skinPanel.active
    },
    onBtnSetting(event){
        
        this.settingPanel.active=!this.settingPanel.active
    }
});