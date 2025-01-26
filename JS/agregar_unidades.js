
const titleInput = document.getElementById("title");
const descripcionInput = document.getElementById("descripcion");
const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");
const titlesContainer = document.getElementById("unidadesContainer");

// Array para almacenar los objeto_unidades
let objeto_unidades = [];

function updateobjetos_cursos() {
    // Limpiar el contenido actual de ambos contenedores
    titlesContainer.innerHTML = "";
  
    // Recorrer el array de objeto_unidades y agregarlos a los contenedores
    objeto_unidades.forEach((objeto) => {
      // Crear un nuevo div para el título/descripción
      const objetoTitleDiv = document.createElement("div");
      objetoTitleDiv.classList.add("title");
      objetoTitleDiv.textContent = objeto.titulo;
      titlesContainer.appendChild(objetoTitleDiv);
    });
  }


// Agregar un objeto al array
function agregar_objeto(titulo) {
  const nuevo_objeto = {
    id: objeto_unidades.length,
    titulo: titulo
  };
  objeto_unidades.push(nuevo_objeto);
}

// Agregar un objeto al array cuando se hace click en el botón "Agregar"
function addTitle() {
  const titulo = titleInput.value.trim();

  console.log(titulo);

  if (titulo) {
    agregar_objeto(titulo);
    titleInput.value = "";
    descripcionInput.value = "";
    updateobjetos_cursos();
  }
}

// Guardar los objeto_unidades en local storage
function saveobjetos_cursos() {
  localStorage.setItem("objeto_unidades", JSON.stringify(objeto_unidades));
}

// Obtener los objeto_unidades guardados en local storage y actualizar la lista
function getSavedobjetos_cursos() {
  const savedobjetos_cursos = localStorage.getItem("objeto_unidades");
  if (savedobjetos_cursos) {
    objeto_unidades = JSON.parse(savedobjetos_cursos);
    updateobjetos_cursos();
  }
}

// Agregar un evento al botón de agregar
addBtn.addEventListener("click", addTitle);

// Agregar un evento al botón de guardar
saveBtn.addEventListener("click", saveobjetos_cursos);

// Obtener los objeto_unidades guardados al cargar la página
getSavedobjetos_cursos();

