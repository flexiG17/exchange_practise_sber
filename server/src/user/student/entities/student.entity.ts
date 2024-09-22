import { ApiProperty } from '@nestjs/swagger';
import {student_course, user_gender, user_role} from '@prisma/client';
import {University} from "../../../university/entities/university.entity";

export class StudentEntity {
    @ApiProperty({ example: 'Pavel Durov', description: 'ФИО' })
    name: string;

    @ApiProperty({ example: 'pavel.durev@gmail.com', description: 'почта' })
    email: string;

    @ApiProperty({ example: '88055353535', description: 'номер телефона' })
    phone_number: string;

    @ApiProperty({
        example: user_gender.male,
        description: 'пол',
        enum: user_gender,
    })
    gender: user_gender;

    @ApiProperty({ example: '11111111', description: 'пароль' })
    password: string;

    @ApiProperty({
        example: student_course.one,
        description: 'курс студента',
        enum: student_course,
    })
    student_course: student_course;

    @ApiProperty({ example: 'РИМ-140970', description: 'Академическая группа' })
    academic_group: string;

    @ApiProperty({
        example: '5912e52d-5e25-4184-9f1d-89e9034875ed',
        description: 'uuid студента, если роль студента',
    })
    student_id: string;

    @ApiProperty({
        example: University,
        description: 'университет',
    })
    university: University;

    /* @ApiProperty({
       example: Program,
       description: 'программа',
     })
     program: Program;

     @ApiProperty({
       example: EnterpriseRequest,
       description: 'заявка предприятия',
     })
     enterprise_request: EnterpriseRequest;*/
}
