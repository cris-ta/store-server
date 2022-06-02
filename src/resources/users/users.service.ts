import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private dataSource: DataSource) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.dataSource.manager.save(User, createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.dataSource.manager.find(User);
  }

  findOne(id: string): Promise<User> {
    return this.dataSource.manager.findOne(User, {
      where: { id: +id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.dataSource.manager.save(User, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.dataSource.manager.delete(User, id);
  }
}
