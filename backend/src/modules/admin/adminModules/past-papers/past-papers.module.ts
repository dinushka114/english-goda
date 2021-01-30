import { AuthModule } from 'src/modules/auth/auth.module';

import { Module } from '@nestjs/common';
import { PastPapersService } from './past-papers.service';
import { PastPapersController } from './past-papers.controller';
import { pastPaperProvider } from 'src/database/providers';
import { DatabaseModule } from 'src/database/database.module';
import { adminsProvider } from '../../admin.providers';
import { AdminService } from '../../admin.service';

@Module({
  imports:[DatabaseModule,AuthModule],
  providers: [PastPapersService,...pastPaperProvider,AdminService,...adminsProvider],
  controllers: [PastPapersController],
  exports:[...pastPaperProvider]
})
export class PastPapersModule {}
