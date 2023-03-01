import { InputType, ID, Field } from '@nestjs/graphql';
import { Role } from './../../roles/role.enum';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User username' })
  username: string;

  @Field(() => String, { description: 'User email address' })
  email: string;

  @Field(() => String, { description: 'User password' })
  password: string;

  @Field(() => Role, {description: 'User role'})
  role: Role;
}
