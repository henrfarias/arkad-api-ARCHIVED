import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class users1629298969469 implements MigrationInterface {
  tableName = 'users';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            type: 'bigint',
            name: 'id',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            type: 'varchar',
            name: 'email',
            isUnique: true,
            isNullable: false,
          },
          {
            type: 'varchar',
            name: 'password',
            isNullable: false,
          },
          {
            type: 'varchar',
            name: 'full_name',
            isNullable: false,
          },
          {
            type: 'timestamp',
            name: 'created_at',
            isNullable: false,
          },
          {
            type: 'timestamp',
            name: 'updated_at',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
