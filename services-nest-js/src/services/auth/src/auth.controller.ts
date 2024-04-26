import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto, RegisterRequestDto } from './auth.dto';
import { GoogleAuthGuard } from './guard';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,

  ) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleLogin() {
    // initiates the Google OAuth2 login flow
    return 'login with google'
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleLoginRedirect(@Req() req) {
    // handles the Google OAuth2 callback
    // return this.authService.googleLogin(req)
    return 'login with google'
  }

  @Post('login')
  async login(@Body() data: AuthRequestDto){
    return this.authService.login(data);
  }

  @Post('signup')
  async signup(@Body() data: RegisterRequestDto){
    return this.authService.register(data);
  }
 
}
