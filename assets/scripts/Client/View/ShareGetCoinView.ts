
const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class ShareGetCoinView extends cc.Component {
    
    @property(cc.Label)
    private m_Content : cc.Label = null;

    mRewardCount = 0;

    setData(rewardCount){
        this.mRewardCount = rewardCount;
        this.m_Content.string = "分享成功获得" + rewardCount + "拍卖币";
    }
    
    onWechat(){
        cc.log("点击了分享微信");
    }

    onQQ(){
        cc.log("点击了分享QQ");
    }

    onFriend(){
        cc.log("点击了分享朋友圈");
    }

    onWeibo(){
        cc.log("点击了分享微博");
    }
}