import 'package:client/models/models.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';

class PastPaperAnswersPage extends StatelessWidget {
  final PastPaper paper;

  const PastPaperAnswersPage({Key key, this.paper}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text(this.paper.name),
        ),
        body: SingleChildScrollView(
          child: Card(
              child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: HtmlWidget(
              this.paper.answers,
            ),
          )),
        ),
      ),
    );
  }
}
