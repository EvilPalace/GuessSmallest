import Goods from "../../Protocol/Goods";
import TimeHelper from "../Tool/TimeHelper";
import UIManager from "../Tool/UIManager";
import BidView from "./BidView";
import CheckMyBidInfoView from "./CheckMyBidInfoView";

const {ccclass, property} = cc._decorator;

// 商品子项
@ccclass
export default class GoodsItem extends cc.Component {
    
    @property(cc.Label)
    private m_id : cc.Label = null;

    @property(cc.Label)
    private m_name : cc.Label = null;

    @property(cc.Sprite)
    private m_icon : cc.Sprite = null;

    @property(cc.Label)
    private m_endTime : cc.Label = null;

    mGoods : Goods;
    
    public refresh(goods : Goods){
        this.mGoods = goods;
        if (this.mGoods == null) return;
        this.m_id.string = "商品Id:" + this.mGoods.ID;
        this.m_name.string = "商品名称:" + this.mGoods.Name;
        cc.resources.load(this.mGoods.Icon, cc.SpriteFrame, (error, spriteFrame:cc.SpriteFrame)=>{
            cc.log("尝试加载:" + this.mGoods.Icon);
            if (error) {
                cc.log(error);
                return;
            }
            if (this.m_icon == null){
                cc.log("icon不存在");
                return;
            }
            this.m_icon.spriteFrame = spriteFrame;
        });
        
    }

    update(dt){
        let offset = (this.mGoods.EndTime - Date.now()) / 1000;
        
        this.m_endTime.string = "结束时间为\n" + TimeHelper.getString(offset);
    }

    onClickBid(){
        UIManager.showBidView(tempNode =>{
            let node = tempNode as cc.Node;
            let view = node.getComponent<BidView>(BidView);
            view.setData(this.mGoods);
        });
        cc.log("点击了出价");
    }

    onClickCheck(){
        UIManager.showCheckMyBidInfoView(tempNode =>{
            let node = tempNode as cc.Node;
            let view = node.getComponent<CheckMyBidInfoView>(CheckMyBidInfoView);
            view.setGood(this.mGoods);
            view.setBuyer("", "");
            view.refresh();
        });
        cc.log("点击了查询");
    }
}