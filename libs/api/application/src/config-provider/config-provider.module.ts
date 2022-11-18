import { Module } from '@nestjs/common';
import {configuration} from './configuration';
import {validationSchema} from './validation';
import { ConfigModule } from '@nestjs/config';

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
  providers: []
})
export class ConfigProviderModule {}
