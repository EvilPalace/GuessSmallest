import Goods from "../../Protocol/Goods";

const {ccclass, property} = cc._decorator;

//  商品展示的处理
@ccclass
export default class GoodsField extends cc.Component {
    
    @property(cc.ScrollView)
    private m_Scroll : cc.ScrollView = null;


    refresh(dataList:Goods[]){
        this.resetItems();
        if (!(dataList instanceof Array))
            return;
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

