
const {ccclass, property} = cc._decorator;

@ccclass
export default class GoodsBidRecord {

    UserId = 0; // 出价者的Id
    GoodsId = 0; // 商品Id
    BidValue = 0; // 出价的价格
    BidTime = 0; // 出价时间
}
