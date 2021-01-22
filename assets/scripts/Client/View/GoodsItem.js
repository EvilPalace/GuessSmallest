

cc.Class({
    extends: cc.Component,

    properties: {
        Id :{
            default : null,
            type : cc.Label
        },
        Name :{
            default : null,
            type : cc.Label
        },
        Icon :{
            default : null,
            type : cc.Sprite
        },
        EndTime :{
            default : null,
            type:cc.Label
        },
        Bid :{
            default : null,
            type: cc.Button
        },
        Check :{
            default: null,
            type:cc.Button
        },

        p_id : 0,
        p_name: "未知道具",
        p_icon : "icon",
        p_EndTime : 0,
    },

    setData (id, name, icon, endTime)
    {
        p_id = id;
        p_name = name;
        p_icon = icon;
        p_EndTime = endTime;
    },

    update (dt) {
        if (m_EndTime <= 0) return;
        p_EndTime -= dt;
        EndTime.text = m_EndTime;
    },
});
