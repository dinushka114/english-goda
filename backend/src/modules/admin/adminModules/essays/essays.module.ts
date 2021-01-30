import { AuthModule } from 'src/modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { EssaysService } from './essays.service';
import { EssaysController } from './essays.controller';
import { essayProvider } from 'src/database/providers';
import { DatabaseModule } from 'src/database/database.module';
import { AdminService } from '../../admin.service';
import { adminsProvider } from '../../admin.providers';

@Module({
  imports:[DatabaseModule,AuthModule],
  providers: [EssaysService,...essayProvider,AdminService,...adminsProvider],
  controllers: [EssaysController],
  exports:[...essayProvider]
})
export class EssaysModule {}
