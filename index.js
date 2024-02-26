// Destructuring arrays
/*1*/const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [luis, ana, andrea] = empleados;

/*2*/const [{ email }, ,] = empleados;

const emailLuis = email;

/*3*/let a = 5;
let b = 3;

[a, b] = [3, 5];

/*4*/const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
// Por qué he tenido que poner today y tomorrow en vez de cualquier cosa?
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

// Spread/Rest
/*5*/function sumEveryOther(...rest) {
    let total = 0;

    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total;
};

/*6*/function addOnlyNums(...rest) {
    let total = 0;

    for (let i = 0; i < rest.length; i++) {
        if (typeof rest[i] === "number") {
            total += rest[i];
        }
    }
    return total;
};

/*7*/function countTheArgs(...rest) {
    return rest.length
};

/*8*/function combineTwoArrays(array1, array2) {
    return [ ...array1, ...array2 ]
};

/*9*/
//necesito un buvle que me recorra cada argumento de la función y me meta los valores y otro que determine si alguno de esos valores está ya en el array nuevo, si lo est;a entonces que no lo meta
function onlyUniques(...rest) {
    let result = []
    for (let i = 0; i < rest.length; i++) {
        if (result.includes(rest[i]) == false) {
            result.push(rest[i])
        }
    }
    return result
}

/*10*/function combineAllArrays(a, ...rest) {
  for (let i = 0; i < rest.length; i++) {
      a.push(rest[i])
  }
  return arraysCombined
}

/*11*/
//.map para que recorra y .reduce para la suma
function sumAndSquare(...rest) {
    return rest.map(num => num**2)
               .reduce((accumulator, currentValue) => accumulator + currentValue)
}