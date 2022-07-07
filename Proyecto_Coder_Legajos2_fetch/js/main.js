const usuario1 = new Usuario(1,  "ACOSTA, Alexis", "50.690.118", "23", "11 6806-1234","FUNCIONAL");
const usuario2 = new Usuario(2,  "ARGAÑARAZ, Laura","50.599.457", "30", "11 2860-1234","FUNCIONAL");
const usuario3 = new Usuario(3,  "FERNANDEZ, Belen", "50.862.398", "25", "11 2862-1234","FUNCIONAL");
const usuario4 = new Usuario(4,  "DOMINGUEZ, Benjamin", "51.052.948", "45", "11 2863-1234","FUNCIONAL");
const usuario5 = new Usuario(5,  "GIMENEZ, Juan", "50.862.266", "22", "11 2864-1234","COSSFIT");
const usuario6 = new Usuario(6, "ISAGUIRRE, Rodrigo ", "51.045.141", "39", "11 2865-1234","CROSSFIT");
const usuario7 = new Usuario(7, "LUCA, Lautaro", "51.061.170", "26", "11 2866-1234","CROSSFIT");
const usuario8 = new Usuario(8,  "MARTINEZ, Alumine", "50.276.520", "28", "11 2867-1234","GAP");
const usuario9 = new Usuario(9,  "OMAR, Agustina","50.862.297", "36","11 2868-1234","GAP");
const usuario10 = new Usuario(10,  "PERAMOS, IanREYRA, Lionel", "30", "11 2869-1234","GAP");
const usuario11 = new Usuario(11,  "RAMOS, Ian", "50.882.821", "25", "11 2850-1234","GAP");
const usuario12 = new Usuario(12,  "SILVEYRA, Magali", "51.061.177", "18", "11 2851-1234","YOGA");
const usuario13 = new Usuario(13,  "SCHNEIDER, Francisco", "50.487.397", "29", "11 2852-1234","YOGA");
const usuario14 = new Usuario(14,  "VILLARREAL, Agustin", "51.053.544","37", "11 2853-1234","YOGA");
const usuario15 = new Usuario(15, "ZARATE, Iara", "50.844.952","28", "11 2857-1234","YOGA");

let usuarios = [];
 
 if(localStorage.getItem("usuarios"))
 {
     usuarios = JSON.parse(localStorage.getItem("usuarios"));
 }
 else
 {
    usuarios = [usuario1,usuario2,usuario3, usuario4, usuario5, usuario6, usuario7, usuario8, usuario9, usuario10, usuario11, usuario12, usuario13, usuario14, usuario15];
 }

console.log("INICIAL:", usuarios);

inicializarAplicacion();


