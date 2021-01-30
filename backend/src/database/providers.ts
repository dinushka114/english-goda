import { essaySchema, pastPaperSchema, vocabularySchema, vocabularyCategorySchema } from './../schemas/learnEnglish.schemas';
import { categorySchema, grammerLessonSchema } from '../schemas/learnEnglish.schemas';
import { CATEGORY_PROVIDER, DB_PROVIDER, GRAMMER_PROVIDER, ESSAY_PROVIDER, PASTPAPER_PROVIDER, VOCABULARY_PROVIDER, VOCABULARY_CATEGORY_PROVIDER } from './../config/constants/constants';
import { Connection } from "mongoose";

export const categoryProviders = [
    {
      provide: CATEGORY_PROVIDER,
      useFactory: (connection: Connection) => connection.model('Category', categorySchema),
      inject: [DB_PROVIDER],
    },
  ];


  export const grammerProviders = [
    {
      provide: GRAMMER_PROVIDER,
      useFactory: (connection: Connection) => connection.model('GrammerLesson', grammerLessonSchema),
      inject: [DB_PROVIDER],
    },
  ];

  export const essayProvider = [
    {
      provide: ESSAY_PROVIDER,
      useFactory: (connection: Connection) => connection.model('Essays', essaySchema),
      inject: [DB_PROVIDER],
    },
  ];

  export const pastPaperProvider = [
    {
      provide: PASTPAPER_PROVIDER,
      useFactory: (connection: Connection) => connection.model('PastPaper', pastPaperSchema),
      inject: [DB_PROVIDER],
    },
  ];

  export const vocabularyProviders = [
    {
      provide: VOCABULARY_PROVIDER,
      useFactory: (connection: Connection) => connection.model('Vocabulary', vocabularySchema),
      inject: [DB_PROVIDER],
    },
  ];

  export const vocabularycategoryProviders = [
    {
      provide: VOCABULARY_CATEGORY_PROVIDER,
      useFactory: (connection: Connection) => connection.model('VocabularyCategory', vocabularyCategorySchema),
      inject: [DB_PROVIDER],
    },
  ];