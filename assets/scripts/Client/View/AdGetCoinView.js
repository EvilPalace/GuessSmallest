

cc.Class({
    extends: cc.Component,

    properties: {
        m_Content:{
            default:null,
            type:cc.Label
        },
        m_Confirm:{
            default:null,
            type:cc.Button
        },
        m_Close:{
            default:null,
            type:cc.Button
        },
        m_RewardCount:0
    },

    onLoad (){
        this.m_Confirm.node.on('click', this.onClickConfirm, this);
        this.m_Close.node.on('click', this.onClickClose, this);
    },

    start () {
        this.setRewardCount(this.m_RewardCount);
    },

    setRewardCount(rewardCount){
        this.m_RewardCount = rewardCount;
        this.m_Content.text = "观看广告获得" + rewardCount + "拍卖币";
    },

    onClickConfirm(button){
        cc.log("点击了这个按钮");
    },
    onClickClose(){
        cc.log("点击了关闭");
    }
});
