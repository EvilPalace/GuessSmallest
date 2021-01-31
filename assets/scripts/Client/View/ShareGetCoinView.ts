import NetController from "../Net/NetController";
import IPoupView from "../Tool/IPoupView";

const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class ShareGetCoinView extends cc.Component implements IPoupView {
    getPath(): String {
        return "prefab/ShareGetCoinView";
    }
    
    @property(cc.Label)
    private m_Content : cc.Label = null;

    mRewardCount = 0;

    start(){
        this.setData(22222);
    }

    setData(rewardCount){
        this.mRewardCount = rewardCount;
        this.m_Content.string = "分享成功获得" + rewardCount + "拍卖币";
    }
    
    onWechat(){
        NetController.setMyCoin(NetController.getMyCoin() + this.mRewardCount);
        cc.log("点击了分享微信");
    }

    onQQ(){
        NetController.setMyCoin(NetController.getMyCoin() + this.mRewardCount);
        cc.log("点击了分享QQ");
    }

    onFriend(){
        NetController.setMyCoin(NetController.getMyCoin() + this.mRewardCount);
        cc.log("点击了分享朋友圈");
    }

    onWeibo(){
        NetController.setMyCoin(NetController.getMyCoin() + this.mRewardCount);
        cc.log("点击了分享微博");
    }
}