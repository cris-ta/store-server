export interface Carts {
  id: number;
  userId: number;
  date: Date;
  products: [{ productId: number; quantity: number }];
}
