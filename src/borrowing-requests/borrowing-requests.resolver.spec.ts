import { Test, TestingModule } from '@nestjs/testing';
import { BorrowingRequestsResolver } from './borrowing-requests.resolver';
import { BorrowingRequestsService } from './borrowing-requests.service';

describe('BorrowingRequestsResolver', () => {
  let resolver: BorrowingRequestsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorrowingRequestsResolver, BorrowingRequestsService],
    }).compile();

    resolver = module.get<BorrowingRequestsResolver>(BorrowingRequestsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
