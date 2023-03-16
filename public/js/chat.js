
const text=document.getElementById('text')
const token=localStorage.getItem('token')
text.addEventListener("keyup", async(event)=> {
    try {
        event.preventDefault();
        const ul = document.getElementById('ulcls')
        if (event.keyCode === 13 && text.value!=='' ) {
            let chatObj = {
                chat: text.value,
            }
            
            const post = await axios.post('http://localhost:3000/send', chatObj, { headers: {'Authorization': token} })
            // window.location.reload()
            await addChats(text.value)
            ul.scrollTop = ul.scrollHeight;
            text.value=''
            
        }
    } catch (error) {
        console.log(error);
    }
});

window.addEventListener('DOMContentLoaded', async(e) => {
    try {
        e.preventDefault()
        const ul = document.getElementById('ulcls')
        const get1 = await axios.get('http://localhost:3000/allChats',{ headers: {'Authorization': token} })
        // console.log(get1.data.length);
        for(let i=0;i<get1.data.length;i++){
            await addChats(get1.data[i].chat)
        }
        ul.scrollTop = ul.scrollHeight;
    } catch (error) {
        console.log(error);
    }
});

function addChats(chats){
    const ul = document.getElementById('ulcls')
    const li =document.createElement('li')
    li.innerHTML=`
    <li class="clearfix">
                            <div class="message-data text-right">
                                <span class="message-data-time">10:10 AM, Today</span>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar">
                            </div>
                            <div class="message other-message float-right">${chats}</div>
                        </li>
    `
    ul.appendChild(li)
}
  