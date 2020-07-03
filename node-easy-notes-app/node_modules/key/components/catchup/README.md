
Catchup
=======

Catchup is a small set of CSS3 and CSS 2.1 compatibility mixins
for LESS. Use catch-up to polyfill features for older browsers
and prevent code duplication by abstracting away vendor
prefixes.


Using Catchup
-------------

Catchup can be `@import`ed like any of your own LESS files. The
library isn't useful by itself, there are no selectors exposed,
you can just include `css21.less` and/or `css3.less` in your
code to start using the mixins:

    @import 'lib/css21';
    @import 'lib/css3';

Each of the mixins has extensive documentation in the source
code. Have a look at [css21.less][css21] and [css3.less][css3].
Some of the basics can be found below:


### Border-Radius ###

One line border-radius for modern browsers:
    
    .border-radius(10px);
    .border-radius(10px 0 0 0);


### Box-Shadow ###

One line box-shadow for modern browsers:
    
    .box-shadow(0 0 10px #f00);

Multiple shadows supported:
    
    @shadows: 0 0 10px #f00, inset 0 0 10px #0f0;
    .box-shadow(@shadows);


### Box-Sizing ###

One line box-sizing for modern browsers:
    
    .box-sizing(border-box);


### Inline-Block ###

Support `display: inline-block;` in IE6–7:

    .inline-block();


### Opacity ###

One line opacity for modern browsers and IE6+:
    
    .opacity(.5);


### Transition ###

One line transitions for modern browsers:
    
    .transition(all .5s);

Multiple transitions supported:
    
    @transitions: color .5s, font-size 1s;
    .transition(@transitions);


Testing Catchup
---------------

Catchup is tested with HTML files in browser at the moment. In
order to test, you'll need to compile the Catchup test LESS
files into CSS. You'll need to install [Node.js][node],
[npm][npm] and the LESS command line utility:

    npm install -g less

Then you can run the following from within the project directory
to compile the test CSS:

    lessc test/catchup.less > test/catchup.css

Now you can open `test/catchup.html` in browser to make sure
everything works.


License
-------

Copyright 2012, Rowan Manning  
Dual licensed under the [MIT][mit] or [GPL Version 2][gpl2]
licenses.


[css21]: https://github.com/rowanmanning/catchup/blob/master/lib/css21.less
[css3]: https://github.com/rowanmanning/catchup/blob/master/lib/css3.less
[node]: http://nodejs.org/
[npm]: http://npmjs.org/
[gpl2]: http://opensource.org/licenses/gpl-2.0.php
[mit]: http://opensource.org/licenses/mit-license.php
