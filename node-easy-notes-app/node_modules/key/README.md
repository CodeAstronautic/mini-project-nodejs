#Key

**Key** is a tiny little keycode library for your browser. It makes keybound event assertions super simple.

[![Build Status](https://secure.travis-ci.org/adlawson/key.png)](http://travis-ci.org/adlawson/key)

###Example

Here's how **key** can work together with a DOM query library like [jQuery][jquery] to navigate through a [pseudo] image gallery.

```js
var gallery = new GalleryOfAwesome();

$(window).on('keyup', function(event) {
    if (key.is(key.code.arrow.left, event.which)) {
        gallery.navigateLeft();
    } else if (key.is(key.code.arrow.right, event.which)) {
        gallery.navigateRight();
    } else if (key.is(key.code.special.esc, event.which)) {
        gallery.close();
    }
});
```

You can even assert against a collection of keys, not just a specific key.

```js
var input = $('input[type="text"]');

input.on('keydown', function (event) {
    if (key.is(key.code.punctuation, event.which)) {
        event.preventDefault();
        window.alert('No punctuation allowed!');
    }
});
```

###Usage

```js
var key = window.key; // In browser
var key = require('key'); // Or package manager
```

###Installation

 - `npm install key`
 - `<script src="path/to/key/build/key.min.js"></script>`

###License
The content of this library is released under the **MIT License** by **Andrew Lawson**.<br>
You can find a copy of this license at http://www.opensource.org/licenses/mit


<!-- Meta -->
[jquery]: http://jquery.com
