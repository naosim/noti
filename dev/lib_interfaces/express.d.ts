declare module Express {
  interface Response {
    send: (msg: any)=>void;
    sendFile: (file: string)=>void;
  }
  interface Request {
    query: any;
    url: string;
  }

  interface Application {
    get: (router: string, callback: (req: Request, res: Response)=>void)=>void;
  }
}
