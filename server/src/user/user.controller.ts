import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { user_role } from '@prisma/client';

@ApiTags('user')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(user_role.admin)
  @ApiOperation({ summary: 'создать нового пользователя' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Пользователь успешно создан',
    type: UserEntity,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Пользователь с такмии данными уже есть в системе',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto, @Req() req: IRequestWithUser) {
    return this.userService.create(createUserDto, req);
  }

  @ApiOperation({ summary: 'получить всех пользователей' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Пользователи успешно получены',
    isArray: true,
    type: UserEntity,
  })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'получить пользователя по id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Пользователь успешно получен',
    type: UserEntity,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'изменить пользователя по id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Пользователь успешно изменён',
    type: UserEntity,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'удалить пользователя по id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Пользователь успешно удалён',
    type: UserEntity,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
