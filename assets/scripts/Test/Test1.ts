
const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class Test1 extends cc.Component {
    @property(cc.Label)
    private tip : cc.Label = null;
    startTime = 0;
    start(){
        this.startTime = Date.now();
    }
    
    update(dt){
        this.tip.string = "从开始到现在:" + (Date.now() - this.startTime);
    }
}