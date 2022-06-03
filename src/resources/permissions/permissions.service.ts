import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './permissions.entity';

@Injectable()
export class PermissionsService {
  constructor(private dataSource: DataSource) {}

  create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    return this.dataSource.manager.save(Permission, {
      ...createPermissionDto,
      createdAt: new Date(),
    });
  }

  createMany(
    createPermissionDto: CreatePermissionDto[],
  ): Promise<Permission[]> {
    return this.dataSource.manager.transaction(
      async (transactionalEntityManager) => {
        const permissions = transactionalEntityManager.create(
          Permission,
          createPermissionDto.map((permission) => ({
            ...permission,
            createdAt: new Date(),
          })),
        );
        return transactionalEntityManager.save(Permission, permissions);
      },
    );
  }

  findAll(): Promise<Permission[]> {
    return this.dataSource.manager.find(Permission);
  }

  findOne(id: number): Promise<Permission> {
    return this.dataSource.manager.findOneByOrFail(Permission, {
      id,
    });
  }

  async remove(id: number): Promise<void> {
    await this.dataSource.manager.delete(Permission, {
      id,
    });
  }
}
