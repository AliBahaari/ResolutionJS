# ResolutionJS

***ResolutionJS*** will not show websites in a specified resolution. It just uses *JavaScript*.

## Add Project

Just link SliderJS to your project :
```
<script src="Resolution - 1.0.0.min.js"></script>
```

## Initializing

Then, you should initialize properties, just copy the code below and paste it after the code above.
```
<script>
  Resolution({
    clientWidth: 500,    // The maximum width of the window
    clientHeight: 400,    // The maximum height of the window
    backGround: '#555',    // The layer `background` property
    textColor: '#F5F5F5',    // The layer text `color` property
    zIndex: 10000,    // The layer `z-index` property
    fontSize: '1.5rem',    // The layer text `font-size` property
    fontFamily: 'TimesNewRoman',    // The layer text `font-family` property
    displayMessage: 'Lorem Ipsum'    // A text for displaying
  });
</script>
```
*Note :* All the properties above should be filled; `backGround`, `textColor`, `fontSize`, `fontFamily`, `displayMessage` should be ***String***; `clientWidth`, `clientHeight`, `zIndex` should be ***Integer***.

## Minified

In the minified version, it uses Babel to feel free for using in old version browsers.
