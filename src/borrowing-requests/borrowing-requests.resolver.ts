import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BorrowingRequestsService } from './borrowing-requests.service';
import { BorrowingRequest } from './entities/borrowing-request.entity';
import { CreateBorrowingRequestInput } from './dto/create-borrowing-request.input';
import { UpdateBorrowingRequestInput } from './dto/update-borrowing-request.input';

@Resolver(() => BorrowingRequest)
export class BorrowingRequestsResolver {
  constructor(private readonly borrowingRequestsService: BorrowingRequestsService) {}

  @Mutation(() => BorrowingRequest)
  createBorrowingRequest(@Args('createBorrowingRequestInput') createBorrowingRequestInput: CreateBorrowingRequestInput) {
    return this.borrowingRequestsService.create(createBorrowingRequestInput);
  }

  @Query(() => [BorrowingRequest], { name: 'borrowingRequests' })
  findAll() {
    return this.borrowingRequestsService.findAll();
  }

  @Query(() => BorrowingRequest, { name: 'borrowingRequest' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.borrowingRequestsService.findOne(id);
  }

  @Mutation(() => BorrowingRequest)
  updateBorrowingRequest(@Args('updateBorrowingRequestInput') updateBorrowingRequestInput: UpdateBorrowingRequestInput) {
    return this.borrowingRequestsService.update(updateBorrowingRequestInput);
  }

  @Mutation(() => BorrowingRequest)
  removeBorrowingRequest(@Args('id', { type: () => String }) id: string) {
    return this.borrowingRequestsService.remove(id);
  }
}
