import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DateTimeScalar } from './core/scalar/date-time.scalar';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      introspection: true,
    }),
    AddressModule,
    ShoppingListModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateTimeScalar],
})
export class AppModule {}
