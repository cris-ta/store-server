import { IsString, IsEnum } from 'class-validator';
import { PermissionType } from '../permissions.entity';

export class CreatePermissionDto {
  @IsEnum(PermissionType)
  name: string;

  @IsString()
  description: string;
}
