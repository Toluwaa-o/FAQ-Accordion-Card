var acc = document.getElementsByClassName("accordian");
var para = document.getElementsByClassName("accordian-content");
var bold = document.querySelectorAll("h2");
for(var i=0; i<acc.length; i++){
  (function(i) {
    acc[i].addEventListener("click", function(){
      this.classList.toggle("button-pressed");
      para[i].style.display = para[i].style.display === 'block' ? 'none' : 'block';
      bold[i].style.fontWeight = bold[i].style.fontWeight === '700' ? '400' : '700';
    });
  })(i);
}
