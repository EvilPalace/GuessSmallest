

const {ccclass, property} = cc._decorator;
import NetController from "../Net/NetController";
import DailySignInItem from "./DailySignInItem";

// 【描述作用】
@ccclass
export default class DailySignInView extends cc.Component {
    
    @property(DailySignInItem)
    private m_1 : DailySignInItem = null;
    
    @property(DailySignInItem)
    private m_2 : DailySignInItem = null;

    @property(DailySignInItem)
    private m_3 : DailySignInItem = null;

    @property(DailySignInItem)
    private m_4 : DailySignInItem = null;

    @property(DailySignInItem)
    private m_5 : DailySignInItem = null;

    @property(DailySignInItem)
    private m_6 : DailySignInItem = null;

    @property(DailySignInItem)
    private m_7 : DailySignInItem = null;

    @property(cc.ProgressBar)
    private m_progress : cc.ProgressBar = null;
    
    start(){
        this.refresh();
    }

    refresh(){
        let signDay = NetController.getSignDaily();
        this.setData(signDay, 1000, 10000, 10000, 20000, 20000, 30000, 50000);
    }
    
    setData(signDay:number, one:number, two:number, three:number, four:number, five:number, six:number, seven:number){
        this.m_1.setData(1, one, signDay >= 1);
        this.m_2.setData(2, two, signDay >= 2);
        this.m_3.setData(3, three, signDay >= 3);
        this.m_4.setData(4, four, signDay >= 4);
        this.m_5.setData(5, five, signDay >= 5);
        this.m_6.setData(6, six, signDay >= 6);
        this.m_7.setData(7, seven, signDay >= 7);
        this.setSignDay(signDay);
    }

    setSignDay(day){
        this.m_progress.progress = day / 7.0;
    }

    onClick(){
        NetController.addSignDaily();
        this.refresh();
        cc.log("点击签到");
    }
}
