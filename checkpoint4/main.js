var changeFont = function(font){
    console.log(font.value)
      document.getElementById("output-text").style.fontFamily = font.value;
  }
function bolden(){
    document.getElementById("output-text").style.fontWeight = 'bold';

}
function italica(){
    document.getElementById("output-text").style.fontStyle = "italic";

}
function under(){
    document.getElementById("output-text").style.textDecoration = "underline";

}
var fontSizeDD = document.getElementById('fontSizeDD');
fontSizeDD.onchange = function () {
    var txt = document.getElementById("output-text")
    txt.style.fontSize = this.value +"px";
};