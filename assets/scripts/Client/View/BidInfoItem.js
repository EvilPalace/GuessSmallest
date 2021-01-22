

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
        m_1:0,
        m_2:'',
        m_3:'',
        m_4:''
    },

    start () {
        this.setContent(this.m_1, this.m_2, this.m_3, this.m_4);
    },

    setContent(one, two, three, four)
    {
        this.m_1 = one;
        this.m_2 = two;
        this.m_3 = three;
        this.m_4 = four;
        m_text1.text = one;
        m_text2.text = two;
        m_text3.text = three;
        m_text4.text = four;
    }
});
