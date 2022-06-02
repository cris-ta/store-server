import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum PermissionType {
  READ = 'read',
  WRITE = 'write',
  DELETE = 'delete',
  CREATE = 'create',
  UPDATE = 'update',
  EXECUTE = 'execute',
  IMPORT = 'import',
  EXPORT = 'export',
  MANAGE = 'manage',
  ASSIGN = 'assign',
  UNASSIGN = 'unassign',
  MANAGE_PERMISSIONS = 'manage_permissions',
  MANAGE_ROLES = 'manage_roles',
  MANAGE_USERS = 'manage_users',
  MANAGE_CART = 'manage_cart',
  MANAGE_PRODUCTS = 'manage_products',
  MANAGE_CATEGORIES = 'manage_categories',
  MANAGE_ORDERS = 'manage_orders',
  MANAGE_COUPONS = 'manage_coupons',
  MANAGE_CUSTOMERS = 'manage_customers',
  MANAGE_CUSTOMER_GROUPS = 'manage_customer_groups',
  MANAGE_CUSTOMER_ADDRESSES = 'manage_customer_addresses',
  MANAGE_CUSTOMER_TAGS = 'manage_customer_tags',
  MANAGE_CUSTOMER_NOTES = 'manage_customer_notes',
  MANAGE_CUSTOMER_WISHLISTS = 'manage_customer_wishlists',
  MANAGE_CUSTOMER_SUBSCRIPTIONS = 'manage_customer_subscriptions',
  MANAGE_CUSTOMER_GROUPS_SUBSCRIPTIONS = 'manage_customer_groups_subscriptions',
  MANAGE_CUSTOMER_GROUPS_NOTES = 'manage_customer_groups_notes',
}

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: PermissionType,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date();
  }
}
