import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EurekaModule } from 'nestjs-eureka';

@Module({
  imports: [
    EurekaModule.forRoot({
      disable: false,
      disableDiscovery: false,
      eureka: {
          host: process.env.EUREKA_HOST || 'localhost',
          port: process.env.EUREKA_PORT || 8761,
          servicePath: '/eureka/apps',
          maxRetries: 10,
          requestRetryDelay: 10000,
      },
      service: {
          name: 'auth-service',
          port: parseInt(process.env.APP_PORT) || 5001,
          host: 'localhost',
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
