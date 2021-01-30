import 'package:client/http_services/http_service.dart';
import 'package:client/models/models.dart';
import 'package:client/widgets/drawer.dart';
import 'package:client/widgets/exit_dialog.dart';
import 'package:client/widgets/loadingSpinner.dart';
import 'package:flutter/material.dart';

class GrammerLessonCategoryPage extends StatefulWidget {
  @override
  _GrammerLessonCategoryPageState createState() =>
      _GrammerLessonCategoryPageState();
}

class _GrammerLessonCategoryPageState extends State<GrammerLessonCategoryPage> {
  HttpService httpService = HttpService();
  Future<List<GrammerLessonCategory>> categoryList;
  @override
  void initState() {
    super.initState();
    categoryList = httpService.fetchCategories();
  }

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
            title: Text(
              "Pick a grammar lesson",
            ),
          ),
          drawer: drawer(context),
          body: SafeArea(
            child: FutureBuilder(
              future: categoryList,
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
                                  context, '/grammer-lessons-by-title',
                                  arguments: snapshot.data[index].name)
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
        ),
      ),
    );
  }
}
