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
special = {

  backspace: ref 'Backspace',   8
  tab:       ref 'Tab',         9
  enter:     ref 'Enter',      13
  shift:     ref 'Shift',      16
  ctrl:      ref 'Ctrl',       17
  alt:       ref 'Alt',        18
  caps:      ref 'Caps Lock',  20
  esc:       ref 'Escape',     27
  space:     ref 'Space',      32
  num:       ref 'Num Lock',  144

}


# Exports
module.exports = special
