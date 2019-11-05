"use strict";
exports.__esModule = true;
var TypeDefined_1 = require("../../../Framework/Protocol/TypeDefined");
var ApiDefined_1 = require("../../../Framework/Protocol/ApiDefined");
/** 获取内容详情信息协议 */
var getContentDetailInfo = function () {
    var Request = {
        contentId: TypeDefined_1.TString('内容id', '<NU, 1, 2>')
    };
    var Response = {
        ret: TypeDefined_1.TString('错误码 0代表成功，非0为失败', '<[0|1]>', true),
        desc: TypeDefined_1.TString('错误描述', '<[error|success]>', false),
        contentDetailInfo: TypeDefined_1.TObject({
            contentTitle: TypeDefined_1.TString('内容标题'),
            backIcon: TypeDefined_1.TString('背景图url'),
            content: TypeDefined_1.TString('企业简介内容')
        }, '内容详情信息集', true)
    };
    return ApiDefined_1.api({ request: Request, response: Response, note: '获取内容详情信息协议', changeLog: '梦网百家1.0.0版本' });
};
var getInfoDetail = getContentDetailInfo();
exports.getInfoDetail = getInfoDetail;
