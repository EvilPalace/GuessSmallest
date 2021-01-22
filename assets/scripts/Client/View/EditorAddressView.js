
cc.Class({
    extends: cc.Component,

    properties: {
        m_name:{
            default:null,
            type:cc.EditBox
        },
        m_phone:{
            default:null,
            type:cc.EditBox
        },
        m_idCard:{
            default:null,
            type:cc.EditBox
        },
        m_address:{
            default:null,
            type:cc.EditBox
        },
        m_btn_save:{
            default:null,
            type:cc.Button
        },
        m_btn_cancel:{
            default:null,
            type:cc.Button
        },
        m_tips:{
            default:null,
            type:cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    onClickSave(){
        cc.log("点击保存");
    }
});
