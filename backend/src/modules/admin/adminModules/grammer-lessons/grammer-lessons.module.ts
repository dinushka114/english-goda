import { adminsProvider } from './../../admin.providers';
import { AdminService } from './../../admin.service';
import { AuthModule } from 'src/modules/auth/auth.module';
import { grammerProviders } from './../../../../database/providers';
import { CategoryModule } from './../category/category.module';
import { Module } from '@nestjs/common';
import { GrammerLessonsController } from './grammer-lessons.controller';
import { GrammerLessonsService } from './grammer-lessons.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule,CategoryModule,AuthModule,],
  controllers: [GrammerLessonsController],
  providers: [GrammerLessonsService,...grammerProviders,AdminService,...adminsProvider],
  exports:[...grammerProviders]
})
export class GrammerLessonsModule {}
