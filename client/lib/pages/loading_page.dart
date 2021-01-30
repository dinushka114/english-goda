// import 'package:englishforol/pages/error_connection.dart';
import 'package:client/widgets/error_connect_widget.dart';
import 'package:client/widgets/loading.dart';
import 'package:firebase_admob/firebase_admob.dart';
// import 'package:firebase_admob/firebase_admob.dart';
import 'package:flutter/material.dart';
import 'package:connectivity/connectivity.dart';
import 'package:flutter_offline/flutter_offline.dart';

import '../ad_manager.dart';

class LoadingPage extends StatefulWidget {
  @override
  _LoadingPageState createState() => _LoadingPageState();
}

class _LoadingPageState extends State<LoadingPage> {

  Future<void> _initAdMob() {
    // TODO: Initialize AdMob SDK
    return FirebaseAdMob.instance.initialize(appId: AdManager.appId);
  }


  @override
  Widget build(BuildContext context) {
    return SafeArea(
          child: new Scaffold(
        body: OfflineBuilder(
          connectivityBuilder:
              (BuildContext context, ConnectivityResult connectivity, Widget child) {
            final bool connected = connectivity != ConnectivityResult.none;
            if (connected) {
              return LoadingApp();
            } else {
              print("Internet na");
              return ErrorConnectionPage();
            }
          },
          child: Text("Hi"),
        ),

      ),
    );
  }
}