import { AuthModule } from 'src/modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { VocabularyCategoryService } from './vocabulary-category.service';
import { VocabularyCategoryController } from './vocabulary-category.controller';
import { vocabularycategoryProviders } from 'src/database/providers';
import { DatabaseModule } from 'src/database/database.module';
import { AdminService } from '../../admin.service';
import { adminsProvider } from '../../admin.providers';

@Module({
  imports:[DatabaseModule,AuthModule],
  providers: [VocabularyCategoryService,...vocabularycategoryProviders,AdminService,...adminsProvider],
  controllers: [VocabularyCategoryController],
  exports:[...vocabularycategoryProviders]
})
export class VocabularyCategoryModule {}
