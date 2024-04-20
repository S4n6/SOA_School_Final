import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRequestDto } from './auth.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(data: AuthRequestDto){
    console.log('jwt', this.configService.get('JWT_SECRET'));
    const user = await this.userService.findByEmail(data.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.generateToken(user.id);
    return { 'token' : token.token, 'refresh_token': token.refreshToken};
  }

  
  private generateToken(userId: string, isAdmin: boolean, isVip: boolean, isBlocked: boolean) {
    const payload = { sub: userId };
    const token = this.jwtService.sign(payload, { expiresIn: '7d' });
  
    const refreshTokenPayload = { sub: userId, type: 'refresh' };
    const refreshToken = this.jwtService.sign(refreshTokenPayload, { expiresIn: '365d' });
  
    return { token, refreshToken };
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

}
