

cc.Class({

    properties: {
        m_id:0,
        m_name:"未知物品",
        m_icon:"图标",
        m_time:120, // 秒
    },
    init(id, name, icon, time)
    {
        m_id = id;
        m_name = name;
        m_icon = icon;
        m_time = time;
        m_startTime = 0;
    },
});
