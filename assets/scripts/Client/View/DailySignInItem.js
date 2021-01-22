

cc.Class({
    extends: cc.Component,

    properties: {
        Day:{
            default: null,
            type: cc.Label
        },
        Reward:{
            default: null,
            type: cc.Label
        },
        HasGet:{
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
    setData(day, rewardCount, hasGet){
        this.Day.text = "第" + day + "天";
        this.Reward.text = "+" + rewardCount + "拍卖币";
        this.HasGet.active = hasGet;
    }
});
