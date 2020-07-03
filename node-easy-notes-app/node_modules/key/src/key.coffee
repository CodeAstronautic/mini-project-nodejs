'use strict'


# Key
#
# @copyright Andrew Lawson 2012
# @see http://github.com/adlawson/key
# @see http://npmjs.org/package/key
# @see http://opensource.org/licenses/mit-license.php MIT License


# Dependencies
{isRef} = require './ref'


# Namespace
key = {}


# Keycodes
key.code =
  special: require './code/special'
  arrow: require './code/arrow'
  punctuation: require './code/punctuation'
  alnum: require './code/alnum'
  brand: require './code/brand'


# Get pressed key information
#
# @param [Number] pressed
# @return [Reference]
key.get = (pressed) =>
  iterator key.code, pressed


# Compare a pressed key against a reference
#
# @param [Reference] ref
# @param [Number] pressed
# @return [Boolean]
key.is = (ref, pressed) =>
  unless isRef ref
    ref = iterator ref, pressed
  if isRef ref
    if isRef pressed
      pressed is ref
    else
      pressed is ref.code or pressed in ref.code
  else
    pressed is ref


# Key code iterator
#
# @param [Object] context
# @param [Number] pressed
# @param [Reference]
iterator = (context, pressed) ->
  for own i, ref of context
    if isRef ref
      return ref if key.is ref, pressed
    else
      out = iterator ref, pressed
      return out if isRef out


# Exports
window.key = key if typeof window isnt 'undefined'
module.exports = key
