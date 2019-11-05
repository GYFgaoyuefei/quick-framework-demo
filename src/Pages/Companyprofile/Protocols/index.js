"use strict";
exports.__esModule = true;
var TypeDefined_1 = require("../../../Framework/Protocol/TypeDefined");
var ApiDefined_1 = require("../../../Framework/Protocol/ApiDefined");
/** 获取渠道消息协议 */
var getComprofileInfo = function () {
    var Request = {
        // channelCompanyId:_String('','公司标识'),
        // contentType:_String('','内容标识 比如0代表 企业简介  1代表营销资讯之类的 ')
        pubTempId: TypeDefined_1.TString('模板ID 比如某切片有10套模板  0~9 代表不同的10套模板', '1')
    };
    var Response = {
        ret: TypeDefined_1.TString('错误码 0代表成功，非0为失败', '<[0|1]>'),
        desc: TypeDefined_1.TString('错误描述', '<[success|error]>'),
        comProfileInfo: TypeDefined_1.TObject({
            logoIcon: TypeDefined_1.TString('企业logo地址'),
            comName: TypeDefined_1.TString('企业名称'),
            profileTitle: TypeDefined_1.TString('企业简介名称'),
            backIcon: TypeDefined_1.TString('背景图url'),
            content: TypeDefined_1.TString('企业简介内容')
        }, '企业简介信息集')
    };
    return ApiDefined_1.api({ request: Request, response: Response, note: '获取企业简介页信息协议', changeLog: '梦网百家1.0.0版本' });
};
/** save渠道消息协议 */
var setChannelInfo = function () {
    var Request = {
        channelid: TypeDefined_1.TString('渠道标识 0 代表 快应用默认启动 1代表 服务号启动'),
        pubTempId: TypeDefined_1.TString('模板ID 比如某切片有10套模板  0~9 代表不同的10套模板'),
        channelurl: TypeDefined_1.TString('快应用某页跳转链接  渠道标识为非0时使用'),
        deviceid: TypeDefined_1.TString('设备唯一标识')
    };
    var Response = {
        ret: TypeDefined_1.TString('错误码 0代表成功，非0为失败', '<[0|1]>'),
        desc: TypeDefined_1.TString('错误描述', '<[success|error]>')
    };
    return ApiDefined_1.api({ request: Request, response: Response, note: 'save渠道消息协议', changeLog: '梦网百家1.0.0版本' });
};
var getSimplePageInfo = getComprofileInfo();
exports.getSimplePageInfo = getSimplePageInfo;
var saveAccess = setChannelInfo();
exports.saveAccess = saveAccess;
