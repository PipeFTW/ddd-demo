import {UserRepository} from '@ddd-demo/api/infrastructure';
import {CreateUserUsecase, DeleteUserUsecase, FindAllUsersUsecase, FindUserByIdUsecase, UpdateUserUsecase} from '@ddd-demo/api/domain';

export const CREATE_USER_USECASE = 'CREATE_USER_USECASE';
export const UPDATE_USER_USECASE = 'UPDATE_USER_USECASE';
export const DELETE_USER_USECASE = 'DELETE_USER_USECASE';
export const FIND_USER_BY_ID_USECASE = 'GET_USER_BY_ID_USECASE';
export const FIND_ALL_USERS_USECASE = 'GET_ALL_USERS_USECASE';

export const USER_PROVIDERS = [
  {
    inject: [UserRepository],
    provide: CREATE_USER_USECASE,
    useFactory: (userRepository: UserRepository) => new CreateUserUsecase(userRepository),
  },
  {
    inject: [UserRepository],
    provide: UPDATE_USER_USECASE,
    useFactory: (userRepository: UserRepository) => new UpdateUserUsecase(userRepository),
  },
  {
    inject: [UserRepository],
    provide: DELETE_USER_USECASE,
    useFactory: (userRepository: UserRepository) => new DeleteUserUsecase(userRepository),
  },
  {
    inject: [UserRepository],
    provide: FIND_USER_BY_ID_USECASE,
    useFactory: (userRepository: UserRepository) => new FindUserByIdUsecase(userRepository),
  },
  {
    inject: [UserRepository],
    provide: FIND_ALL_USERS_USECASE,
    useFactory: (userRepository: UserRepository) => new FindAllUsersUsecase(userRepository),
  }
];
