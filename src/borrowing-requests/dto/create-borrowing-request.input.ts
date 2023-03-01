import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateBorrowingRequestInput {
  @Field(() => ID, { description: 'Room identifier' })
  roomId: string;

  @Field(() => ID, { description: 'User identifier' })
  userId: string;

  @Field(() => Boolean, { description: 'Room identifier' })
  isApproved: boolean;

  @Field(() => Date, { description: 'Room borrowing start time' })
  startTime: Date;

  @Field(() => Date, { description: 'Room borrowing end time' })
  endTime: Date;
}
