import Consignee from "../../Protocol/Consignee";
import NetController from "../Net/NetController";
import UIManager from "../Tool/UIManager";

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

    start(){
        this.m_tips.string = "";
        let consignee = NetController.getConsignee();
        this.m_name.string = consignee.Name;
        this.m_idCard.string = consignee.IdCard;
        this.m_phone.string = consignee.Phone;
        this.m_address.string = consignee.Address;
    }

    onClickSave(){
        if (this.m_name.string.length == 0) {
            this.m_tips.string = "保存失败，名字不可为空";
            return;
        }
        
        if (this.m_name.string.length == 0) {
            this.m_tips.string = "保存失败，电话号码不可为空";
            return;
        } 
        else if (this.m_phone.string.length != 11) {
            this.m_tips.string = "保存失败：电话号码必须为11位";
            return;
        }

        if (this.m_idCard.string.length == 0) {
            this.m_tips.string = "保存失败，身份证不可为空";
            return;
        } 
        else if (this.m_idCard.string.length != 18) {
            this.m_tips.string = "保存失败：身份证位数错误";
            return;
        }

        if (this.m_address.string.length == 0) {
            this.m_tips.string = "保存失败：请填写收货地址";
            return;
        }
        
        cc.log("点击保存");
        let consignee = NetController.getConsignee();
        consignee.Name = this.m_name.string;
        consignee.IdCard = this.m_idCard.string;
        consignee.Phone = this.m_phone.string;
        consignee.Address = this.m_address.string;
        UIManager.hidAllView();
    }

    onClickCancel(){
        UIManager.hidAllView();
        cc.log("点击取消");
    }
    
}
