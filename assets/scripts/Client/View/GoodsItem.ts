import Goods from "../../Protocol/Goods";

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
    
    refresh(goods : Goods){
        this.mGoods = goods;
        if (this.mGoods == null) return;
        this.m_id.string = "商品Id:" + this.mGoods.ID;
        this.m_name.string = "商品名称:" + this.mGoods.Name;
        cc.resources.load(this.mGoods.Icon, cc.SpriteFrame, this.bindSprite);
        this.m_endTime.string = "结束时间：" + this.mGoods.EndTime;
    }

    bindSprite(error, spriteFrame : cc.SpriteFrame){
        if (this.m_icon == null) return;
        this.m_icon.spriteFrame = spriteFrame;
    }

    onClickBid(){
        cc.log("点击了出价");
    }

    onClickCheck(){
        cc.log("点击了查询");
    }
}