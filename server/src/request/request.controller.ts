import {Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RequestService} from "./request.service";
import {RequestEntity} from "./entities/request.entity";
import {CreateRequestDto} from "./dto/create-request.dto";

@ApiTags('request')
@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @ApiOperation({ summary: 'подать заявку' })
  @ApiResponse({
      status: HttpStatus.CREATED,
      description: 'заявка успешно создана',
      type: RequestEntity,
    })
  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.create(createRequestDto);
  }

/*  @Get()
  findAll() {
    return this.universityRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universityRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUniversityRequestDto: UpdateUniversityRequestDto) {
    return this.universityRequestService.update(+id, updateUniversityRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universityRequestService.remove(+id);
  }*/
}
