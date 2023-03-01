import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Room } from './../../rooms/entities/room.entity';

@ObjectType()
export class BorrowingRequest {
  @Field(() => ID, { description: 'Borrowing Request Identifier' })
  id: string;

  @Field(() => Room, { description: 'The Borrowing Request room' })
  room: Room;

  @Field(() => Boolean, { description: 'Approval for room borrowing' })
  isApproved: boolean;

  @Field(() => Date, { description: 'Approval for start time' })
  startTime: Date;

  @Field(() => Date, { description: 'Approval for end time' })
  endTime: Date;

  @Field(() => Date, { description: 'Approval for create at' })
  createdAt: Date;

  @Field(() => Date, { description: 'Approval for update at' })
  updatedAt: Date;
}
