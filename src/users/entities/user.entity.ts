import { ObjectType, Field, ID } from '@nestjs/graphql';
import { BorrowingRequest } from './../../borrowing-requests/entities/borrowing-request.entity';
import { Role } from './../../roles/role.enum';

@ObjectType()
export class User {
  @Field(() => ID, { description: 'User identifier' })
  id: string;

  @Field(() => String, { description: 'User email address' })
  email: string;

  @Field(() => String, { description: 'User account username' })
  username: string;

  @Field(() => Role, { description: 'User role' })
  role: Role;

  @Field(() => BorrowingRequest, { description: 'User role' })
  borrowingRequest: BorrowingRequest;

  @Field(() => Date, { description: 'User creation date' })
  createAt: Date;

  @Field(() => Date, { description: 'User update date' })
  updateAt: Date;
}
