

const inicio_form = document.querySelector('#inicio_form')

inicio_form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
   
    const Users = JSON.parse(localStorage.getItem('Users')) || []
   
    const validUser = Users.find(user => user.email === email && user.password === password)

    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!'+email + password) 
    }

    alert('Bienvenido ${validUser.name}')
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '../html/paginaUsuario.html'   

})




