function hideOutput(){
  var output = document.getElementById("output");
  output.style.display = "none";
}

function windowResize() {
  //*** Initialize Variables for Window Dimensions
    var iw = window.innerWidth;
    var ih = window.innerHeight;
    var ow = window.outerWidth;
    var oh = window.outerHeight;
  //*** Set Output Text
    var txt = "<p>Inner: "+iw+" x "+ih+"<br>";
    txt += "Outer: "+ow+" x "+oh+"<br></p>";
  //*** Select Output Element and Display Text
    var output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = txt;
    setTimeout(hideOutput, 10000);
}
