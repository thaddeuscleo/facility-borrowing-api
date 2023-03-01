import { InputType, Field } from '@nestjs/graphql';
import { BorrowingRequest } from 'src/borrowing-requests/entities/borrowing-request.entity';

@InputType()
export class CreateRoomInput {
  @Field(() => String, { description: 'Room name. ex: GC Hall' })
  name: string;

  @Field(() => [String], {
    description: 'Room name. ex: GC Hall',
    nullable: true,
    defaultValue: [],
  })
  borrowingRequests: string[];
}
