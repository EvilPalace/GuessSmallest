

cc.Class({
    extends: cc.Component,

    properties: {
        m_content:{
            default:null,
            type:cc.Label
        },
        m_wechat:{
            default:null,
            type:cc.Button
        },
        m_qq:{
            default:null,
            type:cc.Button
        },
        m_friend:{
            default:null,
            type:cc.Button
        },
        m_weibo:{
            default:null,
            type:cc.Button
        },
        p_rewardCount:0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    setData(rewardCount){
        this.p_rewardCount = rewardCount;
        this.m_content.text = "分享成功获得" + rewardCount + "拍卖币";
    },
    onWechat(){
        cc.log("点击了分享微信");
    },
    onQQ(){
        cc.log("点击了分享QQ");
    },
    onFriend(){
        cc.log("点击了分享朋友圈");
    },
    onWeibo(){
        cc.log("点击了分享微博");
    },
});
