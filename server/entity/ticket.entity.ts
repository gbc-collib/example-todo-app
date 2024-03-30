type statusType = "Open" | "In Progress" | "Resolved";

import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity()
export class Ticket extends BaseEntity {
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

    @CreateDateColumn()
    createDate: Date;

    @Column()
    user: string;

    @Column("text", { array: true })
    tags: string[];

}
