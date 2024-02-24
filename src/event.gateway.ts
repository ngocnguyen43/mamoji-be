import { Inject } from "@nestjs/common";
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { SocketService } from "./socket/socket.service";

@WebSocketGateway()
export class Eventgateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(private socketService: SocketService) { }
    @WebSocketServer()
    public server: Server
    handleDisconnect(@ConnectedSocket() socket: Socket) {
        console.log(`client ${socket.id} is disconeted`);
    }
    handleConnection(@ConnectedSocket() socket: Socket,) {
        socket.join("1")
        console.log(`client ${socket.id} is connected`);

    }
    afterInit(server: Server) {
        console.log("EEE");
        this.socketService.socket = server
        server.use((socket, next) => {
            console.log(socket);

            next()
        })
    }
    @SubscribeMessage("data")
    async handleOnData(@ConnectedSocket() socket: Socket, @MessageBody() payload: string) {
        console.log(payload);
    }

}