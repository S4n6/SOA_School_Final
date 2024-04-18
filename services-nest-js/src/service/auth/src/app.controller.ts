import { Controller, Get } from '@nestjs/common';
import { AuthController } from './app.service';

@Controller()
export class AuthController {
  constructor(private readonly authController: AuthController) {}

  @Get()
  getHello(): string {
    return this.authController.getHello();
  }
}
