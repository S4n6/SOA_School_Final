import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './auth.dto';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,

  ) {}

  @Post('login')
  async login(@Body() data: AuthRequestDto){
    return this.authService.login(data);
  }
 
}
