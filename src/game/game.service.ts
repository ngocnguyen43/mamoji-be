import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './dto/player.entity';
import { PlayerDto } from './dto/player.dto';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Player)
        private usersRepository: Repository<Player>,
    ) { }
    async createOne(player: PlayerDto) {
        try {
            return this.usersRepository.upsert({ ...player }, {
                conflictPaths: {
                    id: true,
                }
            });
        } catch (error) {
            console.log(error);

        }
    }
    async findAll(): Promise<Player[]> {
        const users = await this.usersRepository.find()
        return users.length ? users.sort((a, b) => (b.score - a.score)).slice(0, 10) : [];
    }

    findOne(id: string): Promise<Player | null> {
        return this.usersRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
