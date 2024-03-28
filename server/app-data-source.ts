import { DataSource } from "typeorm"
export const dataSource = new DataSource({
    type: "sqlite",
    database: "test.sqlite3",
    entities: ["entity/*.ts"],
    logging: true,
    synchronize: true,
})
