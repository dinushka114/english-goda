import 'package:client/http_services/http_service.dart';
import 'package:client/widgets/drawer.dart';
import 'package:client/widgets/exit_dialog.dart';
import 'package:client/widgets/loadingSpinner.dart';
import 'package:flutter/material.dart';

class VocabularyCategoryPage extends StatelessWidget {
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
            title: Text("Vocabulary & Writing"),
          ),
          drawer: drawer(context),
          body: FutureBuilder(
              future: httpService.fetchVocabularyCategories(),
              builder: (BuildContext context, AsyncSnapshot snapshot) {
                if (snapshot.hasData) {
                  return ListView.builder(
                      itemCount: snapshot.data.length,
                      itemBuilder: (BuildContext context, int index) {
                        return Card(
                          elevation: 5,
                          child: ListTile(
                            title: Text(snapshot.data[index].name),
                            subtitle: Text(snapshot.data[index].description),
                            onTap: () => {
                              Navigator.pushNamed(
                                  context, '/vocabulary-lessons-by-title',
                                  arguments: snapshot.data[index].name)
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
      ),
    );
  }
}
