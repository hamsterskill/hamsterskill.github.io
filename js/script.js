document.addEventListener('DOMContentLoaded', initDOM);

function initDOM() {
    const btn = document.getElementById('send_message');
    btn.innerHTML='Enter';
    btn.addEventListener('click', (event)=>{
        alert('Ваше сообщение отправлено.')

    })

}