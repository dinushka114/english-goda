import { VocabularyModule } from './../admin/adminModules/vocabulary/vocabulary.module';
import { PastPapersModule } from './../admin/adminModules/past-papers/past-papers.module';
import { EssaysModule } from './../admin/adminModules/essays/essays.module';
import { GrammerLessonsModule } from './../admin/adminModules/grammer-lessons/grammer-lessons.module';
import { VocabularyCategoryModule } from './../admin/adminModules/vocabulary-category/vocabulary-category.module';
import { CategoryModule } from './../admin/adminModules/category/category.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[CategoryModule,VocabularyCategoryModule,GrammerLessonsModule,EssaysModule,PastPapersModule,VocabularyModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
