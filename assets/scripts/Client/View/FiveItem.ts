
const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class FiveItem extends cc.Component {
    
    @property(cc.Label)
    private m_1 : cc.Label = null;

    @property(cc.Label)
    private m_2 : cc.Label = null;

    @property(cc.Label)
    private m_3 : cc.Label = null;

    @property(cc.Label)
    private m_4 : cc.Label = null;

    @property(cc.Label)
    private m_5 : cc.Label = null;
    
    setData(one, two, three, four, five){
        this.m_1.string = one;
        this.m_2.string = two;
        this.m_3.string = three;
        this.m_4.string = four;
        this.m_5.string = five;
    }
}
