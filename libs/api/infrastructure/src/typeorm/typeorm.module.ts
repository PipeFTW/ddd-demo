import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { SqliteRepositoryModule } from './sqlite/sqlite-repository.module';

@Module({
  imports: [SqliteRepositoryModule],
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
