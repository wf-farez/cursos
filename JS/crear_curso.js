
const titleInput = document.getElementById("titulo");
const descripcionInput = document.getElementById("descripcion");
const categoriaInput = document.getElementById("categoria");
const duracionInput = document.getElementById("duracion");
const precioInput = document.getElementById("precio");
const imagenInput = document.getElementById("imagen");
const aprenderInput = document.getElementById("aprender");
const requisitoInput = document.getElementById("requisito");

const saveBtn = document.getElementById("saveBtn");
// Array para almacenar los objeto_cursos
let objeto_cursos = [];

// Agregar un objeto al array

/*
function agregar_objeto(titulo,descripcion,categoria,duracion, precio, imagen,aprender,requisito) {
    
  const nuevo_objeto = {
    id: objeto_cursos.length,
    titulo: titulo,
    descripcion: descripcion,
    categoria: categoria,
    duracion: duracion,
    precio: precio,
    imagen:imagen,
    aprender:aprender,
    requisito: requisito
  };
  objeto_cursos.push(nuevo_objeto);
}
*/

function agregar_objeto(titulo) {
    
    const nuevo_objeto = {
      id: objeto_cursos.length,
      titulo: titulo,
    };
    objeto_cursos.push(nuevo_objeto);
  }
  

/*
// Agregar un objeto al array cuando se hace click en el botón "Agregar"
function addTitle() {

  const titulo = titleInput.value.trim();
  const descripcion = descripcionInput.value.trim();
  const categoria=categoriaInput.value.trim();
  const duracion=duracionInput.value.trim(); 
  const precio=precioInput.value.trim();
  const imagen=imagenInput.value.trim(); 
  const aprender=aprenderInput.value.trim(); 
  const requisito=requisitoInput.value.trim(); 

  if (titulo,descripcion,categoria,duracion, precio, imagen,aprender,requisito) {
    agregar_objeto(titulo,descripcion,categoria,duracion, precio, imagen,aprender,requisito);
    titleInput.value = "";
    descripcionInput.value = "";
    categoriaInput.value = "";
    duracionInput.value = "";
    precioInput.value = "";
    imagenInput.value = "";
    aprenderInput.value = "";
    requisitoInput.value = "";
  }

  saveobjetos_cursos()
}
*/


// Agregar un objeto al array cuando se hace click en el botón "Agregar"
function addTitle() {
    const titulo = titleInput.value.trim();
    if (titulo) {
      agregar_objeto(titulo);
      titleInput.value = "";

      saveobjetos_cursos()
    }
  }

// Guardar los objeto_cursos en local storage
function saveobjetos_cursos() {
  localStorage.setItem("objeto_cursos", JSON.stringify(objeto_cursos));
  
}

// Agregar un evento al botón de agregar
saveBtn.addEventListener("click", addTitle);



