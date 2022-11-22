import { Module } from '@nestjs/common';
import { configuration } from './configuration';
import { validationSchema } from './validation';
import { ConfigModule } from '@nestjs/config';
import { SqliteTypeormConfigFactoryService } from './sqlite/sqlite-typeorm-config-factory.service';
import { MongodbConfigFactoryService } from './mongodb/mongodb-config-factory.service';
import { MariadbTypeormConfigFactoryService } from './mariadb/mariadb-typeorm-config-factory.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      /**
       * Workaround for NX. NX replaces NODE_ENV on development. But if separated into 2 half, NX won't be able to replace it.
       */
      envFilePath: `${process.cwd()}/.env/${process.env['NODE' + '_ENV']}.env`,
      load: [configuration],
      validationSchema,
      isGlobal: true,
    }),
  ],
  exports: [ConfigModule],
  providers: [SqliteTypeormConfigFactoryService, MongodbConfigFactoryService, MariadbTypeormConfigFactoryService],
})
export class ConfigProviderModule {}
