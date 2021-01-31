import NetController from "./Net/NetController";
import UIManager from "./Tool/UIManager";
import GoodsField from "./View/GoodsField";

const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class MainController extends cc.Component {
    
    @property(GoodsField)
    private m_GoodsField : GoodsField = null;

    @property(cc.Label)
    private m_myCoin : cc.Label = null;

    onLoad(){
        NetController.init();
        NetController.coinListener.push(()=>this.refreshMyCoin());
        this.refreshMyCoin();
    }

    onDestroy(){
        
    }
    
    
    refreshMyCoin(){
        this.m_myCoin.string = "我的拍卖币: " + NetController.getMyCoin();
    }

    onClickGoodsField(){
        this.m_GoodsField?.refresh();
    }
    
    onClickAdGetCoinView(){
        UIManager.showAdGetCoinView();
    }

    onClickDailySignInView(){
        UIManager.showDailySignInView();
    }

    onClickShareGetCoinView(){
        UIManager.showShareGetCoinView();
    }

    onClickEditorAddressView(){
        UIManager.showEditorAddressView();
    }

    onClickRegularView(){
        UIManager.showRegularView();
    }
    
}