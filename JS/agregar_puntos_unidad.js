
const titleInput = document.getElementById("title");
const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");
const titlesContainer = document.getElementById("titlesContainer");

// Array para almacenar los objetos_item
let objetos_item = [];

function updateObjetos() {
    // Limpiar el contenido actual de ambos contenedores
    titlesContainer.innerHTML = "";
   
  
    // Recorrer el array de objetos_item y agregarlos a los contenedores
    objetos_item.forEach((objeto) => {
      // Crear un nuevo div para el título/descripción
      const objetoTitleDiv = document.createElement("div");
      objetoTitleDiv.classList.add("title");
      objetoTitleDiv.textContent = objeto.descripcion;
      titlesContainer.appendChild(objetoTitleDiv);
  
    
    });
  }


// Agregar un objeto al array
function agregar_objeto(descripcion) {
  const nuevo_objeto = {
    id: objetos_item.length,
    descripcion: descripcion
  };
  objetos_item.push(nuevo_objeto);
}

// Agregar un objeto al array cuando se hace click en el botón "Agregar"
function addTitle() {
  const descripcion = titleInput.value.trim();

  console.log(descripcion);

  if (descripcion) {
    agregar_objeto(descripcion);
    titleInput.value = "";
    updateObjetos();
  }
}

// Guardar los objetos_item en local storage
function saveObjetos() {
  localStorage.setItem("objetos_item", JSON.stringify(objetos_item));
}

// Obtener los objetos_item guardados en local storage y actualizar la lista
function getSavedObjetos() {
  const savedObjetos = localStorage.getItem("objetos_item");
  if (savedObjetos) {
    objetos_item = JSON.parse(savedObjetos);
    updateObjetos();
  }
}

// Agregar un evento al botón de agregar
addBtn.addEventListener("click", addTitle);

// Agregar un evento al botón de guardar
saveBtn.addEventListener("click", saveObjetos);

// Obtener los objetos_item guardados al cargar la página
getSavedObjetos();

