import { Module } from '@nestjs/common';
import { ProductsModule } from './resources/products/products.module';
import { UsersModule } from './resources/users/users.module';
import { CartsModule } from './resources/carts/carts.module';
import { AuthGuard } from './guards/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PermissionsModule } from './resources/permissions/permissions.module';
import { RolesModule } from './resources/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const defaultOptions: TypeOrmModuleOptions = {
          type: 'postgres',
          url: configService.get('DATABASE_URL'),
          autoLoadEntities: true,
          synchronize: true,
        };
        if (configService.get('DATABASE_SSL') === 'true') {
          return {
            ...defaultOptions,
            ssl: true,
            extra: { ssl: { rejectUnauthorized: false } },
          } as TypeOrmModuleOptions;
        }
        return defaultOptions;
      },
    }),
    ProductsModule,
    UsersModule,
    CartsModule,
    PermissionsModule,
    RolesModule,
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
