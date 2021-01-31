import UIManager from "../Tool/UIManager";

const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class RegularView extends cc.Component {
    
    onClose(){
        UIManager.hidAllView();
        cc.log("点击关闭");
    }
    
}
