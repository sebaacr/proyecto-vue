import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmprendedoresModule } from './emprendedores/emprendedores.module'
import { Emprendedor } from './emprendedores/entities/emprendedor.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'data.db',
      entities: [Emprendedor],
      synchronize: true
    } as any),
    EmprendedoresModule
  ]
})
export class AppModule {}