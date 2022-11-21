import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { SqliteRepositoryModule } from './sqlite/sqlite-repository.module';
import { MariadbRepositoryModule } from './mariadb/mariadb-repository.module';

@Module({
  imports: [SqliteRepositoryModule, MariadbRepositoryModule],
})
export class TypeormModule {
  static register(options: TypeOrmModuleAsyncOptions): DynamicModule {
    return {
      module: TypeormModule,
      imports: [TypeOrmModule.forRootAsync(options)],
      providers: [],
      exports: [],
    };
  }
}
