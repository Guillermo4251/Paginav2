function validation() {
    let success = true;
    //Validaciones Funcionales (Metodo post en html))
    if (document.getElementById('nombre').value == ("")) {
        success = false;
        alert("Asegurese de llenar los campos correctamente");
    } else if (document.getElementById('nombre').value.length < 4) {
        success = false;
        alert("Asegurese de llenar los campos correctamente");
    } else if (document.getElementById('email').value.indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
        success = false;
        alert("Asegurese de llenar los campos correctamente");
    } else if (document.getElementById('contra').value.length < 4) {
        success = false;
        alert("Asegurese de llenar los campos correctamente");
    } else if (document.getElementById('contra').value == ("")) {
        success = false;
        alert("Asegurese de llenar los campos correctamente");
    }
    return success;
};



//Validaciones Visuales para usuario

$(document).ready(function () {
    //Validacion Email Registro
    $("#email").on("input", function () {
        if ($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            $("#email").removeClass("ok");
            $("#mensaje").html("Ingrese un correo electronico valido !!!!.");

        } else {
            $("#mensaje").html("");
        }
    }

    );
    //validacion Nombre Registro 
    $("#nombre").blur("input", function () {
        if ($("#nombre").val() == "") {
            $("#email").removeClass("ok");
            $("#mensaje1").html("Ingrese un nombre !!!!.");

        } else {
            $("#mensaje1").html("");

        }

    });

    $("#nombre").on("input", function () {
        if ($("#nombre").val().length < 4) {
            $("#email").removeClass("ok");
            $("#mensaje1").html("Ingrese un nombre mayor a 4 caracteres !!!!.");

        } else {
            $("#mensaje1").html("");

        }

    });
    // validacion Contraseña Registro
    $("#contra").on("input", function () {

        if ($("#contra").val() == "") {
            $("#mensaje2").html("Ingrese una contraseña valida  !!!!.");

        } else {
            $("#mensaje2").html("");

        }

    });
    // validacion Contraseña Registro
    $("#contra").on("input", function () {
        if ($("#contra").val().length < 4) {
            $("#mensaje3").html("La contraseña debe tener al menos 4 caracteres");

        } else {
            $("#mensaje3").html("");

        }

    });

});
// Fin de validaciones Registro 

//Incio validaciones Login

function validationLogin() {
    let successLogin = true;
    if (document.getElementById('contraLogin').value == ("")) {
        successLogin = false;
        alert("Ingrese los datos correctos ");

    }



    return successLogin;
};






$(document).ready(function () {
    $("#contraLogin").on("input", function () {
        if ($("#contraLogin").val() == ("")) {
            $("#mensajeLogin").html("Debe ingresar contraseña!!!!");

        } else {
            $("#mensajeLogin").html("");

        }
    })


    $("#nombreLogin").on("input", function () {
        if ($("#nombreLogin").val() == ("")) {
            $("#mensajeLogin").html("Debe ingresar nombre!!!!");

        } else {
            $("#mensajeLogin2").html("");

        }
    })
});

// Inicio validaciones suscribirse 


function validationSuscribirse(event) {

    // if(document.getElementById('nombreSuscribirse').value==("")){
    //     alert("Ingrese los datos correctos ");
    //     event.preventDefault();

    // }else if(document.getElementById('contraSuscribirse').value==("")){
    //     alert("Ingrese los datos correctos ");
    //     event.preventDefault();
    // }
};

$(document).ready(function () {
    $("#pagar").click(function (event) {
        if ($('#nombreSuscribirse').val() == "") {
            alert("Ingrese los datos correctos ");
            event.preventDefault();

        } else if ($('#contraSuscribirse').val() == "") {
            alert("Ingrese los datos correctos ");
            event.preventDefault();
        }
    });



});
    
$(document).ready(function(){
    $("#nombreSuscribirse").on("input", function () {
        if ($("#nombreSuscribirse").val() == ("")) {
            $("#mensajeNombre").html("Debe ingresar nombre!!!!");

        } else {
            $("#mensajeNombre").html("");

        };




        
    })
    $("#contraSuscribirse").on("input", function () {
        if ($("#contraSuscribirse").val() == ("")) {
            $("#mensajeContra").html("Debe ingresar contraseña!!!!");

        } else {
            $("#mensajeContra").html("");

        };




        
    })
    
})
// Iicio validaciones Iniciar session Admin



function validationAdmin() {
    let successAdmin = true;
    if (document.getElementById('nombreAdmin').value == ("")) {
        successAdmin = false;
        alert("Ingrese los datos correctos ");

    }else if(document.getElementById('contraAdmin').value == ("")){
        successAdmin = false;
        alert("Ingrese los datos correctos ");
    }



    return successAdmin;
};

$(document).ready(function(){
    $("#nombreAdmin").on("input", function () {
        if ($("#nombreAdmin").val() == ("")) {
            $("#mensajeAdmin").html("Debe ingresar nombre!!!!");

        } else {
            $("#mensajeAdmin").html("");

        }




        
    });
    $("#contraAdmin").on("input", function () {
        if ($("#contraAdmin").val() == ("")) {
            $("#mensajeAdmin1").html("Debe ingresar una Contraseña!!!!");

        } else {
            $("#mensajeAdmin1").html("");

        }




        
    });

})
// Inicio Validaciones Crud 1


function validationCrudEmp() {
    let successEmp = true;
    if (document.getElementById('nombreCrud').value == ("")) {
        successEmp = false;
        alert("Asegurese de Ingresar un nombre ");

    }else if (document.getElementById('emailCrud').value.indexOf('@', 0) == -1 || $("#emailCrud").val().indexOf('.', 0) == -1) {
        successEmp = false;
        alert("Asegurese de Ingresar un email correcto")
    }else if(document.getElementById('idEmpleado').value ==("")){
        successEmp = false;
        alert("Asegurese de ingresar un id")

    }else if(document.getElementById('numeroEmp').value.length < 8){
        successEmp = false;
        alert("Asegurese de ingresar un numero telefonico")
    }



    return successEmp;
};


$(document).ready(function(){
    $("#nombreCrud").on("input", function () {
        if ($("#nombreCrud").val() == ("")) {
            $("#mensajecrud").html("Debe ingresar nombre!!!!");

        } else {
            $("#mensajecrud").html("");

        }




        
    });
    $("#emailCrud").on("input", function () {
        if ($("#emailCrud").val().indexOf('@', 0) == -1 || $("#emailCrud").val().indexOf('.', 0) == -1) {
            $("#mensajecrud1").html("Debe ingresar un Email correcto!!!!");

        } else {
            $("#mensajecrud1").html("");

        }




        
    });
    $("#numeroEmp").on("input", function () {
        if ($("#numeroEmp").val().length < 8) {
            $("#mensajecrud3").html("Debe ingresar un numero telefonico correcto!!!!");

        } else {
            $("#mensajecrud3").html("");

        }




        
    });
    $("#idEmpleado").on("input", function () {
        if ($("#idEmpleado").val()==("")) {
            $("#mensajecrud2").html("Debe ingresar un id !!!!");

        } else {
            $("#mensajecrud2").html("");

        }




        
    });
})

// inicio validacion formulario plantitas
function validationCrudPlanta() {
    let successPlanta = true;
    if (document.getElementById('precio').value <= 1000  ) {
        successPlanta = false;
        alert("debe ingresar un precio para el producto (Minimo 1.000)");

    }else if(document.getElementById('cantidadProductos').value < 9) {
        successPlanta = false;
        alert("asegurese de ingresar una cantidad de productos mayor a 9")
    }else if(document.getElementById('idProductos').value < 1){
        successPlanta = false;
        alert("Asegurese de ingresar los datos correctos ")

    }else if(document.getElementById('descuento').value < 50){
        successPlanta = false;
        alert("El descuento no puede ser no puede ser mayor a  50%")
    }



    return successPlanta;
};



$(document).ready(function(){
    $("#precio").on("input", function () {
        if ($("#precio").val()<= 1000 ) {
            $("#mensajePlanta1").html("(Minimo 1.000)");

        } else {
            $("#mensajePlanta1").html("");

        }




        
    });
    $("#cantidadProductos").on("input", function () {
        if ($("#cantidadProductos").val()< 9) {
            $("#mensajePlanta2").html(" debe ingresar mas de 9 productos");

        } else {
            $("#mensajePlanta2").html("");

        }




        
    });
    $("#idProductos").on("input", function () {
        if ($("#idProductos").val()< 1) {
            $("#mensajePlanta3").html("el id del producto debe ser mayor a 0");

        } else {
            $("#mensajePlanta3").html("");

        }




        
    });
    $("#descuento").on("input", function () {
        if ($("#descuento").val()  >50) {
            $("#mensajePlanta4").html("Debe ingresar un descuento menor a 50%!!!!");

        } else {
            $("#mensajePlanta4").html("");

        }




        
    });
})
//inicio validacion pago




function validationPago() {
    let successPago = true;
    if (document.getElementById('nombre').value ==("")  ) {
        successPago = false;
        alert("debe ingresar los datos solicitados");

    }else if(document.getElementById('cvv').value ==("") ){
        successPago = false;
        alert("debe ingresar la clave cvv");
    } else if(document.getElementById('numeroTarjeta').value.length < 17){
        successPago = false;
        alert("debe ingresar una tarjeta valida ");
    }
    



    return successPago;
};


$(document).ready(function(){
    $("#nombre").on("input", function () {
        if ($("#nombre").val()==("")) {
            $("#mensajeNombrePago").html(" debe ingresar su nombre");

        } else {
            $("#mensajeNombrePago").html("");

        }




        
    });
    $("#cvv").on("input", function () {
        if ($("#cvv").val()==("")) {
            $("#mensajeCvv").html(" debe ingresar clave cvv");

        } else {
            $("#mensajeCvv").html("");

        }




        
    });
    $("#numeroTarjeta").on("input", function () {
        if ($("#numeroTarjeta").val().length < 17) {
            $("#mensajeTarjeta").html(" debe ingresar una tarjeta correcta (16 numeros)");

        } else {
            $("#mensajeTarjeta").html("");

        }




        
    });

});