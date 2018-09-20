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
    clientWidth: 500,
    clientHeight: 400,
    backGround: '#555',
    textColor: '#F5F5F5',
    zIndex: 10000,
    fontSize: '1.5rem',
    fontFamily: 'TimesNewRoman',
    displayMessage: 'Lorem Ipsum'
  });
</script>
```
Note : All the properties above should be filled.

## Babel
In minified version that actually is being used for production, It uses **Babel** for ResolutionJS to feel free for using in old browsers.
