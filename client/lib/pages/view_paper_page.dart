import 'package:client/ad_manager.dart';
import 'package:client/models/models.dart';
import 'package:firebase_admob/firebase_admob.dart';
import 'package:flutter/material.dart';
import 'package:flutter_cached_pdfview/flutter_cached_pdfview.dart';

class PDFViewerFromUrl extends StatefulWidget {
  final PastPaper paper;

  const PDFViewerFromUrl({Key key, @required this.paper}) : super(key: key);

  @override
  _PDFViewerFromUrlState createState() => _PDFViewerFromUrlState();

  
}

class _PDFViewerFromUrlState extends State<PDFViewerFromUrl> {

   BannerAd _bannerAd;

  void _loadBannerAd() {
    _bannerAd
      ..load()
      ..show(anchorType: AnchorType.bottom);
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
          title: Text(widget.paper.name),
        ),
        body: PDF(
                enableSwipe: true,
                swipeHorizontal: true,
                autoSpacing: false,
                pageFling: false,
                onPageChanged: (int page, int total) {})
            .cachedFromUrl(widget.paper.link),
      ),
    );
  }
}