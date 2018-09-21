# ResolutionJS
Sometimes you don't want to show your website to clients in a specified resolutions. **ResolutionJS** is here to make it simpler than you think, It has been written with *JavaScript* and doesn't use any library or etc.

## Add Project
Just link ResolutionJS to your project, For example :
```
<script src="Resolution.js"></script>
```

## Initializing
Then, You should initialize properties, Just copy the code below and paste it after the code above.
```
<script>
  Resolution({
    clientWidth: 500, // The maximum width of the window
    clientHeight: 400, // The maximum height of the window
    backGround: '#555', // The layer `background` property
    textColor: '#F5F5F5', // The layer text `color` property
    zIndex: 10000, // The layer `z-index` property
    fontSize: '1.5rem', // The layer text `font-size` property
    fontFamily: 'TimesNewRoman', // The layer text `font-family` property
    displayMessage: 'Lorem Ipsum' // A text for displaying
  });
</script>
```
Note : All the properties above should be filled; `backGround`, `textColor`, `fontSize`, `fontFamily`, `displayMessage` should be ***String*** and `clientWidth`, `clientHeight` and `zIndex` should be ***Integer***.

## Babel
In minified version that actually is being used for production, It uses **Babel** for ResolutionJS to feel free for using in old browsers.
