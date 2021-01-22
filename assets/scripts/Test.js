// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
        
    },

    // LIFE-CYCLE CALLBACKS:
    // onLoad () {},
    start () {
        var test1 = require("Test1");
        cc.log(test1.name);
    },

    // update (dt) {},
});
