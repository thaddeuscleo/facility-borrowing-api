import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBorrowingRequestInput } from './dto/create-borrowing-request.input';
import { UpdateBorrowingRequestInput } from './dto/update-borrowing-request.input';

@Injectable()
export class BorrowingRequestsService {
  constructor(private readonly prisma: PrismaService) {}

  create({ userId, roomId, endTime, startTime }: CreateBorrowingRequestInput) {
    return this.prisma.borrowingRequest.create({
      data: {
        userId,
        roomId,
        startTime,
        endTime,
      },
    });
  }

  findAll() {
    return this.prisma.borrowingRequest.findMany();
  }

  findOne(id: string) {
    return this.prisma.borrowingRequest.findUnique({
      where: {
        id,
      },
    });
  }

  update({
    id,
    endTime,
    isApproved,
    roomId,
    startTime,
    userId,
  }: UpdateBorrowingRequestInput) {
    return this.prisma.borrowingRequest.update({
      data: {
        endTime,
        isApproved,
        roomId,
        startTime,
        userId,
      },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} borrowingRequest`;
  }
}
