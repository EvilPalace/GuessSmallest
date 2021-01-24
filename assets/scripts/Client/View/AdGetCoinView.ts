
const {ccclass, property} = cc._decorator;

// 广告获取奖励 - 界面
@ccclass
export default class AdGetCoinView extends cc.Component {

    @property(cc.Label)
    private m_Content : cc.Label = null;

    @property(cc.Button)
    private m_Confirm : cc.Button = null;

    @property(cc.Button)
    private m_Close : cc.Button = null;
    
    mRewardCount = 0;

    setReward(rewardCount: number){
        this.mRewardCount = rewardCount;
        this.m_Content.string = "观看广告获得" + rewardCount + "拍卖币";
    }
    
    onClickConfirm(){
        cc.log("点击了这个按钮");
    }

    onClickClose(){
        cc.log("点击了关闭");
    }
}
