import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from './../prisma/prisma.module';
import { PrismaService } from './../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersResolver, UsersService, PrismaService]
})
export class UsersModule {}
