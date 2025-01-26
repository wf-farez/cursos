const registro_form=document.querySelector('#registro_form')
registro_form.addEventListener('submit', (e)=>  { 
 e.preventDefault()
 const name=document.querySelector('#nombre').value
 const email=document.querySelector('#correo').value
 const user1=document.querySelector('#user1').value
 const password=document.querySelector('#password').value

    const Users=JSON.parse(localStorage.getItem('users')) || []
    const usuario_registrado = Users.find(user => user.email === email)

    if(usuario_registrado){
        return alert("El usuario ya esta registrado")
    }

    Users.push({name: name, email: email, user1: user1, password: password })
    localStorage.setItem('Users',JSON.stringify(Users))
    alert("Registro exitoso")

window.location.href = '../html/inicio.html'

}


 )