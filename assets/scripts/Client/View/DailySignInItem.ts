
const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class DailySignInItem extends cc.Component {
    
    @property(cc.Label)
    private m_day : cc.Label = null;

    @property(cc.Label)
    private m_reward : cc.Label = null;

    @property(cc.Node)
    private m_hasGet : cc.Node = null;
    
    setData(day :number, rewardCount:number, hasGet:boolean){
        this.m_day.string = "第" + day + "天";
        this.m_reward.string = "+" + rewardCount + "拍卖币";
        this.m_hasGet.active = hasGet;
    }
}
