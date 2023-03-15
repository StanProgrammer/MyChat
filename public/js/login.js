const myform=document.getElementById('my-form')
console.log(myform);
myform.addEventListener('submit',async (e)=>{
    try {
        e.preventDefault()
        console.log('1');
        const email=document.getElementById('email')
        const password=document.getElementById('pwd')
        const login=await axios.post('http://localhost:3000/login',{
            email:email.value,
            password:password.value
        })
        alert('Done')
        location.reload()
    } catch (error) {
        console.log(error);
    }
})