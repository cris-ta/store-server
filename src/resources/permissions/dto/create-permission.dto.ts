import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';
import { PermissionType } from '../permissions.entity';

export class CreatePermissionDto {
  @ApiProperty({ enum: PermissionType })
  @IsEnum(PermissionType)
  name: string;

  @ApiProperty()
  @IsString()
  description: string;
}
