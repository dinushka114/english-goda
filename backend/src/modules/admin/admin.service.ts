import { LoginUserDto } from './../../dtos/admin.dto';
import { AuthService } from './../auth/auth.service';
import { ADMIN_PROVIDER } from './../../config/constants/constants';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Admin } from 'src/models/admin.model';
import { Model } from 'mongoose';

@Injectable()
export class AdminService {
    constructor(
        @Inject(ADMIN_PROVIDER)
        private adminModel:Model<Admin>,
        private authService:AuthService
    ){}

    getAdmins(){
        return this.adminModel.find({}).exec();
    }

    async login(loginUser:LoginUserDto){
        const admin = await this.findUserByUsername(loginUser.username);
        if(admin){
            const isMatch = await this.authService.comparePassword(loginUser.password , admin.password);
            if(isMatch){
                return {token:await this.authService.generateToken(admin)}
            }else{
                throw new HttpException('Invalid password' , HttpStatus.BAD_REQUEST);
            }
        }else{
            throw new HttpException('User Not found' , HttpStatus.FORBIDDEN);
        }
    }

    async findUserByUsername(username:string){
        const adminUser = await this.adminModel.findOne({username:username})
        if(adminUser){
            return adminUser;
        }else{
            throw new HttpException('User not found' , HttpStatus.FORBIDDEN);
        }
    }

    // private async validatePassword(inputPassword:string , storedPassword:string):Promise<boolean>{
    //     return await this.authService.comparePassword(inputPassword,storedPassword);
    // }
}
