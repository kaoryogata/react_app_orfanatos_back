import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602798498407 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //realizar as alterações no bd
    //Criar tabela, criar campo, deletar algum campo

    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        },
      
      ],
    }))
  }
  //executar: yarn typeorm migration:run

  public async down(queryRunner: QueryRunner): Promise<void> {
    //desfazer o que foi feito  no up
    await queryRunner.dropTable('orphanages');
  }

}
