import {ApiProperty} from "@nestjs/swagger";

export class Program {
    @ApiProperty({ example: '09.03.03', description: 'код программы' })
    code: string;

    @ApiProperty({ example: 'Прикладная информатика', description: 'название программы' })
    name: string;
}
