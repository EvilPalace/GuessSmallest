import Goods from "../../Protocol/Goods";
import NetController from "../Net/NetController";
import TimeHelper from "../Tool/TimeHelper";
import UIManager from "../Tool/UIManager";

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
    private mGoods : Goods = null;
    
    public get BidValue() : string {
        return this.mBidValue;
    }
    
    public set BidValue(v : string) {
        this.mBidValue = v;
        this.m_BidValue.string = this.BidValue;
    }

    start(){
        this.BidValue = "0";
    }

    setData(good:Goods){
        this.mGoods = good;
        this.m_Id.string = "商品ID:" + good.ID.toString();
        this.m_Name.string = "商品名称:" + good.Name;
        this.m_StartTime.string = "开始时间:  " + TimeHelper.getDateString(good.StartTime);
        this.m_EndTime.string = "结束时间:  " + TimeHelper.getDateString(good.EndTime);
        this.BidValue = "0";
    }

    onClickNum(sender, num){
        if (this.BidValue == "0"){
            this.BidValue = num;
        }
        else{
            this.BidValue += num;
        }
    }
    
    onClick_c(){
        let len = this.BidValue.length;
        if (len <= 1) {
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
        NetController.setMyGoodsBidValue(this.mGoods, parseInt(this.BidValue));
        cc.log("点击确认");
    }

    onClick_regular(){
        UIManager.showRegularView();
        cc.log("点击出价规则");
    }
}
