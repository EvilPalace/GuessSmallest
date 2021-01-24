import Goods from "./Goods";


const {ccclass, property} = cc._decorator;

@ccclass
export default class MyGoodsState {

    Item:Goods = null;
}
