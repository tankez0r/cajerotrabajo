// let a = 40;
// if (a < 10) {
//     console.log( `${a} es menor que 10`)
// }
// else {
//     console.log(`${a} es mayor que 10`)
// }

// function seguridad(e) {
//     if (e >= 21) {
//         console.log('pasa pibe')
//         if ( e == 21) {
//             console.log('tenes 21, hay trago gratis')
//         }
//         else{
//             console.log('te pasaste de edad, no nay trago gratis')
//         }
//     } else {
//         console.log('no podes pasar pibe, vola de acá, estas muy chico.')
//     }
// }

// let pibe = parseInt(prompt('cuantos años tenes pibe??'))
// console.log(typeof (pibe))

// seguridad(pibe)

// let numero = parseInt(prompt('ingrese numero'))
// if (numero > 0 && numero < 10) {
//     console.log('el numero es de 1 cifra')
// } else if (numero > 10 && numero < 100) {
//     console.log('el numero es de 2 cifras')
// } else if (numero > 100 && numero < 1000) {
//     console.log('el numero es de 3 cifras')
// } else if (numero > 1000 && numero < 10000) {
//     console.log('el numero es de 4 cifras')
// } else if (numero > 10000) {
//     console.log('el numero es de 5 cifras o más')
// } else {
//     console.log('numero invalido')
// }

// color = "azul";

// switch(color) {
// case "amarillo": 
// break;
// case "verde": 
// break;
// case "marron": 
// break;
// case "rojo": 
// break;
// case "azul": 
// console.log(`el color es ${color}`)
// break;
// default : console.log('ingrese un color valido')
// }

// h1 = document.querySelector('#h1');
// p = document.querySelector('#p');

// p.textContent = 'Hola desde js';
// h1.style.color = "red";
// h1.style.backgroundColor= "lightpink";
// h1.style.display= "block";

// h1.style.width= "34%"


/* crear cajero automatico solo con switch, if, prompt 1 consulta 2 deposito 3 retiro 4 transferencia 
variables: contraseña, saldo, opcion, monto. */

let contraseña = 2345
let saldo = 1000000

function Cajero() {
    alert('bienvenida a Banco Nacion, por favor ingrese su contraseña')

    let contraseñaIngresada = parseInt(prompt("ingresar contraseña"))
    //funciones
    function reaccion() {
        let otraAccion = confirm("desea realizar alguna otra opcion?");
        if (otraAccion) {
            Cajero()
        } else {
            alert('Gracias por confiar en nosotros. Adios')
        }
    }
    let tiempo1 = new Date();
    let tiempo2 = new Date();
    let hora = `${tiempo1.getHours()}:${tiempo1.getMinutes()}`;
    let fecha = `${tiempo2.getDate()}/${tiempo2.getMonth()}/${tiempo2.getFullYear()}`


    if (contraseñaIngresada === contraseña) {
        alert('Por favor elija una de las siguientes opciones y escriba solo el numero de la opcion')
        let opcion = parseInt(prompt('opcion 1: Consulte su saldo, opcion 2: Deposite dinero, opcion 3: retirar dinero, 4 realizar transferencia'))
        var extraccion = 0;
        var total = saldo;
        switch (opcion) {

            case 1:
                alert(`Su saldo es USD${saldo}`)
                imprimirTiquet(1);
                reaccion();
                break;
            case 2:
                let deposito = parseInt(prompt('Cuanto quiere depositar?'));
                total = (deposito + saldo)
                alert(`el deposito fue satisfactorio, su saldo actual es ${total}`);
                imprimirTiquet(2);
                reaccion();
                break;
            case 3:
                extraccion = parseInt(prompt('Cuanto quiere depositar?'));
                total = (saldo - extraccion)
                alert(`la extraccion fue satisfactoria, su saldo actual es ${total}`);
                imprimirTiquet(2);
                reaccion();
                break;
            case 4:
                let transferir = parseInt(prompt('A quien desea realizar su transferencia? opcion 1 javier, opcion 2 juan'))
                extraccion = parseInt(prompt('Cuanto quiere transferir?'));
                if (transferir == 1) {
                    alert(`Javier ha recibido $${extraccion}`)
                } else if (transferir == 2) {
                    alert(`Juan ha recibido $${extraccion}`)
                }
                total = (saldo - extraccion)
                alert(`la transaccion fue satisfactoria, su saldo actual es ${total}`);
                imprimirTiquet(3);
                reaccion();
                break;
        }

    } else {
        alert("contraseña incorrecta por favor retire su tarjeta, y vuelva a intentar(presionar f5)")
    }

    function imprimirTiquet(opcion) {
        let opcionElegida = "";
        if (opcion === 1) {
            opcionElegida = "CONSULTA SALDO";
        } else if (opcion === 2) {
            opcionElegida = "DEPOSITO DE DINERO A CAJA DE AHORRO";
        } else if (opcion === 3) {
            opcionElegida = "EXTRACCION DE DINERO CAJA DE AHORRO";
        } else if (opcion === 4) {
            opcionElegida = "TRANSFERENCIA DE DINERO";
        };
        let tiquetwish = confirm('Desea imprimir su tiquet?');
        let horario = document.querySelector('#horario');
        let direccion = document.querySelector('#direccion');
        let operacion = document.querySelector('#operacion');
        let cuenta = document.querySelector('#cuenta');
        let extraccionQuery = document.querySelector('#extraccion');
        let disponible = document.querySelector('#disponible');
        let extraccionesDisponibles = document.querySelector('#extraccionesDisponibles');
        let advertencia = document.querySelector('#advertencia');
        if (tiquetwish == true) {
            horario.innerHTML = `<td>HORA<br>${hora}</td> <td>FECHA<br> ${fecha}</td> <td> CAJERO <br> 01100</td> <td>NRO.TRAN. <br> 4568</td>`;
            direccion.innerHTML = `<td>DIRECCION:</td> <td>San Martin 1270</td>`;
            operacion.innerHTML = `<td>${opcionElegida}</td>`;
            cuenta.innerHTML = `<td>Cuenta numero 1515513000000006516843215 </td>`;
            extraccionQuery.innerHTML = `<td>EXTRACCION</td><td style: Width: 200px></td><td>$${extraccion}</td>`;
            disponible.innerHTML = `<td>DISPONIBLE</td><td style: Width: 200px></td><td>$${total}</td>`;
            extraccionesDisponibles.innerHTML = `<td>EXTRACCIONES RESTANTES</td><td style: Width: 200px></td><td>98</td>`;
            advertencia.innerHTML = `<td></td><td style: Width: 200px>*******GRACIAS POR SU VISITA******* <br> SI NO NECESITA EL TIQUET POR FAVOR DESECHAR EN EL TACHO AL LADO DEL CAJERO PARA PODER SER RECICLADO, CUIDEMOS EL MEDIOAMBIENTE. BANCO DE LA NACION</td><td></td>`;
        }
    }
}
Cajero();

//imprimir tiquet html
// crear tiquet de transferencia.