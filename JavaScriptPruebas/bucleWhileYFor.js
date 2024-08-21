for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
}
console.log('Variable suma: ', suma);

while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };

//En ARRAYS

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// WHILE
var arr = [];
while (arr.length < 5) {
    arr.push('Camilo');
}
console.log(arr);