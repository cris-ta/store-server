import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  address: string;

  city: string;

  state: string;

  number: number;

  zipCode: string;

  @IsPhoneNumber('VN')
  phone: string;
}
