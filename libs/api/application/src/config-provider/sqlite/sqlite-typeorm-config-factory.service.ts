import { Injectable } from '@nestjs/common';
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm';

@Injectable()
export class SqliteTypeormConfigFactoryService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: 'sqlite',
      database: 'demo.db',
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}
