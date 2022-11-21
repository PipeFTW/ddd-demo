import { Injectable } from '@nestjs/common';
import {MongooseModuleOptions, MongooseOptionsFactory} from '@nestjs/mongoose';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class MongodbConfigFactoryService implements MongooseOptionsFactory  {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
    return {
      uri: this.configService.get<string>('mongodb.uri'),
      connectionName: this.configService.get<string>('mongodb.dbName'),
      authSource: 'admin',
    };
  }
}
