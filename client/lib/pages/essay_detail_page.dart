import 'package:client/ad_manager.dart';
import 'package:client/models/models.dart';
import 'package:firebase_admob/firebase_admob.dart';
import 'package:flutter/material.dart';
import 'package:flutter_widget_from_html/flutter_widget_from_html.dart';


class EssayDetailPage extends StatefulWidget {
  final Essay essay;

  const EssayDetailPage({Key key, this.essay}) : super(key: key);

  @override
  _EssayDetailPageState createState() => _EssayDetailPageState();
}

class _EssayDetailPageState extends State<EssayDetailPage> {
  BannerAd _bannerAd;

  void _loadBannerAd() {
    _bannerAd
      ..load()
      ..show(anchorType: AnchorType.top);
  }

  @override
  void initState() {
    // TODO: Initialize _bannerAd
    _bannerAd = BannerAd(
      adUnitId: AdManager.bannerAdUnitId,
      size: AdSize.banner,
    );

    // TODO: Load a Banner Ad
    _loadBannerAd();
  }

  @override
  void dispose() {
    // TODO: Dispose BannerAd object
    _bannerAd?.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text(this.widget.essay.title),
        ),
        body: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.all(5.0),
            child: Card(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: HtmlWidget(
                  this.widget.essay.content,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
