const myform=document.getElementById('my-form')
myform.addEventListener('submit',async (e)=>{
    try {
        e.preventDefault()
        const email=document.getElementById('email')
        const password=document.getElementById('pwd')
        const login=await axios.post('http://localhost:3000/login',{
            email:email.value,
            password:password.value
        })
        localStorage.setItem('token',login.data.token)
        localStorage.setItem('id',login.data.id)
        alert(login.data.message)
        window.location.href="http://localhost:3000/home"
    } catch (error) {
        if(error.response.status===404){
            alert(error.response.data)
            location.reload()
        }
         else if(error.response.status===401){
            alert(error.response.data)
            location.reload()
        }
        else{
            alert("Sorry it's from our side please try again after some time")
        }
    }
})