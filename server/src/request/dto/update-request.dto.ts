import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestDto } from './create-request.dto';

export class UpdateUniversityRequestDto extends PartialType(CreateRequestDto) {}
