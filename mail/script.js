var email = ['ottaviog88@gmail.com', 'ottaviogiudici@gmail.com', 'otto8@gmail.com'] 
  
var mail = prompt("Inserisci la tua email:");

var accesso = false;

for (var i = 0; i < email.length; i++) {
  if ( email[i] == mail ){
      accesso = true;
  }
}

if (accesso = true){
    alert( "Puoi entrare") ;
}
  
else{
    alert("Non puoi entrare");
}
 
