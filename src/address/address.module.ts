import { Module } from '@nestjs/common';
import { AddressResolver } from './graphql/address.resolver';
import { AddressService } from './service/address.service';

@Module({
  providers: [AddressResolver, AddressService],
})
export class AddressModule {}
