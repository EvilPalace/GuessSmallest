import Goods from "../../Protocol/Goods";
import GoodsBidRecord from "../../Protocol/GoodsBidRecord";
import NetController from "../Net/NetController";
import TimeHelper from "../Tool/TimeHelper";
import BidInfoItem from "./BidInfoItem";


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

    
    @property(cc.ScrollView)
    private m_Scroll : cc.ScrollView = null;

    @property(cc.Prefab)
    private m_itemPrefab : cc.Prefab = null;

    mGoods: Goods = null;
    
    setGood(goods: Goods){
        this.mGoods = goods;
        this.m_id.string = "商品ID：" + goods.ID;
        this.m_name.string = "商品名称：" + goods.Name;
        this.m_startTime.string = TimeHelper.getDateString(goods.StartTime);
        this.m_endTime.string = TimeHelper.getDateString(goods.EndTime);
    }

    setBuyer(buyer, price){
        this.m_buyer.string = buyer;
        this.m_buyPrice.string = price;
    }

    public refresh(){
        let temp = NetController.getMyBidRecord(this.mGoods.ID);
        this.refreshView(temp);
    }

    private refreshView(dataList:Array<GoodsBidRecord>){
        this.resetItems();
        for(let i = 0; i < dataList.length; i++)
        {
            let item = dataList[i];
            this.createItem(i, item);
        }
    }

    createItem(index: number, record: GoodsBidRecord){
        if (record == null)
            return;
        // 此处创建子项，并赋值
        var item = cc.instantiate(this.m_itemPrefab);
        item.setParent(this.m_Scroll.content);
        var itemView = item.getComponent<BidInfoItem>(BidInfoItem);
        itemView.setContent(index, TimeHelper.getDateString(record.BidTime), record.BidValue, "未知");
    }

    resetItems(){
        // 清楚所有商品子项
        if (this.m_Scroll == null) return;
        var children = this.m_Scroll.content.children;
        children.forEach(element => {
            element.destroy();
        });
    }
}
