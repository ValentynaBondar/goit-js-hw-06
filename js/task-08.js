
const formRef = document.querySelector('.login-form');
const handleSubmit = (event) => {
    event.preventDefault();
    const{
        elements:{email, password}, 
    } = event.currentTarget;
   
    if(email.value === '' || password.value === '') {
        alert('заповніть всі поля')
        return
    }
    const userData = {
        email: email.value,
        password: password.value,
    };
    console.log(userData);
  
}
//     console.log('email', event.target.elements.email.value);
//     console.log('password', event.target.elements.password.value);
// };
 formRef.addEventListener('submit', handleSubmit );


