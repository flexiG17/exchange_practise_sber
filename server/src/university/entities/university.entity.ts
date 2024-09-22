import {ApiProperty} from "@nestjs/swagger";

export class University {
    @ApiProperty({ example: '5912e52d-5e25-4184-9f1d-89e9034875ed', description: 'uuid' })
    id: string

    @ApiProperty({ example: 'УрФУ', description: 'название' })
    name: string;

    @ApiProperty({ example: 'Описание университета', description: 'описание' })
    description: string;

    @ApiProperty({ example: 'Мира 19', description: 'местоположение' })
    location: string;
}
