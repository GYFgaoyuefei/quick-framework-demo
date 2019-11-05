import { api, TApiDefined } from "../../../Framework/Protocol/ApiDefined";
import { TString, TInt } from "../../../Framework/Protocol/TypeDefined";
const getRouterConfigOption: TApiDefined = {
    request: {deviceid:TString('设备标识', '<NU, 10>', true)},
    response: {
        ret: TInt('返回码0-success, other-fail', '<[1|0]>', true),
        desc: TString('错误描述', '<[error|success]>', false),
        channelid: TString('渠道类型', '<[1]>', false),
        pubTempId: TInt('模板示例id', '<NU， 1>', false),
        channelurl: TString('跳转地址，如果携带channelid， pubTempId参数则上述参数可以为空', 'http://example.com', true)
    },
    note: '通过设备标识获取上次访问的页面地址',
    changeLog: '开发中。。。'
}
export const getRouterConfig = api(getRouterConfigOption)