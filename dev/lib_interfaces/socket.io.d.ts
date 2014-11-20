declare module SocketIO {
  export interface IO {
    on: (eventName: string, callback: (socket: Socket)=>void)=>void;
    to: (room: string) => Socket;
    emit: (eventName: string, obj: any)=>void;
  }

  export interface Socket {
    id: string;
    on: (eventName: string, callback: (msg: any)=>void)=>void;
    to: (room: string) => Socket;
    join: (room: string) => void;
    emit: (eventName: string, obj: any)=>void;
  }
}
