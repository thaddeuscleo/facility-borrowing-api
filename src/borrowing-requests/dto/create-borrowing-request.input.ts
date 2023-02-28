import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBorrowingRequestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
