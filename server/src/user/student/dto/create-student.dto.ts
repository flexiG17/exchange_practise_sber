import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsEnum, IsOptional, IsPhoneNumber,
    IsString,
    IsStrongPassword,
    IsUUID,
} from 'class-validator';
import {student_course, user_gender, user_role} from '@prisma/client';

export class CreateStudentDto {
    @ApiProperty({ example: 'Pavel Durov', description: 'ФИО' })
    @IsString()
    name: string;

    @ApiProperty({ example: 'Сейчас я расскажу о себе', description: 'описание' })
    @IsString()
    description: string;

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
        example: '5912e52d-5e25-4184-9f1d-89e9034875ed',
        description: 'uuid университета',
    })
    @IsUUID()
    university_id: string;

    @ApiProperty({
        example: '5912e52d-5e25-4184-9f1d-89e9034875ed',
        description: 'uuid программы',
    })
    @IsUUID()
    program_id: string;

    @ApiProperty({
        example: student_course.one,
        description: 'номе курса',
        enum: student_course,
    })
    @IsEnum(student_course)
    course: student_course;

    @ApiProperty({ example: 'РИМ-14970', description: 'номер группы' })
    @IsString()
    academic_group: string;

    role: user_role;
    created_by: string;
    created_at: Date;
    updated_at: Date;
}
