# jsonformat

Simple chrome extension to format JSON responses. Load the extension and click the "J" icon to format a response.

## Installation

This plugin hasn't been uploaded to the Chrome Web Store yet. Instead you can add this extension to Chrome by:

1. Downloading [the code](https://github.com/ColdHeat/jsonformat/archive/refs/heads/master.zip) and unzipping
2. Browse to [chrome://extensions](chrome://extensions) in Chrome
3. Click on the "Load Unpacked" button in the top left
4. Browse to the jsonformat folder that you just unzipped and select it
5. The extension should be installed! I recommend pinning it and allowing it in incognito

## Background

For whatever reason Chrome does not provide a prettified JSON viewer like Firefox does. This has led to there being a variety of JSON beautifier plugins in the Chrome Web Store.

These extensions often have the ability to read and modify all the pages I visit. Some extensions have gone further and added [forms of monitoring](https://github.com/teocci/JSONViewer-for-Chrome/issues/8) to their extension. I don't really want to trust these extensions with my browsing data.

Instead of being capable of running on every page this plugin takes a much less invasive approach by just formating JSON when you click on the extension icon.