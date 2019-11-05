import { TString, TObject } from "../../../Framework/Protocol/TypeDefined";
import { api } from "../../../Framework/Protocol/ApiDefined";
/** 获取内容详情信息协议 */
const getContentDetailInfo = () =>{
    const Request = {
        contentId:TString('内容id', '<NU, 1, 2>'),
    }
    const Response = {
        ret: TString('错误码 0代表成功，非0为失败', '<[0|1]>', true),
        desc:TString('错误描述', '<[error|success]>', false),
        contentDetailInfo: TObject({
            contentTitle:TString('内容标题'),
            backIcon: TString('背景图url'),
            content: TString('企业简介内容')
        },'内容详情信息集', true)
    }
    return api({request: Request, response:Response, note: '获取内容详情信息协议', changeLog: '梦网百家1.0.0版本'})
}


const getInfoDetail = getContentDetailInfo()


export  {getInfoDetail}