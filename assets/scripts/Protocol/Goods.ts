import GoodsConfig from "./GoodsConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Goods extends GoodsConfig {

    StartTime = 0;

    /**
     *
     */
    constructor(id:number, name:string, icon:string, durationInMiliSec:number, startTime:number) {
        super(id, name, icon, durationInMiliSec);
        this.StartTime = startTime;
    }
    
    public get EndTime() : number {
        return this.StartTime + this.Duration;
    }
    
}
