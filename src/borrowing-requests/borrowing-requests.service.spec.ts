import { Test, TestingModule } from '@nestjs/testing';
import { BorrowingRequestsService } from './borrowing-requests.service';

describe('BorrowingRequestsService', () => {
  let service: BorrowingRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorrowingRequestsService],
    }).compile();

    service = module.get<BorrowingRequestsService>(BorrowingRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
