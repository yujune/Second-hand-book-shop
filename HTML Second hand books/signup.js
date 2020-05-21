function validateForm(){
       if (document.myForm.firstname.value=="")
    {
        alert("Plese enter your first name.");
        return false;
    }

    if (document.myForm.lastname.value=="")
    {
        alert("Plese enter your last name.");
        return false;
    }

    if (document.myForm.email.value=="")
    {
        alert('Please enter your email.');
        return false;
    } 

    

    if (document.myForm.psw.value=="")
    {
        alert ("Please enter your password.")
        return false;
    }
    else if (document.myForm.pswRepeat.value=="")
    {
        alert ("Please enter the repeat password");
        return false;
    }
    else if (document.myForm.psw.value!=document.myForm.pswRepeat.value)
    {
        alert ("\nPassword did not match: Please try again...");
        return false;
    }
    else if (document.myForm.phonenumber.value=="")
    {
        alert("Plese enter your phone number.");
        return false;
    }
    else if(document.myForm.phonenumber.value.length !=10){
        alert("Plese enter least 10 digits phone number.");
        return false;

    }
     
    return true;
}

function validateForm1(){
    var a="shunshun0922@hotmail.com";
    var b=12345678;
   if (document.myForm1.email.value=="")
    {
        alert('Please enter your email.');
        return false;
    } 

    

    if (document.myForm1.psw.value=="")
    {
        alert ("Please enter your password.")
        return false;
    }
    else if (document.myForm1.email.value!=a)
    {
        alert('Please enter valid email.');
        return false;
    } 

   
    else if (document.myForm1.psw.value!=b)
    {
        alert ("Please enter valid password.")
        return false;
    }




}
function Form2(){
   
    if (document.myForm2.psw1.value=="")
    {
        alert ("Please enter your password.")
        return false;
    }
    else if (document.myForm2.pswrepeat1.value=="")
    {
        alert('Please enter your password.');
        return false;
    } 

   
    else if (document.myForm2.psw1.value!=document.myForm2.pswrepeat1.value)
    {
        alert ("Password did not match: Please try again...")
        return false;
    }

   return true;

}



function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
var UL = document.getElementById("myUL");

UL.style.display = "none";

var searchBox = document.getElementById("myInput");


searchBox.addEventListener("focus",  function(){
   });


searchBox.addEventListener("blur", function(){
    UL.style.display = "none";
});
var UL = document.getElementById("myUL");

UL.style.display = "none";

var searchBox = document.getElementById("myInput");

searchBox.addEventListener("focus",  function(){
    
});
searchBox.addEventListener("blur", function(){
    UL.style.display = "none";
});


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    ul = document.getElementById("myUL");
    filter = input.value.toUpperCase();
       if(filter.trim().length < 1) {
        ul.style.display = "none";
        return false;
    } else {
        ul.style.display = "block";
    }

    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { 
        li[i].style.display = "";
     } else {
        li[i].style.display = "none";
    } 

        }
}




