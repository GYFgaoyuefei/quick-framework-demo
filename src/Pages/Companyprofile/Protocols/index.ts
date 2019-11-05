import { TString, TObject } from "../../../Framework/Protocol/TypeDefined";
import { api } from "../../../Framework/Protocol/ApiDefined";


/** 获取渠道消息协议 */
const getComprofileInfo = () =>{
    const Request = {
        // channelCompanyId:_String('','公司标识'),
        // contentType:_String('','内容标识 比如0代表 企业简介  1代表营销资讯之类的 ')
        pubTempId:TString('模板ID 比如某切片有10套模板  0~9 代表不同的10套模板', '1')
    }
    const Response = {
        ret: TString('错误码 0代表成功，非0为失败', '<[0|1]>'),
        desc:TString('错误描述', '<[success|error]>'),
        comProfileInfo: TObject({
            logoIcon: TString('企业logo地址'),
            comName: TString('企业名称'),
            profileTitle: TString('企业简介名称'),
            backIcon: TString('背景图url'),
            content: TString('企业简介内容')
        },'企业简介信息集')
        
        
    }
    return api({request: Request, response: Response, note: '获取企业简介页信息协议', changeLog:'梦网百家1.0.0版本'})
}
/** save渠道消息协议 */
const setChannelInfo = () =>{
    const Request = {
        channelid: TString('渠道标识 0 代表 快应用默认启动 1代表 服务号启动'),
        pubTempId:TString('模板ID 比如某切片有10套模板  0~9 代表不同的10套模板'),
        channelurl: TString('快应用某页跳转链接  渠道标识为非0时使用'),
        deviceid:TString('设备唯一标识')
    }
    const Response = {
        ret: TString('错误码 0代表成功，非0为失败', '<[0|1]>'),
        desc:TString('错误描述', '<[success|error]>'),
    }
    return api({request: Request, response: Response, note: 'save渠道消息协议', changeLog:'梦网百家1.0.0版本'})
}

const getSimplePageInfo = getComprofileInfo()
const saveAccess = setChannelInfo()
export  {getSimplePageInfo, saveAccess}