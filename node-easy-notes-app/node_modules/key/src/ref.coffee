'use strict'


# Key
#
# @copyright Andrew Lawson 2012
# @see http://github.com/adlawson/key
# @see http://npmjs.org/package/key
# @see http://opensource.org/licenses/mit-license.php MIT License


# Key reference
class Reference


  # Setup the reference
  #
  # @param [String] name
  # @param [Number|Array] code
  constructor: (@name, @code) ->


# Create a new reference
#
# @param [String] name
# @param [Number|Array] code
# @return [Reference]
ref = (name, code) ->
  new Reference name, code


# Is the value a valid reference
#
# @param [mixed] ref
# @return [Boolean]
isRef = (ref) ->
  ref instanceof Reference


# Assert valid reference
#
# @param [mixed] ref
# @param [Reference]
assertRef = (ref) ->
  throw new Error 'Invalid reference' unless isRef ref
  ref


# Exports
module.exports = {
  ref
  isRef
  assertRef
}
