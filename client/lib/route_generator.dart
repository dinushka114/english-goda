import 'package:client/pages/about_page.dart';
import 'package:client/pages/essays_titles_page.dart';
import 'package:client/pages/grammer_lesson_category_page.dart';
import 'package:client/pages/grammer_lessons_by_title_page.dart';
import 'package:client/pages/loading_page.dart';
import 'package:client/pages/vocabulary_lessons_category_page.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';
import 'package:client/pages/vocabulary_lessons_by_title.dart';
import 'package:client/pages/past_papers_page.dart';

class RouteGenerator{
  static Route<dynamic> generateRoute(RouteSettings settings){
    final args = settings.arguments;

    switch(settings.name){
      case '/loading':
        return PageTransition(child: LoadingPage(), type: PageTransitionType.rightToLeft);
      case '/grammer-categories':
        return PageTransition(child: GrammerLessonCategoryPage(), type: PageTransitionType.rightToLeft);
      case '/grammer-lessons-by-title':
        return PageTransition(child: GrammerLessonsByTitlePage(category: args,), type:PageTransitionType.rightToLeft);
      case '/Vocabulary-categories':
        return PageTransition(child: VocabularyCategoryPage(), type:PageTransitionType.rightToLeft);
      case '/vocabulary-lessons-by-title':
        return PageTransition(child: VocabularyLessonByTitlePage(category: args,), type:PageTransitionType.rightToLeft);
      case '/essays-titles':
        return PageTransition(child: EssayTitlePage(), type:PageTransitionType.rightToLeft);
      case '/past-papers':
        return PageTransition(child: PastPapersPage(), type:PageTransitionType.rightToLeft);
      case '/about':
        return PageTransition(child: AboutUsPage(), type:PageTransitionType.rightToLeft);
    }

  }
}