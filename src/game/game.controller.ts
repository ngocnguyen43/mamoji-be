import { Controller, Get } from '@nestjs/common';

@Controller({
    path: "game",
    version: "2"
})
export class GameController {
    @Get()
    async GetAll() {
        return ["ABC"]
    }
}
