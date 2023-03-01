import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';

@Injectable()
export class RoomsService {
  constructor(private readonly prisma: PrismaService) {}

  create({ name, borrowingRequests }: CreateRoomInput) {
    return this.prisma.room.create({
      data: {
        name,
        borrowingRequest: {
          connect: [...borrowingRequests.map((id) => ({ id }))],
        },
      },
    });
  }

  findAll() {
    return this.prisma.room.findMany({});
  }

  findOne(id: string) {
    return this.prisma.room.findUnique({
      where: {
        id,
      },
    });
  }

  update({ id, name, borrowingRequests }: UpdateRoomInput) {
    return this.prisma.room.update({
      data: {
        name,
        borrowingRequest: {
          connect: [...borrowingRequests.map((id) => ({ id }))],
        },
      },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.room.delete({
      where: {
        id,
      },
    });
  }
}
