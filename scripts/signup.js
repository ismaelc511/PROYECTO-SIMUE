window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0];
    const nombre = document.querySelector('#inputNombre');
    const apellido = document.querySelector('#inputApellido');
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const url = 'https://ctd-todo-api.herokuapp.com/v1'

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
      event.preventDefault()

      //creamos el body de la request
      const payload = {
        firstName: nombre.value,
        lastName: apellido.value,
        email: email.value,
        password: password.value
     }

     //configuramos la request del Fetch
    const settings = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    realizarRegister(settings)

    form.reset()
    })

				/* -------------------------------------------------------------------------- */
				/*																					Funcion 2: Validacion de Campos 																							*/
				/* -------------------------------------------------------------------------- */
				email.addEventListener('input', function(event) {
					campo = event.target;
					valido = document.getElementById('emailOK');

					emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
					//Se muestra un texto a modo de ejemplo, luego va a ser un icono
					if (emailRegex.test(campo.value)) {
							valido.innerText = "";
					} else {
							valido.innerText = "incorrecto";
					}
	});

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        console.log("RealizandoRegistro")
        fetch(`${url}/users`,settings)
            .then(response => {
                console.log("Response cumplido")

                if (!response.ok) {
                    alert("Alguno de los datos es incorrecto.")
                }

                return response.json();
            })
            .then(data => {
                console.log("Promesa cumplida:");
                console.log(data);

                if (data.jwt) {
                    //guardo en LocalStorage el objeto con el token
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));

                    //redireccionamos a la página
                    location.replace('/index.html');
                }

            }).catch(err => console.error(`Error: ${err}`))



    };


});