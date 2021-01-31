import Goods from "../../Protocol/Goods";
import NetController from "../Net/NetController";
import GoodsItem from "./GoodsItem";

const {ccclass, property} = cc._decorator;

//  商品展示的处理
@ccclass
export default class GoodsField extends cc.Component {
    
    @property(cc.ScrollView)
    private m_Scroll : cc.ScrollView = null;

    @property(cc.Prefab)
    private m_itemPrefab : cc.Prefab = null;

    start(){
        this.refresh();
    }

    public refresh(){
        let temp = NetController.getGoodsList();
        this.refreshView(temp);
    }

    private refreshView(dataList:Array<Goods>){
        this.resetItems();
        for(let i = 0; i < dataList.length; i++)
        {
            let item = dataList[i];
            this.createItem(item);
        }
    }

    createItem(goods: Goods){
        if (goods == null)
            return;
        // 此处创建子项，并赋值
        var item = cc.instantiate(this.m_itemPrefab);
        item.setParent(this.m_Scroll.content);
        var itemView = item.getComponent<GoodsItem>(GoodsItem);
        itemView.refresh(goods);
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

