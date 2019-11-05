"use strict";
exports.__esModule = true;
var ApiDefined_1 = require("../../../Framework/Protocol/ApiDefined");
var TypeDefined_1 = require("../../../Framework/Protocol/TypeDefined");
var getRouterConfigOption = {
    request: { deviceid: TypeDefined_1.TString('设备标识', '<NU, 10>', true) },
    response: {
        ret: TypeDefined_1.TInt('返回码0-success, other-fail', '<[1|0]>', true),
        desc: TypeDefined_1.TString('错误描述', '<[error|success]>', false),
        channelid: TypeDefined_1.TString('渠道类型', '<[1]>', false),
        pubTempId: TypeDefined_1.TInt('模板示例id', '<NU， 1>', false),
        channelurl: TypeDefined_1.TString('跳转地址，如果携带channelid， pubTempId参数则上述参数可以为空', 'http://example.com', true)
    },
    note: '通过设备标识获取上次访问的页面地址',
    changeLog: '开发中。。。'
};
exports.getRouterConfig = ApiDefined_1.api(getRouterConfigOption);
