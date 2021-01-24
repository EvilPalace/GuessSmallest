

const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class CheckMyBidInfoView extends cc.Component {
    
    @property(cc.Label)
    private m_id : cc.Label = null;
    
    @property(cc.Label)
    private m_name : cc.Label = null;

    @property(cc.Label)
    private m_startTime : cc.Label = null;

    @property(cc.Label)
    private m_endTime : cc.Label = null;

    @property(cc.Label)
    private m_buyer : cc.Label = null;

    @property(cc.Label)
    private m_buyPrice : cc.Label = null;

    mId = 0;
    
    setGood(id, name, startTime, endTime){
        this.m_id.string = "商品ID：" + id;
        this.m_name.string = "商品名称：" + name;
        this.m_startTime.string = startTime;
        this.m_endTime.string = endTime;
    }

    setBuyer(buyer, price){
        this.m_buyer.string = buyer;
        this.m_buyPrice.string = price;
    }

    setPriceRecord(){
        
    }
}
