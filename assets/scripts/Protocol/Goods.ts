import GoodsConfig from "./GoodsConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Goods extends GoodsConfig {

    StartTime:0;
    
    public get EndTime() : number {
        return this.StartTime + this.Duration;
    }
    
}
