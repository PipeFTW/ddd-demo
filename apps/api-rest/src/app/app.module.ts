import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigProviderModule, UsecaseModule} from '@ddd-demo/api/application';

@Module({
  imports: [ConfigProviderModule, UsecaseModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
