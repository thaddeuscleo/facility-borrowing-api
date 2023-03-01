import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsResolver } from './rooms.resolver';
import { PrismaModule } from './../prisma/prisma.module';
import { PrismaService } from './../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [RoomsResolver, RoomsService, PrismaService],
})
export class RoomsModule {}
