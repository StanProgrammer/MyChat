const name=document.getElementById('name')
const email=document.getElementById('email')
const phone=document.getElementById('phone')
const password=document.getElementById('password')
const myform=document.getElementById('my-form')
const myObj={
    name:name.value,
    email:email.value,
    phone: phone.value,
    password: password.value
}

myform.addEventListener('submit',async (e)=>{
    try {
        e.preventDefault()
        const post1 = await axios.post('http://localhost:3000/signup',{
            name:name.value,
            email:email.value,
            phone: phone.value,
            password: password.value
        })
        alert('Successfull')

    } catch (error) {
        if(error.response.status===400){
            alert('User Already Exists')
            location.reload()
        }
    }
})