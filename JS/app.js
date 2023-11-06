/**
OJITOS TURCOS

Ojitos Turcos es un emprendimiento que manejamos con mi novia, en el cual vendemos diversos productos artesanales
que nos ayudan y nos dan buenas energias.
Mi proyecto consistirá en poder hacer llegar a mayor escala todo el trabajo que venimos realizando apasionadamente.

 */

const mensajeBienvenida = () => {
    alert("Bienvenido a Ojitos Turcos");
    menuCompra();
}

const menuCompra = () => {

    let productoID;
    let productoName;
    let productoPrecio;
    let opcion;
    let invalidProd = false;
    let invalidOption = false;

    productoID = prompt(`A continuación, seleccione un producto de la lista para conocer su precio:
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
            comprar(productoName, productoPrecio);
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

    if (invalidProd == true || invalidOption == true) {
        alert("Opción inválida. Redirigiendo al menú");
        mensajeBienvenida();
    }

}

const comprar = (productoName, productoPrecio) => {


    compraTotal += productoPrecio;

    let opcion = prompt(`Estas a punto de comprar ${productoName} por $${productoPrecio}. A continuación seleccione una opción para continuar:
            \n 1- Finalizar compra
            \n 2- Seguir comprando
            \n 3- Volver
            \n 0- Salir`);

    switch (opcion) {
        case "1":
            pagar(compraTotal);
            break;
        case "2":
            menuCompra();
            break;
        case "3":
            compraTotal -= productoPrecio;
            menuCompra();
            break;
        case "0":
            alert("Redirigiendo al menú");
            compraTotal=0;
            mensajeBienvenida();
            break;
        default:
            alert("Opción inválida. Redirigiendo al menú");
            compraTotal=0;
            mensajeBienvenida();
            break;
    }   

}

const pagar = (compraTotal) => {

    let opcion = prompt(`Su compra total es de $${compraTotal}. A continuación seleccione una opción para continuar:
            \n 1- Pagar
            \n 2- Cancelar
            \n 0- Salir`);


    switch (opcion) {
        case "1":
            alert(`Su compra de $${compraTotal} esta siendo procesada. Redirigiendo al formulario de pago.`);
            formularioDePago(compraTotal);
            break;
        case "2":
            alert("Cancelando la compra. Redirigiendo al menú");
            mensajeBienvenida();
            break;
        default:
            alert("Redirigiendo al menú");
            mensajeBienvenida();
            break;
    }   

}

const formularioDePago = (compraTotal) => {
    let nombre;
    let apellido;
    let tel;
    let direc;


    alert("Bienvenido al formulario de pago. Por favor completar de forma correta para evitar inconvenientes.")

    nombre = prompt(`Ingrese su nombre`);
    apellido = prompt(`Ingrese su apellido`);
    tel = prompt(`Ingrese su numero de telefono. Por este medio será notificado el día de la entrega`);
    direc = prompt(`Ingrese su dirección en la cual recibirá su pedido`);

    let confirmar = prompt(`Su pedido de $${compraTotal} a nombre de ${apellido} ${nombre}, con telefono ${tel} espera recibir su pedido en el domicilio ${direc}.
    \n Esta información es correcta?
    \n 1- SI
    \n 2- NO
    \n 0- Salir`);

    switch (opcion) {
        case "1":
            alert(`Su compra de $${compraTotal} fue procesada con éxito.`);
            alert(`Muchas gracias por su compra!. 
            \n Redirigiendo al menú`);
            mensajeBienvenida();
            break;
        case "2":
            alert("Redirigiendo al formulario");
            formularioDePago(compraTotal);
            break;
        default:
            alert("Redirigiendo al menú");
            mensajeBienvenida();
            break;
    }  
}

mensajeBienvenida();