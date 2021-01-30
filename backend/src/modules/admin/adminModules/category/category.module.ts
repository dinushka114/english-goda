import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { categoryProviders } from 'src/database/providers';
import { AdminService } from '../../admin.service';
import { adminsProvider } from '../../admin.providers';

@Module({
  imports:[DatabaseModule,AuthModule],
  providers: [CategoryService,...categoryProviders,AdminService,...adminsProvider],
  controllers: [CategoryController],
  exports:[...categoryProviders]
})
export class CategoryModule {}

