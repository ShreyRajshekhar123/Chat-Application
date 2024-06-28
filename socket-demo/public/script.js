const socket = io();

const inp = document.querySelector('.input-msg');
const chatForm = document.querySelector('.chat-form');
const chat = document.querySelector('.chat');

document.querySelectorAll('.chat-container')[1].style.display = 'none';

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textMsg = inp.value;
    inp.value = '';
    socket.emit('send-msg', { msg: textMsg });
})
{/* <div class="msg sender"><strong>Adarsh:</strong> Hello HWR??</div> */ }

socket.on('received-msg', (data) => {
    const div = document.createElement('div');

    if (data.id === socket.id) {
        div.classList.add('msg', 'sender');
    }
    else {
        div.classList.add('msg', 'receiver');
    }

    div.innerHTML = `<strong>${data.userName}</strong> ${data.msg}??`
    chat.append(div);
})

const usernameInp = document.querySelector('.username-inp');
const usernameForm = document.querySelector('.username-form');

usernameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = usernameInp.value;
    if(userName.length < 4) {
        // const msg = <p style="color: red; text-align: center;">String is less than 5 characters</p>;
        document.querySelector('h2').after(msg);

        return;
    }

    usernameInp.value = '';

    document.querySelectorAll('.chat-container')[0].style.display = 'none';
    document.querySelectorAll('.chat-container')[1].style.display = 'block';

    socket.emit('username', { userName })
})

