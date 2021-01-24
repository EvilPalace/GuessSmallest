
const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class BidInfoItem extends cc.Component {
    
    @property(cc.Label)
    private m_text1 : cc.Label = null;
    
    @property(cc.Label)
    private m_text2 : cc.Label = null;
    
    @property(cc.Label)
    private m_text3 : cc.Label = null;
    
    @property(cc.Label)
    private m_text4 : cc.Label = null;
    
    setContent(one, two, three, four)
    {
        this.m_text1.string = one;
        this.m_text2.string = two;
        this.m_text3.string = three;
        this.m_text4.string = four;
    }
    
}