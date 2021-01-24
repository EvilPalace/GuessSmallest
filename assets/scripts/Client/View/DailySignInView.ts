

const {ccclass, property} = cc._decorator;
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

    mSignDay = 0;
    
    
    setData(one:number, two:number, three:number, four:number, five:number, six:number, seven:number){
        this.m_1.setData(1, one, this.mSignDay >= 1);
        this.m_2.setData(2, two, this.mSignDay >= 2);
        this.m_3.setData(3, three, this.mSignDay >= 3);
        this.m_4.setData(4, four, this.mSignDay >= 4);
        this.m_5.setData(5, five, this.mSignDay >= 5);
        this.m_6.setData(6, six, this.mSignDay >= 6);
        this.m_7.setData(7, seven, this.mSignDay >= 7);
    }

    setSignDay(day){
        this.m_progress.progress = day / 7.0;
    }

    onClick(){
        cc.log("点击签到");
    }
}
