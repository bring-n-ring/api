import { registerEnumType } from '@nestjs/graphql';

export enum ShoppingListType {
  SUPERMARKET = 'SUPERMARKET',
  PHARMACY = 'PHARMACY',
  OTHER = 'OTHER',
}

registerEnumType(ShoppingListType, {
  name: 'ShoppingListType',
});
