
// 设置时，返回0代表设置成功，返回>0代表失败，

cc.Class({
    properties:{
        m_name:"神秘人",
        m_phone:"0",
        m_idCard:"0",
        m_address:"未知领域"
    },

    setName(name)
    {
        if (String.length(name) > 20) {
            return 1;
        }
        m_name = name;
        return 0;
    },
    setPhone(phone)
    {
        if (String.length(phone) != 11 || !checkNumber(phone)) {
            return 1;
        }
        m_phone = phone;
        return 0;
    },
    setIdCard(idCard)
    {
        if (String.length(idCard) != 18) {
            return 1;
        }
        m_idCard = idCard;
        return 0;
    },
    setAddress(address)
    {
        var len = String.length(address);
        if (len > 220) {
            return 2;
        }
        else if (len == 0) {
            return 1;
        }
        m_address = address;
        return 0;
    },

    checkNumber(theObj) {
        var reg = /^[0-9]+.?[0-9]*$/;
        if (reg.test(theObj)) {
          return true;
        }
        return false;
      }

});
