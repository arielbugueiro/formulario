// (function(){
	var formulario = document.getElementById('formulario');
		nombre = formulario.nombre,
		apellido = formulario.apellido,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById('error');
		correcto = document.getElementById('correcto');
		btn = document.getElementById('btn');

	function validarNombre(e){
		if (nombre.value == '' || nombre.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>';
			console.log('Por favor completa el nombre');

			e.preventDefault();
		} 
	}

	function validarApellido(e){
		if (apellido.value == '' || apellido.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el apellido</li>';
			console.log('Por favor completa el apellido');

			e.preventDefault();
		}
	}

	function validarCorreo(e){
		if (correo.value == '' || correo.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el correo</li>';
			console.log('Por favor completa el correo');

			e.preventDefault();
		}
	}

	function validarSexo(e){
		if (sexo.value == '' || sexo.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor selecciona el sexo</li>';
			console.log('Por favor completa el sexo');

			e.preventDefault();
		}
	}

	function validarTerminos(e){
		if (terminos.checked == false){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor acepta los terminos y condiciones</li>';
			console.log('Por favor completa el terminos');

			e.preventDefault();
		}
	}

	// Funcion encargada de validar todos los campos
	function validarForm(e){
		// Reiniciamos el error para que inicie sin mensaje.
		error.innerHTML = '';
		
		validarNombre(e);
		validarApellido(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
		console.log('validado')
		
		if (!(nombre.value == '' || nombre.value == null) && !(apellido.value == '' || apellido.value == null) && !(correo.value == '' || correo.value == null) && !(sexo.value == '' || sexo.value == null) && (terminos.checked == true)){
			correcto.style.display = 'block';
			error.style.display='none'
			e.preventDefault();
			setTimeout(function(){ document.getElementById("formulario").submit();; }, 5000);
			
		}
	}
	
	
	btn.addEventListener('click', validarForm);
	
	// }())