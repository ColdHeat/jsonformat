# jsonformat

Simple chrome extension to format JSON responses. Load the extension and click the "J" icon to format a response.

## Background

For whatever reason Chrome does not provide a prettified JSON viewer like Firefox does. This has led to there being a variety of JSON beautifier plugins in the Chrome Web Store.

These extensions often have the ability to read and modify all the pages I visit. Some extensions have gone further and added [forms of monitoring](https://github.com/teocci/JSONViewer-for-Chrome/issues/8) to their extension. I don't really want to trust these extensions with my browsing data.

Instead of being capable of running on every page this plugin takes a much less invasive approach by just formating JSON when you click on the extension icon.