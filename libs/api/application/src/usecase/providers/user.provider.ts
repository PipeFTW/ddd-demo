import {UserRepository} from '@ddd-demo/api/infrastructure';
import {CreateUserUsecase, DeleteUserUsecase, FindAllUsersUsecase, FindUserByIdUsecase, UpdateUserUsecase} from '@ddd-demo/api/domain';

export const enum UserUsecase {
  CREATE_USER_USECASE = 'CREATE_USER_USECASE',
  UPDATE_USER_USECASE = 'UPDATE_USER_USECASE',
  DELETE_USER_USECASE = 'DELETE_USER_USECASE',
  FIND_USER_BY_ID_USECASE = 'GET_USER_BY_ID_USECASE',
  FIND_ALL_USERS_USECASE = 'GET_ALL_USERS_USECASE',
}

export const USER_PROVIDERS = [
  {
    inject: [UserRepository],
    provide: UserUsecase.CREATE_USER_USECASE,
    useFactory: (userRepository: UserRepository) => new CreateUserUsecase(userRepository),
  },
  {
    inject: [UserRepository],
    provide: UserUsecase.UPDATE_USER_USECASE,
    useFactory: (userRepository: UserRepository) => new UpdateUserUsecase(userRepository),
  },
  {
    inject: [UserRepository],
    provide: UserUsecase.DELETE_USER_USECASE,
    useFactory: (userRepository: UserRepository) => new DeleteUserUsecase(userRepository),
  },
  {
    inject: [UserRepository],
    provide: UserUsecase.FIND_USER_BY_ID_USECASE,
    useFactory: (userRepository: UserRepository) => new FindUserByIdUsecase(userRepository),
  },
  {
    inject: [UserRepository],
    provide: UserUsecase.FIND_ALL_USERS_USECASE,
    useFactory: (userRepository: UserRepository) => new FindAllUsersUsecase(userRepository),
  }
];
