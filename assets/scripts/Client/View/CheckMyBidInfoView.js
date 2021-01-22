

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
        m_buyer:{
            default:null,
            type:cc.Label
        },
        m_buyPrice:{
            default:null,
            type:cc.Label
        },
        p_id:0,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    setGood(id, name, startTime, endTime){
        this.m_id.text = "商品ID：" + id;
        this.m_name.text = "商品名称：" + name;
        this.m_startName.text = startTime;
        this.m_endTime.text = endTime;
    },
    setBuyer(buyer, price){
        this.m_buyer.text = buyer;
        this.m_buyPrice.text = price;
    },
    setPriceRecord(){
        
    }
});
