import Consignee from "../../Protocol/Consignee";
import Goods from "../../Protocol/Goods";
import GoodsBidRecord from "../../Protocol/GoodsBidRecord";
import MathTools from "../Tool/MathTools";

const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class NetController {

    static init(){
        // 此处初始化
        this.initGoods();
    }

    // *************************** 拍卖币 ************************************
    private static pCoin = 1000000;
    static coinListener = new Array<Function>();

    // 获取玩家的拍卖币数量
    static getMyCoin():number{
        return this.pCoin;
    }
    
    static setMyCoin(coin:number){
        this.pCoin = coin;
        this.coinListener.forEach((func, id)=>{
            func();
        });
    }
    
    // *************************** 拍卖物品 ************************************

    private static allGoods = new Array<Goods>();
    private static allGoodsBidRecords = new Array<GoodsBidRecord>();

    private static initGoods(){
        let temp = new Goods(1, "道具1", "image/1", 60, Date.now());
        this.allGoods.push(temp);
        temp = new Goods(2, "道具2", "image/2", 2400, Date.now());
        this.allGoods.push(temp);
        temp = new Goods(3, "道具3", "image/3", 3600, Date.now());
        this.allGoods.push(temp);
        temp = new Goods(4, "道具4", "image/4", 4800, Date.now());
        this.allGoods.push(temp);
        // 过期道具
        let len = this.allGoods.length;
        for (let index = len; index < len + 15; index++) {
            temp = new Goods(1, "道具" + index, "image/" + MathTools.RandomInt(1, 4), MathTools.RandomInt(0, 2000), Date.now() - MathTools.RandomInt(2000, 24000000));
            this.allGoods.push(temp);
        }
        // 随机道具
        len = this.allGoods.length;
        for (let index = len; index < len + 15; index++) {
            temp = new Goods(1, "道具" + index, "image/" + MathTools.RandomInt(1, 4), MathTools.RandomInt(0, 2000), Date.now() + MathTools.RandomInt(0, 2400000));
            this.allGoods.push(temp);
        }
    }
    // 从数据库中读取符合条件的商品
    private static getGoodsFromDatabase(valid : boolean) : Array<Goods>{
        let ret = new Array<Goods>();
        let curTime = Date.now();
        if (valid) {
            this.allGoods.forEach(o => {
                if (o.StartTime <= curTime && o.EndTime >= curTime) {
                    ret.push(o);
                }
            });
            return ret;
        }
        else{
            return this.allGoods;
        }
    }

    // 从数据库中读取符合条件的商品出价记录
    private static getGoodsBidRecordFromDatabase(userId : number, goodsId?: number) : Array<GoodsBidRecord>{
        let ret = new Array<GoodsBidRecord>();
        this.allGoodsBidRecords.forEach(o =>{
            if (o.UserId == userId && goodsId == o.GoodsId) {
                ret.push(o);
            }
        });
        return ret;
    }

    // 获取展示的商品列表
    static getGoodsList():Array<Goods>{
        
        return this.getGoodsFromDatabase(true);
    }

    // 获取我的出价记录
    static getMyBidRecord(goodsId:number): Array<GoodsBidRecord>{
        return this.getGoodsBidRecordFromDatabase(123, goodsId);
    }

    static setMyGoodsBidValue(goods:Goods, bidValue:number){
        if (goods == null) return;
        let temp = new GoodsBidRecord();
        temp.UserId = 123;
        temp.GoodsId = goods.ID;
        temp.BidValue = bidValue;
        temp.BidTime = Date.now();
        this.allGoodsBidRecords.push(temp); 
        cc.log("设置了商品出价, id:" + goods.ID + ", name:" + goods.Name + ", 价格：" + bidValue);
    }

    // *************************** 地址 ************************************
    private static pConsignee = new Consignee();
    static getConsignee():Consignee{
        return this.pConsignee;
    }

    static setConsignee(consignee: Consignee){
        this.pConsignee = consignee;
    }

    // *************************** 签到 ************************************
    private static mDailySignDay = 0;
    static getSignDaily():number{
        return this.mDailySignDay;
    }

    static addSignDaily(){
        this.mDailySignDay++;
    }
}
