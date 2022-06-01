


const edad = prompt("Indique cuál  es su  edad: "); //Pregunte al usuario su edad. Recuerde: ¡Guarde este valor en una variable
alert("Su edad representa " + (edad * 365) + " días"); //muestre la respuesta al usuario.Calculá cuántos días representa.


// ¿Cuántos snacks vas a comer por el resto de tu vida? ¡Averígüelo!

let mi_edad = prompt('Indique su edad ') // Almacena tu edad en una Variable.
let edad_maxima = prompt('Indique edad máxima de vida')// 2. Guarda tu edad máxima en otra Variable.
let resto_vida = edad_maxima - mi_edad
alert('el resto de su vida es de '+ ''+ resto_vida +' '+ ' años.')


let snack_favorito = prompt('Ingresa el nombre de tu snack favorito: ');// Declara una Variable con el nombre de tu snack favorito.
let snacks_diarios = prompt('ingresa cantidad de snack que comes a diario') //Estima cuántos snacks comerás por día y guardalo como un número en una Variable.
let snack_total = snacks_diarios * (resto_vida * 365) //cuantos dias me quedad por vivir lo multiplico por los snack que como al dia
alert('Necesitarás'+' '  + snack_total + ' '+ snack_favorito + ' '+ ' tu snacks  favorito para que te alcancen hasta los' + ' ' + edad_maxima + ' '+ 'años de vida.'); // Muestre el resultado en un alert: "Necesitarás NN snacks para que te
// alcancen hasta los XX años."

const snack_valor = prompt('¿Cuál es el precio por unidad de tu snack favorito?:' + '');
alert('El total que gastarás en: '+ ' ' + snack_favorito + ' '+' es de:' + ' '+ (snack_valor * snack_total) + ' ' + 'pesos.') // Agregale un precio por unidad y descubrí cuánto vas a gastar en snacks el resto de tu vida.

