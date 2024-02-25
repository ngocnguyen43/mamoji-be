import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "players" })
export class Player {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "text" })
    avatar: string;

    @Column()
    player: string;

    @Column()
    score: number;

}
