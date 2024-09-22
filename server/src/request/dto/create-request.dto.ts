import {ApiProperty} from "@nestjs/swagger";
import {IsArray, IsEmail, IsEnum, IsNumber, IsOptional, IsString, IsUUID} from "class-validator";
import {Program} from "../../program/entities/program.entity";
import {CreateProgramDto} from "../../program/dto/create-program.dto";
// @ts-ignore
import {request_type} from "@prisma/client";

export class CreateRequestDto {
    @ApiProperty({example: 'Заявка УрФУ №312', description: 'Название заявки'})
    @IsString()
    name: string;

    @ApiProperty({
        example: request_type.university,
        description: 'тип заявки (от кого)',
        enum: request_type,
    })
    @IsEnum(request_type)
    type: request_type;

    @ApiProperty({
        example: '5912e52d-5e25-4184-9f1d-89e9034875ed',
        description: 'uuid университета, если заявка от него'
    })
    @IsUUID()
    @IsOptional()
    university_id: string;

    @ApiProperty({
        example: '5912e52d-5e25-4184-9f1d-89e9034875ed',
        description: 'uuid предприятия, если заявка от него'
    })
    @IsUUID()
    @IsOptional()
    enterprise_id: string;

    @ApiProperty({example: 12, description: 'лимит студентов'})
    @IsNumber()
    students_limit: number;

    @ApiProperty({example: 'Описание заявки тут вот такое', description: 'Описание заявки'})
    @IsString()
    description: string;

    @ApiProperty({
        example: ['5912e52d-5e25-4184-9f1d-89e9034875ed', '16402259-7854-11ef-849c-586c25021e0c'],
        description: 'id программ на практику'
    })
    @IsArray()
    programs: string[];

    created_at: Date;
    updated_at: Date
}
