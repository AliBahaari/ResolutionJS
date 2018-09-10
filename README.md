# ResolutionJS
Sometimes you don't want to show your website to clients in a specified resolutions. **ResolutionJS** is here to make it simpler than you think.

# Add Project
Just link **ResolutionJS** to your project, For example :
```
<script src="Resolution.js"></script>
```
# Initializing
Then, You should initialize properties, Just copy the code below and paste it after the code above.
```
Resolution({
  clientWidth: 500,
  clientHeight: 400,
  backGround: '#555',
  textColor: '#F5F5F5',
  zIndex: 10000,
  fontSize: '1.5rem',
  fontFamily: 'IRANSans',
  displayMessage: 'Lorem Ipsum'
});
```
Note : All the properties above should be filled.

# Babel
In minified version that actually uses for production, I have used **Babel** for **ResolutionJS** to feel free for using it in old browsers.

Hope to enjoy it ...
