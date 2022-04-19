/* let numero = 0; */

/**
 * if (numero < 10) {

    numero++;
    numero++;
    numero++;
    
    document.write(numero);
}
**ça fait 3, car numero++ trois fois
**/

/**
 * while (numero < 6) {

    numero++;

    document.write(numero);
}
** ça fait 123456 */

/* while (numero <= 6) {
    
    numero++;

    document.write(numero + "<br>")
}  */
//ça va donner:
1
2
3
4
5
6
7 // 


//on peur le faire à l'inverse:

/* do {
    
    document.write(numero + "<br>");

    numero++;
}

while (numero <= 6);
 */
// donc
0
1
2
3
4
5
6//


/* while(numero < 1000) {
    numero++;
    document.write(numero);
} */ //ça va arriver jusqu'à 1000

/* while(numero < 1000) {
    if (numero !== 10) {
        numero++;
        document.write(numero);
    }
} */

while(numero < 1000) {
    numero++;
    document.write(numero);
    if (numero == 10) {
        break;
    }
}
document.write("fin")  
//donc 12345678910fin grâce à break
