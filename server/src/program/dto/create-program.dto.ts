import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateProgramDto {
    @ApiProperty({ example: '09.03.03', description: 'код программы' })
    @IsString()
    code: string;

    @ApiProperty({ example: 'Прикладная информатика', description: 'название программы' })
    @IsString()
    name: string;
}
