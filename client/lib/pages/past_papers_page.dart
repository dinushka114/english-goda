import 'package:client/http_services/http_service.dart';
import 'package:client/pages/past_paper_answers_page.dart';
import 'package:client/pages/view_paper_page.dart';
import 'package:client/widgets/exit_dialog.dart';
import 'package:client/widgets/loadingSpinner.dart';
import 'package:flutter/material.dart';
import 'package:client/widgets/drawer.dart';
import 'package:page_transition/page_transition.dart';

class PastPapersPage extends StatelessWidget {
  HttpService httpService = HttpService();

  @override
  Widget build(BuildContext context) {

    Future<bool> _onBackPressed() {
  return showDialog(
    context: context,
    builder: (context) => exitDialog(context),
  ) ??
      false;
}

    return WillPopScope(
      onWillPop: _onBackPressed,
          child: SafeArea(
          child: Scaffold(
              appBar: AppBar(title: Text("Past Papers discussion")),
              drawer: drawer(context),
              body: FutureBuilder(
                future: httpService.fetchPapers(),
                builder: (BuildContext context, AsyncSnapshot snapshot) {
                  if (snapshot.hasData) {
                    return ListView.builder(
                        itemCount: snapshot.data.length,
                        itemBuilder: (BuildContext context, int index) {
                          return Card(
                            elevation: 5,
                            child: Column(
                              children: [
                                Align(
                                  alignment: Alignment.topLeft,
                                  child: Padding(
                                    padding: const EdgeInsets.only(left:16.0,top:16.0),
                                    child: Text(snapshot.data[index].name,style: TextStyle(
                                      fontSize: 25.0,
                                    )
                                    ),
                                    
                                  ),
                                ),
                                ListTile(
                                  leading: Icon(Icons.zoom_in),
                                  title: Text("View paper"),
                                  onTap: ()=>{
                                    Navigator.push(
                                context,
                                PageTransition(
                                    child: PDFViewerFromUrl(
                                      paper: snapshot.data[index],
                                    ),
                                    type: PageTransitionType.rightToLeft))
                                  },
                                ),
                                ListTile(
                                  leading: Icon(Icons.question_answer),
                                  title: Text("answers"),
                                  onTap: ()=>{
                                     Navigator.push(
                                context,
                                PageTransition(
                                    child: PastPaperAnswersPage(
                                      paper: snapshot.data[index],
                                    ),
                                    type: PageTransitionType.rightToLeft))
                                  },
                                ),
                              ],
                            ),
                          );
                        });
                  }
                  return Center(child: loadingSpinKit(context));
                },
              ))),
    );
  }
}
