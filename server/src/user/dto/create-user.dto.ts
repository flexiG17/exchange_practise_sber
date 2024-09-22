import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum, IsOptional, IsPhoneNumber,
  IsString,
  IsStrongPassword,
  IsUUID,
} from 'class-validator';
import {user_gender, user_role} from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ example: 'Pavel Durov', description: 'ФИО' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'pavel.durev@gmail.com', description: 'почта' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '88055353535', description: 'номер телефона' })
  @IsPhoneNumber()
  phone_number: string;

  @ApiProperty({
    example: user_gender.male,
    description: 'пол',
    enum: user_gender,
  })
  @IsEnum(user_gender)
  gender: user_gender;

  @ApiProperty({ example: '11111111', description: 'пароль' })
  /*@IsStrongPassword({
    minLength: 8,
    minNumbers: 2,
  })*/
  password: string;

  @ApiProperty({
    example: user_role.student,
    description: 'user role',
    enum: user_role,
  })
  @IsEnum(user_role)
  role: user_role;

  @ApiProperty({
    example: '5912e52d-5e25-4184-9f1d-89e9034875ed',
    description: 'uuid студента, если роль студента',
  })
  @IsUUID()
  @IsOptional()
  student_id: string;

  @ApiProperty({
    example: '5912e52d-5e25-4184-9f1d-89e9034875ed',
    description: 'uuid университета, если роль университета',
  })
  @IsUUID()
  @IsOptional()
  university_id: string;

  @ApiProperty({
    example: '5912e52d-5e25-4184-9f1d-89e9034875ed',
    description: 'uuid предприятия, если роль предприятия',
  })
  @IsUUID()
  @IsOptional()
  enterprise_id: string;

  created_by: string;
  created_at: Date;
  updated_at: Date;
}
