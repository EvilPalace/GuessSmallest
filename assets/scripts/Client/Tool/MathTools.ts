
const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class MathTools {
    
    public static ToInt(from) : number{
        return parseInt(from);
    }
    
    public static RandomInt(min: number, max: number): number{
        var Range = max - min;
        var Rand = Math.random();
        return this.ToInt(min + Math.round(Rand * Range));
    }

    public static RandomFloat(min: number, max: number): number{
        var Range = max - min;
        var Rand = Math.random();
        return min + Math.round(Rand * Range);
    }
}