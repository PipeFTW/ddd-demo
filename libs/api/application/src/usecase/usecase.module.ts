import {Module} from '@nestjs/common';
import {MariadbRepositoryModule, SqliteRepositoryModule, TypeormModule, UserRepository} from '@ddd-demo/api/infrastructure';
import {SqliteTypeormConfigFactoryService} from '../config-provider/sqlite/sqlite-typeorm-config-factory.service';
import {MariadbTypeormConfigFactoryService} from '../config-provider/mariadb/mariadb-typeorm-config-factory.service';
import {CreateUserUsecase, DeleteUserUsecase, FindAllUsersUsecase, FindUserByIdUsecase, UpdateUserUsecase} from '@ddd-demo/api/domain';

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

  static CREATE_USER_USECASE = 'CREATE_USER_USECASE';
  static UPDATE_USER_USECASE = 'UPDATE_USER_USECASE';
  static DELETE_USER_USECASE = 'DELETE_USER_USECASE';
  static FIND_USER_BY_ID_USECASE = 'GET_USER_BY_ID_USECASE';
  static FIND_ALL_USERS_USECASE = 'GET_ALL_USERS_USECASE';

  private static readonly USER_PROVIDERS = [
    {
      inject: [UserRepository],
      provide: UsecaseModule.CREATE_USER_USECASE,
      useFactory: (userRepository: UserRepository) => new CreateUserUsecase(userRepository),
    },
    {
      inject: [UserRepository],
      provide: UsecaseModule.UPDATE_USER_USECASE,
      useFactory: (userRepository: UserRepository) => new UpdateUserUsecase(userRepository),
    },
    {
      inject: [UserRepository],
      provide: UsecaseModule.DELETE_USER_USECASE,
      useFactory: (userRepository: UserRepository) => new DeleteUserUsecase(userRepository),
    },
    {
      inject: [UserRepository],
      provide: UsecaseModule.FIND_USER_BY_ID_USECASE,
      useFactory: (userRepository: UserRepository) => new FindUserByIdUsecase(userRepository),
    },
    {
      inject: [UserRepository],
      provide: UsecaseModule.FIND_ALL_USERS_USECASE,
      useFactory: (userRepository: UserRepository) => new FindAllUsersUsecase(userRepository),
    }
  ];

  static register() {
    return {
      module: UsecaseModule,
      providers: [...UsecaseModule.USER_PROVIDERS],
      exports: [
        UsecaseModule.CREATE_USER_USECASE,
        UsecaseModule.UPDATE_USER_USECASE,
        UsecaseModule.DELETE_USER_USECASE,
        UsecaseModule.FIND_USER_BY_ID_USECASE,
        UsecaseModule.FIND_ALL_USERS_USECASE
      ]
    };
  }
}
