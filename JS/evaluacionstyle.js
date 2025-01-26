

const descriptionInput = document.getElementById("description");
const imageInput = document.getElementById("image");
const imageInput2 = document.getElementById("imageRespuesta");
const respuesta=document.getElementById("respuesta")
const btnmas = document.getElementById("btnmas");
const btnGuardar = document.getElementById("btnGuardar");
const contenido = document.getElementById("contenido");
detailsContainer = document.getElementById("contenido");

// Array para almacenar los objetos_item
let listaevaluacion = [];

function updateObjetos() {
  // Limpiar el contenido actual de contenido
  contenido.innerHTML = "";
  descriptionInput.innerHTML = "";
  respuesta.innerHTML = "";

  // Recorrer el array de objetos_item y agregar los títulos al contenedor
  listaevaluacion.forEach((objeto) => {
     
    // Crear un nuevo div para los detalles
    const objetoDetailsDiv = document.createElement("div");
    objetoDetailsDiv.classList.add("details");
    
    // Añadir la descripción y la imagen dentro de este div
    const descripcionP = document.createElement("p");
    descripcionP.textContent = "Pregunta: " + objeto.descripcion;
    objetoDetailsDiv.appendChild(descripcionP);

    if (objeto.imagen) {
      // Crear el elemento de imagen y agregarlo al div
      const imagenImg = document.createElement("img");
      imagenImg.src = objeto.imagen;
      objetoDetailsDiv.appendChild(imagenImg);
    }

    objetoDetailsDiv.appendChild(document.createElement("hr"));

    // Añadir la respuesta al div
    const resp = document.createElement("p");
    resp.textContent = "Respuesta: " + objeto.respuesta;
    objetoDetailsDiv.appendChild(resp);

    // Verificar si existe la propiedad image2 en el objeto
    if (objeto.image2) {
      // Crear el elemento de imagen2 y agregarlo al div
      const imagen2 = document.createElement("img");
      imagen2.src = objeto.image2;
      objetoDetailsDiv.appendChild(imagen2);
    }

    // Crear el botón de eliminar
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", () => eliminarObjeto(objeto.id));
    objetoDetailsDiv.appendChild(document.createElement("br")); // Insertar un salto de línea
    objetoDetailsDiv.appendChild(eliminarBtn);

    // Agregar el div al contenedor
    detailsContainer.appendChild(objetoDetailsDiv);
  });
}

function eliminarObjeto(id) {
  listaevaluacion = listaevaluacion.filter((objeto) => objeto.id !== id);
  updateObjetos();
}

// Agregar un objeto al array
function agregarobjeto(descripcion, imagen,image2,respuesta) {
  const nuevo_objeto = {
    id: listaevaluacion.length,
    descripcion: descripcion,
    imagen: imagen,
    respuesta:respuesta,
    image2:image2
  };
  listaevaluacion.push(nuevo_objeto);
  console.log("Pregunta Agregada")
}

// Agregar un objeto al array cuando se hace clic en el botón "Agregar"
function agregarArray() {

  const descripcion = descriptionInput.value.trim();
  const contestacion = respuesta.value.trim();
  const imagen = imageInput.files[0];
  const imagen2 = imageInput2.files[0];

  if (descripcion) {
    const reader1 = new FileReader();
    reader1.onloadend = () => {
      const imagenData1 = reader1.result;

      const reader2 = new FileReader();
      reader2.onloadend = () => {
        const imagenData2 = reader2.result;

        agregarobjeto(descripcion, imagenData1, imagenData2, contestacion);

        descriptionInput.value = "";
        respuesta.value=""
        imageInput.value = "";
        imageInput2.value = "";
        updateObjetos();
      };

      if (imagen2) {
        reader2.readAsDataURL(imagen2);
      } else {
        // Si no se ha seleccionado una imagen2, llamar a reader2.onloadend directamente
        reader2.onloadend();
      }
    };

    if (imagen) {
      reader1.readAsDataURL(imagen);
    } else {
      // Si no se ha seleccionado una imagen, llamar a reader1.onloadend directamente
      reader1.onloadend();
    }
  }
}

// Guardar los objetos_item en el almacenamiento local
function saveObjetos() {
  contenido.innerHTML = "";
  listaevaluacion.splice(0, listaevaluacion.length);
  localStorage.setItem("listaevaluacion", JSON.stringify(listaevaluacion));
}

// Obtener los objetos_item guardados en el almacenamiento local y actualizar la lista
function getSavedObjetos() {
  const savedObjetos = localStorage.getItem("listaevaluacion");
  if (savedObjetos) {
    listaevaluacion = JSON.parse(savedObjetos);
    updateObjetos();
  }
}

// Agregar un evento al botón de agregar
btnmas.addEventListener("click", agregarArray);

// Agregar un evento al botón de guardar
btnGuardar.addEventListener("click", saveObjetos);

// Obtener los objetos_item guardados al cargar la página
getSavedObjetos();