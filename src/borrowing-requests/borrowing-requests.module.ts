import { Module } from '@nestjs/common';
import { BorrowingRequestsService } from './borrowing-requests.service';
import { BorrowingRequestsResolver } from './borrowing-requests.resolver';

@Module({
  providers: [BorrowingRequestsResolver, BorrowingRequestsService]
})
export class BorrowingRequestsModule {}
