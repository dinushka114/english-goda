import 'package:client/models/models.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';

class VocabularyLessonDetailPage extends StatelessWidget {
  final VocabularyLessonByTitle lesson;

  const VocabularyLessonDetailPage({Key key, this.lesson}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text(this.lesson.title),
        ),
        body: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.all(5.0),
            child: Card(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: HtmlWidget(
                   this.lesson.content,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
