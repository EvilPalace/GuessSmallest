

cc.Class({
    extends: cc.Component,

    properties: {
        m_id:{
            default:null,
            type:cc.Label
        },
        m_name:{
            default:null,
            type:cc.Label
        },
        m_startName:{
            default:null,
            type:cc.Label
        },
        m_endTime:{
            default:null,
            type:cc.Label
        },
        m_bidValue:{
            default:null,
            type:cc.Label
        },
        m_regularBtn:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_1:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_2:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_3:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_4:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_5:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_6:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_7:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_8:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_9:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_0:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_00:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_000:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_c:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_clear:{
            default:null,
            type:cc.Button
        },
        m_keyBoard_enter:{
            default:null,
            type:cc.Button
        },
        p_id:0,
        p_bidValue:0
    },


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
    setData(id, name, startTime, endTime){
        this.m_id = "商品ID：" + id;
        this.p_id = id;
        this.m_name = "商品名字：" + name;
        this.startTime = startTime;
        this.endTime = endTime;
    },
    onClick_1(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10 + 1;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_2(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10 + 2;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_3(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10 + 3;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_4(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10 + 4;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_5(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10 + 5;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_6(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10 + 6;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_7(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10 + 7;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_8(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10 + 8;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_9(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10 + 9;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_0(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 10;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_00(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 100;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_000(){
        var value = this.p_bidValue;
        this.p_bidValue = value * 1000;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_c(){
        var value = this.p_bidValue;
        this.p_bidValue = parseInt(value / 10);
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_clear(){
        //var value = this.p_bidValue;
        this.p_bidValue = 0;
        this.m_bidValue.text = this.p_bidValue;
    },
    onClick_enter(){
        cc.log("点击确认");
    },
    onClick_regular(){
        cc.log("点击出价规则");
    }
});
