import {DynamicModule, Module} from '@nestjs/common';
import { MongodbRepositoryModule } from './repositories/mongodb-repository.module';
import {MongooseModule, MongooseModuleAsyncOptions} from '@nestjs/mongoose';

@Module({
  imports: [MongodbRepositoryModule],
})
export class MongodbModule {
  static register(options: MongooseModuleAsyncOptions): DynamicModule {
    return {
      module: MongodbModule,
      imports: [MongooseModule.forRootAsync(options)],
      providers: [],
      exports: [],
    };
  }
}

