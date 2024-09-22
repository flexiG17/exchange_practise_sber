import { Controller, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'авторизация' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Успешная авторизация',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Неавторизован',
  })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: IRequestWithUser) {
    return this.authService.login(req.user);
  }
}
