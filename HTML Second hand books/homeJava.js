var z = 0;
var myIndex = 1;

function carousel(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  if (n > x.length) {myIndex = 1} 
  if (n <1){myIndex = x.length}
  
  	for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active","");
	}    
  x[myIndex-1].style.display = "block"; 
  dots[myIndex -1].className += " active"; 
}

function autoslide() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1} 
  if (myIndex <1){myIndex = x.length}
  
  	for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active","");
	}    
  x[myIndex-1].style.display = "block"; 
  dots[myIndex -1].className += " active"; 
  setTimeout(autoslide, 5000); // Change image every 2 seconds
}


function currentSlide(n) {

  carousel(myIndex = n);
  
  
}



function bigImg(x) {
	var y = document.getElementById("demo");

  x.style.height = "350px";
  x.style.width = "250px";
  normalDImg(y);

}

function normalImg(x) {
	var y = document.getElementById("demo")
  x.style.height = "250px";
  x.style.width = "200px";
  bigDImg(y);
 
}


function normalDImg(y) {

  y.style.height = "250px";
  y.style.width = "200px";
  
}

function bigDImg(y) {

  y.style.height = "350px";
  y.style.width = "250px";

}

function plusIndex(n){
	myIndex = myIndex +n;
	carousel(myIndex);

}


