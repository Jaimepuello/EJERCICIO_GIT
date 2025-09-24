/*
function factorial (numero){
    let resultado = 1
    for (let i=1; i<= numero; i++){
        resultado = resultado * i
    }
    return resultado
}
const fac = factorial(6)
console.log(fac)
*/

// ARROW FUNTION

/*const factorial = (numero) =>{
    let resultado = 1
    for (let i=1; i<= numero; i++){
        resultado = resultado * i
    }
    return resultado
}
const fac = factorial(6)
console.log(fac)
*/


const recetas =([
    {
        nombre: "Pan",
        ingredientes: ["azucar", "harina","agua"],
        precio: 45000,
        peso: 93.5
},
{
    nombre: "Bandeja Paisa",
    ingredientes: ["huevo", "chicharron","arroz","frijoles"],
    precio: 60000,
    peso: 8000.634
}
]);

recetas.forEach(function(receta){
    console.log(`
        Nombre de la receta:    ${receta.nombre},
        Precio:                 ${receta.precio}
        Ingredientes:           ${receta.ingredientes}
        Peso:                   ${receta.peso}
        `)
})