

cc.Class({
    extends: cc.Component,

    properties: {
        m_text1:{
            default:null,
            type:cc.Label
        },
        m_text2:{
         default:null,
         type:cc.Label
        },
        m_text3:{
         default:null,
         type:cc.Label
         },
         m_text4:{
             default:null,
             type:cc.Label
         },
         m_text5:{
            default:null,
            type:cc.Label
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
    setData(one, two, three, four, five){
        this.m_text1.text = one;
        this.m_text2.text = two;
        this.m_text3.text = three;
        this.m_text4.text = four;
        this.m_text5.text = five;
    }
});
