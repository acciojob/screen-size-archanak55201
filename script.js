//your JS code here. If required.



(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;
    let myHeight = window.innerHeight;
    // your size calculation code here
    document.getElementById("sizeInfo").innerHTML = "Width: "+myWidth + " and Height: " + myHeight;
  };


})();