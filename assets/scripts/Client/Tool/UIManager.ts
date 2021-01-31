import AdGetCoinView from "../View/AdGetCoinView";
import IPoupView from "./IPoupView";

const {ccclass, property} = cc._decorator;

// 【描述作用】
@ccclass
export default class UIManager extends cc.Component {
    
    // 弹框层
    @property(cc.Node)
    private m_popupLayer : cc.Node = null;

    // 绝对最上层
    @property(cc.Node)
    private m_topLayer : cc.Node = null;

    // 所有弹框
    private mAdGetCoinView: cc.Node = null;
    private mDailySignInView: cc.Node = null;
    private mShareGetCoinView : cc.Node = null;
    private mEditorAddressView : cc.Node = null;
    private mRegularView : cc.Node = null;
    private mBidView : cc.Node = null;
    private mCheckMyBidInfoView : cc.Node = null;

    private static instance : UIManager = null;

    onLoad(){
        UIManager.instance = this;
    }


    

    private hideAllView(){
        this.m_popupLayer.active = false;
        if (this.mAdGetCoinView != null) this.mAdGetCoinView.active = false;
        if (this.mDailySignInView != null) this.mDailySignInView.active = false;
        if (this.mShareGetCoinView != null) this.mShareGetCoinView.active = false;
        if (this.mEditorAddressView != null) this.mEditorAddressView.active = false;
        if (this.mRegularView != null) this.mRegularView.active = false;
        if (this.mBidView != null) this.mBidView.active = false;
        if (this.mCheckMyBidInfoView != null) this.mCheckMyBidInfoView.active = false;
    }

    public static hidAllView(){
        this.instance.m_popupLayer.active = false;
        this.instance.hideAllView();
    }

    // 展示分享奖励面板
    public static showAdGetCoinView(callback = null){
        if (this.instance == null) return;
        this.instance.hideAllView();
        this.instance.m_popupLayer.active = true;
        if (this.instance.mAdGetCoinView == null) {
            cc.resources.load("prefab/AdGetCoinView", cc.Prefab, (error, prefab: cc.Prefab)=>{
                var node = cc.instantiate(prefab);
                node.setParent(this.instance.m_popupLayer);
                this.instance.mAdGetCoinView = node;
                if (callback != null)
                    callback(this.instance.mAdGetCoinView);
            })
        }
        else
        {
            this.instance.mAdGetCoinView.active = true;
            if (callback != null)
                    callback(this.instance.mAdGetCoinView);
        }
    }

    // 展示每日签到
    public static showDailySignInView(callback = null){
        if (this.instance == null) return;
        this.instance.hideAllView();
        this.instance.m_popupLayer.active = true;
        if (this.instance.mDailySignInView == null) {
            cc.resources.load("prefab/DailySignInView", cc.Prefab, (error, prefab: cc.Prefab)=>{
                var node = cc.instantiate(prefab);
                node.setParent(this.instance.m_popupLayer);
                this.instance.mDailySignInView = node;
                if (callback != null)
                    callback(this.instance.mDailySignInView);
            })
        }
        else
        {
            this.instance.mDailySignInView.active = true;
            if (callback != null)
                    callback(this.instance.mDailySignInView);
        }
    }
    
    // 展示分享领取拍卖币
    public static showShareGetCoinView(callback = null){
        if (this.instance == null) return;
        this.instance.hideAllView();
        this.instance.m_popupLayer.active = true;
        if (this.instance.mShareGetCoinView == null) {
            cc.resources.load("prefab/ShareGetCoinView", cc.Prefab, (error, prefab: cc.Prefab)=>{
                var node = cc.instantiate(prefab);
                node.setParent(this.instance.m_popupLayer);
                this.instance.mShareGetCoinView = node;
                if (callback != null)
                    callback(this.instance.mShareGetCoinView);
            })
        }
        else
        {
            this.instance.mShareGetCoinView.active = true;
            if (callback != null)
                    callback(this.instance.mShareGetCoinView);
        }
    }

    // 编辑收货地址
    public static showEditorAddressView(callback = null){
        if (this.instance == null) return;
        this.instance.hideAllView();
        this.instance.m_popupLayer.active = true;
        if (this.instance.mEditorAddressView == null) {
            cc.resources.load("prefab/EditorAddressView", cc.Prefab, (error, prefab: cc.Prefab)=>{
                var node = cc.instantiate(prefab);
                node.setParent(this.instance.m_popupLayer);
                this.instance.mEditorAddressView = node;
                if (callback != null)
                    callback(this.instance.mEditorAddressView);
            })
        }
        else
        {
            this.instance.mEditorAddressView.active = true;
            if (callback != null)
            callback(this.instance.mEditorAddressView);
        }
    }

    // 规则弹框
    public static showRegularView(callback = null){
        if (this.instance == null) return;
        this.instance.hideAllView();
        this.instance.m_popupLayer.active = true;
        if (this.instance.mRegularView == null) {
            cc.resources.load("prefab/RegularView", cc.Prefab, (error, prefab: cc.Prefab)=>{
                var node = cc.instantiate(prefab);
                node.setParent(this.instance.m_popupLayer);
                this.instance.mRegularView = node;
                if (callback != null)
                    callback(this.instance.mRegularView);
            })
        }
        else
        {
            this.instance.mRegularView.active = true;
            if (callback != null)
            callback(this.instance.mRegularView);
        }
    }

    // 出价界面
    public static showBidView(callback = null){
        if (this.instance == null) return;
        this.instance.hideAllView();
        this.instance.m_popupLayer.active = true;
        if (this.instance.mBidView == null) {
            cc.resources.load("prefab/BidView", cc.Prefab, (error, prefab: cc.Prefab)=>{
                var node = cc.instantiate(prefab);
                node.setParent(this.instance.m_popupLayer);
                this.instance.mBidView = node;
                if (callback != null)
                    callback(this.instance.mBidView);
            })
        }
        else
        {
            this.instance.mBidView.active = true;
            if (callback != null)
            callback(this.instance.mBidView);
        }
    }

    // 查询我的出价界面
    public static showCheckMyBidInfoView(callback = null){
        if (this.instance == null) return;
        this.instance.hideAllView();
        this.instance.m_popupLayer.active = true;
        if (this.instance.mCheckMyBidInfoView == null) {
            cc.resources.load("prefab/CheckMyBidInfoView", cc.Prefab, (error, prefab: cc.Prefab)=>{
                var node = cc.instantiate(prefab);
                node.setParent(this.instance.m_popupLayer);
                this.instance.mCheckMyBidInfoView = node;
                if (callback != null)
                    callback(this.instance.mCheckMyBidInfoView);
            })
        }
        else
        {
            this.instance.mCheckMyBidInfoView.active = true;
            if (callback != null)
            callback(this.instance.mCheckMyBidInfoView);
        }
    }
}