import 'package:client/widgets/drawer.dart';
import 'package:client/widgets/exit_dialog.dart';
import 'package:flutter/material.dart';

class AboutUsPage extends StatelessWidget {
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
          appBar: AppBar(
            title: Text("About Us"),
          ),
          drawer: drawer(context),
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset(
                  "images/one0.png",
                  width: 120.0,
                  height: 150.0,
                ),
                Text(
                  "by one0 Apps",
                  style: TextStyle(color: Colors.grey[600]),
                ),
                Text(
                  "one0apps.online@gmail.com",
                  style: TextStyle(color: Colors.grey[600]),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
