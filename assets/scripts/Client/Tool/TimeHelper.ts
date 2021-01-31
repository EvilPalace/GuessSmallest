import MathTools from "./MathTools";

const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class TimeHelper {
    
    public static getString(offset : number) : string{
        if (offset > 0){
            let sec = MathTools.ToInt(offset) % 60;
            let min = parseInt((offset / 60).toString()) % 60;
            let hour = parseInt((offset / 3600).toString());
            return hour + ":" + min + ":" + sec;
        }
        return "00:00:00";
    }
    
    public static getDateString(time:number) : string{
        let date = new Date(time);
        return date.getFullYear() + "." + date.getMonth() + "." + date.getDay() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
}