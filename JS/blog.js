const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("descripcion");
const imageInput = document.getElementById("imagen");
const comentarioBtn = document.getElementById("comentarioBtn");
const guardarBtn = document.getElementById("guardarBtn");
const contenido = document.getElementById("contenido");
detailsContainer = document.getElementById("contenido");

// Array para almacenar los objetos_item
let listaComentarios = [];

function updateObjetos() {
  // Limpiar el contenido actual de contenido
  contenido.innerHTML = "";
  descriptionInput.value = "";

  // Recorrer el array de objetos_item y agregar los títulos al contenedor
  listaComentarios.forEach((objeto) => {
     
    // Crear un nuevo div para los detalles
    const objetoDetailsDiv = document.createElement("div");
    objetoDetailsDiv.classList.add("details");
    
    // Añadir el tema, descripcion y la imagen dentro de este div
    const temaP = document.createElement("p");
    temaP.textContent = "Tema: " + objeto.title;
    objetoDetailsDiv.appendChild(temaP);

    const descripcionP = document.createElement("p");
    descripcionP.textContent = "Comentario: " + objeto.descripcion;
    objetoDetailsDiv.appendChild(descripcionP);

    const imagenImg = document.createElement("img");
    imagenImg.src = objeto.imagen;
    objetoDetailsDiv.appendChild(imagenImg);

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", () => eliminarObjeto(objeto.id));
    objetoDetailsDiv.appendChild(document.createElement("br")); // Insertar un salto de línea
    objetoDetailsDiv.appendChild(eliminarBtn);
    
    detailsContainer.appendChild(objetoDetailsDiv);
  });
}

function eliminarObjeto(id) {
  listaComentarios = listaComentarios.filter((objeto) => objeto.id !== id);
  updateObjetos();
}

// Agregar un objeto al array
function agregarobjeto(title, descripcion, imagen) {
  const nuevo_objeto = {
    id: listaComentarios.length,
    
    title: title,
    descripcion: descripcion,
    imagen: imagen
  };
  listaComentarios.push(nuevo_objeto);
}

// Agregar un objeto al array cuando se hace clic en el botón "Agregar Comentario"
function agregarArray() {

  const title = titleInput.value.trim();
  const descripcion = descriptionInput.value.trim();
  const imagen = imageInput.files[0];

  if (title && descripcion && imagen) {
    const reader = new FileReader();
    reader.readAsDataURL(imagen);
    reader.onloadend = () => {
      const imagenData = reader.result;
      agregarobjeto(title, descripcion, imagenData);
      
      titleInput.value = "";
      descriptionInput.value = "";
      imageInput.value = "";
      updateObjetos();
    };
  }
}

// Guardar los objetos_item en el almacenamiento local
function saveObjetos() {
  localStorage.setItem("listaComentarios", JSON.stringify(listaComentarios));
}

// Obtener los objetos_item guardados en el almacenamiento local y actualizar la lista
function getSavedObjetos() {
  const savedObjetos = localStorage.getItem("listaComentarios");
  if (savedObjetos) {
    listaComentarios = JSON.parse(savedObjetos);
    updateObjetos();
  }
}

// Agregar un evento al botón de agregar
comentarioBtn.addEventListener("click", agregarArray);

// Agregar un evento al botón de guardar
guardarBtn.addEventListener("click", saveObjetos);

// Obtener los objetos_item guardados al cargar la página
getSavedObjetos();