function Resolution(objectVar) {

  function CreateDOM() {

    var responsiveLayer = document.createElement('div');
    var displayMessage = document.createElement('p');
    displayMessage.innerHTML = objectVar.displayMessage;
    responsiveLayer.className = 'resolutionJS';
    responsiveLayer.style.cssText = `
      width: 100%;
      height: 100%;
      background: ${objectVar.backGround};
      color: ${objectVar.textColor};
      z-index: ${objectVar.zIndex};
      position: fixed;
      font-size: ${objectVar.fontSize};
      font-family: ${objectVar.fontFamily};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
    `;
    responsiveLayer.appendChild(displayMessage);
    document.body.appendChild(responsiveLayer);
  }

  var clientWidth = objectVar.clientWidth;
  var clientHeight = objectVar.clientHeight;

  var defaultWindowWidth = window.innerWidth;
  var defaultWindowHeight = window.innerHeight;

  if ((defaultWindowWidth < clientWidth) || (defaultWindowHeight < clientHeight)) {
    CreateDOM();
  }

  window.onresize = function() {
    
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    if ((windowWidth < clientWidth) || (windowHeight < clientHeight)) {
      if (!document.body.contains(document.querySelector('.resolutionJS'))) {
        CreateDOM();
      }
    }

    if ((windowWidth > clientWidth) && (windowHeight > clientHeight)) {
      if (document.body.contains(document.querySelector('.resolutionJS'))) {
        document.querySelector('.resolutionJS').remove();
      }
    }
  }
}