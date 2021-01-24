
const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class EditorAddressView extends cc.Component {
    
    @property(cc.EditBox)
    private m_name : cc.EditBox = null;

    @property(cc.EditBox)
    private m_phone : cc.EditBox = null;

    @property(cc.EditBox)
    private m_idCard : cc.EditBox = null;

    @property(cc.EditBox)
    private m_address : cc.EditBox = null;

    @property(cc.Label)
    private m_tips : cc.Label = null;

    onClickSave(){
        cc.log("点击保存");
    }

    onClickCancel(){
        cc.log("点击取消");
    }
    
}
