import { DatabaseModule } from './../../database/database.module';
import { AdminService } from './../admin/admin.service';
import { JwtAuthGuard } from './guard/jwt-auth-guard';
import { JwtStrategy } from './strategy/jwt.strategy';
import { jwtConstants } from './../../config/constants/constants';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { adminsProvider } from '../admin/admin.providers';

@Module({
  imports:[
    DatabaseModule,
    JwtModule.register({
      secret: jwtConstants.secretKey,
      signOptions: { expiresIn: '5h' },
    }),
  ],
  providers: [AuthService,JwtStrategy,JwtAuthGuard,AdminService,...adminsProvider],
  exports:[AuthService,JwtStrategy,JwtAuthGuard]
})
export class AuthModule {}
