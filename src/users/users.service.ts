import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create({ username, password, role, email }: CreateUserInput) {
    return this.prisma.user.create({
      data: {
        username,
        password,
        email,
        role,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update({ id, email, password, role, username }: UpdateUserInput) {
    return this.prisma.user.update({
      data: {
        email,
        password,
        role,
        username,
      },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
