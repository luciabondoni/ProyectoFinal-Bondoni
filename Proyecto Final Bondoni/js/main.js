function guardarAlumno() {
  // Recupera los datos del formulario
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let genero = document.getElementById("genero").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let curso = document.getElementById("curso").value;

  //
  let alumno = {
    "nombre": nombre,
    "apellido": apellido,
    "edad": edad,
    "genero": genero,
    "direccion": direccion,
    "telefono": telefono,
    "email": email,
    "curso": curso
  };

  // Convierte el objeto JSON a una cadena
  let alumnoStr = JSON.stringify(alumno);

  // Almacena la cadena en localStorage
  localStorage.setItem("alumno-" + Date.now(), alumnoStr);

// Envía los datos al servidor utilizando AJAX
$.ajax({
  type: "POST", 
  url: "guardar-alumno.php", 
  data: {alumno: alumnoStr}, 
  success: function(data) {
    // Si la respuesta del servidor es satisfactoria, se ejecuta esta función
    console.log(data); // Imprime la respuesta del servidor en la consola
    // Borra los datos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("genero").value = "masculino";
    document.getElementById("direccion").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
    document.getElementById("curso").value = "";
  },
  error: function(jqXHR, textStatus, errorThrown) {
    // Si se produce un error al enviar los datos al servidor, se ejecuta esta función
    console.error(textStatus, errorThrown); // Imprime el error en la consola
  }
});
}


