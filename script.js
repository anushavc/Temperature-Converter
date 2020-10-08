
 function convertctof() {
    var celsuis, fahrenheit;
    celsuis = document.getElementById("celsuis");
    if(celsuis.value==='')
    {
        document.getElementById("answer1").innerHTML="value not entered";  
    }
    else{
        fahrenheit=(celsuis.value*(9/5))+32;
        document.getElementById("answer4").innerHTML= "The Fahrenheit value (&#8457) is";
        document.getElementById("answer1").innerHTML= fahrenheit;
    }
  }

  
 function convertftoc() {
    var celsuis, fahrenheit;
    fahrenheit = document.getElementById("Fahrenheit");
    if(fahrenheit.value==='')
    {
        document.getElementById("answer2").innerHTML="value not entered";  
    }
    else{
        celsuis=(fahrenheit.value-32)*(5/9);
        document.getElementById("answer3").innerHTML= "The Celsius value (&#8451) is";
        document.getElementById("answer2").innerHTML= celsuis;
    }
    
   
  }




