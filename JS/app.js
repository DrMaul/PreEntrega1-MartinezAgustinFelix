/**
OJITOS TURCOS

Ojitos Turcos es un emprendimiento que manejamos con mi novia, en el cual vendemos diversos productos artesanales
que nos ayudan y nos dan buenas energias.
Mi proyecto consistirá en poder hacer llegar a mayor escala todo el trabajo que venimos realizando apasionadamente.

 */

let compraTotal = 0;


const mensajeBienvenida = () => {
    alert("Bienvenido a Ojitos Turcos");
    compraTotal = 0;
    menuCompra();
}

const menuCompra = () => {

    let productoName;
    let productoPrecio;
    let opcion;
    let invalidProd = false;
    let invalidOption = false;

    let productoID = prompt(`A continuación, seleccione un producto de la lista para conocer su precio. Total en carrito: $${compraTotal}
    \n 1- Pulsera de Ojo Turco
    \n 2- Estatua de Buda
    \n 3- Pack 8 Sahumerios
    \n 4- Cascada de humo
    \n 5- Collar personalizado
    \n 0- Salir`);


    switch (productoID) {
        case "1":
            productoName = "Pulsera de Ojo Turco";
            productoPrecio = 500;
            opcion = prompt(`El precio de ${productoName} es de $${productoPrecio}. A continuación seleccione una opción para continuar:
            \n 1- Agregar al carrito
            \n 2- Volver
            \n 0- Salir`);
            break;
        case "2":
            productoName = "Estatua de Buda";
            productoPrecio = 800;
            opcion = prompt(`El precio de ${productoName} es de $${productoPrecio}. A continuación seleccione una opción para continuar:
            \n 1- Agregar al carrito
            \n 2- Volver
            \n 0- Salir`);
            break;
        case "3":
            productoName = "Pack 8 Sahumerios";
            productoPrecio = 500;
            opcion = prompt(`El precio de ${productoName} es de $${productoPrecio}. A continuación seleccione una opción para continuar:
            \n 1- Agregar al carrito
            \n 2- Volver
            \n 0- Salir`);
            break;
        case "4":
            productoName = "Cascada de humo";
            productoPrecio = 1500;
            opcion = prompt(`El precio de ${productoName} es de $${productoPrecio}. A continuación seleccione una opción para continuar:
            \n 1- Agregar al carrito
            \n 2- Volver
            \n 0- Salir`);
            break;    
        case "5":
            productoName = "Collar personalizado";
            productoPrecio = 300;
            opcion = prompt(`El precio de ${productoName} es de $${productoPrecio}. A continuación seleccione una opción para continuar:
            \n 1- Agregar al carrito
            \n 2- Volver
            \n 0- Salir`);
            break;
        case "0":
            alert("Redirigiendo al menú");
            mensajeBienvenida();
            break;
        default:
            invalidProd = true;
            break;
    }

    
    switch (opcion) {
        case "1":
            agregarAlCarrito(productoName, productoPrecio);
            break;
        case "2":
            menuCompra();
            break;
        case "0":
            alert("Redirigiendo al menú");
            mensajeBienvenida();
            break;
        default:
            invalidOption = true;
            break;
    }   

    if (invalidProd === true || invalidOption === true) {
        alert("Opción inválida. Intente nuevamente");
        menuCompra();
    }

}

const agregarAlCarrito = (productoName, productoPrecio) => {

    
    compraTotal += productoPrecio;

    let opcion = prompt(`Estas a punto de comprar ${productoName} por $${productoPrecio}. Total en carrito: $${compraTotal}
            \n A continuación seleccione una opción para continuar:
            \n 1- Finalizar compra
            \n 2- Seguir comprando
            \n 3- Volver
            \n 0- Salir`);

    switch (opcion) {
        case "1":
            comprar();
            break;
        case "2":
            menuCompra();
            break;
        case "3":
            alert(`Se eliminará ${productoName} del carrito`);
            compraTotal -= productoPrecio;
            menuCompra();
            break;
        case "0":
            alert(`Redirigiendo al menú principal`);
            mensajeBienvenida();
            break;
        default:
            alert("Opción inválida. Intente nuevamente");
            compraTotal -= productoPrecio;
            menuCompra();
            break;
    }   

}

const comprar = () => {

    let opcion = prompt(`Su compra total es de $${compraTotal}. A continuación seleccione una opción para continuar:
            \n 1- Pagar
            \n 2- Cancelar
            \n 0- Salir`);


    switch (opcion) {
        case "1":
            alert(`Su compra de $${compraTotal} esta siendo procesada. Redirigiendo al formulario de pago.`);
            formularioDePago();
            break;
        case "2":
            alert("Cancelando la compra. Se reestablecerá el carrito");
            compraTotal = 0;
            menuCompra();
            break;
        case "0":
            alert(`Redirigiendo al menú principal`);
            mensajeBienvenida();
            break;   
        default:
            alert("Opción invalida. Intente nuevamente");
            comprar();
            break;
    }   

}

const formularioDePago = () => {
    let nombre;
    let apellido;
    let tel;
    let direc;
    let email;
    let intentos = 5;

    let nomValid = false;
    let apValid= false;
    let telValid = false;
    let dirValid = false;
    let emailValid= false;


    alert(`Bienvenido al formulario de pago. Por favor completar de forma correta para evitar inconvenientes.
    Usted cuenta con 5 intentos para completar el formulario correctamente. Al acabarse los intentos se cancelará su compra.  `)

    for (let i=intentos; i>=0; i--) {

        alert(`Intentos restantes: ${i}`);
        if (i === 0) {
            alert("Ya no quedan intentos. Se cancelará la compra y volverá al menú principal");
            mensajeBienvenida();
        }

        if (nomValid === false) {
            nombre = prompt(`Ingrese su nombre`);
            if (validarInfo(nombre)!==true){
                continue;
            }
            else if (!/^[A-Za-z]+$/.test(nombre)) {
                alert("Su información no puede contener números. Por favor, inténtelo de nuevo.");
                continue;
            }
            nomValid = true;
        }

        if (apValid === false) {
            apellido = prompt(`Ingrese su apellido`);
            if (validarInfo(apellido)!==true){
                continue;
            }        
            else if (!/^[A-Za-z]+$/.test(apellido)) {
                alert("Su información no puede contener números. Por favor, inténtelo de nuevo.");
                continue;
            }
            apValid =true;
        }

        if (telValid === false) {
            tel = prompt(`Ingrese su numero de telefono con el formato: "1123456789". Por este medio será notificado el día de la entrega`);
            if (validarInfo(tel)!==true){
                continue;
            }
            else if (isNaN(tel) || tel.length != 10) {
                alert(`El formato ingresado es incorrecto, recuerde utilizar el formato "1123456789" . Por favor, inténtelo de nuevo.`);
                continue;
            }
            telValid =true;
        }

        if (dirValid === false) {
            direc = prompt(`Ingrese su dirección de domicilio en el cual recibirá su pedido. 
            \n Utilizar el formato: "CALLE NUMERO, LOCALIDAD, PROVINCIA"`);
            if (validarInfo(direc)!==true){
                continue;
            }
            else if (!/^[a-zA-Z0-9\s\,\#\-\_\.]+, [a-zA-Z\s]+, [a-zA-Z\s]+$/.test(direc)) {
                alert(`La dirección debe tener el formato "CALLE NUMERO, LOCALIDAD, PROVINCIA". Por favor, verifique y corrija.`);
                continue;
            } 
            dirValid =true;
        }

        if (emailValid === false) {
            email = prompt(`Ingrese su dirección de correo. Allí recibirá su orden de compra, factura y datos del envío.`);
            if (validarInfo(email)!==true){
                continue;
            }
            else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                debugger;
                alert(`La dirección de correo debe tener el formato de email correcto. Por favor, verifique y corrija.`);
                continue;
            }
            emailValid =true;
        }

        break;
        
    }
    

    let confirmar = prompt(`Su pedido de $${compraTotal}: a nombre de ${apellido} ${nombre}, con telefono ${tel} y email: ${email}, espera recibir su pedido en el domicilio ${direc}.
    \n Esta información es correcta?
    \n 1- SI
    \n 2- NO
    \n 0- Salir`);

    switch (confirmar) {
        case "1":
            alert(`Su compra de $${compraTotal} fue procesada con éxito`);
            alert(`Muchas gracias por su compra!. 
            \n Redirigiendo al menú`);
            mensajeBienvenida();
            break;
        case "2":
            alert("Redirigiendo al formulario. Por favor completar de forma correta para evitar inconvenientes");
            formularioDePago();
            break;
        default:
            alert("Compra cancelada. Redirigiendo al menú");
            mensajeBienvenida();
            break;
    }  
}

const validarInfo = (info) => {

    if (info === null) {
        alert("Error al ingresar su información. Por favor, inténtelo de nuevo.");
        return false;
    } 
    else if (info.trim() === "") {
        alert("Su información no puede estar en blanco. Por favor, inténtelo de nuevo.");
        return false;
    }
    return true;

}

mensajeBienvenida();

