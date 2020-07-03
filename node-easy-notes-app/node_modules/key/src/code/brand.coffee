'use strict'


# Key
#
# @copyright Andrew Lawson 2012
# @see http://github.com/adlawson/key
# @see http://npmjs.org/package/key
# @see http://opensource.org/licenses/mit-license.php MIT License


# Dependencies
{ref} = require '../ref'


# Definitions
brand = {

  apple: ref 'Apple &#8984;', 224

  windows: {
    start: ref 'Windows start', [91, 92]
    menu:  ref 'Windows menu', 93
  }

}


# Exports
module.exports = brand
