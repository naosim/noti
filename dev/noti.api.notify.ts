/// <reference path="lib_interfaces/express.d.ts"/>
/// <reference path="lib_interfaces/socket.io.d.ts"/>
/// <reference path="lib_interfaces/node.d.ts"/>
/// <reference path="noti.common.ts"/>
interface NotifyData {
  appname: string;
  title: string;
  message: string;
  tag: number;
}

var common = <Common>require(__dirname + '/noti.common.js');
var EVENT_NOTIFY = "notify";

/**
* 通知用パラメータの取得
* @return パラメータを返す
*/
var getNotifyParam = (query:any, callback: CallbackResult<NotifyData, string>)=> {
  if(query.appname && query.title) {
    callback.onSuccess({
      appname: query.appname,
      title: query.title,
      message: query.message,
      tag: Date.now()
    });
  } else {
    callback.onFailure("param_error");
  }
};

exports.create = (io: SocketIO.IO) => {
  return (req: Express.Request, res: Express.Response) => {
    console.log(req.query);
    getNotifyParam(req.query, {
      onSuccess: (notifyInfo)=> {
        io.to(notifyInfo.appname).emit(EVENT_NOTIFY, notifyInfo);
        /*io.emit(EVENT_NOTIFY, notifyInfo);*/
        res.send(common.createSuccessMessage(notifyInfo));
      },
      onFailure: (e) => {
        res.send(common.createFailureMessage('NG', e));
      }
    })
  };
};
