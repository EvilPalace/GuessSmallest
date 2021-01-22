var DailySignInItem = require("DailySignInItem");

cc.Class({
    extends: cc.Component,

    properties: {
        m_1:{
            default:null,
            type:DailySignInItem
        },
        m_2:{
            default:null,
            type:DailySignInItem
        },
        m_3:{
            default:null,
            type:DailySignInItem
        },
        m_4:{
            default:null,
            type:DailySignInItem
        },
        m_5:{
            default:null,
            type:DailySignInItem
        },
        m_6:{
            default:null,
            type:DailySignInItem
        },
        m_7:{
            default:null,
            type:DailySignInItem
        },
        m_progress:{
            default:null,
            type:cc.ProgressBar
        },
        m_btn_sign:{
            default:null,
            type:cc.Button
        },
        p_signDay:0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    setData(one, two, three, four, five, six, seven){
        this.m_1.setData(1, one, p_signDay >= 1);
        this.m_2.setData(2, two, p_signDay >= 2);
        this.m_3.setData(3, three, p_signDay >= 3);
        this.m_4.setData(4, four, p_signDay >= 4);
        this.m_5.setData(5, five, p_signDay >= 5);
        this.m_6.setData(6, six, p_signDay >= 6);
        this.m_7.setData(7, seven, p_signDay >= 7);
    },

    setSignDay(day){
        this.m_progress.text = day / 7.0;
    },

    onClick(){
        cc.log("点击签到");
    }
});
