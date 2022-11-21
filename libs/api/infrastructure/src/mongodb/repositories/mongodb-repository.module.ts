import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {UserDto} from '../dtos/user.dto';
import {UserSchema} from '../schema/user.schema';
import {UserRepository} from './user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserDto.name, schema: UserSchema, collection: 'users' }])],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class MongodbRepositoryModule {}
