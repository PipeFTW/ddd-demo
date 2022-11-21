import {Prop, Schema} from '@nestjs/mongoose';

@Schema({collection: 'users'})
export class UserDto {
  @Prop()
  name: string

  @Prop()
  surname: string

  @Prop()
  email: string

  @Prop()
  created?: Date

  @Prop()
  updated?: Date
}
