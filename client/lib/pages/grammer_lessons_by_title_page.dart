import 'package:client/http_services/http_service.dart';
import 'package:client/pages/grammer_lesson_detail_page.dart';
import 'package:client/widgets/loadingSpinner.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

class GrammerLessonsByTitlePage extends StatelessWidget {
  final String category;
  HttpService httpService = HttpService();

  GrammerLessonsByTitlePage({Key key, this.category}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text(this.category),
        ),
        body: FutureBuilder(
          future: httpService.fetchGrammerLessonsByCategory(category),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if (snapshot.hasData) {
              return ListView.builder(
                  itemCount: snapshot.data.length,
                  itemBuilder: (BuildContext context, int index) {
                    return Card(
                      elevation: 5,
                      child: ListTile(
                        title: Text(snapshot.data[index].title),
                        onTap: () => {
                          Navigator.push(
                              context,
                              PageTransition(
                                  child: GrammerLessonDetailPage(
                                    lesson: snapshot.data[index],
                                  ),
                                  type: PageTransitionType.rightToLeft))
                        },
                      ),
                    );
                  });
            }
            return Center(
              child: loadingSpinKit(context),
            );
          },
        ),
      ),
    );
  }
}

// Navigator.push(
//                             context,
//                             PageTransition(
//                                 child: LessonDetailPage(
//                                     lesson: snapshot.data[index]),
//                                 type: PageTransitionType.rightToLeft)),
//                       ),
//                     );
