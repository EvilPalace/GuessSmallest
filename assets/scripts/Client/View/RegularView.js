

cc.Class({
    extends: cc.Component,

    properties: {
        m_close:{
            default:null,
            type:cc.Button
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    onClose(){
        cc.log("点击关闭");
    }
});
