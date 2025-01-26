const registro_form=document.querySelector('#registro_form')

registro_form.addEventListener('submit', (e)=>  { 
 e.preventDefault();
 const name=document.querySelector('#name').value;
 const email=document.querySelector('#email').value;
 const telefono=document.querySelector('#telefono').value;
 const cantidad=document.querySelector('#cantidad').value;
 const dueno=document.querySelector('#duenotarjeta').value;
 const ntarjeta=document.querySelector('#numtarjeta').value;
 const fecha=document.querySelector('#fecha').value;
 const csv=document.querySelector('#csv').value;

    const Donacion=JSON.parse(localStorage.getItem('Donacion')) || []

    if(validaTarjeta(ntarjeta)== false){
        return alert("tarjeta no válida");
    }
    
    if(validarcsv(csv) == false ){
        return alert("csv no válida");
    }

    Donacion.push({name: name, email: email, telefono: telefono, cantidad: cantidad, dueno:dueno, ntarjeta:ntarjeta, fecha:fecha, csv:csv });
    localStorage.setItem('Donacion',JSON.stringify(Donacion));
    alert("Donacion Exitosa");

window.location.href = '../html/Donacion.html'

}
);
function validarnumeros(texto){
    return /^[0-9]+$/.test(texto);
}
function validaTarjeta( tarjeta ){
    var auxiliar=validarnumeros(tarjeta)
    console.log(auxiliar)
    if(tarjeta.length >= 10 && /^[0-9]+$/.test(tarjeta)  ){
        console.log("true")
        return true ;
    }else{
        console.log("falso")
        return false;
    }
    
}
function validarcsv( csv ){
    if(csv.length >= 3 && /^[0-9]+$/.test(csv) ){
        console.log("verdadero")
        return true ;
    }else{
        console.log("falso")
        return false;
    }
    
}
