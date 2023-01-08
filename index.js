var acc = document.getElementsByClassName("accordian");
var para = document.getElementsByClassName("accordian-content");
for(var i=0; i<acc.length; i++){
  (function(i) {
    acc[i].addEventListener("click", function(){
      this.classList.toggle("button-pressed");
      para[i].style.display = para[i].style.display === 'block' ? 'none' : 'block';
    });
  })(i);
}