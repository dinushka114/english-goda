import 'package:flutter/material.dart';

class ErrorConnectionPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Center(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Card(
              color: Color(0xFF00adb5),
              child: Padding(
                padding: const EdgeInsets.all(12.0),
                child: Column(
                  children: [
                    Text(
                      "Please connect to the internet",
                      style: TextStyle(
                          fontSize: 15.0,
                          color: Color(0xFFEEEEEE)),
                    ),
                    Icon(
                      Icons.wifi_lock_outlined,
                      color: Color(0xFFEEEEEE),
                    ),
                  ],
                ),
              ),
            )
          ],
        )),
      ),
    );
  }
}