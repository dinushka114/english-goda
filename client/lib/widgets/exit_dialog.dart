import 'package:flutter/material.dart';

Widget exitDialog(context) {
  return AlertDialog(
    title: new Text('Are you sure?'),
    content: new Text('Do you want to exit an App'),
    actions: <Widget>[
      FlatButton(
        onPressed: () {
          Navigator.of(context).pop(false);
        },
        child: Text("No", style: TextStyle(color: Color(0xFF00adb5))),
      ),
      // new GestureDetector(
      //   onTap: () => Navigator.of(context).pop(false),
      //   child: Container(
      //     padding: EdgeInsets.fromLTRB(5.0, 10.0, 0.0, 10.0),
      //     child: Text("NO",style: TextStyle(fontFamily: "Lato", color: Color(0xFF00adb5),)),
      //     ),
      // ),
      SizedBox(height: 16),
      FlatButton(
        onPressed: () {
          Navigator.of(context).pop(true);
        },
        child: Text(
          "Yes",
          style: TextStyle(color: Color(0xFF00adb5)),
        ),
      )
      // new GestureDetector(
      //   onTap: () => Navigator.of(context).pop(true),
      //   child: Container(
      //     padding: EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0),
      //     child: Text("YES",style: TextStyle(fontFamily: "Lato", color: Color(0xFF00adb5)),),
      //     ),
      // ),
    ],
  );
}
