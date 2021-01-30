import { AdminService } from './../../admin/admin.service';
import { AuthService } from './../auth.service';
import { JwtStrategy } from './../strategy/jwt.strategy';
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { resolve } from 'path';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private jwtService:JwtStrategy,private authService:AuthService,private adminService:AdminService){
    super();
  }
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (
      request.headers.authorization == null ||
      request.headers.authorization == undefined
    ) {
      // console.log('authorization token not found in request headers');
      // console.log(request.headers);
      return false;
    }

    let token: string = request.headers.authorization;
    // console.log(request);
    const authPromise = new Promise<boolean>(async (resolve , reject)=>{
      try{
        const payload = await this.authService.validateToken(token.split(' ')[1]);
        const loginData = await this.adminService.findUserByUsername(payload.username);
        if(payload.username == loginData.username ){
          resolve(true);
        }
        
      }catch(err){
        throw err;
        resolve(false);
      }
    })
    return authPromise;
    // 
    // console.log(payload);
     
  }

  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
