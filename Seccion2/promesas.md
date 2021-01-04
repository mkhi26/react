# Promesas en Javascript

		const aplicarDescuento = new Promise((resolve, reject){
			setTimeOut(
				let descuento = false;
				if(descuento){
					resolve('¡Descuento aplicado!');
				}else{
					reject('No se pudo aplicar el  descuento');
				}
			, 3000);	
		});

# Promesas con AJAX:

		const descargarUsuario = cantidad => new Promise((resolve, reject) => {
			// Pasar la cantidad  a la api
			const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

			// Llamado AJAX

			const xhr = new XMLtpRequest();

			// Abrir la conexión

			xhr.open('GET', api, true);

			on load

			xhr.onload = () => {
				if(xhr.status == 200) {
					resolve(JSN.parse(xhr.responseText).results);
				}else{
					reject(Error(xhr.statusText));
				}
			}
			//send
			xhr.send();
		});

		console.log(descargrUsuario(20))
