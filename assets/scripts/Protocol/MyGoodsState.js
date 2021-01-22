
var Goods = require("Goods");

cc.Class({

    properties: {
        m_goods:{
            default:null,
            type:Goods,
            serializable:false
        },
        m_cost:0,
        m_state:-1, // -1非赋值状态，0最小且唯一，1唯一，2重复
    },
    setGoods(goods)
    {
        m_goods = goods;
    },
    setCost(cost)
    {
        m_cost = cost;
    },
    setState(state)
    {
        m_state = state;
    }

});
