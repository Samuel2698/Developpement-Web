/* let animales = ["gato", "perro", "T-rex"]; */

//for in pour la position ou le nom de la propriété
//for of pour la valeur ou pour montrer la propriété

/* for (animal in animales) {

    document.write(animal + "<br>")
}

document.write("<br>")

for (animal of animales) {

    document.write(animal + "<br>")
} */

/* donc:
0
1
2

gato
perro
T-rex */

/* for (animal in animales) {

    document.write(animales[animal] + "<br>");
} */
/* 
gato
perro
T-rex */

/* document.write(animales[1]); */
//donc perro

/* animales.edad = 20;

for (animal in animales) {
    
    document.write(animal + "<br>");
}

document.write("<br>");

for(animal of animales) {
    document.write(animal + "<br>");
}

document.write(animales.edad); */
/* 
0
1
2
edad

gato
perro
T-rex
20 */


/* array1 = ["Maria", "Josefa", "Roberta"];
array2 = ["Pedro", "Marcelo", array1];

for (let array in array2) {
    
    if(array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
        }
    }   else {
        document.write(array2[array] + "<br>");
    }
}   */
/* 
Pedro
Marcelo
Maria
Josefa
Roberta */

/* array1 = ["Maria", "Josefa", "Roberta"];
array2 = ["Pedro", "Marcelo", array1, "Josefina"];

for (let array in array2) {

    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
        }

    }   else {
        document.write(array2[array] + "<br>");
}
} */
/* 
Pedro
Marcelo
Maria
Josefa
Roberta
Josefina */

/* array1 = ["Maria", "Josefa", "Roberta"];
array2 = ["Pedro", "Marcelo", array1, "Josefina"];

for (let array in array2) {

    if (array == 2) {
        for (let array of array1) {
            document.write(array + "<br>");
            break;
        }

    }    else {
        document.write(array2[array] + "<br>");
}
} */

/* Pedro
Marcelo
Maria
Josefina */

/* array1 = ["Maria", "Josefa", "Roberta"];
array2 = ["Pedro", "Marcelo", array1, "Josefina"];

for (let array in array2) {

    if (array == 2) {
        for (let array of array1) {
            continue;
        }

    }    else {
        document.write(array2[array] + "<br>");
}
} */

/* Pedro
Marcelo
Josefina */

array1 = ["Maria", "Josefa", "Roberta"];
array2 = ["Pedro", "Marcelo", array1, "Josefina"];

//pour terminer tous les boucles avec break
/* forPara:
for (let array in array2) {

    if (array == 2) {

        for (let array of array1) {
            document.write(array + "<br>");
            break forPara;
        }

    }    else {
        document.write(array2[array] + "<br>");
}
} */

/* Pedro
Marcelo
Maria */

/* forPara: 
for (let array in array2) {
    if (array == 2) {

        for (let array of array1) {
            continue forPara;
        }

    } else {
        document.write(array2[array] + "<br>");
    }

} */
/* 
Pedro
Marcelo
Josefina */

/* forPara:
for (let array in array2) {
    if (array == 2) {

        for (let array of array1) {

            if (array == "Maria") {
                continue;
            }
            document.write(array + "<br>");
        }

    } else {
        document.write(array2[array] + "<br>");
    }
} */
/* 
Pedro
Marcelo
Josefa
Roberta
Josefina */

forPara:
for (let array in array2) {
    if (array == 2) {

        for (let array of array1) {
            if (array == "Maria") {
                continue forPara;
            }
            document.write(array + "<br>");
        }

    } else {
        document.write(array2[array] + "<br>");
    }
}

/* 
Pedro
Marcelo
Josefina */
