import { Controller, Get, Inject, Post } from '@nestjs/common';
import { SocketService } from '../socket/socket.service';

@Controller({
    path: "game",
    version: "2"
})
export class GameController {
    constructor(private readonly SocketService: SocketService) { }
    @Get()
    async GetAll() {
        return ["ABC"]
    }
    @Post()
    async Create() {
        this.SocketService.socket.to("1").emit("hehee", { x: 1 })
    }

}
