import { ObjectType, Field, ID } from '@nestjs/graphql';
import { BorrowingRequest } from './../../borrowing-requests/entities/borrowing-request.entity';

@ObjectType()
export class Room {
  @Field(() => ID, { description: 'Room identifier' })
  id: string;

  @Field(() => String, { description: 'Room name' })
  name: string;

  @Field(() => [BorrowingRequest], { description: 'Room identifier' })
  borrowingRequests: BorrowingRequest[];
}
