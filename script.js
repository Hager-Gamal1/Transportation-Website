const email = document.getElementById('email')
const Password = document.getElementById('Password')
const form = document.getElementById('form')
const errorE1 = document.getElementById('error')


form.addEventListener('submit', (e) => {
   let messages = []
   if(email.value === '' || email.value == null) {
    messages.push('email is requst')
   }

   if(Password.value.length <= 6 ) {
    messages.push('Password must be longer than 6 characters')
   }

   if(Password.value.length >=20 ){
    messages.push('Password must be less than 20 characters')
   }

   if(Password.value === 'Password'){
    messages.push('Password cannot be Password')
   }

   if (messages.length > 0){
       e.preventDefault()
       errorE1.innerHTML = messages.join( ',' )
   }
    
})