
const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class BidView extends cc.Component {
    
    @property(cc.Label)
    private m_Id : cc.Label = null;
    
    @property(cc.Label)
    private m_Name : cc.Label = null;
    
    @property(cc.Label)
    private m_StartTime : cc.Label = null;
    
    @property(cc.Label)
    private m_EndTime : cc.Label = null;
    
    @property(cc.Label)
    private m_BidValue : cc.Label = null;
    
    private mBidValue : string = "0";
    
    public get BidValue() : string {
        return this.mBidValue;
    }
    
    public set BidValue(v : string) {
        this.mBidValue = v;
        this.m_BidValue.string = this.BidValue;
    }

    onClickNum(sender, num){
        this.BidValue += num;
    }
    
    onClick_c(){
        let len = this.BidValue.length;
        if (len <= 0) {
            this.BidValue = "0";
            return;
        }
        this.mBidValue = this.mBidValue.substring(0, len - 1);
        this.m_BidValue.string = this.mBidValue;
    }

    onClick_clear(){
        this.BidValue = "0";
    }

    onClick_enter(){
        cc.log("点击确认");
    }

    onClick_regular(){
        cc.log("点击出价规则");
    }
}
