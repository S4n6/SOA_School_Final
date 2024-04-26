import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto, RegisterRequestDto } from './auth.dto';
import { GoogleAuthGuard } from './guard';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleLogin() {
    return 'login with google';
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  async googleLoginRedirect(@Req() req, @Res() res) {
    // Get the user from req.user
    const user = req.user;
    console.log('user', user);
    // Generate a new token for the user
    let token;
    try {
      token = await this.authService.login(user.email);
    } catch (error) {

      if (error instanceof UnauthorizedException) {
        const newUser = new RegisterRequestDto();
        newUser.email = user.email;
        newUser.name = user.firstName;
        newUser.password = '123456';
        await this.authService.register(newUser);
        token = await this.authService.loginWithGoogle(user);
      } else {
        throw error;
      }
    }
    res.redirect('http://localhost:5173/home');
    // res.cookie('access_token', token, { httpOnly: true, secure: true });
    return { access_token: token };
  }

  @Post('login')
  async login(@Body() data: AuthRequestDto) {
    return this.authService.login(data);
  }

  @Post('signup')
  async signup(@Body() data: RegisterRequestDto) {
    return this.authService.register(data);
  }
}
