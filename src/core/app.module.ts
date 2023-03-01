import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BorrowingRequestsModule } from 'src/borrowing-requests/borrowing-requests.module';
import { RoomsModule } from 'src/rooms/rooms.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: '*',
        credential: true,
      },
      playground: true,
      introspection: true,
    }),
    RoomsModule,
    UsersModule,
    BorrowingRequestsModule
  ],
  providers: [],
})
export class AppModule {}
