import { DataSource } from "typeorm"
const pgHost = process.env.PGHOST;
const pgDataBase = process.env.PGDATABASE;
const pgPassword = process.env.PGPASSWORD;
const pgPort = parseInt(process.env.PGPORT);
const pgUser = process.env.PGUSER;


export const dataSource = new DataSource({
    type: "postgres",
    host: pgHost,
    port: pgPort,
    username: pgUser,
    password: pgPassword,
    database: pgDataBase,
    entities: ["entity/*.ts"],
    logging: true,
    synchronize: true,
})
