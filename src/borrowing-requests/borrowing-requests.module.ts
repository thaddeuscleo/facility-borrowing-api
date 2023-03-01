import { Module } from '@nestjs/common';
import { BorrowingRequestsService } from './borrowing-requests.service';
import { BorrowingRequestsResolver } from './borrowing-requests.resolver';
import { PrismaModule } from './../prisma/prisma.module';
import { PrismaService } from './../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [
    BorrowingRequestsResolver,
    BorrowingRequestsService,
    PrismaService,
  ],
})
export class BorrowingRequestsModule {}
