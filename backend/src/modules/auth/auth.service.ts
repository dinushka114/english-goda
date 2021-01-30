import { jwtConstants } from './../../config/constants/constants';
import { LoginUserDto } from 'src/dtos/admin.dto';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private jwtService:JwtService){}

    async generateToken(user:any){
        const payload = {
            username:user.username,
            password:user.password
        }
        return await this.jwtService.sign(payload);
    }

    async hashPassword(password:string):Promise<string>{
        return await bcrypt.hash(password , 10);
    }

    async comparePassword(inputPassword:string , storedPassword:string):Promise<boolean>{
        return await bcrypt.compare(inputPassword , storedPassword);
    }

    async validateToken(token:string){
        const payload = await this.jwtService.verify(token , jwtConstants.secretKey);
        return payload;
    }

}
