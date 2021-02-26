import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class CreateUsers1614124525511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
            }),
        )
        queryRunner.clearSqlMemory();
        const uniqueIdConstraint = new TableUnique({columnNames: ['id']});
        await queryRunner.createUniqueConstraint('users', uniqueIdConstraint)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
