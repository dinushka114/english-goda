import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

String currentRoute = "/grammer-categories";

Widget drawer(BuildContext context) {
  return Container(
    child: Drawer(
      elevation: 5,
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            decoration: BoxDecoration(
                gradient: LinearGradient(
                    colors: <Color>[Color(0xFF393e46), Color(0xFF00adb5)])),
            child: Container(
              child: Column(
                children: [
                  Material(
                    borderRadius: BorderRadius.all(Radius.circular(100.0)),
                    elevation: 10,
                    child: Image.asset(
                      'images/logo.png',
                      width: 100.0,
                      height: 100.0,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(6.0),
                    child: Text(
                      "Your Personal O/L English Tutor",
                      style: TextStyle(
                          color: Color(0xFFeeeeee),
                          fontSize: 14.0,
                          fontWeight: FontWeight.bold),
                    ),
                  )
                ],
              ),
            ),
          ),
          Container(
            decoration: BoxDecoration(
                border:
                    Border(bottom: BorderSide(color: Colors.grey.shade400))),
            child: ListTile(
              trailing:
                  Icon(Icons.keyboard_arrow_right, color: Color(0xFF00adb5)),
              leading: Icon(Icons.book),
              title: Text(
                "Grammar",
              ),
              onTap: () {
                doRoute(context, "/grammer-categories");
              },
            ),
          ),
          Container(
            decoration: BoxDecoration(
                border:
                    Border(bottom: BorderSide(color: Colors.grey.shade400))),
            child: ListTile(
              trailing:
                  Icon(Icons.keyboard_arrow_right, color: Color(0xFF00adb5)),
              leading: Icon(Icons.wysiwyg),
              title: Text(
                "Vocabulary & Writing",
              ),
              onTap: () {
                doRoute(context, "/Vocabulary-categories");
              },
            ),
          ),
          Container(
            decoration: BoxDecoration(
                border:
                    Border(bottom: BorderSide(color: Colors.grey.shade400))),
            child: ListTile(
              trailing:
                  Icon(Icons.keyboard_arrow_right, color: Color(0xFF00adb5)),
              leading: Icon(Icons.article),
              title: Text("Essays"),
              onTap: () {
                doRoute(context, "/essays-titles");
              },
            ),
          ),
          Container(
            decoration: BoxDecoration(
                border:
                    Border(bottom: BorderSide(color: Colors.grey.shade400))),
            child: ListTile(
              trailing:
                  Icon(Icons.keyboard_arrow_right, color: Color(0xFF00adb5)),
              leading: Icon(Icons.question_answer),
              title: Text("Past Papers discussion"),
              subtitle: Text("From 2010"),
              onTap: () {
                doRoute(context, '/past-papers');
              },
            ),
          ),
          Container(
            decoration: BoxDecoration(
                border:
                    Border(bottom: BorderSide(color: Colors.grey.shade400))),
            child: ListTile(
              trailing:
                  Icon(Icons.keyboard_arrow_right, color: Color(0xFF00adb5)),
              leading: Icon(Icons.account_box),
              title: Text("About us"),
              onTap: () {
                doRoute(context, '/about');
              },
            ),
          ),
        ],
      ),
    ),
  );
}

void doRoute(BuildContext context, String name) {
  if (currentRoute != name)
    Navigator.pushReplacementNamed(context, name);
  else
    Navigator.pop(context);

  currentRoute = name;
}
