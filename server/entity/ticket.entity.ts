type statusType = "Open" | "In Progress" | "Resolved";

import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity()
export class Ticket extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: statusType;

    @Column()
    dueDate: Date;

    @Column()
    createDate: Date;

    @Column()
    user: string;

    @Column()
    tags: string[];

}
