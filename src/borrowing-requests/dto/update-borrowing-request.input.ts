import { CreateBorrowingRequestInput } from './create-borrowing-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBorrowingRequestInput extends PartialType(CreateBorrowingRequestInput) {
  @Field(() => Int)
  id: number;
}
