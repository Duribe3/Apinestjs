import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Mensajes {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    nick: string;


    @Column()
    mensaje: string;
    

}
