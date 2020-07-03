'use strict';

var fs = require('fs'),
  path = require('path'),
  _ = require('underscore'),
  request = require('request'),
  yaml = require('yamljs'),
  stringify = require('json-stringify-pretty-compact');

var url = 'https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml';

function writeFiles(content) {
  console.log('Writing files ...');

  content = yaml.parse(content);

  var dist = path.join(__dirname, '..', 'lookup.json');
  var result = {};

  _.each(content, function(item, key) {

    _.each(item.extensions, function(ext) {
      if (!result[ext]) {
        result[ext] = [];
      }
      result[ext].push(key);
    });
  });

  fs.writeFileSync(dist, stringify(result, null, ' '));
  console.log('Done');
}

console.log('Fetch ' + url);

request.get(url, function(err, res, body) {

  console.log('STATUS: ' + res.statusCode);

  if (res.statusCode !== 200) {
    console.log('Can not fetch languages');
    process.exit(1);
  }

  writeFiles(body);
});
