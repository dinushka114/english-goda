import 'package:client/route_generator.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}


class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Learn english',
      theme: ThemeData(
        primaryColor: Color(0xFF00adb5),
        accentColor: Color(0xFF00adb5),
        scaffoldBackgroundColor: Color(0xFFeeeeee),
        fontFamily: "Raleway"
      ),
      initialRoute: '/loading',
      onGenerateRoute: RouteGenerator.generateRoute,
    );
  }
}

