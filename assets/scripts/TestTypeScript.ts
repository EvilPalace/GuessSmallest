// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import NewTs from "./TestTypeS1";

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:
    btn1: cc.Button = null;

    obj:NewTs = null;

    // onLoad () {}

    start () {
        //this.label.enabled = false;
        this.obj = new NewTs();
        this.getComponent(cc.Label).string = this.obj.icon;
    }

    // update (dt) {}

    icon: string = "";

    update(dt:number)
    {
        //cc.resources.load
    }
}
