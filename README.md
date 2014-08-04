![Allgray.js](https://raw.githubusercontent.com/ngroup/allgrayjs/master/img/allgray_header.jpg)
=============

A tiny jQuery plugin for decolorizing elements


## Usage

Include jQuery and the plugin on your page.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="allgray.js"></script>
```
and the CSS stylesheet

```html
<link rel="stylesheet" href="css/allgray.css">
```


Decolorize the element by using jQuery selector and calling the `Allgray()` method.

```html
<script>
$("yourElem").Allgray();
</script>
```

Use the all Selector (“*”) to turn the whole page to grayscale.

```html
<script>
$('*').Allgray();
</script>
```

Call the `Allgray()` method again to turn the element back to the original color.
