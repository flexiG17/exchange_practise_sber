import { user_role } from '@prisma/client';
import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'pavel.durev@gmail.com', description: 'user email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '11111111', description: 'user password' })
  /*@IsStrongPassword({
      minLength: 8,
      minNumbers: 2,
    })*/
  password: string;

  role: user_role;
  university_id: string;
  enterprise_id: string;
  created_by: string;
  created_at: Date;
  updated_at: Date;
}
