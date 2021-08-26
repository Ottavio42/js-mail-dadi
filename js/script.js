//   EMAIL
  
  
var email = ('ottaviog88@gmail.com', 'ottaviogiudici@gmail.com', 'otto8@gmail.com')
for (var i = 0; i < email.length; i++){
    console.log(email[i]);
}
var mail = prompt("Inserisci la tua email:");

if (mail = email)
    document.getElementById("benvenuto").innerHTML = "Benvenuto: " + mail;

  
else
    document.getElementById("benvenuto").innerHTML = "Non sei autorizzato al gioco dei dadi";

  



function lancio() {
    var num_pc1=Math.round(Math.random()*5+1);
    var num_pc2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_pc1").innerHTML ="Lancio computer " + num_pc1 + ", ";
    document.getElementById("numero_pc2").innerHTML =num_pc2;
    var totale_pc=num_pc1+num_pc2;
    document.getElementById("totale_pc").innerHTML =" , con un totale di " + totale_pc + " punti";
      
          
    var num_1=Math.round(Math.random()*5+1);
    var num_2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_1").innerHTML ="Tu hai ottenuto " + num_1 + ", ";
    document.getElementById("numero_2").innerHTML =num_2;
    var totale1=num_1+num_2;
    document.getElementById("totale1").innerHTML =" e hai totalizzato " + totale1 + " punti";
      
  if(totale1 > totale_pc)
      document.getElementById("vinto").innerHTML = "hai vinto";
  else
      document.getElementById("vinto").innerHTML = "hai perso";
  }