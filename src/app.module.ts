import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { CartsModule } from './modules/carts/carts.module';
import { ConfigModule } from './modules/config/config.module';
import { AuthGuard } from './guards/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.register({
      folder: './config',
    }),
    ProductsModule,
    UsersModule,
    CartsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
