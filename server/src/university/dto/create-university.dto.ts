import {IsUUID} from "class-validator";

export class CreateUniversityDto {
    @IsUUID()
    id: string
}
