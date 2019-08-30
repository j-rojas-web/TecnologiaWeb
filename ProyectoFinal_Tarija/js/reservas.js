
 var titulo1 = document.getElementById("i1");
 var titulo2 = document.getElementById("i2");
 var titulo3 = document.getElementById("i3");
 var contenido = document.getElementById("contenido");
 var itinerario = document.getElementById("itineario");
 var pronostico = document.getElementById("pronostico");

 titulo1.style.background = "radial-gradient(#980a19, #6b0000)";
 var miElto = document.getElementById("btn1");
  miElto.className = "btnActive";

  titulo2.style.background = "white";
 var miElto = document.getElementById("btn2");
  miElto.className = "btn";

  titulo3.style.background = "white";
  var miElto = document.getElementById("btn3");
   miElto.className = "btn";


    var requestURL = "https://j-rojas-web.github.io/TecnologiaWeb/Json/tarija.json";
    var request = new XMLHttpRequest();
 
    request.open('GET', requestURL);
    
    request.responseType = 'text';
    
    request.send();
 
    request.onload = function() {
     var datosText = request.response;
 
     var archivo = JSON.parse(datosText);
 
     populatetitulo(archivo);
     showContenido(archivo);
    
   };
 
 
   function populatetitulo(jsonObj) {
     
 
 
     var conten = document.createElement("p");
 
     conten.textContent = jsonObj["detalle"];
 
     contenido.appendChild(conten);
 
 
  
   }
   function showContenido(jsonObj){
      
     var lugar = jsonObj['lugares'];
 
     for(var i =0 ; i < 1; i++){
 
 
       
 
         var tittle = lugar[i].tittle;
         var details = lugar[i].details;
         for(var j =0 ; j<tittle.length;j++){
             var obj1 = document.createElement('article');    
             obj1.style.display ="flex";
             obj1.className = "obj";  
             var dato1 = document.createElement('h3');
             dato1.className ="dato";
             var cont1 = document.createElement('p');
             cont1.className ="cont";
             dato1.textContent = tittle[j];
             cont1.textContent = details[j];
           
             obj1.appendChild(dato1);
             obj1.appendChild(cont1);
             itinerario.appendChild(obj1);
         }
         
     }
      
 
 
   }
 
 
 
 
 
 var titulo1 = document.getElementById("i1");
 var p = document.createElement("h3");
 var cont = document.createTextNode("detalle");
 p.appendChild(cont);
 
 
 titulo1.style.textAlign ="center";
 titulo2.style.textAlign ="center";
 titulo3.style.textAlign ="center";
 

function op1(){


  limpiar();
  var titulo1 = document.getElementById("i1");
  var titulo2 = document.getElementById("i2");
  var titulo3 = document.getElementById("i3");
  var contenido = document.getElementById("contenido");
  var itinerario = document.getElementById("itineario");
  var pronostico = document.getElementById("pronostico");

  titulo1.style.background = "radial-gradient(#980a19, #6b0000)";
  var miElto = document.getElementById("btn1");
   miElto.className = "btnActive";

   titulo2.style.background = "white";
  var miElto = document.getElementById("btn2");
   miElto.className = "btn";

   titulo3.style.background = "white";
   var miElto = document.getElementById("btn3");
    miElto.className = "btn";


     var requestURL = "https://j-rojas-web.github.io/TecnologiaWeb/Json/tarija.json";
     var request = new XMLHttpRequest();
  
     request.open('GET', requestURL);
     
     request.responseType = 'text';
     
     request.send();
  
     request.onload = function() {
      var datosText = request.response;
  
      var archivo = JSON.parse(datosText);
  
      populatetitulo(archivo);
      showContenido(archivo);
     
    };
  
  
    function populatetitulo(jsonObj) {
      
  
  
      var conten = document.createElement("p");
  
      conten.textContent = jsonObj["detalle"];
  
      contenido.appendChild(conten);
  
  
   
    }
    function showContenido(jsonObj){
       
      var lugar = jsonObj['lugares'];
  
      for(var i =0 ; i < 1; i++){
  
  
        
  
          var tittle = lugar[i].tittle;
          var details = lugar[i].details;
          for(var j =0 ; j<tittle.length;j++){
              var obj1 = document.createElement('article');    
              obj1.style.display ="flex";
              obj1.className = "obj";  
              var dato1 = document.createElement('h3');
              dato1.className ="dato";
              var cont1 = document.createElement('p');
              cont1.className ="cont";
              dato1.textContent = tittle[j];
              cont1.textContent = details[j];
            
              obj1.appendChild(dato1);
              obj1.appendChild(cont1);
              itinerario.appendChild(obj1);
          }
          
      }
       
  
  
    }
  
  
  
  
  
  var titulo1 = document.getElementById("i1");
  var p = document.createElement("h3");
  var cont = document.createTextNode("detalle");
  p.appendChild(cont);
  
  
  titulo1.style.textAlign ="center";
  titulo2.style.textAlign ="center";
  titulo3.style.textAlign ="center";
  
}
function op2(){  //-----------------------------------------------------------------------------

 limpiar();
   


  var titulo1 = document.getElementById("i1");
  var titulo2 = document.getElementById("i2");
  var titulo3 = document.getElementById("i3");
  var contenido = document.getElementById("contenido");
  var itinerario = document.getElementById("itineario");
  var pronostico = document.getElementById("pronostico");


  titulo2.style.background = "radial-gradient(#980a19, #6b0000)";
  var miElto = document.getElementById("btn2");
   miElto.className = "btnActive";

   titulo1.style.background = "white";
  var miElto = document.getElementById("btn1");
   miElto.className = "btn";

   titulo3.style.background = "white";
   var miElto = document.getElementById("btn3");
    miElto.className = "btn";


     var requestURL = "https://j-rojas-web.github.io/TecnologiaWeb/Json/tarija.json";
     var request = new XMLHttpRequest();
  
     request.open('GET', requestURL);
     
     request.responseType = 'text';
     
     request.send();
  
     request.onload = function() {
      var datosText = request.response;
  
      var archivo = JSON.parse(datosText);
  
      populatetitulo(archivo);
      showContenido(archivo);
     
    };
  
  
    function populatetitulo(jsonObj) {
      
  
  
      var conten = document.createElement("p");
  
      conten.textContent = jsonObj["detalle"];
  
      contenido.appendChild(conten);
  
  
   
    }
    function showContenido(jsonObj){
       
      var lugar = jsonObj['lugares'];
  
      for(var i =1 ; i < 2; i++){
  
  
        
  
          var tittle = lugar[i].tittle;
          var details = lugar[i].details;
          for(var j =0 ; j<tittle.length;j++){
              var obj1 = document.createElement('article');    
              obj1.style.display ="flex";
              obj1.className = "obj";  
              var dato1 = document.createElement('h3');
              dato1.className ="dato";
              var cont1 = document.createElement('p');
              cont1.className ="cont";
              dato1.textContent = tittle[j];
              cont1.textContent = details[j];
            
              obj1.appendChild(dato1);
              obj1.appendChild(cont1);
              itinerario.appendChild(obj1);
          }
          
      }
       
  
  
    }
  
  
  
  
  
  var titulo1 = document.getElementById("i1");
  var p = document.createElement("h3");
  var cont = document.createTextNode("detalle");
  p.appendChild(cont);
  
  
  titulo1.style.textAlign ="center";
  titulo2.style.textAlign ="center";
  titulo3.style.textAlign ="center";
  
    
}
function limpiar(){

  var d = document.getElementById("itineario");
  while (d.hasChildNodes())
  d.removeChild(d.firstChild);
  var d = document.getElementById("contenido");
  while (d.hasChildNodes())
  d.removeChild(d.firstChild);
}


function op3(){  //-----------------------------------------------------------------------------------------
 limpiar();
  var titulo1 = document.getElementById("i1");
  var titulo2 = document.getElementById("i2");
  var titulo3 = document.getElementById("i3");
  var contenido = document.getElementById("contenido");
  var itinerario = document.getElementById("itineario");
  var pronostico = document.getElementById("pronostico");

  titulo3.style.background = "radial-gradient(#980a19, #6b0000)";
  var miElto = document.getElementById("btn3");
   miElto.className = "btnActive";

   titulo1.style.background = "white";
  var miElto = document.getElementById("btn1");
   miElto.className = "btn";

   titulo2.style.background = "white";
   var miElto = document.getElementById("btn2");
    miElto.className = "btn";

     var requestURL = "https://j-rojas-web.github.io/TecnologiaWeb/Json/tarija.json";
     var request = new XMLHttpRequest();
  
     request.open('GET', requestURL);
     
     request.responseType = 'text';
     
     request.send();
  
     request.onload = function() {
      var datosText = request.response;
  
      var archivo = JSON.parse(datosText);
  
      populatetitulo(archivo);
      showContenido(archivo);
     
    };
  
  
    function populatetitulo(jsonObj) {
      
  
  
      var conten = document.createElement("p");
  
      conten.textContent = jsonObj["detalle"];
  
      contenido.appendChild(conten);
  
  
   
    }
    function showContenido(jsonObj){
       
      var lugar = jsonObj['lugares'];
  
      for(var i =2 ; i < 3; i++){
  
  
        
  
          var tittle = lugar[i].tittle;
          var details = lugar[i].details;
          for(var j =0 ; j<tittle.length;j++){
              var obj1 = document.createElement('article');
              obj1.style.display ="flex";
              obj1.className = "obj";  
              var dato1 = document.createElement('h3');
              dato1.className ="dato";
              var cont1 = document.createElement('p');
              cont1.className ="cont";
              dato1.textContent = tittle[j];
              cont1.textContent = details[j];
            
              obj1.appendChild(dato1);
              obj1.appendChild(cont1);
              itinerario.appendChild(obj1);
          }
          
      }
       
  
  
    }
  
  
  
  
  
  var titulo1 = document.getElementById("i1");
  var p = document.createElement("h3");
  var cont = document.createTextNode("detalle");
  p.appendChild(cont);
  
  
 
  
}




