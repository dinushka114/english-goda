import 'package:client/http_services/http_service.dart';
import 'package:client/pages/essay_detail_page.dart';
import 'package:client/widgets/drawer.dart';
import 'package:client/widgets/exit_dialog.dart';
import 'package:client/widgets/loadingSpinner.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

class EssayTitlePage extends StatelessWidget {
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

    return SafeArea(
        child: WillPopScope(
      onWillPop: _onBackPressed,
      child: Scaffold(
        appBar: AppBar(
          title: Text("Essays"),
        ),
        drawer: drawer(context),
        body: FutureBuilder(
            future: httpService.fetchEssays(),
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
                                    child: EssayDetailPage(
                                      essay: snapshot.data[index],
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
            }),
      ),
    ));
  }
}
