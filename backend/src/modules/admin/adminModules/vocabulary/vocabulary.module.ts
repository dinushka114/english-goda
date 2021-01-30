import { AuthModule } from 'src/modules/auth/auth.module';
import { VocabularyCategoryModule } from './../vocabulary-category/vocabulary-category.module';
import { Module } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { VocabularyController } from './vocabulary.controller';
import { vocabularyProviders } from 'src/database/providers';
import { DatabaseModule } from 'src/database/database.module';
import { AdminService } from '../../admin.service';
import { adminsProvider } from '../../admin.providers';

@Module({
  imports:[DatabaseModule,VocabularyCategoryModule,AuthModule],
  providers: [VocabularyService,...vocabularyProviders,AdminService,...adminsProvider],
  controllers: [VocabularyController],
  exports:[...vocabularyProviders]
})
export class VocabularyModule {}
