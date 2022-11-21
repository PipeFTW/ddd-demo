import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {UserDto} from '../dtos/user.dto';

export type UserDocument = UserDto & Document;
export const UserSchema = SchemaFactory.createForClass(UserDto);
