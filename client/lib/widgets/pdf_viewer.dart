import 'package:flutter/material.dart';
import 'package:flutter_cached_pdfview/flutter_cached_pdfview.dart';

class PDFViewerFromUrl extends StatefulWidget {
  final String url;
  final String name;

  const PDFViewerFromUrl({Key key, @required this.url,@required this.name}) : super(key: key);

  @override
  _PDFViewerFromUrlState createState() => _PDFViewerFromUrlState();

  
}

class _PDFViewerFromUrlState extends State<PDFViewerFromUrl> {

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text(widget.name),
        ),
        body: PDF(
                enableSwipe: true,
                swipeHorizontal: true,
                autoSpacing: false,
                pageFling: false,
                onPageChanged: (int page, int total) {})
            .cachedFromUrl(widget.url),
      ),
    );
  }
}