import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminService } from './modules/admin/admin.service';
import { AdminController } from './modules/admin/admin.controller';
import { AuthModule } from './modules/auth/auth.module';
import { adminsProvider } from './modules/admin/admin.providers';
import { CategoryModule } from './modules/admin/adminModules/category/category.module';
import { GrammerLessonsModule } from './modules/admin/adminModules/grammer-lessons/grammer-lessons.module';
import { EssaysModule } from './modules/admin/adminModules/essays/essays.module';
import { PastPapersModule } from './modules/admin/adminModules/past-papers/past-papers.module';
import { VocabularyModule } from './modules/admin/adminModules/vocabulary/vocabulary.module';
import { VocabularyCategoryModule } from './modules/admin/adminModules/vocabulary-category/vocabulary-category.module';
import { UsersModule } from './modules/users/users.module';




@Module({
  imports: [DatabaseModule,  ConfigModule.forRoot(), AuthModule, CategoryModule, GrammerLessonsModule, EssaysModule, PastPapersModule, VocabularyModule, VocabularyCategoryModule, UsersModule],
  providers:[AdminService,...adminsProvider],
  controllers:[AdminController],
  exports:[]
})
export class AppModule {}
