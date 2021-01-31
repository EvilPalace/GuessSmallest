

const {ccclass, property} = cc._decorator;

@ccclass
export default class GoodsConfig {

    ID = 0;
    Name = "未知物品";
    Icon = "未知图标";
    Duration = 0;

    /**
     *
     */
    constructor(id:number, name:string, icon:string, durationInMiliSec:number) {
        this.ID = id;
        this.Name = name;
        this.Icon = icon;
        this.Duration = durationInMiliSec * 1000;
    }
}
