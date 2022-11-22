import {Module} from '@nestjs/common';
import {MariadbRepositoryModule, TypeormModule} from '@ddd-demo/api/infrastructure';
import {MariadbTypeormConfigFactoryService} from '../config-provider/mariadb/mariadb-typeorm-config-factory.service';
import {USER_PROVIDERS, UserUsecase} from './providers';

@Module({
  imports: [
    // TypeormModule.register({
    //   useClass: SqliteTypeormConfigFactoryService,
    // }),
    // SqliteRepositoryModule,

    TypeormModule.register({
      useClass: MariadbTypeormConfigFactoryService,
    }),
    MariadbRepositoryModule,
  ],
  providers: [],
  exports: [],
})
export class UsecaseModule {
  static register() {
    return {
      module: UsecaseModule,
      providers: [...USER_PROVIDERS],
      exports: [
        UserUsecase.CREATE_USER_USECASE,
        UserUsecase.UPDATE_USER_USECASE,
        UserUsecase.DELETE_USER_USECASE,
        UserUsecase.FIND_USER_BY_ID_USECASE,
        UserUsecase.FIND_ALL_USERS_USECASE
      ]
    };
  }
}
