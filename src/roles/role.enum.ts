import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  Admin = 'Admin',
  DepartmentCoordinator = 'DepartmentCoordinator',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'Roles for user permissions'
});