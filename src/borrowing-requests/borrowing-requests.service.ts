import { Injectable } from '@nestjs/common';
import { CreateBorrowingRequestInput } from './dto/create-borrowing-request.input';
import { UpdateBorrowingRequestInput } from './dto/update-borrowing-request.input';

@Injectable()
export class BorrowingRequestsService {
  create(createBorrowingRequestInput: CreateBorrowingRequestInput) {
    return 'This action adds a new borrowingRequest';
  }

  findAll() {
    return `This action returns all borrowingRequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} borrowingRequest`;
  }

  update(id: number, updateBorrowingRequestInput: UpdateBorrowingRequestInput) {
    return `This action updates a #${id} borrowingRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} borrowingRequest`;
  }
}
