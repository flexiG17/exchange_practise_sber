import { ApiProperty } from '@nestjs/swagger';
import { user_role } from '@prisma/client';
import { University } from '../../university/entities/university.entity';
import { Enterprise } from '../../enterprise/entities/enterprise.entity';
import {StudentEntity} from "../student/entities/student.entity";

export class UserEntity {
  @ApiProperty({
    example: '5912e52d-5e25-4184-9f1d-89e9034875ed',
    description: 'User uuid',
  })
  id: string;

  @ApiProperty({ example: 'Pavel Durov', description: 'ФИО' })
  name: string;

  @ApiProperty({ example: 'pavel.durev@gmail.com', description: 'Почта' })
  email: string;

  @ApiProperty({ example: '11111111', description: 'пароль' })
  password: string;

  @ApiProperty({
    example: user_role.student,
    description: 'роль',
    enum: user_role,
  })
  role: user_role;

  @ApiProperty({
    example: '2024-04-04T19:10:28.000Z',
    description: 'дата создания',
  })
  created_at: Date;

  @ApiProperty({
    example: '2024-04-04T19:10:28.000Z',
    description: 'дата изменения',
  })
  updated_at: Date;

  @ApiProperty({
    example: University,
    description: 'университет, если роль university',
  })
  university: University;

  @ApiProperty({
    example: Enterprise,
    description: 'предприятие, если роль enterprise',
  })
  enterprise: Enterprise;

  @ApiProperty({
    example: StudentEntity,
    description: 'данные студента, если роль student',
  })
  student: StudentEntity;
}
