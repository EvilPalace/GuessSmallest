
var goodsConfig = require("GoodsConfig");

cc.Class({
    extends:goodsConfig,

    properties: {
        m_instanceId:0, // 实例id，商品唯一代表
        m_startTime:0, // 开始时间

        m_buyRole:"", // 最终购买的人名
        m_buyPrice:0, // 最终购买的钱数
    },
    setInstanceId(instanceID)
    {
        m_instanceId = instanceID;
    },
    setStartTime(startTime)
    {
        m_startTime = startTime;
    },
    getEndTime()
    {
        return m_startTime + m_time;
    }
});
