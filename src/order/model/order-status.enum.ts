import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatus {
  // TODO: Decide which order statuses we need
  UNASSIGNED = 'UNASSIGNED',
  ASSIGNED = 'ASSIGNED',
  COMPLETED = 'COMPLETED',
}

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
});
