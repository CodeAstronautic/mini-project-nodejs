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
punctuation = {

  colon:      ref 'Colon/Semicolon',     [59, 186]
  equal:      ref 'Equal/Plus',          [61, 187]
  comma:      ref 'Comma/Less Than',     [44, 188]
  hyphen:     ref 'Hyphen/Underscore',   [45, 109, 189]
  period:     ref 'Period/Greater Than', [46, 190]
  tilde:      ref 'Tilde/Back Tick',     [96, 192]
  apostrophe: ref 'Apostrophe/Quote',    [39, 222]

  slash: {
    forward:  ref 'Forward Slash/Question Mark', [47, 191]
    backward: ref 'Backward Slash/Pipe', 220
  }

  brace: {
    square: {
       open:  ref 'Open Square/Curly Brace',  219
       close: ref 'Close Square/Curly Brace', 221
    }
  }

}


# Aliases
punctuation.semicolon   = punctuation.colon
punctuation.plus        = punctuation.equal
punctuation.lessthan    = punctuation.comma
punctuation.underscore  = punctuation.hyphen
punctuation.greaterthan = punctuation.period
punctuation.question    = punctuation.slash.forward
punctuation.backtick    = punctuation.tilde
punctuation.pipe        = punctuation.slash.backward
punctuation.quote       = punctuation.apostrophe
punctuation.brace.curly = punctuation.brace.square


# Exports
module.exports = punctuation
