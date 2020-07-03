/*
 * Helper code for portability and global issues.
 */
var fs = require('fs');
var path = require('path');
var sys = require('sys');
var version = process.version.match(/^v(\d+)\.(\d+)\.(\d+)/).slice(1);

var cjson = require('cjson');

/*
 * Directory separator for absolute paths.
 * Looks like path.sep is available for node 0.8 path module.
 */
exports.sep = '/';

if('undefined' === require('path').sep) {
  if(!!process.platform.match(/^win/)) {
    this.sep = '\\';
  }
}

exports.isArray = function(input){
  return typeof(input) === 'object' && (input instanceof Array);
};

/*
 * node <= 0.6: path.existsSync
 * node > 0.6: fs.existsSync 
 */
exports.existsSync = fs.existsSync || path.existsSync;

exports.cpFile = function (src, dst, cb) {
  var copy = function(err) {
    var is;
    var os;

    if (!err) {
      return cb(new Error("File " + dst + " exists."));
    }

    fs.stat(src, function (err) {
      if (err) {
        return cb(err);
      }
      is = fs.createReadStream(src);
      os = fs.createWriteStream(dst);
      sys.pump(is, os, cb);
    });
  }

  fs.stat(dst, copy);
};

exports.cpFileSync = function (src, dst) {
  var data = fs.readFileSync(src, 'utf8');

  if(!data) {
    return false;
  }

  fs.writeFileSync(dst, data, 'utf8');
  return data;
};

/*
 * If no encoding read methods return buffer.
 * Don't want that.
 */
exports.fRead = function(file, encoding, callback) {
  if(typeof encoding === 'function') {
    fs.readFile(file, 'utf8', encoding);
  } else {
    fs.readFile(file, encoding || 'utf8', callback);
  }
}

exports.fReadSync = function(file, encoding) {
  try {
    return fs.readFileSync(file, encoding || 'utf8');
  } catch(e) {
    return null;
  }
}

exports.fWrite = function(file, data, encoding, callback) {
  fs.writeFile(file, data, encoding, callback);
}

/*
 * WATCH! If ok return false, on error return message
 */
exports.fWriteSync = function(file, data, encoding) {
  try {
    fs.writeFileSync(file, data, encoding);
    return false;
  } catch(e) {
    return e;
  }
}

exports.jRead = function(file, encoding, callback) {
  var finish = function(err, data) {
    var out = cjson.parse(data);

    if(typeof encoding === 'function') {
      encoding(err, out);
    } else {
      callback(err, out);
    }
  }

  try {
    fs.readFile(file, encoding, finish);
  } catch(e) {
    callback(e);
  }
}

exports.jReadSync = function(file) {
  try {
    return cjson.parse(fs.readFileSync(file, 'utf8'));
  } catch(e) {
    return null;
  }
}

exports.jWrite = function(file, data, encoding, callback) {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), encoding, callback);
  } catch(e) {
    callback(e);
  }
}

/*
 * WATCH! If ok return false, on error return message
 */
exports.jWriteSync = function(file, data, encoding) {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), encoding);
    return false;
  } catch(e) {
    return e;
  }
}

