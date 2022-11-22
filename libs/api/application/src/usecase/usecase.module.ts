import {Module} from '@nestjs/common';
import {MariadbRepositoryModule, TypeormModule} from '@ddd-demo/api/infrastructure';
import {MariadbTypeormConfigFactoryService} from '../config-provider/mariadb/mariadb-typeorm-config-factory.service';
import {CREATE_USER_USECASE, DELETE_USER_USECASE, FIND_ALL_USERS_USECASE, FIND_USER_BY_ID_USECASE, UPDATE_USER_USECASE, USER_PROVIDERS} from './providers';

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
        CREATE_USER_USECASE,
        UPDATE_USER_USECASE,
        DELETE_USER_USECASE,
        FIND_USER_BY_ID_USECASE,
        FIND_ALL_USERS_USECASE
      ]
    };
  }
}
