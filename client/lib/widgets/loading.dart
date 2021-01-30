import 'dart:async';

import 'package:client/pages/grammer_lesson_category_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';

class LoadingApp extends StatefulWidget {
  @override
  _LoadingAppState createState() => _LoadingAppState();
}

class _LoadingAppState extends State<LoadingApp> {
  final delay = 3;

  @override
  void initState() {
    super.initState();

    loadWidget();
  }

  loadWidget() async {
    var _duration = Duration(seconds: delay);
    return Timer(_duration, navigationPage);
  }

  void navigationPage() {
    Navigator.pushReplacement(
        context,
        MaterialPageRoute(
            builder: (BuildContext context) => GrammerLessonCategoryPage()));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      decoration: BoxDecoration(
          gradient: LinearGradient(
              colors: <Color>[Color(0xFF393e46), Color(0xFF00adb5)])),
      child: Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Spacer(
            flex: 3,
          ),
          Expanded(
            flex: 7,
            child: Container(
              child: Column(
                children: [
                  Material(
                    borderRadius: BorderRadius.all(Radius.circular(100.0)),
                    elevation: 10,
                    child: Image.asset(
                      "images/logo.png",
                      height: 120.0,
                      width: 120.0,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(15.0),
                    child: Text(
                      "Your Personal O/L English Tutor",
                      style: TextStyle(
                          color: Color(0XFFEEEEEE),
                          fontSize: 18.0,
                          fontWeight: FontWeight.bold),
                    ),
                  )
                ],
              ),
            ),
          ),
          Expanded(
              flex: 2,
              child: SpinKitCircle(
                size: 50.0,
                color: Color(0xFFEEEEEE),
              )),
        ],
      )),
    ));
  }
}
