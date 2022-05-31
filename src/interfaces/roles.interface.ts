import { Permissions } from './permissions.interface';

export interface Roles {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;

  // Relations
  permissions: Permissions[];
}
