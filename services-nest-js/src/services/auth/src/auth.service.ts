import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRequestDto, RegisterRequestDto } from './auth.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import axios from 'axios';
import { User } from './user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(data: AuthRequestDto){
    const user = await this.getUserByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.generateToken(user.id, user.isAdmin, user.isVip, user.isBlocked);
    return { 'token' : token.token, 'refresh_token': token.refreshToken};
  }

  async register(data: RegisterRequestDto){
    const user = await this.getUserByEmail(data.email);
    if (user) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await this.hashPassword(data.password);
    const response = await axios.post(this.configService.get('URL_USER_SERVICE'), {
      ...data,
      password: hashedPassword,
    });

    return response.data;
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

  private async getUserByEmail(email: string) {
    try {
      const response = await axios.get(this.configService.get('URL_USER_SERVICE') + '/email/' + email);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

}
