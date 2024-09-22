import {ApiProperty} from "@nestjs/swagger";
import {University} from "../../university/entities/university.entity";
import {Enterprise} from "../../enterprise/entities/enterprise.entity";
import {Program} from "../../program/entities/program.entity";
import {request_status, request_type} from "@prisma/client";

export class RequestEntity {
    @ApiProperty({example: 'Заявка УрФУ №312', description: 'Название заявки'})
    name: string;

    @ApiProperty({
        example: request_type.university,
        description: 'Тип заявки',
        enum: request_type
    })
    type: request_type;

    @ApiProperty({
        example: request_status.open,
        description: 'Статус заявки',
        enum: request_status
    })
    status: request_status;

    @ApiProperty({
        example: University,
        description: 'университеты на заявке предприятия (если заявка от предприятия)',
        isArray: true
    })
    university: University[];

    @ApiProperty({
        type: Enterprise,
        description: 'предприятия на заявке университета (если заявка от университета)',
        isArray: true
    })
    enterprise: Enterprise[];

    @ApiProperty({example: 15, description: 'лимит студентов'})
    students_limit: number;

    @ApiProperty({example: 'Описание заявки тут вот такое', description: 'Описание заявки'})
    description: string;

    @ApiProperty({
        type: Program,
        description: 'массив программ в заявке',
        isArray: true
    })
    programs: Program[];
}
