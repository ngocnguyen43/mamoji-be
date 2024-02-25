import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { PlayerDto } from './dto/player.dto';

@Controller({
    path: "game",
    version: "2"
})
export class GameController {
    constructor(
        private readonly GameService: GameService) { }
    @Get()
    async GetAll() {
        return await this.GameService.findAll()
    }
    @Post()
    async Create(@Body() player: PlayerDto) {
        console.log(player);

        return await this.GameService.createOne(player)
    }

}
