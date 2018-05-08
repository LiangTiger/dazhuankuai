
cc.Class({
    extends: cc.Component,

    properties: {
        brickAudio: {
            type: cc.AudioSource,
            default: null
        },
        wallAudio:{
            type:cc.AudioSource,
            default: null
        }
    },
    brickPlay: function () {
        this.brickAudio.play();
    },
    wallPlay:function(){
        this.wallAudio.play();
    }
});
